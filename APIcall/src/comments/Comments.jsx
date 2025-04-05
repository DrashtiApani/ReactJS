import React from 'react'

const Comments = ({ commentsData }) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 align="center" style={{ color: "Black", margin: "30px" }}>~: Comments :~</h1>

                    <table style={{ borderCollapse: "collapse", width: "100%" }}>
                        <thead>
                            <tr style={{ backgroundColor: "#343a40", color: "white" }}>
                                <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
                                <th style={{ border: "1px solid black", padding: "8px" }}>Body</th>
                                <th style={{ border: "1px solid black", padding: "8px" }}>Likes</th>
                                <th style={{ border: "1px solid black", padding: "8px" }}>Post ID</th>
                                <th style={{ border: "1px solid black", padding: "8px" }}>User</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                commentsData.map((item, index) => (
                                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white" }}>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{item.id}</td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{item.body}</td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{item.likes}</td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{item.postId}</td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>
                                            <table style={{ borderCollapse: "collapse", width: "100%" }}>
                                                <thead>
                                                    <tr style={{ backgroundColor: "#6c757d", color: "white" }}>
                                                        <th style={{ border: "1px solid black", padding: "4px" }}>ID</th>
                                                        <th style={{ border: "1px solid black", padding: "4px" }}>Full Name</th>
                                                        <th style={{ border: "1px solid black", padding: "4px" }}>Username</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ border: "1px solid black", padding: "4px" }}>{item.user.id}</td>
                                                        <td style={{ border: "1px solid black", padding: "4px" }}>{item.user.fullName}</td>
                                                        <td style={{ border: "1px solid black", padding: "4px" }}>{item.user.username}</td>
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

export default Comments
