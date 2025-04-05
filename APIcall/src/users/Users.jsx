import React from 'react'

const Users = ({ usersData }) => {
    console.log(usersData)

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 align="center" style={{ color: "Black", margin: "30px" }}>~: Users :~</h1>

                    <table style={{ borderCollapse: "collapse", width: "100%" }}>
                        <thead>
                            <tr style={{ backgroundColor: "#343a40", color: "white" }}>
                                <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
                                <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
                                <th style={{ border: "1px solid black", padding: "8px" }}>Age</th>
                                <th style={{ border: "1px solid black", padding: "8px" }}>Email</th>
                                <th style={{ border: "1px solid black", padding: "8px" }}>Birthdate</th> 
                                <th style={{ border: "1px solid black", padding: "8px" }}>Blood Group</th> 
                                <th style={{ border: "1px solid black", padding: "8px" }}> phone</th> 
                                <th style={{ border: "1px solid black", padding: "8px" }}> password</th> 
                                <th style={{ border: "1px solid black", padding: "8px" }}> Hair</th> 
                                {/* <th style={{ border: "1px solid black", padding: "8px" }}>Images</th> */}
                                <th style={{ border: "1px solid black", padding: "8px" }}>Role</th>

                                <th style={{ border: "1px solid black", padding: "8px" }}>Address</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                usersData.map((val, index) => (
                                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white" }}>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{val.id}</td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{val.lastName}</td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{val.age}</td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{val.email}</td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{val.birthDate}</td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{val.bloodGroup}</td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{val.phone}</td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{val.password}</td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>
                                            <table style={{ borderCollapse: "collapse", width: "100%" }}>
                                                <tbody>
                                                    <tr style={{ backgroundColor: "#dee2e6" }}>
                                                        <td style={{ border: "1px solid black", padding: "1px" }}>
                                                            Color: {val.hair.color}
                                                        </td>
                                                        <td style={{ border: "1px solid black", padding: "1px" }}>
                                                            Type: {val.hair.type}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        {/* 
                                        <td style={{ border: "1px solid black", padding: "8px" }}>
                                            <ul>
                                                {val.image.map((img, index) => (
                                                    <li key={index}>{img}</li>
                                                ))}
                                            </ul>
                                        </td> 
                                        */}
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{val.role}</td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>
                                            <table style={{ borderCollapse: "collapse", width: "100%" }}>
                                                <tbody>
                                                    <tr style={{ backgroundColor: "#dee2e6" }}>
                                                        <td style={{ border: "1px solid black", padding: "2px" }}>
                                                            Street: {val.address.address}
                                                        </td>
                                                        <td style={{ border: "1px solid black", padding: "2px" }}>
                                                            City: {val.address.city}
                                                        </td>
                                                        <td style={{ border: "1px solid black", padding: "2px" }}>
                                                            State: {val.address.state}
                                                        </td>
                                                        <td style={{ border: "1px solid black", padding: "2px" }}>
                                                            Code: {val.address.stateCode}
                                                        </td>
                                                        <td style={{ border: "1px solid black", padding: "2px" }}>
                                                            Country: {val.address.country}
                                                        </td>
                                                        <td style={{ border: "1px solid black", padding: "2px" }}>
                                                            Postal: {val.address.postalCode}
                                                        </td>
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
        </>
    )
}

export default Users
