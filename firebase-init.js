// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu_0y3vKJ8VarxTbgoQlP79OeAXjoIoV0",
  authDomain: "sito-fortino.firebaseapp.com",
  databaseURL: "https://sito-fortino-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "sito-fortino",
  storageBucket: "sito-fortino.appspot.com",
  messagingSenderId: "617111870836",
  appId: "1:617111870836:web:38886547f19447c81a6021",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log("Firebase initialized successfully");
