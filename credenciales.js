import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

const appFirebase = initializeApp({
  apiKey: "AIzaSyBM1wHJFYEFFA0CEpql4uqm-1j-PsD4jSg",
  authDomain: "prueba-b6a45.firebaseapp.com",
  projectId: "prueba-b6a45",
  storageBucket: "prueba-b6a45.appspot.com",
  messagingSenderId: "90636413791",
  appId: "1:90636413791:web:298752f30099e609ce24ea"
});

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(appFirebase);

export default {appFirebase, db, auth};





