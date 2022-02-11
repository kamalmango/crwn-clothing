import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBwqiQRgoXv0LKEOPQxr1j-O_zykROHVzg",
  authDomain: "crwn-db-204b7.firebaseapp.com",
  projectId: "crwn-db-204b7",
  storageBucket: "crwn-db-204b7.appspot.com",
  messagingSenderId: "366202495133",
  appId: "1:366202495133:web:fa5af115c463f68ed0b474"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;