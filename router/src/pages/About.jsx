import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const About = () => {
    const location = useLocation(); //useLocation hooks hai aur ye ek component se dusre component se data pass karta hai
    console.log(location);

    const Navigate = useNavigate();
    
  return (
    <div>
        <h1>About Page</h1>
         <Link to="/">Home </Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/blog">Blog</Link>
    </div>
  )
}

export default About