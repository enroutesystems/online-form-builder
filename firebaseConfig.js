import 'firebase/auth'
import 'firebase/firestore'
import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "online-form-builder.firebaseapp.com",
    databaseURL: "https://online-form-builder-default-rtdb.firebaseio.com",
    projectId: "online-form-builder",
    storageBucket: "online-form-builder.appspot.com",
    messagingSenderId: "676308604224",
    appId: "1:676308604224:web:2fcb466aa7634695df16a5"
}

if(!firebase.apps.length)
    firebase.initializeApp(firebaseConfig)
else
    firebase.app()


export const auth = firebase.auth()
export const firestore = firebase.firestore()
