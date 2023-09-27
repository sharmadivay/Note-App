import React from 'react'
import { useState } from 'react'
import FileUpload from './FileUpload';


function AddNote({ handleAddNote }) {

  const characterlimit = 100;
  const [noteText, setNoteText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const onImageChange = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setSelectedImage(image)
  }

  const handleChange = (event) => {
    if (characterlimit - event.target.value.length >= 0)
      setNoteText(event.target.value);
  }
  const handleSaveOnClick = () => {
    handleAddNote({ image: selectedImage, text: noteText })
    setSelectedImage(null)
    setNoteText("");
  }
  return (
    <div className='note new'>
      <textarea
        rows="3"
        cols="10"
        placeholder='Type to add note...'
        value={noteText}
        onChange={handleChange}>


      </textarea>
      {/* <FileUpload handleImage={handleImage} /> */}
      <div className='upload-div' >
        <form action="" className='upload-btn'
          onClick={() => document.querySelector(".input-field").click()}>
          <input type="file" multiple accept="image/*" onChange={onImageChange} className='input-field' hidden />
          <p>
            {selectedImage ?
              <img src={selectedImage} alt="" style={{ width: "100%" }} />
              : "Select to Upload "
            }
          </p>
        </form>
      </div>
      <div className="note-footer">
        <small>{characterlimit - noteText.length} remaining</small>
        <button className="save" onClick={handleSaveOnClick}>Save</button>
      </div>
    </div>
  )
}

export default AddNote
