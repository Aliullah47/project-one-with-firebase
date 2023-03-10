import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoA4TPsdY7wphBg12xjSZtwuA0yjAf93s",
  authDomain: "myfirstfirebase-60a19.firebaseapp.com",
  projectId: "myfirstfirebase-60a19",
  storageBucket: "myfirstfirebase-60a19.appspot.com",
  messagingSenderId: "481791751373",
  appId: "1:481791751373:web:0841a94902b43e44f62584",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
