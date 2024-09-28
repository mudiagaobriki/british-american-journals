import firebase from 'firebase';
// import 'firebase/storage'
// import { getStorage } from 'firebase/storage';
// import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCR6XYJ76WAAiges_SuaZ00YOR2vvNkhko",
    authDomain: "ab-journal.firebaseapp.com",
    projectId: "ab-journal",
    storageBucket: "ab-journal.appspot.com",
    messagingSenderId: "291360010922",
    appId: "1:291360010922:web:db82813baba40cc819d6d3",
    measurementId: "G-Y0Y4MX1V7D"
};
let app
try {
    app = firebase.initializeApp(firebaseConfig);
}
catch (e) {
    console.log(e);
}
// const app = initializeApp(firebaseConfig);

// let storage = firebase.storage();
let storage
try {
    storage = firebase.storage();
}
catch (e) {
    console.log(e);
}

export default storage;