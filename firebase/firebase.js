import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAb00UD1DkTptJejh92XaVLYROk34nICy4",
  authDomain: "hal-yakei.firebaseapp.com",
  databaseURL: "https://hal-yakei.firebaseio.com",
  projectId: "hal-yakei",
  storageBucket: "hal-yakei.appspot.com",
  messagingSenderId: "655737634399",
  appId: "1:655737634399:web:54120719f995fcdfb3e5ea",
  measurementId: "G-B7TM18STEN",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export default firebase;
