// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMEUHiyWRC_wgP3PleyhD5iwbUiPxIOrE",
    authDomain: "netflixgpt-a18af.firebaseapp.com",
    projectId: "netflixgpt-a18af",
    storageBucket: "netflixgpt-a18af.firebasestorage.app",
    messagingSenderId: "553782961268",
    appId: "1:553782961268:web:403d712d3c9779a1d89d21",
    measurementId: "G-5T4KJ3CKCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);