import { useState } from "react";

function App() {
  const [formInput, setFormInput] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    usergender: "",
    usercourse: [],
  });

  const [users, setUsers] = useState([]); // list of all users
  const [editIndex, setEditIndex] = useState(null); // index of user being edited

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormInput((i) => ({
        ...i,
        [name]: checked
          ? [...i[name], value]
          : i[name].filter((item) => item !== value),
      }));
    } else {
      setFormInput((i) => ({ ...i, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const up = [...users];
      up[editIndex] = formInput;
      setUsers(up);
      setEditIndex(null);
    } else {
      setUsers([...users, formInput]);
    }

    setFormInput({
      username: "",
      useremail: "",
      userpassword: "",
      usergender: "",
      usercourse: [],
    });
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const handleEdit = (index) => {
    const userToEdit = users[index];
    setFormInput(userToEdit);
    setEditIndex(index);
  };

  return (
    <div className="app">
      <div className="form-card">
        <h2 className="title">{editIndex !== null ? "Edit User" : "Registration Form"}</h2>
        <form onSubmit={handleSubmit} className="form">
          {/* Name */}
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="username"
              value={formInput.username}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="useremail"
              value={formInput.useremail}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="userpassword"
              value={formInput.userpassword}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Gender */}
          <div className="form-group">
            <label>Gender</label>
            <div className="options">
              <label>
                <input
                  type="radio"
                  name="usergender"
                  value="male"
                  checked={formInput.usergender === "male"}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="usergender"
                  value="female"
                  checked={formInput.usergender === "female"}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
          </div>

          {/* Courses */}
          <div className="form-group">
            <label>Courses</label>
            <div className="options">
              {["react", "C++", "angular"].map((course) => (
                <label key={course}>
                  <input
                    type="checkbox"
                    name="usercourse"
                    value={course}
                    checked={formInput.usercourse.includes(course)}
                    onChange={handleChange}
                  />
                  {course}
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="submit-btn">
            {editIndex !== null ? "Update" : "Submit"}
          </button>
        </form>
      </div>

      {/* USER LIST */}
      {users.length > 0 && (
        <div className="form-card" style={{ marginTop: "20px" }}>
          <h3 className="title">Registered Users</h3>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Courses</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.useremail}</td>
                  <td>{user.usergender}</td>
                  <td>{user.usercourse.join(", ")}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)} style={{ marginLeft: "10px" }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* CSS */}
      <style jsx>{`
        .app {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(to right, #ece9e6, #ffffff);
          padding: 20px;
        }

        .form-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 600px;
        }

        .title {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #333;
          font-size: 1.5rem;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: #444;
        }

        .form-group input[type="text"],
        .form-group input[type="email"],
        .form-group input[type="password"] {
          padding: 0.6rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
        }

        .form-group input:focus {
          border-color: #4a90e2;
          outline: none;
        }

        .options {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        table,
        th,
        td {
          border: 1px solid #ccc;
          padding: 8px;
          text-align: center;
        }

        .submit-btn {
          padding: 0.7rem 1.2rem;
          background-color: #4a90e2;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
        }

        .submit-btn:hover {
          background-color: #357ab8;
        }
      `}</style>
    </div>
  );
}

export default App;
