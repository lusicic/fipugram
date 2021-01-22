import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAq_eWZ75JGa9Wh8cTcxb22pWvzn1-CUDI",
    authDomain: "fipugram-2bb61.firebaseapp.com",
    projectId: "fipugram-2bb61",
    storageBucket: "fipugram-2bb61.appspot.com",
    messagingSenderId: "190784952867",
    appId: "1:190784952867:web:249006a95183b6be96af96"
  };

firebase.initializeApp(firebaseConfig);

export { firebase };

