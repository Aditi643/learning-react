import React, { useState } from 'react'

function Input() {
    const[name,setName]=useState("")
    const[mail,setMail]=useState("")
  return (
    <div>
        <h2>input field</h2>
        <form>
       name <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder='Enter name'></input>
       <br></br>
       <h2>{name}</h2>
       email <input type='email' value={mail} onChange={(event)=>setMail(event.target.value)} placeholder='enter email'></input>
       <h2>{mail}</h2>
       <button >Submit</button>

       <button onClick={()=>{setMail(''),setName('')}}>Clear</button>
       </form>
    </div>
  )
}

export default Input