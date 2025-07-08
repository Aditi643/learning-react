import React from 'react'

function Loop() {
    const userName=['ady','aditi','rishu'];
    const college=['iet','iit','niet'];

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
  return (
    <div>
        <h1>loops</h1>
        <table border="1">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
                 {
                     userData.map((user)=>(
                     <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                    </tr>))
                 }
            </tbody>
        </table>
    </div>
  )
}

export default Loop;