import './firebase';

import React from 'react';
import ReactDOM from 'react-dom';
import { NotesProvider } from '@/context/NotesContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
