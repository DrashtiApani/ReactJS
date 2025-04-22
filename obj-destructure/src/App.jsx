import { useState } from 'react'

import './App.css'

function App() {
 
  let arr = [
    { id: 1, name: 'Abhay' , age: 20},
    { id: 2, name: 'Nirbhay', age: 25},
    { id: 3, name: 'Vedant' , age: 22},
    { id: 3, name: 'Tirth' , age: 19},
  ]

  return (
  <>
     <h1>Obj Destructure</h1>
    <table border="1" align='center'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {
          arr.map((item) => {
            let {id, name, age} = item
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
              </tr>
            )
          })

        }
      </tbody>
    </table>
     
  </>
  )
}

export default App
