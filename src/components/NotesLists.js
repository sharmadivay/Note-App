import React from 'react'
import Note from "./Note"
import AddNote from './AddNote'
const NotesLists = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className='notes-list'>
      <AddNote handleAddNote={handleAddNote} />

      {notes.map((note) =>
        <Note key={note.id} id={note.id} text={note.text} date={note.Date} image={note.image} handleDeleteNote={handleDeleteNote} />

      )}


    </div>
  )
}

export default NotesLists
