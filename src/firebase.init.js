// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlfCSItrQVTwOwGmc7iUydtiPMOj-FojI",
  authDomain: "doctors-portal-91427.firebaseapp.com",
  projectId: "doctors-portal-91427",
  storageBucket: "doctors-portal-91427.appspot.com",
  messagingSenderId: "601641355365",
  appId: "1:601641355365:web:b896813ed269eec9219e8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth