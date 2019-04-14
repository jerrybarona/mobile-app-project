import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBOxlKMfWHZSGGWkNorsPmmCw0-bPwiKHs",
  authDomain: "net-ninja-marioplan-f81a7.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-f81a7.firebaseio.com",
  projectId: "net-ninja-marioplan-f81a7",
  storageBucket: "net-ninja-marioplan-f81a7.appspot.com",
  messagingSenderId: "566066086261"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
