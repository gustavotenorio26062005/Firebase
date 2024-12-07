import { doc, setDoc, getDoc, updateDoc, deleteDoc, increment, getDocs, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Certifique-se de que o caminho está correto

// Funções para likes e dislikes
const incrementLike = async (animeId) => {
  const animeRef = doc(db, 'Animes', animeId);
  await updateDoc(animeRef, { likes: increment(1) });
};

const incrementDislike = async (animeId) => {
  const animeRef = doc(db, 'Animes', animeId);
  await updateDoc(animeRef, { dislikes: increment(1) });
};

// Comentários
const createComment = async (data) => {
  await addDoc(collection(db, 'comentários'), data);
};

const getAllComments = async () => {
  const querySnapshot = await getDocs(collection(db, 'comentários'));
  const comments = querySnapshot.docs.map(doc => ({
    id: doc.id,
    profilePic: doc.data().profilePic,
    comment: doc.data().comment
  }));
  return comments;
};

// Incrementar ID de Anime
const incrementId = async () => {
  const configRef = doc(db, 'config', 'animeId');
  await setDoc(configRef, { lastId: increment(1) }, { merge: true });
  const docSnap = await getDoc(configRef);
  return docSnap.data().lastId;
};

// CRUD para Animes
const createAnime = async (data) => {
  const id = await incrementId();
  await setDoc(doc(db, 'Animes', `${id}`), { ...data, likes: 0, dislikes: 0 }); // Inicializa likes e dislikes com 0
};

const getAnime = async (id) => {
  const docRef = doc(db, 'Animes', id); // Especificar o ID do documento
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log('No such document!');
  }
};

const updateAnime = async (id, data) => {
  const docRef = doc(db, 'Animes', id); // Especificar o ID do documento
  await updateDoc(docRef, data);
};

const deleteAnime = async (id) => {
  await deleteDoc(doc(db, 'Animes', id)); // Especificar o ID do documento
};

const getAllAnimes = async () => {
  const querySnapshot = await getDocs(collection(db, 'Animes'));
  const items = querySnapshot.docs.map(doc => ({
    id: doc.id,
    url: doc.data().imagemUrl,
    name: doc.data().nome,
    descrição: doc.data().descrição,
    likes: doc.data().likes,
    dislikes: doc.data().dislikes
  }));
  return items;
};

export { createAnime, getAnime, updateAnime, deleteAnime, getAllAnimes, createComment, getAllComments, incrementLike, incrementDislike };
