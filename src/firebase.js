import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getMessaging } from "firebase/messaging";

export const firebaseConfig = {
  apiKey: "AIzaSyBjM8reRMrrTtHxrPmpL7R8NZMAk9rzzX0",
  authDomain: "socialbook-dfac1.firebaseapp.com",
  projectId: "socialbook-dfac1",
  storageBucket: "socialbook-dfac1.appspot.com",
  messagingSenderId: "476558584203",
  appId: "1:476558584203:web:19a73a2c4435ce2bc7a78e",
  measurementId: "G-K2F79B0WN3",
};

export const app = firebase.initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

const auth = getAuth(app);
const db = firebase.firestore();

export { auth, db };
// export default firebase;
