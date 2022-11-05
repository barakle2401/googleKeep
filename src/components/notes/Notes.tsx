import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';

import Note from '@/components/notes/Note';
import { useNotesStore } from '@/context/NotesContext';
import db from '@/firebase/db';

const Notes: React.FC = () => {
  const store = useNotesStore();
  const [isNotesFetched, setIsNotesFetched] = useState(false);

  const getNotes = () => {
    db.getNotes()
      .then((notes) => {
        store.setNotes([...notes]);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setIsNotesFetched(true));
  };

  useEffect(() => {
    getNotes();
  }, []);

  const NotesList = observer(() => {
    const notes = store.notes;
    const noAvailableNotes = notes.length === 0;
    if (!isNotesFetched) return <h3>Loading...</h3>;
    else if (noAvailableNotes) return <h3>No data available</h3>;
    return (
      <div className="notes">
        {store.notes.map((note) => {
          return <Note text={note.text} id={note.id} title={note.title} key={note.id} />;
        })}
      </div>
    );
  });

  return <NotesList />;
};

export default Notes;
