import React, { useState } from 'react'

function Color() {
    const [color, setColor]=useState('white')
  return (
    <div style={{backgroundColor:color, height:'70vh', border:'2px solid grey'}}>
    <div style={{backgroundColor:'grey', height:'5vh', padding:'2rem', display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
        <button style={{backgroundColor:'blue',color: 'white'}} onClick={()=>setColor('blue')}>Blue</button>
        <button style={{backgroundColor:'red', color: 'white'}} onClick={()=>setColor('red')}>Red</button>
        <button style={{backgroundColor:'green', color: 'white'}} onClick={()=>setColor('green')}>Green</button>
        <button style={{backgroundColor:'white'}} onClick={()=>setColor('white')}>White</button>
        <button style={{backgroundColor:'black', color: 'white'}} onClick={()=>setColor('black')}>Black</button>
    </div>

    </div>
  )
}

export default Color