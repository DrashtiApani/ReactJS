import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
         <div className="container">
                <div className="row">
                    <div className="auth col-md-6 offset-md-3 mt-5">
                        <h1 className="text-center">Register Page</h1>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                            <br />
                            <br />
                               <Link to="/">Login</Link>

                        </form>
                    </div>
                 
                </div>
            </div>
    </div>
  )
}

export default Register