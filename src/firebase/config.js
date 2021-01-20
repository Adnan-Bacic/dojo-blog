import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBnY-Mrq5aEKq7BQ4laZsUpEShganyT5GE",
    authDomain: "udemy-vue-crud-livechat.firebaseapp.com",
    projectId: "udemy-vue-crud-livechat",
    storageBucket: "udemy-vue-crud-livechat.appspot.com",
    messagingSenderId: "101033495248",
    appId: "1:101033495248:web:9eca1e1667c9577f766cd5"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init firestore service
  const projectFirestore = firebase.firestore()

  const timeStamp = firebase.firestore.FieldValue.serverTimestamp

  export {
    projectFirestore,
    timeStamp
  }