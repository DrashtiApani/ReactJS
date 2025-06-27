import { getDatabase, onValue, ref, remove } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { app } from '../firebase';

const View = () => {

  const navigate = useNavigate();
  const [allUser, setAllUser] = useState("");

  const db = getDatabase(app);
  const getUser = () => {
    const record = ref(db, `users`)
    onValue(record, (row) => {
      const data = row.val();
      setAllUser(data);

    })

  }

  useEffect(() => {
    getUser();
  }, [])

  const deleteUser = (id) =>{
    const deleteUser = ref(db, `users/${id}`)  
  remove(deleteUser)
  .then(() => {
    alert("User Deleted Successfully")
  }).catch((error) => {
    console.log(error);
    return false
  });
  }

  const updateUser = (id,name,email) => {
    
    let data = {id,name,email}
    navigate("/edit", {state: data})

  }

  return (
    <div align="center" >

      <h1>View User</h1>

      <table border="1px solid black">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.entries(allUser).map(([key, value]) => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>
                    <button onClick={() => deleteUser(key)}>Delete</button>
                    <button onClick={() => updateUser(key,value.name,value.email)}>Update</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <br /><br />
      <hr />
      <br /><br />


      <Link to="/add">Add User</Link>
    </div>
  )
}

export default View