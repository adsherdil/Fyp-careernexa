// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import {  getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import {  getFirestore, doc, setDoc ,addDoc,collection,deleteDoc,getDocs,updateDoc,getDoc ,serverTimestamp} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import {  getStorage ,deleteObject, ref, uploadBytes, uploadString, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA63lXrfjy6rxqAhpeCiexXxTuf-XPBS1g",
  authDomain: "collab-zone.firebaseapp.com",
  projectId: "collab-zone",
  storageBucket: "collab-zone.appspot.com",
  messagingSenderId: "1092399600662",
  appId: "1:1092399600662:web:0f474ed07bb9154e14d137"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const storage = getStorage();

export{
    app,
    getAuth, 
    createUserWithEmailAndPassword,
    auth,
    getFirestore ,
    db,
    doc, 
    setDoc,
    signInWithEmailAndPassword,
    addDoc,
    collection,
    deleteDoc,
    getDocs,
    signOut,
    updateDoc,
    getDoc,
    getStorage,
    storage,
    deleteObject,
    ref,
    uploadBytes,
    uploadString,
    uploadBytesResumable,
    getDownloadURL,
    serverTimestamp,
    
}