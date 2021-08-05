import firebase from "firebase";

if(!firebase.apps.length){
  firebase.initializeApp(
    {
      apiKey: "AIzaSyBLg7Ou9YceyaxKLeQ16-CDqsr6oP4H5Ys",
      authDomain: "fir-pj-8895e.firebaseapp.com",
      projectId: "fir-pj-8895e",
      storageBucket: "fir-pj-8895e.appspot.com",
      messagingSenderId: "965183794630",
      appId: "1:965183794630:web:e26bdea1c9deb071b596c7"
  }
  )
}

export default firebase
