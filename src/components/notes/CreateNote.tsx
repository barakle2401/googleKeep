import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { useNotesStore } from '@/context/NotesContext';
import db from '@/firebase/db';
import { useOnOutsideClick } from '@/hooks/useOnOutsideClick';
import { NoteType } from '@/types/notes';

function CreateNote() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const store = useNotesStore();
  const { innerRef } = useOnOutsideClick(() => setIsFormOpen(false));

  useEffect(() => {
    addNote();
  }, [isFormOpen]);

  const clearFormFields = () => {
    setText('');
    setTitle('');
  };

  const addNote = () => {
    if (!title && !text) return;
    const note: NoteType = { title, text, id: '' };
    db.addNote(note).then(
      (noteId: string) => {
        store.addNote({ ...note, id: noteId });
        clearFormFields();
      },
      (e: any) => console.error(e),
    );
  };
  const wrapperStyle = {
    letterSpacing: '.01428571em',
    fontFamily: 'Roboto,Arial,sans-serif',
    fontSize: '.875rem',
    fontWeight: '400',
    lineHeight: '1.25rem',
    padding: '1px 5px 1px 5px',
    margin: 'auto',
    textAlign: 'left',
    backgroundClip: 'padding-box',
    border: 'solid transparent',
    borderWidth: ' 1px 6px 1px 1px',
    borderRadius: '10px',
    maxWidth: '500px',
    boxShadow: '2px 6px 10px 4px rgb(211 200 200 / 47%)',
    opacity: 0.9,
  };

  return (
    <motion.div style={wrapperStyle}>
      <form className="d-flex flex-column">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          onClick={() => setIsFormOpen(true)}
          placeholder={isFormOpen ? 'Title' : 'Add note...'}
        />

        {isFormOpen && (
          <motion.textarea
            ref={innerRef}
            initial={{ height: '0' }}
            animate={{ height: '100px' }}
            exit={{ height: '0' }}
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Note..."
          />
        )}
      </form>
    </motion.div>
  );
}

export default CreateNote;
