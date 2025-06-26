import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_USER } from '../redux/action/crudAction';
import { Link } from 'react-router-dom';

const View = () => {
  const users = useSelector(state => state.crud.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to remove this client?")) {
      dispatch(DELETE_USER(id));
      alert("Client removed");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Client Records</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Age</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.length > 0 ? users.map((val, index) => (
                <tr key={val.id} style={index % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                  <td style={styles.td}>{val.id}</td>
                  <td style={styles.td}>{val.name}</td>
                  <td style={styles.td}>{val.age}</td>

                  <td style={styles.td}>
                    <Link to={`/edit/${val.id}`} style={{
                      backgroundColor: '#d4af37',
                      color: '#1a1a2e',
                      padding: '8px 14px',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontWeight: '300',
                      textDecoration: 'none',
                      marginRight: '10px'
                    }}>Edit</Link>
                    <button onClick={() => handleDelete(val.id)} style={styles.deleteBtn}>
                      Remove
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="4" style={styles.td}>No clients available</td>
                </tr>
              )
            }
          </tbody>
        </table>
        <Link to="/" style={styles.link}>← Back to Add</Link>

      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    padding: '40px 20px',
    fontFamily: `'Georgia', serif`,
  },
  container: {
    background: '#ffffff',
    maxWidth: '900px',
    margin: 'auto',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0,0,0,0.05)',
    border: '1px solid #e0e0e0',
  },
  heading: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
    color: '#1a1a2e',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#1a1a2e',
    color: 'white',
    padding: '14px',
    fontWeight: '500',
  },
  td: {
    padding: '12px',
    textAlign: 'center',
    color: '#333',
    fontSize: '15px',
  },
  rowEven: {
    backgroundColor: '#f9f9f9',
  },
  rowOdd: {
    backgroundColor: '#ffffff',
  },
  deleteBtn: {
    backgroundColor: '#d4af37',
    color: '#1a1a2e',
    padding: '8px 14px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: '500',
  },
  link: {
    display: 'block',
    marginTop: '20px',
    textAlign: 'center',
    textDecoration: 'underline',
    color: '#1a1a2e',
    fontWeight: '500',
  }
};

export default View;
