import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const View = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
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

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>📅 View Events</h1>
      <Link to="/add" style={{ marginBottom: "10px", display: "inline-block" }}>➕ Add New Event</Link>
      {events.length === 0 ? (
        <p>No events available. Add one!</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#f2f2f2" }}>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id}>
                <td>{event.title}</td>
                <td>{event.description}</td>
                <td>{event.date}</td>
                <td>
                  <Link to={`/edit/${event.id}`}>✏️ Edit</Link>{" "}
                  <button onClick={() => handleDelete(event.id)}>🗑️ Delete</button>
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
