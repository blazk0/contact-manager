import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC5VeVK-g-rbx7taGTsAXUi2cOQ1Wrq3yQ",
  authDomain: "my-contacts-c110c.firebaseapp.com",
  databaseURL: "https://my-contacts-c110c.firebaseio.com",
  projectId: "my-contacts-c110c",
  storageBucket: "my-contacts-c110c.appspot.com",
  messagingSenderId: "149350524379"
};
firebase.initializeApp(config);

export default firebase;