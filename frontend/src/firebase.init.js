

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBErfKS4Fi_WRF-lGAtjYRvTeOaCq-OpuM",
  authDomain: "create-a-website-like-tw-38a14.firebaseapp.com",
  projectId: "create-a-website-like-tw-38a14",
  storageBucket: "create-a-website-like-tw-38a14.appspot.com",
  messagingSenderId: "126233460560",
  appId: "1:126233460560:web:d030e3a874cb907ce7b655",
  measurementId: "G-CF316BDSQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;