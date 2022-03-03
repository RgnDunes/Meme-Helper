import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB5RNRuQmtnjBJQ9w8SyQqD_Aln9BnLm7A",
  authDomain: "meme-helper.firebaseapp.com",
  projectId: "meme-helper",
  storageBucket: "meme-helper.appspot.com",
  messagingSenderId: "808048300142",
  appId: "1:808048300142:web:09b92be640aefccf0c567f",
  measurementId: "G-Q4B7G1V3QX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
