import { useState } from "react";

function Counter(){
    const [count,setCount]=useState(10)
     const subValue=() => {
                setCount(count-1)
                // console.log("clicked",count)
            }
    return(
        <div>
           
            <h1>state in react</h1>
            <h1>Counter:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Update counter</button>
            {
                count==0?<h1>Condition 0</h1>
                :count==1?<h1>Condition 1</h1>
                :count==2?<h1>Condition 2</h1>
                :<h1>Other</h1>
            }
            <button onClick={subValue}>Reduce counter </button>
            

        </div>
    )
}
export default Counter;

// function Toggle(){
//     const[display,setDisplay]=useState(true)
//     return(
//         <>
//         <h1>Toggle in React</h1>
//         <button onClick={()=> setDisplay(!display)}>Toggle</button>
//         {
//             display?<h1>Aditi</h1>: null
//         }
//         </>
//     )

// }
// export default Toggle