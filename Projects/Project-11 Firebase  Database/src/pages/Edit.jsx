import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getDatabase, ref, set } from "firebase/database";
import { app } from '../firebase';

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    setFormInput({
      name: location.state.name,
      email: location.state.email,
      company: location.state.company,
      phone: location.state.phone,
      message: location.state.message
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
      email: formInput.email,
      company: formInput.company,
      phone: formInput.phone,
      message: formInput.message
    }).then(() => {
      alert("User Updated Successfully");
      navigate("/");
    }).catch((err) => {
      console.log(err);
      return false;
    });

    
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
      backgroundColor: 'white',
      padding: '30px',
      maxWidth: '700px',
      margin: '0 auto',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      borderRadius: '5px'
    },
    inputRow: {
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
      <div style={styles.title}>Edit User</div>

      <div style={styles.card}>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputRow}>
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
          <div style={styles.inputRow}>
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
          <button type="submit" style={styles.button}>UPDATE</button>
        </form>
      </div>

      <br />
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default Edit;