import React, { useState } from 'react'
import '../App.css';

const FileUpload = ({ handleImage }) => {

  const [selectedImage, setSelectedImage] = useState(null);

  const onImageChange = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setSelectedImage(image)
    handleImage(image)
  }
  // const handleIMageSubmit = () => {
  //   handleImage(images)

  //   setImages([])

  // }
  return (
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
      {/* <button onClick={handleIMageSubmit} className='btn'>Upload</button> */}

    </div>
  )
}

export default FileUpload


