// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Simulated Firebase config (replace with real one if billing enabled)
const firebaseConfig = {
  apiKey: "AIza...yourKey",
  authDomain: "scriptfix.firebaseapp.com",
  projectId: "scriptfix",
  storageBucket: "scriptfix.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdefg"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };