import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function User_list() {
    const [users, setUsers] = useState();
    useEffect(()=>{
        axios.get ("http://localhost/myapp2/myapp2/api/userlist.php")
        .then(res => {setUsers (res.data)})
    }, []);

    console.log(users)
  return (
    <>
      <h1>Userlist</h1>
    </>
  )
}
