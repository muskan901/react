import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDQtNYhXbClMTvs1vE_EvPAohIGRdFEoZg",
    authDomain: "instagram-clone-react-d359b.firebaseapp.com",
    projectId: "instagram-clone-react-d359b",
    storageBucket: "instagram-clone-react-d359b.appspot.com",
    messagingSenderId: "652637349582",
    appId: "1:652637349582:web:756d43309a8be8d55a529f",
    measurementId: "G-S39Q98CPGV"
  };

  const db=firebaseConfig.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();

  export{db,auth,storage};