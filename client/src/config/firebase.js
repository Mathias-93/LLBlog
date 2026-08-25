import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQslUiHYA9ssH9af1-wo1VdTJszRiMEB8",
  authDomain: "llblog.firebaseapp.com",
  projectId: "llblog",
  storageBucket: "llblog.firebasestorage.app",
  messagingSenderId: "857497621977",
  appId: "1:857497621977:web:e3759da48f730b51d5f5c8",
  measurementId: "G-QQFJWQBFHV",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const createFirebaseUser = async (email, password) => {
  const userCredentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );

  return userCredentials.user;
};

const loginFirebaseUser = async (email, password) => {
  const userCredentials = await signInWithEmailAndPassword(
    auth,
    email,
    passowrd,
  );
  return userCredentials.user;
};

const logoutFirebaseUser = async () => {
  await signOut(auth);
};

export default { createFirebaseUser, loginFirebaseUser, logoutFirebaseUser };
