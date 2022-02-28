// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyBGINGasL86p8SKcIj8y_pEql_-jXoMQIs",
  authDomain: "amaz-2-2b33a.firebaseapp.com",
  projectId: "amaz-2-2b33a",
  storageBucket: "amaz-2-2b33a.appspot.com",
  messagingSenderId: "466748259378",
  appId: "1:466748259378:web:b0b67a7befc82b84b5502b"
};

// Initialize Firebase
const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig) 
: firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
// const app = initializeApp(firebaseConfig);
