import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PRODUCTS, DELETE_PRODUCT } from '../../Redux/Action/ProductAction';
import { Link } from 'react-router-dom';

const ProductView = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.crud.products);

    const [serching, setserching] = useState('');
    const [sorting, setsorting] = useState('');
    const [filterByQuantity, setFilterByQuantity] = useState('');

    useEffect(() => {
        dispatch(GET_PRODUCTS());
    }, [dispatch]);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            dispatch(DELETE_PRODUCT(id));
        }
    };

    const filteredProducts = products
        .filter(p => p.name.toLowerCase().includes(serching.toLowerCase()))
        .filter(p => filterByQuantity === '' || p.quantity >= parseInt(filterByQuantity))
        .sort((a, b) => {
            if (sorting === 'name') return a.name.localeCompare(b.name);
            if (sorting === 'price') return parseFloat(a.price) - parseFloat(b.price);
            return 0;
        });

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">📦 Product List</h1>

            {/* 🔍 Filter Controls */}
            <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4">
                <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Search by name..."
                    value={serching}
                    onChange={(e) => setserching(e.target.value)}
                />
                <select
                    className="form-select w-25"
                    value={sorting}
                    onChange={(e) => setsorting(e.target.value)}
                >
                    <option value="">Sort By</option>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                </select>
                <input
                    type="number"
                    className="form-control w-25"
                    placeholder="Min Quantity"
                    value={filterByQuantity}
                    onChange={(e) => setFilterByQuantity(e.target.value)}
                />
                <Link to="/" className="btn btn-success px-4 py-2">+ Add Product</Link>
            </div>

            {/* 🧾 Product Table */}
            <table className="table table-bordered text-center shadow-sm">
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>₹{item.price}</td>
                                <td>{item.description}</td>
                                <td>
                                    <img src={item.imageUrl} width="90" height="90" style={{ objectFit: 'cover', borderRadius: '5px' }} />
                                </td>
                                <td>{item.quantity}</td>
                                <td>
                                    <div className="d-flex justify-content-center gap-2">
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="btn btn-outline-danger btn-sm px-3"
                                        >
                                            🗑 Delete
                                        </button>
                                        <Link
                                            to={`/productupdate/${item.id}`}
                                            className="btn btn-outline-primary btn-sm px-3"
                                        >
                                            ✏️ Update
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center text-muted">No products found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ProductView;




// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { GET_PRODUCTS, DELETE_PRODUCT } from '../../Redux/Action/ProductAction';
// import { Link } from 'react-router-dom';

// const ProductView = () => {
//     const dispatch = useDispatch();
//     const products = useSelector((state) => state.crud.products);

//     const [serching, setserching] = useState('');
//     const [sorting, setsorting] = useState('');
//     const [filterByQuantity, setFilterByQuantity] = useState('');

//     useEffect(() => {
//         dispatch(GET_PRODUCTS());
//     }, [dispatch]);

//     const handleDelete = (id) => {
//         if (window.confirm("Are you sure you want to delete this product?")) {
//             dispatch(DELETE_PRODUCT(id));
//         }
//     };

//     const filteredProducts = products
//         .filter(product =>
//             product.name.toLowerCase().includes(serching.toLowerCase())
//         )
//         .filter(product =>
//             filterByQuantity === '' || product.quantity >= parseInt(filterByQuantity)
//         )
//         .sort((a, b) => {
//             if (sorting === 'name') return a.name.localeCompare(b.name);
//             if (sorting === 'price') return parseFloat(a.price) - parseFloat(b.price);
//             return 0;
//         });

//     return (
//         <div>
//             <h1 style={{ textAlign: 'center' }}>Product View</h1>

        
//             <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//                 <input
//                     type="text"
//                     placeholder="Search by name..."
//                     value={serching}
//                     onChange={(e) => setserching(e.target.value)}
//                     style={{ padding: '5px 10px', marginRight: '10px' }}
//                 />
//                 <select onChange={(e) => setsorting(e.target.value)} value={sorting} style={{ marginRight: '10px' }}>
//                     <option value="">Sort By</option>
//                     <option value="name">Name</option>
//                     <option value="price">Price</option>
//                 </select>
//                 <input
//                     type="number"
//                     placeholder="Min Quantity"
//                     value={filterByQuantity}
//                     onChange={(e) => setFilterByQuantity(e.target.value)}
//                     style={{ padding: '5px 10px' }}
//                 />
//             </div>

//             <table border="1" style={{ margin: '0 auto', width: '90%', borderCollapse: 'collapse' }}>
//                 <thead>
//                     <tr style={{ backgroundColor: '#f2f2f2' }}>
//                         <th>Name</th>
//                         <th>Price</th>
//                         <th>Description</th>
//                         <th>Image</th>
//                         <th>Quantity</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredProducts.length > 0 ? (
//                         filteredProducts.map((item, index) => (
//                             <tr key={index}>
//                                 <td>{item.name}</td>
//                                 <td>{item.price}</td>
//                                 <td>{item.description}</td>
//                                 <td>
//                                     <img src={item.imageUrl} alt={item.name} width="80" height="80" />
//                                 </td>
//                                 <td>{item.quantity}</td>
//                                 <td>
//                                     <button
//                                         onClick={() => handleDelete(item.id)}
//                                         style={{
//                                             backgroundColor: 'red',
//                                             color: 'white',
//                                             border: 'none',
//                                             padding: '5px 10px',
//                                             marginRight: '5px'
//                                         }}
//                                     >
//                                         Delete
//                                     </button>
//                                     <Link to={`/productupdate/${item.id}`}>
//                                         <button
//                                             style={{
//                                                 backgroundColor: 'green',
//                                                 color: 'white',
//                                                 border: 'none',
//                                                 padding: '5px 10px'
//                                             }}
//                                         >
//                                             Update
//                                         </button>
//                                     </Link>
//                                 </td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="6" style={{ textAlign: 'center' }}>No products found.</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>

//             <div style={{ textAlign: 'center', marginTop: '20px' }}>
//                 <Link to="/">
//                     <button
//                         style={{
//                             backgroundColor: '#007bff',
//                             color: 'white',
//                             padding: '10px 20px',
//                             border: 'none',
//                             borderRadius: '4px'
//                         }}
//                     >
//                         Add Product
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default ProductView;
