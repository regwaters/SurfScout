
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDkEDVch3pe8AttUzuhrvE1vRyT4RWEhWo",
  authDomain: "surfscout-683b4.firebaseapp.com",
  projectId: "surfscout-683b4",
  storageBucket: "surfscout-683b4.appspot.com",
  messagingSenderId: "588352906099",
  appId: "1:588352906099:web:4b1f5adb22bf74561f5b06",
  measurementId: "G-FKRLG5J4DX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };