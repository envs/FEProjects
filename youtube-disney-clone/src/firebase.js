// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBeEj5YGYfgliLy4OqIXvDILSY3o1DbG8Q",
    authDomain: "disneyplus-clone-ac52c.firebaseapp.com",
    projectId: "disneyplus-clone-ac52c",
    storageBucket: "disneyplus-clone-ac52c.appspot.com",
    messagingSenderId: "660097274535",
    appId: "1:660097274535:web:02b42a33c0da1ec3a34182",
    measurementId: "G-9LTWRPDXBY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;