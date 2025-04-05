import React from 'react'

const Product = ({ productData }) => {
  return (
    <>
      <div className="container">
        <div className="row">
         
          <h1 align="center" style={{ color: "Black", margin: "30px" }}>~: Product :~</h1>

          <table style={{ border: "2px solid black", borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Id</th>
                <th style={tableHeaderStyle}>Title</th>
                <th style={tableHeaderStyle}>Availability Status</th>
                <th style={tableHeaderStyle}>Brand</th>
                <th style={tableHeaderStyle}>Category</th>
                <th style={tableHeaderStyle}>Description</th>
                <th style={tableHeaderStyle}>Images</th>
                <th style={tableHeaderStyle}>Price</th>
                <th style={tableHeaderStyle}>Weight</th>
              </tr>
            </thead>
            <tbody>
              {
                productData.map((item, index) => (
                  <tr key={index} style={index % 2 === 0 ? evenRowStyle : oddRowStyle}>
                    <td style={tableCellStyle}>{item.id}</td>
                    <td style={tableCellStyle}>{item.title}</td>
                    <td style={tableCellStyle}>{item.availabilityStatus}</td>
                    <td style={tableCellStyle}>{item.brand}</td>
                    <td style={tableCellStyle}>{item.category}</td>
                    <td style={tableCellStyle}>{item.description}</td>
                    <td style={tableCellStyle}>
                      {item.images.map((image, imgIndex) => (
                        <img key={imgIndex} src={image} alt="Product" style={{ width: "70px", height: "60px", margin: "5px" }} />
                      ))}
                    </td>
                    <td style={tableCellStyle}>{item.price}</td>
                    <td style={tableCellStyle}>{item.weight}</td>
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


const tableHeaderStyle = {
  border: "2px solid black",
  padding: "10px",
  textAlign: "left",
  backgroundColor: "#595959",
  color: "black"
};

const tableCellStyle = {
  border: "2px solid black",
  padding: "10px",
  textAlign: "left"
};


const evenRowStyle = {
  backgroundColor: "#DCDCDC"
};


const oddRowStyle = {
  backgroundColor: "white"
};

export default Product;
