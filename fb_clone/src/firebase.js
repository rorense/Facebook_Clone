// Importing necessary firebase component
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// File for storing Firebase codebase SDK key.
const firebaseConfig = {
    apiKey: "AIzaSyCk-TKCmg-H4vlpy2iQdi9USenphR96Mco",
    authDomain: "facebook-clone-1114b.firebaseapp.com",
    projectId: "facebook-clone-1114b",
    storageBucket: "facebook-clone-1114b.appspot.com",
    messagingSenderId: "353996477800",
    appId: "1:353996477800:web:63ce4259a93dee1180f2dd"
  };

  // Connecting firebase to the React front end
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // accessing database
  const db = firebaseApp.firestore();

  // Setting up authentication
  const auth = firebase.auth();

  // After setting up google authetication on firebase, create
  // a provider
  const provider = new firebase.auth.GoogleAuthProvider();

  // Exporting modules
  export { auth, provider };
  export default db; 