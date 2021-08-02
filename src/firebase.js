import React from "react";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBasDa-OpLdU2JGcNLlCGemco6Vp-1Z2qQ",
  authDomain: "messenger-clone-d55c8.firebaseapp.com",
  projectId: "messenger-clone-d55c8",
  storageBucket: "messenger-clone-d55c8.appspot.com",
  messagingSenderId: "159531584902",
  appId: "1:159531584902:web:c8b9a333b58110ed997007",
  measurementId: "G-99TMST0GSK",
});

const db = firebaseApp.firestore();

export default db;
