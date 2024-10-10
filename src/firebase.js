// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4vS95VutqPA4xWIeC2CXGB5V4UYUBFyQ",
    authDomain: "fir-database-fd337.firebaseapp.com",
    projectId: "fir-database-fd337",
    storageBucket: "fir-database-fd337.appspot.com",
    messagingSenderId: "971407341446",
    appId: "1:971407341446:web:6f220b27efc5c4bb081e07",
    measurementId: "G-YFDS88914L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and export it to use in other components
const auth = getAuth(app);

export { auth };
