import './App.css';

import Header from '@/components/header/Header';
import CreateNote from '@/components/notes/CreateNote';
import Notes from '@/components/notes/Notes';
import GlobalStyle from '@/styles/Global';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <CreateNote />
      <Notes />
    </div>
  );
}

export default App;
