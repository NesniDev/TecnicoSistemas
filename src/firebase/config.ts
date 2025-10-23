// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH6Q1V4pMzCcx-MIbIhDj6iIA3UFbxio4",
  authDomain: "autenticacion-sistemas.firebaseapp.com",
  projectId: "autenticacion-sistemas",
  storageBucket: "autenticacion-sistemas.firebasestorage.app",
  messagingSenderId: "19986902983",
  appId: "1:19986902983:web:2520e17d537c85160073e2",
  measurementId: "G-PG6CEWL4KV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export const firebase = {
    app,
    auth,
}