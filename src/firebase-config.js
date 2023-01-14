import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6N6dNjgYjodpg_G6vkHxLaJXjQfFuBSU",
  authDomain: "react-firebase-crud-5df59.firebaseapp.com",
  projectId: "react-firebase-crud-5df59",
  storageBucket: "react-firebase-crud-5df59.appspot.com",
  messagingSenderId: "1047565029425",
  appId: "1:1047565029425:web:9d925dc81f96c091944510",
  measurementId: "G-BTQ2E19WXS",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
