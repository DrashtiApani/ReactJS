import React from 'react'
import { Link } from 'react-router-dom'


const Blog = () => {
    return (
        <div>
            <h1>Blog Page</h1>
            <Link to="/">Home </Link>
            <br />
            <Link to="/about">About</Link>
            <br />
            <Link to="/blog">Blog</Link>
        </div>
    )
}

export default Blog