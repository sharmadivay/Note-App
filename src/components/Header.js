import React from 'react'

const Header = ({handleDarkMode, handledarkvalue}) => {
    const handleToggleMode = ()=>{
         handleDarkMode(!handledarkvalue);
    }
  return (
   
    <div className='header'>
        <h1>Notes</h1>
        <button className="save" type="submit" onClick={()=>
            handleToggleMode()}
        >Toggle Mode</button>
      
    </div>
  )
}

export default Header
