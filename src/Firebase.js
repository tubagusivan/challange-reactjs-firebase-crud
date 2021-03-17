import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcC5fe1PiHbVSJGQ0UT9bl021VXH6pTo0",
  authDomain: "fir-web-client.firebaseapp.com",
  databaseURL: "https://fir-web-client-default-rtdb.firebaseio.com",
  projectId: "fir-web-client",
  storageBucket: "fir-web-client.appspot.com",
  messagingSenderId: "63844372513",
  appId: "1:63844372513:web:90a53b9fb06ddf99a3d360",
  measurementId: "G-FK4JCB609K"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
