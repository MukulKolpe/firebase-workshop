const firebaseConfig = {
    apiKey: "AIzaSyAXuosbw1Qsg6tbxp6ph5Th020uE4iLtiE",
    authDomain: "fir-686de.firebaseapp.com",
    projectId: "fir-686de",
    storageBucket: "fir-686de.appspot.com",
    messagingSenderId: "1047439326810",
    appId: "1:1047439326810:web:407e4cc6db1f2b47e12263"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth;
  const storage = firebase.storage();

  export { db, auth, storage };