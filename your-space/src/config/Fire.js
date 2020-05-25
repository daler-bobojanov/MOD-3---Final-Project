import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBeQ_31xf3xW1Fg15ADdK1rj0j40K8ZwGE",
    authDomain: "mod-3-final-project-f88b5.firebaseapp.com",
    databaseURL: "https://mod-3-final-project-f88b5.firebaseio.com",
    projectId: "mod-3-final-project-f88b5",
    storageBucket: "mod-3-final-project-f88b5.appspot.com",
    messagingSenderId: "808057156708",
    appId: "1:808057156708:web:6202a8bc6d239492aa9b71",
    measurementId: "G-QMVS0CRZX8"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default fire;



