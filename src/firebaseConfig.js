// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDujA-pQ78WKkeEmQN3YHDodkuShpwLcWo",
  authDomain: "reactfire-b61c9.firebaseapp.com",
  projectId: "reactfire-b61c9",
  storageBucket: "reactfire-b61c9.appspot.com",
  messagingSenderId: "353105135806",
  appId: "1:353105135806:web:704c99c024766bf57076ef",
  measurementId: "G-XM5QP73W6V"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app
