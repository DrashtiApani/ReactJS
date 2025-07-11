import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ADD_PRODUCT } from '../../Redux/Action/ProductAction';

const ProductAdd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formInputs, setFormInputs] = useState({
        name: '',
        price: '',
        description: '',
        imageUrl: '',
        quantity: ''
    });


    

    const changeInput = (e) => {
        const { name, value } = e.target;
        setFormInputs({ ...formInputs, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(ADD_PRODUCT(formInputs));
        navigate('/products');
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit} className="card p-4 shadow">
                {['name', 'price', 'description', 'imageUrl', 'quantity'].map((field, i) => (
                    <div className="mb-3" key={i}>
                        <label className="form-label text-capitalize">{field.replace(/([A-Z])/g, ' $1')}:</label>
                        <input
                            type={field === 'quantity' ? 'number' : 'text'}
                            className="form-control"
                            name={field}
                            value={formInputs[field]}
                            onChange={changeInput}
                        />
                    </div>
                ))}
                <button className="btn btn-primary w-100">Add Product</button>
            </form>
        </div>
    );
};

export default ProductAdd;




// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { ADD_PRODUCT } from '../../Redux/Action/ProductAction';

// const ProductAdd = () => {

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//   const [formInputs, setFormInputs] = useState({
//     name: '',
//     price: '',
//     description: '',
//     imageUrl: '',
//     quantity: ''
//   });

//   const changeInput = (e) => {
//     const { name, value } = e.target;
//     setFormInputs({
//       ...formInputs,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(ADD_PRODUCT(formInputs));
//     navigate('/products');
//     // console.log(formInputs); 
//     // alert('Product added successfully!');
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2 style={{ textAlign: 'center' }}>Add New Product</h2>
      
//       {/* ✅ FIXED: Moved onSubmit to <form> */}
//       <form onSubmit={handleSubmit}>
//         <table style={{ margin: '0 auto', borderCollapse: 'collapse', width: '80%' }}>
//           <tbody>
//             <tr>
//               <td style={tdStyle}><label>Product Name:</label></td>
//               <td><input type="text" name="name" value={formInputs.name} onChange={changeInput} style={inputStyle} /></td>
//             </tr>
//             <tr>
//               <td style={tdStyle}><label>Product Price:</label></td>
//               <td><input type="text" name="price" value={formInputs.price} onChange={changeInput} style={inputStyle} /></td>
//             </tr>
//             <tr>
//               <td style={tdStyle}><label>Product Description:</label></td>
//               <td><input type="text" name="description" value={formInputs.description} onChange={changeInput} style={inputStyle} /></td>
//             </tr>
//             <tr>
//               <td style={tdStyle}><label>Product Image URL:</label></td>
//               <td><input type="text" name="imageUrl" value={formInputs.imageUrl} onChange={changeInput} style={inputStyle} /></td>
//             </tr>
//             <tr>
//               <td style={tdStyle}><label>Product Quantity:</label></td>
//               <td><input type="number" name="quantity" value={formInputs.quantity} onChange={changeInput} style={inputStyle} /></td>
//             </tr>
//             <tr>
//               <td colSpan={2} style={{ textAlign: 'center', paddingTop: '15px' }}>
//                 <button type="submit" style={buttonStyle}>Add Product</button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </form>
//     </div>
//   );
// };

// const tdStyle = {
//   padding: '10px',
//   fontWeight: 'bold',
//   textAlign: 'right',
//   width: '40%'
// };

// const inputStyle = {
//   width: '90%',
//   padding: '8px',
//   fontSize: '14px',
//   border: '1px solid #ccc',
//   borderRadius: '4px'
// };

// const buttonStyle = {
//   padding: '10px 20px',
//   fontSize: '16px',
//   borderRadius: '5px',
//   backgroundColor: '#007bff',
//   color: '#fff',
//   border: 'none',
//   cursor: 'pointer'
// };

// export default ProductAdd;
