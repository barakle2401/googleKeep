import LoadingButton from '@mui/lab/LoadingButton';
import { Backdrop, Box, Fade, Modal, TextField } from '@mui/material/';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import db from '@/firebase/db';
import { NoteType } from '@/types/notes';

const UpdateModal = () => {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);
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
    setLoading(true);
    db.updateNote(noteId).then(() => {
      setTimeout(() => {
        setLoading(false);
        backHome();
      }, 1000);
    });
  };

  const setFormValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedNote({ ...editedNote, [e.target.name]: e.target.value });
  };
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 7,
  };

  return (
    <Modal
      key="modal"
      onClose={closeModal}
      open={isModalOpen}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isModalOpen}>
        <Box sx={style}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TextField
              label="Title"
              type="text"
              id="title"
              name="title"
              onChange={setFormValue}
              placeholder="Title"
              sx={{
                m: 2,
                width: '100%',
              }}
              value={editedNote?.title}
            />
            <TextField
              label="Note"
              className="mb-2"
              id="text"
              name="text"
              placeholder="Note"
              multiline
              rows={4}
              sx={{
                m: 2,
                width: '100%',
              }}
              value={editedNote?.text}
              onChange={setFormValue}
            />
            <LoadingButton onClick={saveChanges} loading={loading} className="btn">
              {loading ? 'Loading...' : 'Save Changes'}
            </LoadingButton>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default UpdateModal;
