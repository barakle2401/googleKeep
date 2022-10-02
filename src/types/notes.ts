export interface NoteType {
  text: string;
  title: string;
  id: string;
}

export type NotesType = Array<NoteType>;

export type NotesContextType = {
  notes: NotesType;
  editedNoteId: string | null;
  addNote: (note: NoteType) => NotesType;
  removeNote: (id: string) => NotesType;
  updateNote: (note: NoteType) => NotesType;
  setNotes: (notes: NotesType) => void;
  setEditedNoteId: (id: string) => void;
} | null;
