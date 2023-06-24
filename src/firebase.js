import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAKMtmb2wbVPmoCOoNVftMXcjCQWtCQMWQ",
  authDomain: "ghalolty-3bd86.firebaseapp.com",
  projectId: "ghalolty-3bd86",
  storageBucket: "ghalolty-3bd86.appspot.com",
  messagingSenderId: "1059291641502",
  appId: "1:1059291641502:web:4b0d2beb57f0dc4f00ad8f",
  measurementId: "G-DZVZ57RS1H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);