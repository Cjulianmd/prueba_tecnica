// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from "firebase/auth"
import { FacebookAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANZ8z2pyppwUOD6GILua5SlQb2S7zzAz4",
  authDomain: "prueba-tecnica-6ee22.firebaseapp.com",
  projectId: "prueba-tecnica-6ee22",
  storageBucket: "prueba-tecnica-6ee22.appspot.com",
  messagingSenderId: "489086597161",
  appId: "1:489086597161:web:e27d30e8a7fecb21ff0438"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const face = new FacebookAuthProvider();
export {
  app,
  google,
  face

}