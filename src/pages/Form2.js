import React, { useState } from 'react'

export default function Form2() {
     const [inputs, setInputs] = useState({});
       function handlechange(e){
        const name = e.target.name;
        const value = e.target.value;
    
        setInputs(values => ({...values, [name]: value}))
       }
       console.log(inputs)
    
      return (
        <>
          <h1>Form</h1>
          <form action="">
            Name: <br />
            <input type="text" name='fname' value={inputs.fname} onChange={handlechange} /> <br />
            Address: <br />
            <textarea name="address"  onChange={handlechange}>{inputs.address}</textarea> <br /> District
            <select name="district" onChange={handlechange}>
                <option value="Dhaka">Dhaka</option>
                <option value="hittagong">Chittagong</option>
                <option value="Cumilla">Cumilla</option>
                <option value="Feni">Feni</option>

            </select>
          </form>
        </>
      )
    }
    
