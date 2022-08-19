//firestrageに接続して、呼び出す準備をしている。
const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB2ev3NlaBlu2FGSMP6XVUSkorqc6t0gI",
  authDomain: "photo-upload-test-e09c5.firebaseapp.com",
  projectId: "photo-upload-test-e09c5",
  storageBucket: "photo-upload-test-e09c5.appspot.com",
  messagingSenderId: "116385223397",
  appId: "1:116385223397:web:4f4885f09df47535753a0c",
  measurementId: "G-JDPPEE44X0"
};

const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
module.exports = getStorage(firebaseApp);