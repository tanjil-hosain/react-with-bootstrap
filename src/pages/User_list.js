import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function User_list() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get ("http://localhost/myapp2/myapp2/api/userlist.php")
        .then(res => {setUsers (res.data)})
    }, []);

    console.log(users)
  return (
    <>
      <h1>Userlist</h1>
     <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map(user => (
          <li key={user.id} className="bg-white shadow p-4 rounded-xl">
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.gender}</p>
            <p className="text-sm text-gray-600">{user.address}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
