import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GET_PRODUCT from "./Redux/Action/ApiAction";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.api.products);

  useEffect(() => {
    dispatch(GET_PRODUCT());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="title">🛒 Products Detail</h1>

      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <img src={item.images[0]} alt={item.title} className="product-img" />
              </td>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td>${item.price}</td>
              <td>{item.stock}</td>
              <td>{item.rating} ⭐</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 👇 Inline CSS inside component */}
      <style>{`
        .container {
          min-height: 100vh;
          background-color: #f3f4f6;
          padding: 2rem;
          font-family: sans-serif;
        }

        .title {
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 1.5rem;
          color: #1f2937;
        }

        .product-table {
          width: 100%;
          background: white;
          border-collapse: collapse;
          box-shadow: 0 0 10px rgba(0,0,0,0.05);
        }

        .product-table th {
          background-color: #1f2937;
          color: white;
          padding: 12px;
        }

        .product-table td {
          text-align: center;
          padding: 12px;
          border-bottom: 1px solid #ddd;
        }

        .product-img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 6px;
          border: 1px solid #ddd;
        }

        @media (max-width: 768px) {
          .product-table td,
          .product-table th {
            font-size: 12px;
            padding: 8px;
          }

          .product-img {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </div>
  );
}

export default App;



// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import GET_PRODUCT from "./Redux/Action/ApiAction";


// function App() {

//   const dispatch = useDispatch()

//   const products = useSelector((state) => state.api.products)

//   useEffect(() => {
//     dispatch(GET_PRODUCT())
//   }, [])



//   return (
//     <div>
//       <h1>Products Detail</h1>

//       <table border={1} cellPadding={10} cellSpacing={0} >
//         <thead>
//           <th>ID </th>
//           <th>Title</th>
//           <th>Image</th>
//           <th>Description</th>
//           <th>Catagory</th>
//           <th>Price</th>
//           <th>Stock</th>
//           <th>Rating</th>
//         </thead>
//         <tbody>
//           {
//             products.map((item) => {
//               return (
//                 <tr>
//                   <td>{item.id}</td>
//                   <td>{item.title}</td>
//                   <td><img src={item.images[0]} alt="" width={120} /></td>
//                   <td>{item.description}</td>
//                   <td>{item.category}</td>
//                   <td>{item.price}</td>
//                   <td>{item.stock}</td>
//                   <td>{item.rating}</td>
//                 </tr>
//               )
//             })
//           }
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default App
