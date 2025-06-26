import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ADD_USER } from '../redux/crudAction/CrudAction';


const Add = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formInput, setFormInput] = useState({
        name: '',
        email: ''
    })

   const changeInput = (e) => {
    const { name, value } = e.target;
    setFormInput({
        ...formInput,
        [name]: value
    });
};


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(ADD_USER(formInput));
        navigate('/view')
    }

  return (
    <div align="center">
        <h1>Add User</h1>
        <form onSubmit={handleSubmit} >
            <table>
                <tr>
                    <td>Name</td>
                    <td><input type="text" name='name' onChange={changeInput} value={formInput.name} /></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input type="email" name='email' onChange={changeInput} value={formInput.email} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" /></td>
                </tr>
            </table>
        </form>
        <Link to="/view">View User</Link>
    </div>
  )
}

export default Add