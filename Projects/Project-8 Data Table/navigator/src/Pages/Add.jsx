import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Add = () => {
  const [event, setEvent] = useState({ title: '', description: '', date: '', time: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(),
      ...event,
    };
    const existingEvents = JSON.parse(localStorage.getItem('events')) || [];
    localStorage.setItem('events', JSON.stringify([...existingEvents, newEvent]));

    Swal.fire('Success!', 'Event added successfully', 'success');
    navigate('/view');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        padding: "20px"
      }}>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          width: "100%",
          maxWidth: "500px"
        }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>📅 Event Planner</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Event Title</label>
            <input
              type="text"
              name="title"
              value={event.title}
              onChange={handleChange}
              required
              placeholder="e.g. Birthday Party , Garba , Concert "
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "14px"
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Description</label>
            <textarea
              name="description"
              value={event.description}
              onChange={handleChange}
              required
              placeholder="e.g. Cake, Games, Decorations , Music "
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "14px",
                resize: "vertical"
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Date</label>
            <input
              type="date"
              name="date"
              value={event.date}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "14px"
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Time</label>
            <input
              type="time"
              name="time"
              value={event.time}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "14px"
              }}
            />
          </div>

          <button type="submit" style={{
            backgroundColor: "#4CAF50",
            color: "#fff",
            padding: "12px 20px",
            width: "100%",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background 0.3s"
          }}>
            ➕ Add Event
          </button>
        </form>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Link to="/view" style={{ color: "#333", textDecoration: "none", fontWeight: "bold" }}>
            🔙 Back to Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Add;
