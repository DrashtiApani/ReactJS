
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { REGISTER_USER } from '../Redux/Action/AuthAction';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formInputs, setFormInputs] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInputs({ ...formInputs, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(REGISTER_USER(formInputs));
        navigate('/login');
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="container mt-5" style={{ maxWidth: '400px' }}>
                <h2 className="mb-4">Register</h2>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" onChange={handleChange} value={formInputs.email} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name="password" onChange={handleChange} value={formInputs.password} className="form-control" />
                </div>
                <button type="submit" className="btn btn-success">Register</button>
            </form>
        </div>
    );
};

export default Register;

