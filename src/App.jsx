import { useState } from 'react'
import './App.css'
import User from './User'
import College from './College'
import Input from './Input'
import Skills from './Skills'
import Radio from './Radio'
import Loop from './Loop'
import Reuse from './Reuse'
import Clock from './Clock'
import Dropdown from './Dropdown'
import Counter from './Counter'



function App(){
  let userName="Aditi";
  let userObject={
    name:"Aditi",
    age:"23",
    email:"xyz@gmail.com"
  }
  let userObject2={
    name:"Aditi",
    age:"23",
    email:"xyz@gmail.com"
  }
  let userObject3={
    name:"Aditi",
    age:"23",
    email:"xyz@gmail.com"
  }

  let collegeNames=['IET','GCET','DU','NIT','IIT']
  const [color,setColor]=useState('green');
  return(
    <div>
  
     <Dropdown />
     <Counter />
    </div>

  )
}
export default App
