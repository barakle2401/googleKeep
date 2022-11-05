import { makeAutoObservable } from 'mobx';

import { NotesType, NoteType } from '@/types/notes';

const addNote = (note: NoteType, notes: NotesType): NotesType => [note, ...notes];

const deleteNote = (id: string, notes: NotesType): NotesType =>
  notes.filter((note) => note.id !== id);

const updateNote = (note: NoteType, notes: NotesType): NotesType => {
  return notes.map((n) => {
    if (n.id === note.id) {
      return { ...note };
    }
    return n;
  });
};

export class NotesStore {
  notes: NotesType = [];
  editedNoteId: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setNotes(notes: NotesType) {
    this.notes = notes;
  }

  addNote(note: NoteType) {
    this.notes = addNote(note, this.notes);
  }

  deleteNote(id: string) {
    this.notes = deleteNote(id, this.notes);
  }

  updateNote(note: NoteType) {
    this.notes = updateNote(note, this.notes);
  }

  setEditedNoteId(id: string) {
    this.editedNoteId = id;
  }
}

const notesStore = new NotesStore();
export default notesStore;
