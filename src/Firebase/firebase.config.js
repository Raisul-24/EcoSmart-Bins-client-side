// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBuDJLjUF2DXJJh7xgjEkiQLjKTlXDA-o",
  authDomain: "ecosmart-bins.firebaseapp.com",
  projectId: "ecosmart-bins",
  storageBucket: "ecosmart-bins.appspot.com",
  messagingSenderId: "561993376831",
  appId: "1:561993376831:web:8def8bd746427f96e5048a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;