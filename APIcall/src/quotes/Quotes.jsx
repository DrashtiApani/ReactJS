import React from 'react';

const Quotes = ({ quotesData }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 align="center" style={{ color: "#2c3e50", margin: "30px 0" }}>~: Quotes :~</h1>

          <table className="quotes-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Quote</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {
                quotesData.map((val, index) => (
                  <tr key={index} className={index % 2 === 0 ? "even" : "odd"}>
                    <td>{val.id}</td>
                    <td>{val.quote}</td>
                    <td>{val.author}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

      {/* 🔥 Custom CSS for Table */}
      <style>{`
        .quotes-table {
          width: 100%;
          border-collapse: collapse;
          font-family: 'Segoe UI', sans-serif;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          border-radius: 10px;
          overflow: hidden;
        }

        .quotes-table th {
          background-color:rgb(168, 92, 97);
          color: white;
          padding: 14px;
          font-size: 15px;
          text-align: center;
        }

        .quotes-table td {
          border: 1px solid #ddd;
          padding: 12px;
          font-size: 14px;
          text-align: center;
          color: #2c3e50;
        }

        .quotes-table .even {
          background-color: #f9f9f9;
        }

        .quotes-table .odd {
          background-color: #ffffff;
        }

        .quotes-table tr:hover {
          background-color: #f1f1f1;
        }

        @media (max-width: 768px) {
          .quotes-table th,
          .quotes-table td {
            padding: 10px;
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
};

export default Quotes;
