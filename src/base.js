import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAXGMbNxmNmtl0AD0MLlQr5nBDC2Bz_FNM',
  authDomain: 'side-project-notebook.firebaseapp.com',
  databaseURL: 'https://side-project-notebook.firebaseio.com',
});

const base = Rebase.createClass(
  app.database(),
);

export default base;
