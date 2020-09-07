import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import env from "../../env.json";

const firebaseConfig = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  databaseURL: env.FIREBASE_DB_URL,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE,
  messagingSenderId: env.FIREBASE_SENDER_ID,
  appId: env.FIREBASE_APP_ID,
  measurementId: env.FIREBASE_MEASUREMENT_ID,
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

firebaseApp;

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const storageRef = firebase.storage().ref();
export const FieldValue = firebase.firestore.FieldValue;
export type Reference = firebase.storage.Reference;
