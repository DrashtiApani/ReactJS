
import {  useRef } from 'react';
import './App.css'

function App() {
  
  const name  = useRef("")
  const email = useRef("")
  const phone = useRef("")
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value);
    console.log(email.current.value);
    console.log(phone);

  }

  return (
    <>
      <h1 >Form Uncontrol Components</h1>
      <form onSubmit={handleSubmit}>
        <table border={1} align='center'>
          <tbody>
            <tr>
              <td>Name</td>
              <td><input type="text" ref={name} /></td>
            </tr>
            <tr>
              <td>Email</td>
              <td><input type="email" ref ={email} /></td>
            </tr>
            <tr>
              <td>Phone</td>
              <td><input type="number" ref = {phone} /></td>
            </tr>
            <tr>
              <td></td>
              <td><input type="submit" /></td>
            </tr>
            
          </tbody>
        </table>
      </form>

    </>
  )
}

export default App
