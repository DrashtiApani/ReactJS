import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_USER } from '../Redux/Action/AuthAction'; // Adjust path if needed

const LogInpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formInputs, setFormInputs] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInputs({
      ...formInputs,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(LOGIN_USER(formInputs));

    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      alert("Login successful!");
      navigate("/products");
    } else {
      alert("Invalid credentials!");
    }
  };

  // Auto-redirect if already logged in
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/products");
    }
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit} className="container mt-5" style={{ maxWidth: '400px' }}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formInputs.email}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formInputs.password}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <Link to="/register" className="btn btn-secondary ms-2">Register</Link>
      </form>
    </div>
  );
};

export default LogInpage;
