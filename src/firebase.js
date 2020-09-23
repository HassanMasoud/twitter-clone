import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDaJKMZROnw3jP1lKlcx9uuiYM0EDE8DmY",
  authDomain: "twitter-clone-a47fc.firebaseapp.com",
  databaseURL: "https://twitter-clone-a47fc.firebaseio.com",
  projectId: "twitter-clone-a47fc",
  storageBucket: "twitter-clone-a47fc.appspot.com",
  messagingSenderId: "471351386777",
  appId: "1:471351386777:web:26f4732cdbdc1ecf348e08",
  measurementId: "G-N0RM7S60E5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
