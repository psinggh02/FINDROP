import firebase from 'firebase/app';
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAeofOmNDRokwHY0MgShWU7FWqpNFGzqKY",
  authDomain: "findrop-6161d.firebaseapp.com",
  databaseURL: "https://findrop-6161d.firebaseio.com",
  projectId: "findrop-6161d",
  storageBucket: "findrop-6161d.appspot.com",
  messagingSenderId: "695741485934",
  appId: "1:27293421697:web:050ed13ea00168a6c2bd80"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({timestampsInSnapshots:true});

export default db;