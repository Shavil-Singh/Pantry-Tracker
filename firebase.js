// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHORM-80EAq20Jqcv2gru0MvNrn4C67wk",
  authDomain: "inventory-management-7abbe.firebaseapp.com",
  projectId: "inventory-management-7abbe",
  storageBucket: "inventory-management-7abbe.appspot.com",
  messagingSenderId: "233566597962",
  appId: "1:233566597962:web:6999ad132027932999c7b3",
  measurementId: "G-XYV34SYP6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}