// Importing necessary firebase component
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// File for storing Firebase codebase SDK key.
const firebaseConfig = {
    apiKey: "AIzaSyAMqJxaee2r9-8fdjWItlz63kVy6grOBW8",
    authDomain: "r-book-e7c62.firebaseapp.com",
    projectId: "r-book-e7c62",
    storageBucket: "r-book-e7c62.appspot.com",
    messagingSenderId: "635245738623",
    appId: "1:635245738623:web:b59a407efc42ec678bdd4a"
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