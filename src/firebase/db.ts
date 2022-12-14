import { child, get, push, ref, set } from 'firebase/database';

import { NotesType, NoteType } from '@/types/notes';

import { db } from './firebase';

const addNote = async (note: NoteType): Promise<string> => {
  const notesRef = ref(db, 'notes');
  const newNoteRef = push(notesRef);
  const id = newNoteRef.key;
  await set(newNoteRef, {
    title: note.title,
    text: note.text,
    id,
  });

  return id;
};

const getNotes = async () => {
  const dbRef = ref(db);
  return new Promise<NotesType>((resolve, reject) => {
    get(child(dbRef, `notes`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          // @ts-ignore
          resolve(Object.values(snapshot.val()).reverse());
        } else {
          reject('No data available');
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getNoteById = async (id: String) => {
  const dbRef = ref(db);
  return new Promise<NoteType>((resolve, reject) => {
    get(child(dbRef, `notes`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          // @ts-ignore
          resolve(Object.values(snapshot.val()).find((note) => note.id === id));
        } else {
          reject('No data available');
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const updateNote = async (note: NoteType) => {
  const noteRef = ref(db, 'notes/' + note.id);
  return await set(noteRef, {
    title: note.title,
    text: note.text,
    id: note.id,
  });
};

const deleteNote = async (noteId: string) => {
  const noteRef = ref(db, 'notes/' + noteId);
  return await set(noteRef, null);
};

export default {
  addNote: addNote,
  getNotes: getNotes,
  updateNote: updateNote,
  getNoteById: getNoteById,
  deleteNote: deleteNote,
};
