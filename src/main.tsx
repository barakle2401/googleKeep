import './firebase';
import React from 'react';
import { NotesProvider } from '@/context/NotesContext';
import App from './App';

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </React.StrictMode>,
);
