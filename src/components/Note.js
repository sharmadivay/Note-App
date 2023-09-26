import React from 'react'
import {MdDelete} from 'react-icons/md'
import "../App.css"

const Note = ({id,date,text,handleDeleteNote,image}) => {
 
  return (
    <div className='note'>
     <div className="card" style={{width: "18re"}}>
  <img src={image} className="card-img-top" alt="" style={{width:"100%"}}/>
  <div className="card-body">
    <h5 className="card-title">{text}</h5>
    
    
  </div>
</div>
      
      <div className="note-footer">
         
          <small>{date}</small>
          <MdDelete className='delete-icon' size ='1.3em' onClick={()=>handleDeleteNote(id)}/>
      </div>
      
        
      
    </div>
  )
}

export default Note
