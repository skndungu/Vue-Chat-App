import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCI_Cw5au3bwSujaq9mZujb4z3_SNxJ_dM",
    authDomain: "ninja-chat-app-474ba.firebaseapp.com",
    databaseURL: "https://ninja-chat-app-474ba.firebaseio.com",
    projectId: "ninja-chat-app-474ba",
    storageBucket: "ninja-chat-app-474ba.appspot.com",
    messagingSenderId: "31998616751",
    appId: "1:31998616751:web:382963a23b627cb7"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();