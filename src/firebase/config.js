import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCS4Q0MfXk4EMdxIEebzdMpEhEZQiqbMhY",
  authDomain: "goblin-bc907.firebaseapp.com",
  projectId: "goblin-bc907",
  storageBucket: "goblin-bc907.appspot.com",
  messagingSenderId: "677056847799",
  appId: "1:677056847799:web:6449ee8cf9e7d974e19232"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);