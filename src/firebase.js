const firebaseConfig = {
  apiKey: "AIzaSyC6P6nlsWEqSTLOAglJIt512hWglLDTcoM",
  authDomain: "disney-plus-clone-f651d.firebaseapp.com",
  projectId: "disney-plus-clone-f651d",
  storageBucket: "disney-plus-clone-f651d.appspot.com",
  messagingSenderId: "528416081726",
  appId: "1:528416081726:web:b4186c28b0aec37d920e6f",
  measurementId: "G-F6HZJCFN11",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
