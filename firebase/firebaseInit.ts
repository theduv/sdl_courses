import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJoRB4ayYk77jCV6Gn66p2te30bjUvJTY",
  authDomain: "sdlcourses.firebaseapp.com",
  projectId: "sdlcourses",
  storageBucket: "sdlcourses.appspot.com",
  messagingSenderId: "628257581911",
  appId: "1:628257581911:web:014883d767710bf650ec12",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
