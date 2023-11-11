import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA10EoKdnL-jtdHHoIIiEsDwQGJyEo1_MI",
    authDomain: "employee-records-c48f7.firebaseapp.com",
    projectId: "employee-records-c48f7",
    storageBucket: "employee-records-c48f7.appspot.com",
    messagingSenderId: "356831440512",
    appId: "1:356831440512:web:7b02c4cc33f8475fe04065"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;