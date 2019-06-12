import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA1YfhN--3Dcpqyi9spKm_Y1gciHf1dyG8",
  authDomain: "my-contacts-bc404.firebaseapp.com",
  databaseURL: "https://my-contacts-bc404.firebaseio.com",
  projectId: "my-contacts-bc404",
  storageBucket: "my-contacts-bc404.appspot.com",
  messagingSenderId: "289319728348",
  appId: "1:289319728348:web:586d942f941373cb"
};

firebase.initializeApp(config);

export default firebase;