import React, { useEffect, useState } from 'react';

import Note from '@/components/notes/Note';
import db from '@/firebase/db';
import { NotesArray } from '@/types/notes';
const Notes: React.FC = () => {
  const [notes, setNotes] = useState<NotesArray>([]);
  useEffect(() => {
    db.getNotes().then((notes) => {
      setNotes(notes);
    });
  }, []);

  const notesList = notes.map((note) => {
    return <Note text={note.text} id={note.id} title={note.title} key={note.id} />;
  });

  return <div className="notes">{notesList}</div>;
};

export default Notes;
