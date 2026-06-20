import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC7us3r5Zk6vK89j4wWfaQgtCGe1irI4Vg",
  authDomain: "think-and-craft.firebaseapp.com",
  projectId: "think-and-craft",
  storageBucket: "think-and-craft.firebasestorage.app",
  messagingSenderId: "946752517056",
  appId: "1:946752517056:web:ae117972ab1c5119074e25",
  measurementId: "G-WKQFDK9RLB"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);