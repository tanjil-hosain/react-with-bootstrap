import React from 'react'

export default function Props() {

    const person = {
        name:"Tanjil Hossain", 
        age: 23,
        address: "Mirpur"
    }
  return (
    <>
      <h1>This is my props</h1>
      <p>
        Name: {person.name} <br />
        Age: {person.age} <br />
        Address: {person.address}
      </p>
    </>
  )
}
