import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtJ3iMOcTja9R06HpYAGkqmtwgzohtq_E",
  authDomain: "blog-a3603.firebaseapp.com",
  projectId: "blog-a3603",
  storageBucket: "blog-a3603.firebasestorage.app",
  messagingSenderId: "172984020652",
  appId: "1:172984020652:web:b6125596c478b85b79f909",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
