import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDD5VB7HwLh6GBMIp6oAGfIsZ6UgjPx8Gg",
  authDomain: "banco-de-dados-850a5.firebaseapp.com",
  projectId: "banco-de-dados-850a5",
  storageBucket: "banco-de-dados-850a5.firebasestorage.app",
  messagingSenderId: "1089182814140",
  appId: "1:1089182814140:web:cd6bff192997d6b54ae5b9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
