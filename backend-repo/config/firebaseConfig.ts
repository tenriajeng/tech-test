import * as dotenv from "dotenv";
dotenv.config();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import * as admin from "firebase-admin";

const serviceAccount = require("../ebuddy-ebdaf-firebase-adminsdk-kv26z-eae8bace60.json");

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

export { db, admin };
