import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ADD_USER } from '../redux/action/crudAction';
import { useDispatch } from 'react-redux';

const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [forminput, setFormInput] = useState({ name: '', age: '' });

  const changeInput = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...forminput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      id: Math.floor(Math.random() * 1000000),
      ...forminput,
    };
    dispatch(ADD_USER(obj));
    alert("✅ User added successfully");
    navigate('/view');
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Add New Client</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={forminput.name}
            onChange={changeInput}
            style={styles.input}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={forminput.age}
            onChange={changeInput}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Submit</button>
        </form>
        <Link to="/view" style={styles.link}>View Clients</Link>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: `'Georgia', serif`,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 0 30px rgba(0,0,0,0.1)',
    width: '400px',
    textAlign: 'center',
    border: '1px solid #e0e0e0',
  },
  heading: {
    fontSize: '24px',
    color: '#1a1a2e',
    marginBottom: '25px',
    fontWeight: '600',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  input: {
    padding: '12px 16px',
    fontSize: '15px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    outline: 'none',
    backgroundColor: '#fafafa',
  },
  button: {
    padding: '12px',
    backgroundColor: '#d4af37',
    color: '#1a1a2e',
    fontWeight: '600',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  link: {
    marginTop: '20px',
    display: 'inline-block',
    color: '#1a1a2e',
    textDecoration: 'underline',
    fontWeight: '500',
  }
};

export default Add;
