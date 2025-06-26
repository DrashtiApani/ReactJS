import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_USER } from '../redux/action/crudAction';

const Edit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector(state => state.crud.users);
  const selectedUser = users.find(user => user.id === parseInt(id));

  const [formInput, setFormInput] = useState({ name: '', age: '' });

  useEffect(() => {
    if (selectedUser) {
      setFormInput({
        name: selectedUser.name,
        age: selectedUser.age
      });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updated = {
      id: parseInt(id),
      ...formInput
    };
    dispatch(UPDATE_USER(updated));
    alert('✅ Client updated successfully');
    navigate('/view');
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Edit Client</h2>
        <form onSubmit={handleUpdate} style={styles.form}>
          <input
            type="text"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            style={styles.input}
            placeholder="Full Name"
            required
          />
          <input
            type="number"
            name="age"
            value={formInput.age}
            onChange={handleChange}
            style={styles.input}
            placeholder="Age"
            required
          />
          <button type="submit" style={styles.actionBtn}>Update</button>
        </form>
        <Link to="/view" style={styles.link}>← Back to List</Link>
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
  actionBtn: {
    backgroundColor: '#d4af37',
    color: '#1a1a2e',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
  },
  link: {
    marginTop: '20px',
    display: 'inline-block',
    color: '#1a1a2e',
    textDecoration: 'underline',
    fontWeight: '500',
  }
};

export default Edit;
