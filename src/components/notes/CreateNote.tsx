import { Add } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';

import db from '@/firebase/db';
function CreateNote() {
  const [note, setNote] = useState('');

  const addNote = async () => {
    db.addNote(note).then(
      () => {
        setNote('');
      },
      (e: any) => console.error(e),
    );
  };

  return (
    <div>
      <InputLabel htmlFor="note">Add note </InputLabel>
      <Input
        id="note"
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
        }}
        minRows={10}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              color={'secondary'}
              onClick={addNote}
              aria-label="toggle password visibility"
            >
              <Add />
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
}

export default CreateNote;
