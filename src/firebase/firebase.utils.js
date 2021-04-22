import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC0mJqqa6s15i04MHUWU9sym68WGQpJHjg",
  authDomain: "egghead-db.firebaseapp.com",
  projectId: "egghead-db",
  storageBucket: "egghead-db.appspot.com",
  messagingSenderId: "162762104841",
  appId: "1:162762104841:web:5e38f421099829737618d8",
  measurementId: "G-62NFX4F2BJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
