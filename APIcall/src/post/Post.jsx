import React from 'react'

const Post = ({ postData }) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 align="center" style={{ color: "Black", margin: "50px" }}>~: Post :~</h1>

                    <table style={{ borderCollapse: "collapse", width: "100%" }}>
                        <thead>
                            <tr style={{ backgroundColor: "#343a40", color: "white" }}>
                                <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
                                <th style={{ border: "1px solid black", padding: "8px" }}>Title</th>
                                <th style={{ border: "1px solid black", padding: "8px" }}>Body</th>
                                <th style={{ border: "1px solid black", padding: "8px" }}>User ID</th>
                                <th style={{ border: "1px solid black", padding: "8px" }}>Reactions</th>
                                <th style={{ border: "1px solid black", padding: "8px" }}>Tags</th>
                                <th style={{ border: "1px solid black", padding: "8px" }}>Views</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                postData.map((val, index) => (
                                    <tr
                                        key={index}
                                        style={{
                                            backgroundColor: index % 2 === 0 ? "#f2f2f2" : "white"
                                        }}
                                    >
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{val.id}</td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{val.title}</td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{val.body}</td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{val.userId}</td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>
                                            {
                                                val.reactions === true ?
                                                    <span style={{ color: "green" }} >True</span> :
                                                    <span style={{ color: "red" }}>False</span>
                                            }
                                        </td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>
                                            {
                                                val.tags.map((tag, index) => (
                                                    <span key={index} style={{ marginRight: "5px" }}>{tag}</span>
                                                ))
                                            }
                                        </td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{val.views}</td>
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

export default Post
