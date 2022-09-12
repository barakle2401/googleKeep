import { child, get, push, ref, set } from 'firebase/database';

import { NotesArray } from '@/types/notes';

import { db } from './firebase';

const addNote = async (text: string) => {
  const title = 'title';
  const notesRef = ref(db, 'notes');
  const newNoteRef = push(notesRef);
  const id = newNoteRef.key;
  return set(newNoteRef, {
    title,
    text,
    id,
  });
};

// const removeFromFavorites = async (movie, user) => {
//   return new Promise((resolve, reject) => {
//     firebase
//       .database()
//       .ref(`favorites/${user.uid}/${movie.id}`)
//       .remove()
//       .then(() => {
//         resolve('OK');
//       })
//       .catch(() => {
//         reject();
//       });
//   });
// };

const getNotes = async () => {
  const dbRef = ref(db);
  return new Promise<NotesArray>((resolve, reject) => {
    get(child(dbRef, `notes`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          resolve(Object.values(snapshot.val()));
        } else {
          reject('No data available');
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  addNote: addNote,
  getNotes: getNotes,
};
