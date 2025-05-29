import React, { useState } from 'react';
import Swal from 'sweetalert2';

function App() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    eventName: '',
    date: '',
    time: '',
    location: '',
    isOnline: false
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleAddOrUpdate = () => {
    if (!form.eventName || !form.date || !form.time || !form.location) {
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete Details',
        text: 'Please fill out all fields before adding the event.',
        confirmButtonColor: '#007bff'
      });
      return;
    }

    if (isEditing) {
      const updatedEvents = [...events];
      updatedEvents[editIndex] = { ...form, status: events[editIndex].status };
      setEvents(updatedEvents);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setEvents([...events, { ...form, status: true }]);
    }

    setForm({ eventName: '', date: '', time: '', location: '', isOnline: false });

    Swal.fire({
      icon: 'success',
      title: isEditing ? 'Event Updated' : 'Event Added',
      showConfirmButton: false,
      timer: 1500
    });
  };

  const handleEdit = (index) => {
    const event = events[index];
    setForm({
      eventName: event.eventName,
      date: event.date,
      time: event.time,
      location: event.location,
      isOnline: event.isOnline,
    });
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  const toggleStatus = (index) => {
    const updatedEvents = [...events];
    updatedEvents[index].status = !updatedEvents[index].status;
    setEvents(updatedEvents);
  };

  const formatTime = (timeStr) => {
    const [hour, minute] = timeStr.split(':').map(Number);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minute.toString().padStart(2, '0')} ${ampm}`;
  };

  const styles = {
    container: {
      maxWidth: 600,
      margin: '50px auto',
      padding: 24,
      borderRadius: 12,
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      fontFamily: 'Segoe UI, sans-serif'
    },
    header: {
      textAlign: 'center',
      marginBottom: 20,
      color: '#333'
    },
    input: {
      width: '100%',
      padding: 10,
      marginBottom: 12,
      borderRadius: 6,
      border: '1px solid #ccc',
      fontSize: 16
    },
    checkbox: {
      marginBottom: 16
    },
    button: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px 18px',
      fontSize: 16,
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      marginRight: 10
    },
    eventCard: (status) => ({
      marginBottom: 12,
      padding: 14,
      backgroundColor: status ? '#f1f5ff' : '#f9f9f9',
      borderRadius: 8,
      borderLeft: `5px solid ${status ? '#007bff' : '#ccc'}`,
      textDecoration: status ? 'none' : 'line-through',
      color: status ? '#000' : '#888',
      position: 'relative'
    }),
    actionButton: {
      padding: '6px 10px',
      fontSize: 14,
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      marginLeft: 6
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>🎉 Event Manager</h2>

      <input
        type="text"
        name="eventName"
        value={form.eventName}
        onChange={handleChange}
        placeholder="Event Name"
        style={styles.input}
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        style={styles.input}
      />
      <input
        type="time"
        name="time"
        value={form.time}
        onChange={handleChange}
        style={styles.input}
      />
      <input
        type="text"
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="Location"
        style={styles.input}
      />
      <div style={styles.checkbox}>
        <label>
          <input
            type="checkbox"
            name="isOnline"
            checked={form.isOnline}
            onChange={handleChange}
            style={{ marginRight: 6 }}
          />
          Is Online
        </label>
      </div>

      <button
        onClick={handleAddOrUpdate}
        style={{
          ...styles.button,
          backgroundColor: isEditing ? '#28a745' : '#007bff'
        }}
      >
        {isEditing ? 'Update Event' : 'Add Event'}
      </button>

      <div style={{ marginTop: 30 }}>
        {events.length === 0 ? (
          <p style={{ color: '#888', textAlign: 'center' }}>No events yet. Add one!</p>
        ) : (
          events.map((event, index) => (
            <div key={index} style={styles.eventCard(event.status)}>
              <div>
                <strong>{event.eventName}</strong> - {event.date} at {formatTime(event.time)}
              </div>
              <div>
                📍 {event.location} | {event.isOnline ? 'Online' : 'In-person'}
              </div>
              <div style={{ marginTop: 10 }}>
                <button
                  onClick={() => toggleStatus(index)}
                  style={{
                    ...styles.actionButton,
                    backgroundColor: event.status ? '#ffc107' : '#17a2b8',
                    color: 'white'
                  }}
                >
                  {event.status ? 'Deactivate' : 'Activate'}
                </button>
                <button
                  onClick={() => handleEdit(index)}
                  style={{ ...styles.actionButton, backgroundColor: '#6c757d', color: 'white' }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  style={{ ...styles.actionButton, backgroundColor: '#dc3545', color: 'white' }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;



/////   method  by us
// import React, { useState } from 'react';

// function App() {
//   const [events, setEvents] = useState([]);
//   const [form, setForm] = useState({
//     eventName: '',
//     date: '',
//     location: '',
//     isOnline: false
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm({
//       ...form,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleAddOrUpdate = () => {
//     if (!form.eventName || !form.date || !form.location) return;

//     if (isEditing) {
//       const updatedEvents = [...events];
//       updatedEvents[editIndex] = { ...form, status: events[editIndex].status };
//       setEvents(updatedEvents);
//       setIsEditing(false);
//       setEditIndex(null);
//     } else {
//       setEvents([...events, { ...form, status: true }]);
//     }

//     setForm({ eventName: '', date: '', location: '', isOnline: false });
//   };

//   const handleEdit = (index) => {
//     const event = events[index];
//     setForm({
//       eventName: event.eventName,
//       date: event.date,
//       location: event.location,
//       isOnline: event.isOnline,
//     });
//     setIsEditing(true);
//     setEditIndex(index);
//   };

//   const handleDelete = (index) => {
//     const updatedEvents = events.filter((_, i) => i !== index);
//     setEvents(updatedEvents);
//   };

//   const toggleStatus = (index) => {
//     const updatedEvents = [...events];
//     updatedEvents[index].status = !updatedEvents[index].status;
//     setEvents(updatedEvents);
//   };

//   return (
//     <div style={{ maxWidth: 500, margin: '50px auto', padding: 20, border: '1px solid #ccc', borderRadius: 10 }}>
//       <h2>🎉 Event Manager </h2>

//       <div style={{ marginBottom: 15 }}>
//         <input
//           type="text"
//           name="eventName"
//           value={form.eventName}
//           onChange={handleChange}
//           placeholder="Event Name"
//           style={{ width: '100%', padding: 8, marginBottom: 8 }}
//         />
//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//           style={{ width: '100%', padding: 8, marginBottom: 8 }}
//         />
//         <input
//           type="text"
//           name="location"
//           value={form.location}
//           onChange={handleChange}
//           placeholder="Location"
//           style={{ width: '100%', padding: 8, marginBottom: 8 }}
//         />
//         <label>
//           <input
//             type="checkbox"
//             name="isOnline"
//             checked={form.isOnline}
//             onChange={handleChange}
//           /> Is Online
//         </label>
//       </div>

//       <button onClick={handleAddOrUpdate} style={{ padding: '8px 16px', marginBottom: 20 }}>
//         {isEditing ? 'Update Event' : 'Add Event'}
//       </button>

//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         {events.map((event, index) => (
//           <li key={index} style={{
//             marginBottom: 10,
//             padding: 10,
//             backgroundColor: '#f9f9f9',
//             borderRadius: 5,
//             color: event.status ? '#000' : '#aaa',
//             textDecoration: event.status ? 'none' : 'line-through'
//           }}>
//             <div><strong>{event.eventName}</strong> - {event.date}</div>
//             <div>📍 {event.location} | {event.isOnline ? 'Online' : 'In-person'}</div>
//             <div style={{ float: 'right', marginTop: 5 }}>
//               <button onClick={() => toggleStatus(index)} style={{ marginRight: 8 }}>
//                 {event.status ? 'Deactivate' : 'Activate'}
//               </button>
//               <button onClick={() => handleEdit(index)} style={{ marginRight: 8 }}>Edit</button>
//               <button onClick={() => handleDelete(index)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
