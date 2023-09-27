import './App.css';
import { nanoid } from "nanoid";
import NotesLists from './components/NotesLists';
import { useState, useEffect } from 'react';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [notes, setNotes] = useState(getData());

  const changeState = (value) => {
    setDarkMode(value);
  }

  //  get data from local storage
  const getData = () => {
    let list = localStorage.getItem('note-list')
    if (list) {
      return JSON.parse(localStorage.getItem('note-list'));
    }
    else {
      return [];
    }
  }


  // add data to local storage
  useEffect(() => {
    localStorage.setItem('note-list', JSON.stringify(notes))
  }, [notes])

  const handleAddNote = ({ image, text }) => {
    const current = new Date();
    const newNote = {
      id: nanoid(),
      image: image,
      text: text,
      Date: `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`,

    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes);

  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }



  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleDarkMode={changeState} handledarkvalue={darkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesLists
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={handleAddNote}
          handleDeleteNote={deleteNote}
        />
      </div>

    </div>


  );
}

export default App;
