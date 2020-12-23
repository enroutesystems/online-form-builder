import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import firebase from 'firebase/app'

// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: "online-form-builder.firebaseapp.com",
//     databaseURL: "https://online-form-builder-default-rtdb.firebaseio.com",
//     projectId: "online-form-builder",
//     storageBucket: "online-form-builder.appspot.com",
//     messagingSenderId: "676308604224",
//     appId: "1:676308604224:web:2fcb466aa7634695df16a5"
// }

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY2,
    authDomain: "formify-b7b26.firebaseapp.com",
    projectId: "formify-b7b26",
    storageBucket: "formify-b7b26.appspot.com",
    messagingSenderId: "1033700657510",
    appId: "1:1033700657510:web:299ed7ab3d18ec51e8a0a7"
  };

if(typeof window !== 'undefined' && !firebase.apps.length)
    firebase.initializeApp(firebaseConfig)

export default firebase
