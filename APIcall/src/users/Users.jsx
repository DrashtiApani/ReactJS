import React from 'react';

const Users = ({ usersData }) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 align="center" style={{ color: "#2c3e50", margin: "40px 0" }}>~: Users :~</h1>

                    <table className="users-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Birthdate</th>
                                <th>Blood Group</th>
                                <th>Phone</th>
                                <th>Password</th>
                                <th>Hair</th>
                                <th>Role</th>
                                <th>Address</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                usersData.map((val, index) => (
                                    <tr key={index}>
                                        <td>{val.id}</td>
                                        <td>{val.lastName}</td>
                                        <td>{val.age}</td>
                                        <td>{val.email}</td>
                                        <td>{val.birthDate}</td>
                                        <td>{val.bloodGroup}</td>
                                        <td>{val.phone}</td>
                                        <td>{val.password}</td>
                                        <td>
                                            <table className="nested-table">
                                                <tbody>
                                                    <tr>
                                                        <td>Color: {val.hair.color}</td>
                                                        <td>Type: {val.hair.type}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td>{val.role}</td>
                                        <td>
                                            <table className="nested-table">
                                                <tbody>
                                                    <tr>
                                                        <td>Street: {val.address.address}</td>
                                                        <td>City: {val.address.city}</td>
                                                        <td>State: {val.address.state}</td>
                                                        <td>Code: {val.address.stateCode}</td>
                                                        <td>Country: {val.address.country}</td>
                                                        <td>Postal: {val.address.postalCode}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* CSS Styling */}
            <style>
                {`
                .users-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-family: 'Segoe UI', sans-serif;
                    background-color: #fff;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                    border-radius: 8px;
                    overflow: hidden;
                }

                .users-table th {
                    background-color: #444;
                    color: white;
                    padding: 12px;
                    text-align: left;
                    font-size: 14px;
                }

                .users-table td {
                    padding: 12px;
                    border-bottom: 1px solid #ddd;
                    font-size: 13px;
                    color: #333;
                    vertical-align: top;
                }

                .users-table tr:nth-child(even) {
                    background-color: #f9f9f9;
                }

                .users-table tr:hover {
                    background-color: #f1f1f1;
                }

                .nested-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 12px;
                }

                .nested-table td {
                    padding: 4px 6px;
                    border: 1px solid #ccc;
                    background-color: #f0f0f0;
                    color: #555;
                }

                @media (max-width: 768px) {
                    .users-table th, .users-table td {
                        font-size: 12px;
                        padding: 8px;
                    }

                    .nested-table td {
                        font-size: 11px;
                    }
                }
                `}
            </style>
        </>
    );
};

export default Users;
