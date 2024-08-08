// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9t5wOuIh_1EN4o698wGWVDBDMMR_iAgM",
  authDomain: "inventory-management-9c86b.firebaseapp.com",
  projectId: "inventory-management-9c86b",
  storageBucket: "inventory-management-9c86b.appspot.com",
  messagingSenderId: "764888004496",
  appId: "1:764888004496:web:be8348651d6ec94955a515",
  measurementId: "G-DHXM9LPJ09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getAnalytics(app) ;

export {firestore}