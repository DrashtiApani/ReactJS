import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Add = () => {

    const[formInput, setFormInput] = useState({
        name:"",
        phone:""
    })

    const changeInput = (e) => {
        const [name, value] = e.target
        setFormInput({
            ...formInput,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Submitted")
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
                    <td>phone</td>
                    <td><input type="text" name='phone' onChange={changeInput} value={formInput.phone} /></td>
                </tr>
                <br />
                <tr align="center">
                    <td></td>
                    <td><input type="submit" /></td>
                </tr>

            </table>
            <br />
        </form>
        <Link to="/">View User</Link>
    </div>
  )
}

export default Add