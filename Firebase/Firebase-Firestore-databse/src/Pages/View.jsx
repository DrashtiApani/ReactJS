import React from 'react'
import { Link } from 'react-router-dom'

const View = () => {
  return (
    <div>
        <h1>View User</h1>

        <hr />
        <hr />
        <Link to="/add">Add User</Link>
    </div>
  )
}

export default View