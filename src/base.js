import Rebase from 're-base';
import firebase from 'firebase';
import firebaseConfig from './config/firebase';

const app = firebase.initializeApp(firebaseConfig);

const base = Rebase.createClass(
  app.database(),
);

export default base;
