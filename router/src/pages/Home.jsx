import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const data = {
        color: ["red", "blue", "green", "yellow"],
        name: {
            firstName: "John",
            lastName: "Doe",
            age: 30,
            address: {
                street: "123 Main St",
                city: "Anytown",
                state: "CA",
                zip: "12345"
            }
        }
    };

    const handleSubmit = () => {
        // Navigate to /about and pass `data` as state
        navigate('/about');
    };

    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/">Home</Link>
            <br />
            <Link to="/about" state={data}>About</Link> {/* static link */}
            <br />
            <Link to="/blog">Blog</Link>
            <br /><br />
            <button onClick={handleSubmit}>Click </button>
        </div>
    );
};

export default Home;
