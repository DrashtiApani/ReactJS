
import { useState } from 'react'
import './App.css'

function App() {

  const [input,setInput] = useState({
    name : '',
    email : ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input);
    
  }

  const handleChange = (e) => {

    const {name , value} = e.target
    setInput({
      ...input,
      [name] : value
    })
    
    
  }

  return (
    <div align="center">
      <h1>Form</h1>
      <br />
      <br />
      <form onSubmit={handleSubmit} >
        Name :~ <input type="text" onChange={handleChange} name='username' placeholder='Enter your name' />
        <br />
        <br />
        Email :~ <input type="email" onChange={handleChange} name='useremail' placeholder='Enter your email' />
        <br />
        <br />
        <input type="submit" value="Submit" style={{ padding: "10px", width: "100px" }} />
      </form>
     
     

    </div>
  )
}

export default App
