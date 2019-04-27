var firebase = require('firebase');

firebase.initializeApp({
 "appName": "Login Verification",
 "serviceAccount": "./service-account.json",
 "authDomain": "login-verification-16632.firebaseapp.com",
 "databaseURL": "https://login-verification-16632.firebaseio.com",
});

var ref = firebase.app().database().ref();
var usersRef = ref.child('users');

document.getElementById('accountCreation').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var username = getInputVal('username');
  var password = getInputVal('password');

  document.getElementById('accountCreation').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveContact(username, password){
  var newContact = usersRef.push();
  newContact.set({
    username: username,
    password: password
  });
}
