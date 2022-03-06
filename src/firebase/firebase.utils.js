// import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";



// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyDnvfJbvuUkLgWWr36G_sevfglYKT9pXhU",
    authDomain: "crwn-db-53f59.firebaseapp.com",
    projectId: "crwn-db-53f59",
    storageBucket: "crwn-db-53f59.appspot.com",
    messagingSenderId: "947021534307",
    appId: "1:947021534307:web:875d85e0dfb742f0155456",
    measurementId: "G-GZEKLPY6FG"
  }


//   firebase initializeApp(config);
initializeApp(config);
export const firestore = getFirestore();
export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
  });

export const signInWithGoogle = () => signInWithPopup(auth, provider)