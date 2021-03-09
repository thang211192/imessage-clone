import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCML_a4JLbaC_KkYHkficX1RdWvT7WewHs",
    authDomain: "imessage-clone-42513.firebaseapp.com",
    projectId: "imessage-clone-42513",
    storageBucket: "imessage-clone-42513.appspot.com",
    messagingSenderId: "525412282234",
    appId: "1:525412282234:web:3700de959c4b2637c9f0c3",
    measurementId: "G-DPG9JZY3T8"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;