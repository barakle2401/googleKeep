import { Backdrop, Box, Fade, Modal } from '@mui/material/';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNotesStore } from '@/context/NotesContext';
import db from '@/firebase/db';
import { NoteType } from '@/types/notes';

const UpdateModal = () => {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const store = useNotesStore();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editedNote, setEditedNote] = useState<NoteType>({
    text: '',
    title: '',
    id: '',
  });

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);
  const backHome = () => navigate('/');

  useEffect(() => {
    if (!noteId) return;
    db.getNoteById(noteId).then((note: NoteType) => {
      setEditedNote(note);
      openModal();
    });
  }, [noteId]);

  useEffect(() => {
    if (!isModalOpen && noteId) {
      backHome();
    }
  }, [isModalOpen]);

  const saveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    db.updateNote(editedNote)
      .then(() => {
        store.updateNote(editedNote);
        closeModal();
        backHome();
      })
      .catch((e) => console.log(e));
  };

  const deleteNote = () => {
    db.deleteNote(noteId)
      .then(() => {
        store.deleteNote(noteId);
        closeModal();
        backHome();
      })
      .catch((e) => console.log(e));
  };

  const setFormValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedNote({ ...editedNote, [e.target.name]: e.target.value });
  };
  const wrapperStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 220,
    bgcolor: 'background.paper',
    px: 1,
    py: 2,
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <Modal
      key="modal"
      onClose={saveChanges}
      open={isModalOpen}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 200,
      }}
    >
      <Fade in={isModalOpen}>
        <Box sx={wrapperStyle}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <input
              type="text"
              id="title"
              name="title"
              onChange={setFormValue}
              placeholder="Title"
              value={editedNote?.title}
            />
            <textarea
              className="mb-2"
              id="text"
              name="text"
              placeholder="Note"
              rows={2}
              value={editedNote?.text}
              onChange={setFormValue}
            />
          </Box>
          <Box
            sx={{
              marginTop: 'auto',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <DeleteIcon className="btn" id="editIcon" onClick={deleteNote} />
            <button onClick={saveChanges} className="btn gray">
              Done
            </button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default UpdateModal;
