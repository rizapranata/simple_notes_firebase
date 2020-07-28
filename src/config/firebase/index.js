 import firebase from 'firebase/app';
 import 'firebase/auth';
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBzCqMZk54jUXI-ALdfoopml4R848dFyxc",
    authDomain: "simple-notes-firebase-1a86d.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-1a86d.firebaseio.com",
    projectId: "simple-notes-firebase-1a86d",
    storageBucket: "simple-notes-firebase-1a86d.appspot.com",
    messagingSenderId: "647866029049",
    appId: "1:647866029049:web:f4e16d4bdbe58e7fe9e328",
    measurementId: "G-2MVFR1HPS5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default firebase;