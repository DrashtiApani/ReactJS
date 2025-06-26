import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import{ MyCrudContext }from '../../Context/MyCrudContext';


const AddUser = () => {

    const navigate = useNavigate();
    const {addUser } = useContext(MyCrudContext);

    const [formInput,SetformInput] = useState({
        name:"",
        email:"",
        phone:""
    
    })    


    const changeInput = (e) => {
      const {name,value} = e.target;

      SetformInput({
        ...formInput,
        [name]:value
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      addUser(formInput);
      alert("User Added");
      navigate("/View");

    }


  return (
    <div align="center">
        <h1>Add User</h1>
        <form onSubmit={handleSubmit} >
           <table border={1} cellPadding={10}>
           
            <tr>
                <td>Name</td>
                <td> <input type="text" name='name' onChange={changeInput} value={formInput.name} /></td>
            </tr>

            <tr>
                <td>Email</td>
                <td> <input type="text" name='email' onChange={changeInput} value={formInput.email}/></td>
            </tr>

            <tr>
                <td>Phone</td>
                <td> <input type="text"  name='phone' onChange={changeInput} value={formInput.phone}/></td>
            </tr>

            <tr align="center">
                <td></td>
                <td> <input type="submit" /></td>
            </tr>
           </table>
           <Link to="/View">Back</Link>
        </form>

    </div>
  )
}

export default AddUser