import { initializeApp } from 'firebase/app';
import { getAuth,
signInWithRedirect,
signInWithPopup,
GoogleAuthProvider,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2fN4_TdPdo9Cmp0dt89x39nV3ddovabw",
    authDomain: "crwn-clothing-d9c46.firebaseapp.com",
    projectId: "crwn-clothing-d9c46",
    storageBucket: "crwn-clothing-d9c46.appspot.com",
    messagingSenderId: "875975211756",
    appId: "1:875975211756:web:0a717d2c36b47e0e4dc3c9"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  }