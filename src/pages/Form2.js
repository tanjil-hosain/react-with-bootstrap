import axios from 'axios';
import React, { useState } from 'react'

export default function Form2() {
     const [inputs, setInputs] = useState({});
       function handlechange(e){
        const name = e.target.name;
        const value = e.target.value;
    
        setInputs(values => ({...values, [name]: value}))
       }
       
       function hnadleSubmit(e){
        e.preventDefault();
        
        axios.post("http://localhost/myapp2/myapp2/api/user_create.php", inputs)
        .then(res => {console.log("Data Sent",res.data)});

       }
       console.log(inputs)
      
     
    
      return (
        <>
          <h1>Form</h1>
          <form action="">
            Name: <br />
            <input type="text" name='fname' value={inputs.fname} onChange={handlechange} /> <br />
            Gender: <br />
            <input type="radio" name='gender' value="Male" checked={inputs.gender==="Male"} onChange={handlechange}/> Male
            <input type="radio" name='gender' value="Female" checked={inputs.gender==="Female"} onChange={handlechange}/>Female <br />
            Address: <br />
            
            <textarea name="address"  onChange={handlechange}>{inputs.address}</textarea> <br /> District
            <select name="district" onChange={handlechange}>
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Cumilla">Cumilla</option>
                <option value="Feni">Feni</option>

            </select>
            <button type="button" onClick={hnadleSubmit} >Submit</button>
          </form>
        </>
      )
    }
    
