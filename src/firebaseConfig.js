// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXG3DbfdhKar-wYwwe6AMrY89W4AIG3qQ",
  authDomain: "cygenete.firebaseapp.com",
  projectId: "cygenete",
  storageBucket: "cygenete.appspot.com",
  messagingSenderId: "27195608945",
  appId: "1:27195608945:web:740d54c5c251d33b67b0d0",
  measurementId: "G-66N33DJP5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize FireStore and export 
export const db = getFirestore(app);

// Initialize firebase storage and export 
export const storage = getStorage(app);

//const analytics = getAnalytics(app);