import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GET_USERS } from '../redux/crudAction/CrudAction';


const View = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.crud.users);

    useEffect(() => {
        dispatch(GET_USERS());
    }, [dispatch]);

    useEffect(() => {
        console.log(users);
    }, [users]);

    return (
        <div align="center">
            <h1>View User</h1>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.length > 0 ? (
                        users.map((val, index) => (
                            <tr key={index}>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No users found.</td>
                        </tr>
                    )}
                </tbody>

            </table>
            <br />
            <Link to="/">Add User</Link>
        </div>
    )
}

export default View
