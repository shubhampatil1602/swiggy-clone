// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAMEJWIR9Glmbq4pRTsZXavf2mievpz3FU',
  authDomain: 'swiggy-clone-e5a42.firebaseapp.com',
  projectId: 'swiggy-clone-e5a42',
  storageBucket: 'swiggy-clone-e5a42.appspot.com',
  messagingSenderId: '1064363859706',
  appId: '1:1064363859706:web:c30c26756b5bb4e9fe3343',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
