// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB-rNLqyT0YgzUG0QT8NexSRlxShw8TcLk",
  authDomain: "fir-authentication-29bee.firebaseapp.com",
  projectId: "fir-authentication-29bee",
  storageBucket: "fir-authentication-29bee.appspot.com",
  messagingSenderId: "778869735848",
  appId: "1:778869735848:web:e9d8dbd1ffa47956f31d9d",
  measurementId: "G-MQG7P2QDSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log(app);

// Export auth, and functions
export { auth, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
