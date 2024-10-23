import React, { useState } from 'react'

function Colour() {
    const[colour,setColour]=useState('Red')
  return (
    <div className='card'> 
    <h2>Colour:{colour}</h2>
      <button onClick={()=>setColour('Black')}>Black</button>
       <button onClick={()=>setColour('Blue')}>Blue</button>
       <button onClick={()=>setColour('Green')}>Green</button>
    </div>                                                                                                                                                                                                                                                                       

  )
}

export default Colour