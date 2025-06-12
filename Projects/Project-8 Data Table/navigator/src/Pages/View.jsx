import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const View = () => {
  const [events, setEvents] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filter, setFilter] = useState({
    title: '',
    date: ''
  });

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
    setFilterData(storedEvents);
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        const updatedEvents = events.filter(event => event.id !== id);
        localStorage.setItem('events', JSON.stringify(updatedEvents));
        setEvents(updatedEvents);
        Swal.fire('Deleted!', 'Your event has been deleted.', 'success');
      }
    });
  };

  const changeInput = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value
    });
  };

  useEffect(() => {
    let fil = [...events];

    // Filter by Event name
    if (filter.title !== "") {
      fil = fil.filter((val) =>
        val.title.toLowerCase().includes(filter.title.toLowerCase())
      );
    }

    // Filter by date 
    if (filter.date !== "") {
      fil = fil.filter((val) =>
        val.date.toLowerCase().includes(filter.date.toLowerCase())
      );
    }

    setFilterData(fil);
  }, [filter, events]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>📅 View Events</h1>
      <hr />
      <input
        type="text"
        onChange={changeInput}
        name='title'
        value={filter.title}
        placeholder='Enter Event name'
        style={{ padding: '8px', marginRight: '10px', marginBottom: '10px' }}
      />
      <input
        type="date"
        onChange={changeInput}
        name='date'
        value={filter.date}
        style={{ padding: '8px', marginBottom: '10px' }}
      />
      <hr />
      <Link to="/add" style={{
        marginBottom: "10px",
        display: "inline-block",
        backgroundColor: "#28a745",
        color: "white",
        padding: "8px 15px",
        borderRadius: "5px",
        textDecoration: "none"
      }}>
        ➕ Add New Event
      </Link>

      {events.length === 0 ? (
        <p>No events available. Add one!</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#f2f2f2" }}>
            <tr>
              <th>Event Name</th>
              <th>Description</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filterData.map(event => (
              <tr key={event.id}>
                <td>{event.title}</td>
                <td>{event.description}</td>
                <td>{event.date}</td>
                <td>
                  <Link to={`/edit/${event.id}`}>
                    <button style={{
                      marginRight: '10px',
                      backgroundColor: '#007bff',
                      color: 'white',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}>
                      ✏️ Edit
                    </button>
                  </Link>
                  <button onClick={() => handleDelete(event.id)} style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}>
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default View;
