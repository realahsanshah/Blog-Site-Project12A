import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCRP4wrTtEyMIU8TRpx_nulANDdVVNxECg",
    authDomain: "blog-site-9d4e0.firebaseapp.com",
    projectId: "blog-site-9d4e0",
    storageBucket: "blog-site-9d4e0.appspot.com",
    messagingSenderId: "334688266931",
    appId: "1:334688266931:web:f40022f1d5c2171b271ec6",
    measurementId: "G-Y07Q3CMZ4W"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;