import { useEffect, useState } from "react"
import Dropdown from "./Dropdown";

function Clock({color}){
    const [time,setTime]=useState(0);

    useEffect(()=>{
        setInterval(()=> {
            setTime(new Date().toLocaleTimeString());
        },1000);
    },[])
    return(
        <div>
            <h3
            style={{color:color,backgroundColor:'black', width:"120px"}}
            >{time}</h3>
        </div>
    )
}
export default Clock