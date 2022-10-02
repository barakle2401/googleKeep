import React, { useState } from 'react';

import db from '@/firebase/db';
import { useNotesStore } from '@/context/NotesContext';
import { NoteType } from '@/types/notes';
import { Container, TextField, Box, Card } from '@mui/material';

function CreateNote() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const notesStore = useNotesStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const note: NoteType = { title, text, id: null };
    db.addNote(note).then(
      () => {
        notesStore.addNote(note);
        setText('');
        setTitle('');
      },
      (e: any) => console.error(e),
    );
  };
  return (
    <Card sx={{ py: 3, px: 5 }}>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            type="text"
            id="title"
            placeholder="Title"
            sx={{
              m: 2,
              width: '100%',
            }}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="text"
            placeholder="Note"
            sx={{
              m: 2,
              width: '100%',
            }}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn">Add Note</button>
        </Box>
      </form>
    </Card>
  );
}

export default CreateNote;
