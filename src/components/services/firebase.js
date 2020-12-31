import firebase from 'firebase';
import "firebase/auth";
import "firebase/database";

  const firebaseConfig = {
    apiKey: "xxxxxxxxx",
    authDomain: "chat-app-c6f0f.firebaseapp.com",
    databaseURL: "https://chat-app-c6f0f-default-rtdb.firebaseio.com",
    projectId: "chat-app-c6f0f",
    storageBucket: "chat-app-c6f0f.appspot.com",
    messagingSenderId: "xxxxxxxxx",
    appId: "xxxxxxxxxxxxxx",
    measurementId: "xxxxxxxxxx"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({
  timestampsInSnapshots: true
})




  


  export const auth = firebase.auth;
  export const db = firebase.database();
  export const myStorage = firebase.storage();
  

  export const myFirebase = firebase
  export const myFirestore = firebase.firestore()
