

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getDatabase, ref, set } from "firebase/database";
import { app } from '../firebase';

const Add = () => {

  const [formInput, setFormInput] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })

  const navigate = useNavigate();

  const changeInput = (e) => {
    const { name, value } = e.target
    setFormInput({
      ...formInput,
      [name]: value
    })
  }

  const db = getDatabase(app);

  const handleSubmit = (e) => {
    e.preventDefault()
    const obj = {
      userid: Math.floor(Math.random() * 1000),
      ...formInput
    }
    console.log(obj);

    set(ref(db, `users/${obj.userid}`), {
      name: formInput.name,
      email: formInput.email,
      company: formInput.company,
      phone: formInput.phone,
      message: formInput.message
    }).then((res) => {
      alert("User Added Successfully")
      navigate("/")
    }).catch((err) => {
      console.log(err);

      return false;

    })

  }

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      backgroundColor: '#f7f7f7',
      minHeight: '100vh'
    },
    title: {
      color: '#b71c1c',
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '20px'
    },
    card: {
      display: 'flex',
      backgroundColor: 'white',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      borderRadius: '5px',
      overflow: 'hidden',
      maxWidth: '900px',
      margin: '0 auto'
    },
    left: {
      width: '35%',
      backgroundColor: '#d32f2f',
      color: 'white',
      padding: '30px',
      fontWeight: 'bold'
    },
    right: {
      width: '65%',
      padding: '30px'
    },
    formGroup: {
      display: 'flex',
      gap: '15px',
      marginBottom: '15px'
    },
    input: {
      flex: 1,
      padding: '10px',
      border: '1px solid #d32f2f',
      borderRadius: '3px'
    },
    textarea: {
      width: '100%',
      height: '100px',
      padding: '10px',
      border: '1px solid #d32f2f',
      borderRadius: '3px',
      resize: 'none',
      marginBottom: '15px'
    },
    button: {
      width: '100%',
      backgroundColor: '#d32f2f',
      color: 'white',
      padding: '12px',
      border: 'none',
      borderRadius: '3px',
      fontWeight: 'bold',
      cursor: 'pointer'
    }
  };


  return (
    <div style={styles.container}>
      <div style={styles.title}>Title</div>

      <div style={styles.card}>
        {/* Left Panel */}
        <div style={styles.left}>
          <div style={{ fontSize: '18px', marginBottom: '15px' }}>Sample Company</div>
          <div>Address</div>
          <div>Phone Number</div>
          <div>Email</div>
        </div>

        {/* Right Panel */}
        <div style={styles.right}>
          <h2 style={{ marginBottom: '20px' }}>Email Us</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formInput.name}
                onChange={changeInput}
                style={styles.input}
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formInput.company}
                onChange={changeInput}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formInput.email}
                onChange={changeInput}
                style={styles.input}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formInput.phone}
                onChange={changeInput}
                style={styles.input}
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formInput.message}
              onChange={changeInput}
              style={styles.textarea}
            />
            <button type="submit" style={styles.button}>SUBMIT</button>
          </form>
        </div>
      </div>
      <br />
      <br />
   <div align="center">
       <Link to="/" >Go Home</Link>
   </div>
    </div>
  );
}

export default Add