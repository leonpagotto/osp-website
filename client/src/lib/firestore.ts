import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from './firebase';

/**
 * Contact form submission data structure
 */
export interface ContactFormData {
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
 * Newsletter subscription data structure
 */
export interface NewsletterData {
  email: string;
}

/**
 * Submit contact form to Firestore
 * Saves to 'contact_submissions' collection with timestamp
 */
export async function submitContactForm(data: ContactFormData): Promise<void> {
  if (!db) {
    throw new Error('Firestore is not initialized. Please check your Firebase configuration.');
  }

  try {
    const contactRef = collection(db, 'contact_submissions');
    await addDoc(contactRef, {
      ...data,
      createdAt: Timestamp.now(),
      status: 'new', // Can be used for tracking follow-ups
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw new Error('Failed to submit contact form. Please try again.');
  }
}

/**
 * Submit newsletter subscription to Firestore
 * Saves to 'newsletter_subscriptions' collection with timestamp
 */
export async function submitNewsletterSubscription(email: string): Promise<void> {
  if (!db) {
    throw new Error('Firestore is not initialized. Please check your Firebase configuration.');
  }

  try {
    const newsletterRef = collection(db, 'newsletter_subscriptions');
    await addDoc(newsletterRef, {
      email: email.trim().toLowerCase(),
      createdAt: Timestamp.now(),
      status: 'active',
    });
  } catch (error) {
    console.error('Error submitting newsletter subscription:', error);
    throw new Error('Failed to subscribe to newsletter. Please try again.');
  }
}
