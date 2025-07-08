import React, { useState } from 'react'
import Clock from './Clock';

function Dropdown() {
    const [color,setColor]=useState('green');
  return (
    <div>
        <h1 className='bg-green-400 p-4 rounded-3xl'>Digital Clock</h1> 
        <select onChange={(event)=> setColor(event.target.value)}>
            <option value={"red"}>Red</option>
            <option value={"blue"}>Blue</option>
            <option value={"green"}>Green</option>
            <option value={"orange"}>Orange</option>
        </select>
        <Clock color={color} />
    </div>
  )
}

export default Dropdown