import React from "react";

const Carts = ({ cartsData }) => {

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 align="center" style={{ color: "#2c3e50", margin: "50px" }}>
            ~: Carts :~
          </h1>

          <table className="custom-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>User Id</th>
                <th>Products</th>
                <th>Discounted Total</th>
                <th>Total</th>
                <th>Total Quantity</th>
              </tr>
            </thead>

            <tbody>
              {cartsData.map((val, index) => (
                <tr key={index}>
                  <td>{val.id}</td>
                  <td>{val.userId}</td>
                  <td>
                    <table className="nested-table">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Title</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Discount %</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          val.products.map((product, idx) => (
                            <tr key={idx}>
                              <td>{product.id}</td>
                              <td>{product.title}</td>
                              <td>{product.quantity}</td>
                              <td>${product.price}</td>
                              <td>{product.discountPercentage}%</td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </td>
                  <td>${val.discountedTotal}</td>
                  <td>${val.total}</td>
                  <td>{val.totalQuantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CSS Styles */}
      <style>
        {`
          .custom-table {
            width: 100%;
            border-collapse: collapse;
            font-family: 'Segoe UI', sans-serif;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            background-color: #fdfdfd;
          }

          .custom-table th {
            background-color: #3498db;
            color: white;
            padding: 12px;
            text-align: center;
          }

          .custom-table td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: center;
            background-color: #ffffff;
            color: #2c3e50;
          }

          .custom-table tr:nth-child(even) {
            background-color: #f9f9f9;
          }

          .custom-table tr:hover {
            background-color: #f1f1f1;
          }

          .nested-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
          }

          .nested-table th {
            background-color: #2ecc71;
            color: white;
            padding: 8px;
            font-size: 14px;
          }

          .nested-table td {
            border: 1px solid #ccc;
            padding: 8px;
            font-size: 13px;
            background-color: #fbfbfb;
            color: #34495e;
          }

          .nested-table tr:nth-child(even) {
            background-color: #f0f9f0;
          }

          .nested-table tr:hover {
            background-color: #e3fbe3;
          }
        `}
      </style>
    </>
  );
};

export default Carts;
