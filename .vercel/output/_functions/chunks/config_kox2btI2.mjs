import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCH6Q1V4pMzCcx-MIbIhDj6iIA3UFbxio4",
  authDomain: "autenticacion-sistemas.firebaseapp.com",
  projectId: "autenticacion-sistemas",
  storageBucket: "autenticacion-sistemas.firebasestorage.app",
  messagingSenderId: "19986902983",
  appId: "1:19986902983:web:2520e17d537c85160073e2",
  measurementId: "G-PG6CEWL4KV"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firebase = {
  app,
  auth
};

export { firebase as f };
