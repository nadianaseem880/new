
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATk0ab6cqfA9AGNPrSr05K_3FQD9Dv-vc",
  authDomain: "my-dream-2a49e.firebaseapp.com",
  projectId: "my-dream-2a49e",
  storageBucket: "my-dream-2a49e.firebasestorage.app",
  messagingSenderId: "845695649076",
  appId: "1:845695649076:web:d1f00bc7567d15deb75161",
  measurementId: "G-N0XWV2PCXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);