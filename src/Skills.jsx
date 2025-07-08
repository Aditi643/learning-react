import React, { useState } from 'react'

function Skills() {
    const[skills,setSkills]=useState([]);
    const handleSkills=(event)=>{
      console.log(event.target.value,event.target.checked);
      if(event.target.checked){
        setSkills([...skills,event.target.value])  //old values and then new values spread operator
      }else{
        setSkills([...skills.filter((item)=>item!=event.target.value)])  // jo current select kiya hai wo match nhi honi chahiye baaki diplay kr do
      }
    }
  return (
    <div>
        <h1>learning checkboxes</h1>
        <h2>select your skills</h2>
        <input onChange={handleSkills} type='checkbox' id='php' value="php"/>
        <label htmlFor='php'>PHP</label>
        <br></br>
         <input onChange={handleSkills} type='checkbox' id='java' value="java"/>
        <label htmlFor='java'>Java</label>
        <br></br>
         <input onChange={handleSkills} type='checkbox' id='css' value="css"/>
        <label htmlFor='css'>CSS</label>
        <br></br>
         <input onChange={handleSkills} type='checkbox' id='js' value="js"/>
        <label htmlFor='js'>JS</label>
       
       <h1>{skills.toString()}</h1>
    </div>
  )
}

export default Skills