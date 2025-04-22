import React from 'react'

const Todos = ({ todosData }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 align="center" style={{ color: "Black", margin: "30px" }}>~: Todos :~</h1>

          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr style={{ backgroundColor: "#343a40", color: "white" }}>
                <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Todo</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Completed</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>User ID</th>
              </tr>
            </thead>

            <tbody>
              {
                todosData.map((val, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white" }}>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{val.id}</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{val.todo}</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {
                        val.completed ?
                          <span style={{ color: "green", fontWeight: "bold" }}>Completed</span> :
                          <span style={{ color: "red", fontWeight: "bold" }}>Not Completed</span>
                      }
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{val.userId}</td>
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

export default Todos
