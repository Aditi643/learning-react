function Basics(){
    function fruit(){
    return "Apple"
  }
  const userObj={
    name:"Aditi",
    age:23,
    email:"xyz@gmail.com"
  }
  let name="Aditi"
  const userArray=[1,2,3,4]
  let path="https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBsaW9ufGVufDB8fDB8fHww"
  function op(a,b,op){
    let result=0;
    if(op=="+"){
      return a+b;
    }
    else if(op=="-"){
      return a-b;
    }
    else{
      return a*b;
    }
  }
  return(
    <div>
     <h1>curly braces understanding</h1>
     <h1>{name? name:"user not foound"}</h1>
      <h1>{fruit()}</h1>
      <h1>{op(5,3,"*")}</h1>
      <h1>{userObj.email}</h1>
      <h1>{userArray.at(3)}</h1>
      <input type='text' value={name}/>
      <img src={path} />
    </div>
  )
}
export default Basics