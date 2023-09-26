import React from 'react'
import { useState } from 'react'
import FileUpload from './FileUpload';


function AddNote({handleAddNote,handleImage}) {
 
   const characterlimit = 100;
    const [noteText,setNoteText] = useState('');
    const handleChange =(event)=>{
        if(characterlimit-event.target.value.length>=0)
          setNoteText(event.target.value);
    }
    const handleSaveOnClick=()=>{
      if(noteText.trim().length>0){
        handleAddNote(noteText);
       
      }
      setNoteText("");
       
       
    }
  return (
    <div className='note new'>
      <textarea 
      rows="3" 
      cols="10"
      placeholder='Type to add note...'
      value={noteText}
      onChange = {handleChange}>
        

      </textarea>
      <FileUpload  handleImage={handleImage}/>
      <div className="note-footer">
       
        <small>{characterlimit-noteText.length} remaining</small>
        <button className="save" onClick={handleSaveOnClick}>Save</button>
      </div>
    </div>
  )
}

export default AddNote
