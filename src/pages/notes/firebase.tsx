// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDVrOvSu6Q28OOfinI1nR3PbCeeFy2xk5Y",

  authDomain: "certain-density-400310.firebaseapp.com",

  projectId: "certain-density-400310",

  storageBucket: "certain-density-400310.appspot.com",

  messagingSenderId: "179403612734",

  appId: "1:179403612734:web:b0e979b44c0792864ca76f",

  measurementId: "G-3XE6Z3V18X"

};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}