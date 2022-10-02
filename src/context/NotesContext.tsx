import React from 'react';

import notesStore from '@/store/store';
import { NotesContextType } from '@/types/notes';

const NotesContext = React.createContext<NotesContextType>(null);

export const NotesProvider: React.FC<React.ReactNode> = ({ children }) => {
  return <NotesContext.Provider value={notesStore}>{children}</NotesContext.Provider>;
};

export const useNotesStore = () => React.useContext(NotesContext);
