import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyC088r_zW107ofW9EIChW0lFL1G5yOGtQg",
  authDomain: "appescolas-cd5af.firebaseapp.com",
  databaseURL: "https://appescolas-cd5af.firebaseio.com",
  projectId: "appescolas-cd5af",
  storageBucket: "appescolas-cd5af.appspot.com",
  messagingSenderId: "319449457827",
  appId: "1:319449457827:web:42f9e57cd6b37c74fecb16",
  measurementId: "G-WKJJ33LD6K"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
