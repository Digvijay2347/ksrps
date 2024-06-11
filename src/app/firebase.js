import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore"; // Import Firestore
import firebaseConfig from "./firebaseConfig";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();
const db = firebase.firestore(); // Initialize Firestore

export { storage, db };
