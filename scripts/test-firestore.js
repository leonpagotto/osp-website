#!/usr/bin/env node

/**
 * Test Firestore connection and setup
 * Run with: node scripts/test-firestore.js
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';
import { readFileSync } from 'fs';

// Load environment variables from .env file
const envFile = readFileSync('.env', 'utf8');
const env = {};
envFile.split('\n').forEach(line => {
  const [key, ...values] = line.split('=');
  if (key && values.length) {
    env[key.trim()] = values.join('=').trim();
  }
});

// Firebase configuration from environment
const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
};

console.log('\n🔥 Testing Firestore Connection...\n');

// Check if all required env variables are present
const requiredVars = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID',
];

const missingVars = requiredVars.filter(varName => !env[varName]);

if (missingVars.length > 0) {
  console.error('❌ Missing environment variables:');
  missingVars.forEach(varName => console.error(`   - ${varName}`));
  console.error('\nPlease add these to your .env file\n');
  process.exit(1);
}

console.log('✅ All environment variables present');
console.log(`📦 Project ID: ${firebaseConfig.projectId}\n`);

try {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  console.log('✅ Firebase initialized successfully');
  
  // Try to create a test document
  console.log('\n📝 Testing write to Firestore...');
  console.log('   Collection: test_connection');
  console.log('   This will verify Firestore database is created\n');
  
  const testRef = collection(db, 'test_connection');
  const docRef = await addDoc(testRef, {
    message: 'Test from script',
    timestamp: Timestamp.now(),
    source: 'test-firestore.js'
  });
  
  console.log('✅ Successfully wrote to Firestore!');
  console.log(`   Document ID: ${docRef.id}`);
  console.log('\n🎉 Firestore is working correctly!\n');
  console.log('Next steps:');
  console.log('1. Check Firebase Console to see the test document');
  console.log('2. Test the contact form on your website');
  console.log('3. Check for new documents in contact_submissions collection\n');
  
} catch (error) {
  console.error('\n❌ Error connecting to Firestore:');
  console.error(error.message);
  
  if (error.code === 'resource-exhausted') {
    console.error('\n💡 Quota exceeded. Firestore may not be initialized.');
    console.error('   Go to Firebase Console and create the database:\n');
    console.error('   https://console.firebase.google.com/project/osp-website-2026/firestore\n');
  } else if (error.code === 'permission-denied') {
    console.error('\n💡 Permission denied. Security rules may not be deployed.');
    console.error('   Run: firebase deploy --only firestore:rules\n');
  } else if (error.message.includes('Failed to get document')) {
    console.error('\n💡 Firestore database not initialized.');
    console.error('   Create database in Firebase Console:\n');
    console.error('   https://console.firebase.google.com/project/osp-website-2026/firestore\n');
  }
  
  process.exit(1);
}
