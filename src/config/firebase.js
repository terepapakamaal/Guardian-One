import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBwUK3feE4nks_9_4bImS9erkqjez0p94E",
  authDomain: "asep-sem-2.firebaseapp.com",
  projectId: "asep-sem-2",
  storageBucket: "asep-sem-2.firebasestorage.app",
  messagingSenderId: "837002730866",
  appId: "1:837002730866:web:70df223250500f0493d1eb",
  measurementId: "G-V1F47B57ZT"
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, googleProvider, db };

