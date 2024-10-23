// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-4627d.firebaseapp.com",
  projectId: "reactchatapp-4627d",
  storageBucket: "reactchatapp-4627d.appspot.com",
  messagingSenderId: "235682168727",
  appId: "1:235682168727:web:00e842458d20e4a3f04ed2",
  measurementId: "G-HJ6KKWSFEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);