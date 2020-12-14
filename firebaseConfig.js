import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'
import firebase from 'firebase/app'


const firebaseConfig = {
    apiKey: "AIzaSyBMFDd74TesmpqGP8t_O_DvFJGeYWR34pg",
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

export const storageRef = firebase.storage().ref();
export const auth = firebase.auth()
export const firestore = firebase.firestore()
