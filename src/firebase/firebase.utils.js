import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const config = {
    apiKey: "AIzaSyCqqdjl9MhSbc4qmuHrDwz9ACpd_mkBRUE",
    authDomain: "crwn-db-481fd.firebaseapp.com",
    projectId: "crwn-db-481fd",
    storageBucket: "crwn-db-481fd.appspot.com",
    messagingSenderId: "407363720287",
    appId: "1:407363720287:web:37f1a7f7e3489fca5a77ea",
    measurementId: "G-F46RQ3JCLQ"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;