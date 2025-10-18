/**
 * Firebase Cloud Functions for OSP Contabilidade
 * Handles CRM integration and form submissions
 */

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Initialize Firebase Admin
admin.initializeApp();

/**
 * Configuration for Twenty CRM
 * Set these using: firebase functions:config:set crm.api_url="..." crm.api_key="..."
 */
interface CRMConfig {
  apiUrl: string;
  apiKey: string;
}

/**
 * Contact form data structure
 */
interface ContactFormData {
  name: string;
  company: string;
  role?: string;
  email: string;
  phone: string;
  purpose: string;
  sector: string;
  employees?: string;
  taxRegime?: string;
  message: string;
}

/**
 * GraphQL mutation to create a person in Twenty CRM
 */
const CREATE_PERSON_MUTATION = `
  mutation CreatePerson($data: PersonCreateInput!) {
    createPerson(data: $data) {
      id
      name {
        firstName
        lastName
      }
      email
      phone
      company {
        id
        name
      }
    }
  }
`;

/**
 * GraphQL mutation to create a company in Twenty CRM
 */
const CREATE_COMPANY_MUTATION = `
  mutation CreateCompany($data: CompanyCreateInput!) {
    createCompany(data: $data) {
      id
      name
      employees
      domainName
    }
  }
`;

/**
 * GraphQL mutation to create an opportunity in Twenty CRM
 */
const CREATE_OPPORTUNITY_MUTATION = `
  mutation CreateOpportunity($data: OpportunityCreateInput!) {
    createOpportunity(data: $data) {
      id
      name
      amount {
        amountMicros
        currencyCode
      }
      stage
      pointOfContact {
        id
        name {
          firstName
          lastName
        }
      }
      company {
        id
        name
      }
    }
  }
`;

/**
 * GraphQL query to check if a company exists by name
 */
const FIND_COMPANY_QUERY = `
  query FindCompany($filter: CompanyFilterInput) {
    companies(filter: $filter) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

/**
 * GraphQL query to check if a person exists by email
 */
const FIND_PERSON_QUERY = `
  query FindPerson($filter: PersonFilterInput) {
    people(filter: $filter) {
      edges {
        node {
          id
          name {
            firstName
            lastName
          }
          email
          company {
            id
          }
        }
      }
    }
  }
`;

/**
 * Make a GraphQL request to Twenty CRM
 */
async function graphqlRequest(
  query: string,
  variables: any,
  config: CRMConfig
): Promise<any> {
  const response = await fetch(config.apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(`CRM API request failed: ${response.statusText}`);
  }

  const result = await response.json();
  
  if (result.errors) {
    console.error('GraphQL errors:', JSON.stringify(result.errors, null, 2));
    throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
  }

  return result.data;
}

/**
 * Find or create a company in the CRM
 */
async function findOrCreateCompany(
  companyName: string,
  sector: string,
  employees: string | undefined,
  config: CRMConfig
): Promise<string> {
  try {
    // Try to find existing company
    const findResult = await graphqlRequest(
      FIND_COMPANY_QUERY,
      {
        filter: {
          name: {
            eq: companyName,
          },
        },
      },
      config
    );

    if (findResult.companies?.edges?.length > 0) {
      return findResult.companies.edges[0].node.id;
    }

    // Create new company if not found
    const employeeCount = employees ? parseInt(employees.split('-')[0]) : undefined;
    
    const createResult = await graphqlRequest(
      CREATE_COMPANY_MUTATION,
      {
        data: {
          name: companyName,
          employees: employeeCount,
          // Add custom fields if your CRM has them
          // sector: sector,
        },
      },
      config
    );

    return createResult.createCompany.id;
  } catch (error) {
    console.error('Error in findOrCreateCompany:', error);
    throw error;
  }
}

/**
 * Find or create a person in the CRM
 */
async function findOrCreatePerson(
  formData: ContactFormData,
  companyId: string,
  config: CRMConfig
): Promise<string> {
  try {
    // Try to find existing person
    const findResult = await graphqlRequest(
      FIND_PERSON_QUERY,
      {
        filter: {
          email: {
            eq: formData.email,
          },
        },
      },
      config
    );

    if (findResult.people?.edges?.length > 0) {
      const person = findResult.people.edges[0].node;
      // Update company association if needed
      return person.id;
    }

    // Split name into first and last
    const nameParts = formData.name.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || firstName;

    // Create new person
    const createResult = await graphqlRequest(
      CREATE_PERSON_MUTATION,
      {
        data: {
          name: {
            firstName,
            lastName,
          },
          email: formData.email,
          phone: formData.phone,
          companyId: companyId,
          // Add custom fields if your CRM has them
          // jobTitle: formData.role,
        },
      },
      config
    );

    return createResult.createPerson.id;
  } catch (error) {
    console.error('Error in findOrCreatePerson:', error);
    throw error;
  }
}

/**
 * Create an opportunity in the CRM
 */
async function createOpportunity(
  formData: ContactFormData,
  companyId: string,
  personId: string,
  config: CRMConfig
): Promise<string> {
  try {
    // Map purpose to opportunity name
    const purposeMap: Record<string, string> = {
      'open-company': 'Nova Empresa - Abertura',
      'change-accountant': 'Troca de Contador',
      'consulting': 'Consultoria',
      'other': 'Outros Serviços',
    };

    const opportunityName = `${formData.company} - ${purposeMap[formData.purpose] || 'Contato'}`;
    
    const createResult = await graphqlRequest(
      CREATE_OPPORTUNITY_MUTATION,
      {
        data: {
          name: opportunityName,
          companyId: companyId,
          pointOfContactId: personId,
          stage: 'NEW', // or whatever your initial stage is called
          // Add amount if you have a default or calculation
          // amount: {
          //   amountMicros: 0,
          //   currencyCode: 'BRL',
          // },
        },
      },
      config
    );

    return createResult.createOpportunity.id;
  } catch (error) {
    console.error('Error in createOpportunity:', error);
    throw error;
  }
}

/**
 * HTTP Cloud Function to handle contact form submissions
 * This function will be called by your website when a form is submitted
 */
export const submitContactToCRM = functions.https.onRequest(async (req, res) => {
  // Enable CORS
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  try {
    const formData: ContactFormData = req.body;

    // Validate required fields
    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      res.status(400).json({
        success: false,
        error: 'Missing required fields',
      });
      return;
    }

    // Get CRM configuration
    const config = functions.config().crm as CRMConfig;
    
    if (!config || !config.api_url || !config.api_key) {
      console.error('CRM configuration missing');
      res.status(500).json({
        success: false,
        error: 'CRM configuration missing',
      });
      return;
    }

    // Normalize config keys (Firebase converts to snake_case)
    const crmConfig: CRMConfig = {
      apiUrl: config.api_url,
      apiKey: config.api_key,
    };

    // Step 1: Find or create company
    const companyId = await findOrCreateCompany(
      formData.company,
      formData.sector,
      formData.employees,
      crmConfig
    );

    // Step 2: Find or create person
    const personId = await findOrCreatePerson(formData, companyId, crmConfig);

    // Step 3: Create opportunity
    const opportunityId = await createOpportunity(
      formData,
      companyId,
      personId,
      crmConfig
    );

    // Step 4: Save to Firestore as backup
    await admin.firestore().collection('contact_submissions').add({
      ...formData,
      crmCompanyId: companyId,
      crmPersonId: personId,
      crmOpportunityId: opportunityId,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      status: 'synced',
    });

    // Success response
    res.status(200).json({
      success: true,
      message: 'Contact submitted successfully to CRM',
      ids: {
        company: companyId,
        person: personId,
        opportunity: opportunityId,
      },
    });

  } catch (error) {
    console.error('Error in submitContactToCRM:', error);
    
    // Try to save to Firestore as fallback
    try {
      await admin.firestore().collection('contact_submissions').add({
        ...req.body,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        status: 'failed',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    } catch (firestoreError) {
      console.error('Error saving to Firestore:', firestoreError);
    }

    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

/**
 * Firestore trigger to sync existing contacts to CRM
 * This runs whenever a new document is added to contact_submissions
 */
export const syncContactToCRM = functions.firestore
  .document('contact_submissions/{submissionId}')
  .onCreate(async (snap, context) => {
    const formData = snap.data() as ContactFormData;
    
    // Skip if already synced
    if ((formData as any).status === 'synced') {
      return null;
    }

    try {
      // Get CRM configuration
      const config = functions.config().crm as CRMConfig;
      
      if (!config || !config.api_url || !config.api_key) {
        console.error('CRM configuration missing');
        return null;
      }

      const crmConfig: CRMConfig = {
        apiUrl: config.api_url,
        apiKey: config.api_key,
      };

      // Sync to CRM
      const companyId = await findOrCreateCompany(
        formData.company,
        formData.sector || 'other',
        formData.employees,
        crmConfig
      );

      const personId = await findOrCreatePerson(formData, companyId, crmConfig);

      const opportunityId = await createOpportunity(
        formData,
        companyId,
        personId,
        crmConfig
      );

      // Update Firestore document with CRM IDs
      await snap.ref.update({
        crmCompanyId: companyId,
        crmPersonId: personId,
        crmOpportunityId: opportunityId,
        status: 'synced',
        syncedAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      console.log(`Successfully synced contact ${context.params.submissionId} to CRM`);
      return null;

    } catch (error) {
      console.error('Error syncing to CRM:', error);
      
      // Mark as failed
      await snap.ref.update({
        status: 'failed',
        syncError: error instanceof Error ? error.message : 'Unknown error',
        lastAttemptAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      return null;
    }
  });

/**
 * Scheduled function to retry failed syncs
 * Runs every hour to retry contacts that failed to sync
 */
export const retryFailedSyncs = functions.pubsub
  .schedule('every 1 hours')
  .onRun(async (context) => {
    const failedDocs = await admin
      .firestore()
      .collection('contact_submissions')
      .where('status', '==', 'failed')
      .limit(10) // Process 10 at a time
      .get();

    if (failedDocs.empty) {
      console.log('No failed syncs to retry');
      return null;
    }

    const config = functions.config().crm as CRMConfig;
    
    if (!config || !config.api_url || !config.api_key) {
      console.error('CRM configuration missing');
      return null;
    }

    const crmConfig: CRMConfig = {
      apiUrl: config.api_url,
      apiKey: config.api_key,
    };

    const promises = failedDocs.docs.map(async (doc) => {
      try {
        const formData = doc.data() as ContactFormData;
        
        const companyId = await findOrCreateCompany(
          formData.company,
          formData.sector || 'other',
          formData.employees,
          crmConfig
        );

        const personId = await findOrCreatePerson(formData, companyId, crmConfig);

        const opportunityId = await createOpportunity(
          formData,
          companyId,
          personId,
          crmConfig
        );

        await doc.ref.update({
          crmCompanyId: companyId,
          crmPersonId: personId,
          crmOpportunityId: opportunityId,
          status: 'synced',
          syncedAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        console.log(`Successfully retried sync for ${doc.id}`);
      } catch (error) {
        console.error(`Failed to retry sync for ${doc.id}:`, error);
        
        await doc.ref.update({
          lastAttemptAt: admin.firestore.FieldValue.serverTimestamp(),
        });
      }
    });

    await Promise.allSettled(promises);
    
    console.log(`Processed ${failedDocs.size} failed syncs`);
    return null;
  });
