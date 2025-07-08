import React, { useState } from 'react'

function Radio() {
    const[gender,setGender]=useState('male');
    const[city,setCity]=useState('delhi');
  return (
    <div>
        <h3>Learning Radio buttons and dropdown </h3>
        <h4>select gender</h4>
        <input onChange={(event)=>setGender(event.target.value)} type="radio" name="gender" value={"male"} checked= {gender=="male"} id="male" />
        <label htmlFor="male">Male</label>
        <input type="radio"  onChange={(event)=>setGender(event.target.value)} name="gender" value={"female"} checked={gender=="female"} id="female" />
        <label htmlFor="female">Female</label>
        <h2>selected Gender: {gender}</h2>
        <br/><br/>
        <h2>select city</h2>
        <select onChange={(event)=>setCity(event.target.value)} defaultValue={"delhi"}>
            <option value="noida">NOida</option>
            <option value="delhi">Delhi</option>
            <option value="lucknow">Lucknow</option>
        </select>
        <h2>Selected city: {city}</h2>
    </div>
  )
}

export default Radio