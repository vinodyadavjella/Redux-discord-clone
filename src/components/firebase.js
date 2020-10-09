import firebase from 'firebase';

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2Bzinek2jtatihYJ6ihkX0ssWnEH4B-s",
  authDomain: "discord-clone-f709f.firebaseapp.com",
  databaseURL: "https://discord-clone-f709f.firebaseio.com",
  projectId: "discord-clone-f709f",
  storageBucket: "discord-clone-f709f.appspot.com",
  messagingSenderId: "102003754783",
  appId: "1:102003754783:web:125bcfb2993fd60068922a",
  measurementId: "G-EXS4KWBTCS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;