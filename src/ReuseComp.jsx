
 const ReuseComp=({user1})=>{
    return(
        <div style={{
            border: "1px solid green",
            padding: "10px",
            margin:"10px",
            width:"400px",
            borderRadius:"10px"
        }}>
            <h3>Name:<span style={{color:'green'}}> {user1.name} </span> </h3>
            <h3>age:<span style={{color:'green'}}> {user1.age} </span> </h3>
            <h3>Email:<span style={{color:'green'}}> {user1.email} </span> </h3>
            
        </div>
    )
}
export default ReuseComp;