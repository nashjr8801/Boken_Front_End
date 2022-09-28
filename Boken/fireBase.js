var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyA4qTC6Q78AzCKIHnfcqCbtVZVNgIHQTeo",
  authDomain: "loginboken.firebaseapp.com",
  projectId: "loginboken",
  storageBucket: "loginboken.appspot.com",
  messagingSenderId: "1048233515516",
  appId: "1:1048233515516:web:6467dfe1c9b327357b7a79"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}