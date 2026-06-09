import React, { useState } from 'react'


export default function Forms() {
  const [name, setName] = useState('');
  console.log(name);
   function chnage(e){
    setName(e.target.value)
   }
  return (
    <div>
      <h1>Form</h1>
      <form action="">
        Name:
        <input type="text" name={name} onChange={chnage} />

      </form>
    </div>
  )
}
