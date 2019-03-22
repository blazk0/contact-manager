import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAqfzHi_RHHtxDJvgAOJYm843qBceqkWv4",
  authDomain: "contact-manager-31cc3.firebaseapp.com",
  databaseURL: "https://contact-manager-31cc3.firebaseio.com",
  projectId: "contact-manager-31cc3",
  storageBucket: "contact-manager-31cc3.appspot.com",
  messagingSenderId: "171961201456"
};

firebase.initializeApp(config);

export default firebase;