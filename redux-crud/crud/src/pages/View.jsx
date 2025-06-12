import React from 'react'
import { useSelector } from 'react-redux'

const View = () => {

  const users = useSelector(state => state.crud.users);
  
  

  return (
    <div align="center">
        <h1>View User</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                  users.map((val)=>{
                    return (
                      <tr>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.age}</td>

                      </tr>
                    )
                  })
                }
            </tbody>
        </table>
    </div>
  )
}

export default View