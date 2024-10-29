import firebase from 'firebase-admin';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccount = JSON.parse(
  process.env.NEXT_PUBLIC_FIREBASE_SERVICE_ACCOUNT_KEY
);

let adminApp;

if (!firebase.apps.length) {
  adminApp = initializeApp(
    {
      credential: cert(serviceAccount),
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    },
    'admin_app'
  );
} else {
  adminApp = firebase.apps[0];
}

export const db = getFirestore(adminApp);
