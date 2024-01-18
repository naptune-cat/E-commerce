import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD89vXCfw9_FWalDf5KUw9NU-o_fT_d9HI",
  authDomain: "e-commerce-25bc7.firebaseapp.com",
  projectId: "e-commerce-25bc7",
  storageBucket: "e-commerce-25bc7.appspot.com",
  messagingSenderId: "550980283374",
  appId: "1:550980283374:web:7f93169c9b7f1c61257cff",
  measurementId: "G-Q557V2ZWZP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
