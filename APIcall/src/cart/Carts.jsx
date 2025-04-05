import React from "react";

const Carts = ({ cartsData }) => {

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 align="center" style={{ color: "Black", margin: "50px" }}>
            ~: Carts :~
          </h1>

          <table className="bordered-table">
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
              {cartsData.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.userId}</td>
                  <td>
                    <table className="bordered-table nested-table">
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
                          item.products.map((product, idx) => (
                            <tr key={idx}>
                              <td>{product.id}</td>
                              <td>{product.title}</td>
                              <td>{product.quantity}</td>
                              <td>{product.price}</td>
                              <td>{product.discountPercentage}</td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </td>
                  <td>{item.discountedTotal}</td>
                  <td>{item.total}</td>
                  <td>{item.totalQuantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CSS Styles */}
      <style>
        {`
          .bordered-table {
            width: 100%;
            border: 2px solid black;
            border-collapse: collapse;
            text-align: center;
          }
          .bordered-table th, .bordered-table td {
            border: 2px solid black;
            padding: 10px;
          }
          .nested-table {
            width: 100%;
            margin-top: 10px;
          }
        `}
      </style>
    </>
  );
};

export default Carts;
