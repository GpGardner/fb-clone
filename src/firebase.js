import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVoTNMi0ereJl8QnE400vjQHQv6szVKgY",
  authDomain: "fb-clone-51661.firebaseapp.com",
  databaseURL: "https://fb-clone-51661.firebaseio.com",
  projectId: "fb-clone-51661",
  storageBucket: "fb-clone-51661.appspot.com",
  messagingSenderId: "964477703645",
  appId: "1:964477703645:web:3349c5707a46da270c1234",
  measurementId: "G-2MC1FSGH0R"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };