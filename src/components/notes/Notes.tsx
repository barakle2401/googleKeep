import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';

import Note from '@/components/notes/Note';
import { useNotesStore } from '@/context/NotesContext';
import db from '@/firebase/db';

const Notes: React.FC = () => {
  const notesStore = useNotesStore();
  const [isNotesFetched, setIsNotesFetched] = useState<Boolean>(false);

  const getNotes = async (): Promise<void> => {
    const notes = await db.getNotes();
    notesStore?.setNotes([...notes]);
    setIsNotesFetched(true);
  };

  useEffect(() => {
    getNotes();
  }, []);

  const NotesList = observer(() => {
    return (
      <div className="notes">
        {notesStore?.notes.map((note) => {
          return <Note text={note.text} id={note.id} title={note.title} key={note.id} />;
        })}
      </div>
    );
  });

  if (!isNotesFetched) return <h3>Loading...</h3>;
  else if (notesStore?.notes.length === 0) return <h1>No Data</h1>;
  return <NotesList />;
};

export default Notes;
