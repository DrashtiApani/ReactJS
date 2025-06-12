import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ADD_USER } from '../redux/action/crudAction'
import { useDispatch } from 'react-redux'

const Add = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [forminput,setFormInput] = useState({
        name : '',
        age : ''
    })

    const changeInput = (e) => {
        const {name,value} = e.target
        setFormInput({
            ...forminput,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id : Math.floor(Math.random()*1000000),
            ...forminput
        }
        dispatch(ADD_USER(obj))
        alert("record added");
        navigate('/view')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <table align="center">
                <tr>
                    <td>Name :- </td>
                    <input type="text" name='name' onChange={changeInput} value={forminput.name}/>
                </tr>
                <tr>
                    <td>Age :- </td>
                    <input type="text" name='age' onChange={changeInput} value={forminput.age}/>
                </tr>
                <tr>
                    <td></td>
                    <input type="submit"/>
                </tr>
            </table>
        </form>
        <hr />
        <Link to={`/view`}>View</Link>
    </div>
  )
}

export default Add