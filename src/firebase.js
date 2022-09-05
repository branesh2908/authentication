// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKdkLEdSYcfmQJ6GfLqLNzrPJTQS2Q4Ag",
  authDomain: "email-pass-64d05.firebaseapp.com",
  projectId: "email-pass-64d05",
  storageBucket: "email-pass-64d05.appspot.com",
  messagingSenderId: "152972043803",
  appId: "1:152972043803:web:16ef823ffca127c27efabe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);