import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtMoMc6bP5gNlNMyk2kcjv2FErZRxYv70",
  authDomain: "hotel-proj-d3dc0.firebaseapp.com",
  projectId: "hotel-proj-d3dc0",
  storageBucket: "hotel-proj-d3dc0.appspot.com",
  messagingSenderId: "671437638550",
  appId: "1:671437638550:web:dd6d3c00298769e2012bb7",
  measurementId: "G-RG5Q5CPKG7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { storage };
