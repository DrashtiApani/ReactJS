import React from 'react';

const Product = ({ productData }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 align="center" style={{ color: "#2c3e50", margin: "40px 0" }}>~: Products :~</h1>

          <table className="product-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Availability</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Description</th>
                <th>Images</th>
                <th>Price ($)</th>
                <th>Weight (kg)</th>
              </tr>
            </thead>
            <tbody>
              {
                productData.map((val, index) => (
                  <tr key={index}>
                    <td>{val.id}</td>
                    <td>{val.title}</td>
                    <td>{val.availabilityStatus}</td>
                    <td>{val.brand}</td>
                    <td>{val.category}</td>
                    <td>{val.description}</td>
                    <td>
                      {val.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt="Product"
                          style={{ width: "60px", height: "60px", margin: "4px", borderRadius: "8px", objectFit: "cover" }}
                        />
                      ))}
                    </td>
                    <td>${val.price}</td>
                    <td>{val.weight}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

      {/* CSS Styles */}
      <style>
        {`
          .product-table {
            width: 100%;
            border-collapse: collapse;
            font-family: 'Segoe UI', sans-serif;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            background-color: #fff;
            border-radius: 8px;
            overflow: hidden;
          }

          .product-table thead tr {
            background-color: #3498db;
            color: white;
          }

          .product-table th, .product-table td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }

          .product-table tbody tr:nth-child(even) {
            background-color: #f9f9f9;
          }

          .product-table tbody tr:hover {
            background-color: #eef6ff;
          }

          .product-table img {
            transition: transform 0.2s ease-in-out;
          }

          .product-table img:hover {
            transform: scale(1.05);
          }

          @media (max-width: 768px) {
            .product-table th, .product-table td {
              font-size: 12px;
              padding: 8px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Product;
