import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAc-3yTZCgh1dfARnWlzWH5tA4d2Y8U2aM",
  authDomain: "disney-clone-1314e.firebaseapp.com",
  projectId: "disney-clone-1314e",
  storageBucket: "disney-clone-1314e.appspot.com",
  messagingSenderId: "847127209955",
  appId: "1:847127209955:web:9606b71f5f5c10bcd462d6",
  measurementId: "G-VS8RJB486T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
