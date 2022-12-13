// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithCredential, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsBz3taccaAFezJ-ibKL--eGPQ4uXhPSg",
  authDomain: "yoga-classes-599fd.firebaseapp.com",
  projectId: "yoga-classes-599fd",
  storageBucket: "yoga-classes-599fd.appspot.com",
  messagingSenderId: "126721651113",
  appId: "1:126721651113:web:d7c02b154ae2d2456414b8"
};


// // Build Firebase credential with the Google ID token.
// const credential = GoogleAuthProvider.credential(id_token);

// // Sign in with credential from the Google user.
// export const auth = getAuth();
// signInWithCredential(auth, credential).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  // });
  
  
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);