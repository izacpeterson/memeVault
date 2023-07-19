import { initializeApp } from "firebase/app";
import { getFirestore, doc, onSnapshot, setDoc, query, collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";
import { meme } from "$lib/stores";
// import { crypto } from "crypto";

const firebaseConfig = {
  apiKey: "AIzaSyCH2qQFCT3sNMZyFQp6WkUcaV4Xdc6vcCU",
  authDomain: "memevault-7d144.firebaseapp.com",
  projectId: "memevault-7d144",
  storageBucket: "memevault-7d144.appspot.com",
  messagingSenderId: "822297863316",
  appId: "1:822297863316:web:087fa021a1dc503a884081",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

// user store
const currentUser = writable();

onAuthStateChanged(auth, (user) => {
  currentUser.set(user);
});

export { currentUser as user };

// Save Meme to firebase
export async function saveMeme() {
  return new Promise((resolve, reject) => {
    console.log("saving meme");
    meme.subscribe((value) => {
      if (!value.id) {
        console.log("updating meme");
        let uuid = crypto.randomUUID();
        value.id = uuid;
      }
      console.log(value);
      setDoc(doc(db, "memes", value.id), value).then(() => {
        resolve();
      });
    });
    // await setDoc(doc(db, "memes", $meme.uuid), $meme);
  });
}

export const memeList = writable([]);

let q = query(collection(db, "memes"));

const querySnapshot = await getDocs(q);

let memes = [];

querySnapshot.forEach((doc) => {
  memes.push(doc.data());
});

memeList.set(memes);

// onSnapshot(doc(db, "memes"), (doc) => {
//   let memes = [];
//   doc.forEach((item) => {
//     memes.push(item.data());
//   });
//   memeList.set(memes);
// });
