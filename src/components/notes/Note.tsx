import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card, CardContent, Typography } from '@mui/material';

const Note = ({ text, id, title }: { text: string; id: string; title: string }) => {
  const [showEditIcon, setShowEditIcon] = useState(false);
  const navigate = useNavigate();
  const toggleEditNoteModal = () => {
    navigate(`edit/${id}`);
  };

  return (
    <Card
      onMouseLeave={() => setShowEditIcon(false)}
      onMouseEnter={() => setShowEditIcon(true)}
      key={id}
      className="note"
    >
      <CardContent sx={{ textAlign: 'left' }}>
        {showEditIcon && (
          <svg
            onClick={toggleEditNoteModal}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
          </svg>
        )}
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h6" component="div">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default Note;
