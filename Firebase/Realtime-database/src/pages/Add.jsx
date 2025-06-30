
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getDatabase,  ref,  set } from "firebase/database";
import { app } from '../firebase';

const Add = () => {

  const [formInput, setFormInput] = useState({
    name: '',
    email: ''
  })

  const navigate = useNavigate();

  const changeInput = (e) => { 
    const { name, value } = e.target
    setFormInput({
      ...formInput,
      [name]: value
    })
  }

  const db = getDatabase(app);

  const handleSubmit = (e) => {
    e.preventDefault()
    const obj = {
      userid: Math.floor(Math.random() * 1000),
      ...formInput
    }
    console.log(obj);

    set(ref(db, `users/${obj.userid}`), {
      name : formInput.name,
      email : formInput.email
    }).then((res)=>
    {
      alert("User Added Successfully")
      navigate("/")
    }).catch((err)=>{
      console.log(err);

      return false;
     
    })

  }

  return (
    <div align="center">

      <h1>Add User</h1>

      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>Name :~</td>
            <td><input type="text" name='name' onChange={changeInput} value={formInput.name} /></td>
          </tr>
          <tr>
            <td>Email</td>
            <td><input type="text" name='email' onChange={changeInput} value={formInput.email} /></td>
          </tr>
          <tr align="center">
            <td></td>
            <td><input type="submit" /></td>
          </tr>
        </table>
      </form>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Add