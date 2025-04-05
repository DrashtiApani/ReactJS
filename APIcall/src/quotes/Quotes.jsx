import React from 'react'

const Quotes = ({ quotesData }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 align="center" style={{ color: "Black", margin: "30px" }}>~: Quotes :~</h1>

          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr style={{ backgroundColor: "#343a40", color: "white" }}>
                <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Quote</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Author</th>
              </tr>
            </thead>

            <tbody>
              {
                quotesData.map((val, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white" }}>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{val.id}</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{val.quote}</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{val.author}</td>
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

export default Quotes
