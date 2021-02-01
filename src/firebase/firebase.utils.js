import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDbb69kfYxjEeRvZebwzVQJiYJgvQ8tKyM",
    authDomain: "crwn-db-cc183.firebaseapp.com",
    projectId: "crwn-db-cc183",
    storageBucket: "crwn-db-cc183.appspot.com",
    messagingSenderId: "502700034056",
    appId: "1:502700034056:web:33fa85914e6a0020f0a9bd",
    measurementId: "G-RXZJHF0LX5"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef  = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();   
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;