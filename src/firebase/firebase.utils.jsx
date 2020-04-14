import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCvuLWiJopN6bHOKFftPzXCmd7ph0tFRh8",
    authDomain: "profile-live.firebaseapp.com",
    databaseURL: "https://profile-live.firebaseio.com",
    projectId: "profile-live",
    storageBucket: "profile-live.appspot.com",
    messagingSenderId: "400522325101",
    appId: "1:400522325101:web:011d9b0ba7adb6868ba364",
    measurementId: "G-5DBTXZ7DC2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;