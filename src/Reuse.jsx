import React from "react"
import ReuseComp from "./ReuseComp"
function Reuse(){
    const userData=[
        {
            name:'aditi',
            age:23,
            email:'xyz@gmail.com',
            id:1
        },
        {
            name:'ady',
            age:13,
            email:'asz@gmail.com',
            id:2
        },
        {
            name:'adi',
            age:23,
            email:'ab@gmail.com',
            id:3
        }
    ]
return(
    <div>
<h1 style={{color:"brown"}}>Reuse components in loop</h1>
{
    userData.map((user)=>(
        <div key={user.id}>
            <ReuseComp user1={user} />
        </div>
    ))

}

    </div>
)
}
 export default Reuse