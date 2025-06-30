import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getDatabase, ref, set } from "firebase/database";
import { app } from '../firebase';

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    setFormInput({
      name: location.state.name,
      email: location.state.email
    });
  }, [location.state]);

  const changeInput = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value
    });
  }

  const db = getDatabase(app);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const singleRow = ref(db, `users/${location.state.id}`);
    set(singleRow, {
      name: formInput.name,
      email: formInput.email
    }).then(() => {
      alert("User Updated Successfully");
      navigate("/");
    }).catch((err) => {
      console.log(err);
      return false;
    });
  }

  return (
    <div align="center">
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>Name:</td>
            <td><input type="text" name='name' onChange={changeInput} value={formInput.name} /></td>
          </tr>
          <tr>
            <td>Email:</td>
            <td><input type="text" name='email' onChange={changeInput} value={formInput.email} /></td>
          </tr>
          <tr>
            <td></td>
            <td><input type="submit" value="Update" /></td>
          </tr>
        </table>
      </form>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Edit;
