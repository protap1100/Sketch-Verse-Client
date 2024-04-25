// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuFmxKMZsF3-J_u7A68U_JZ7ujJ2LaRXs",
  authDomain: "paint-website-b1c37.firebaseapp.com",
  projectId: "paint-website-b1c37",
  storageBucket: "paint-website-b1c37.appspot.com",
  messagingSenderId: "691771464003",
  appId: "1:691771464003:web:d61b1d68052bf9db56f7f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export default app;