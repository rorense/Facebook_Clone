// Importing necessary firebase component
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// File for storing Firebase codebase SDK key.
const firebaseConfig = {
    apiKey: "AIzaSyCWuRouttUCoF992pHmsGk57ndwc8p4FSE",
    authDomain: "fb-clone-bedaf.firebaseapp.com",
    projectId: "fb-clone-bedaf",
    storageBucket: "fb-clone-bedaf.appspot.com",
    messagingSenderId: "580321644779",
    appId: "1:580321644779:web:331b109fb13d963f7eeeae"
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