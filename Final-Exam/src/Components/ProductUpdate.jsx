import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { UPDATE_PRODUCT } from '../../Redux/Action/ProductAction';

const ProductUpdate = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        price: '',
        description: '',
        imageUrl: '',
        quantity: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:3000/products/${id}`);
            const data = await res.json();
            setForm(data);
        };
        fetchData();
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(UPDATE_PRODUCT(id, form));
        navigate('/products');
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Update Product</h2>
            <form onSubmit={handleSubmit} className="card p-4 shadow">
                {['name', 'price', 'description', 'imageUrl', 'quantity'].map((field, i) => (
                    <div className="mb-3" key={i}>
                        <label className="form-label text-capitalize">{field}:</label>
                        <input
                            type={field === 'quantity' ? 'number' : 'text'}
                            className="form-control"
                            name={field}
                            value={form[field]}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <button className="btn btn-primary w-100">Update</button>
            </form>
        </div>
    );
};

export default ProductUpdate;


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams, useNavigate } from 'react-router-dom';
// import { UPDATE_PRODUCT } from '../../Redux/Action/ProductAction';

// const ProductUpdate = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const [form, setForm] = useState({
//         name: '',
//         price: '',
//         description: '',
//         imageUrl: '',
//         quantity: ''
//     });

//     // Fetch the existing product for prefill (local fetch OR from Redux if needed)
//     useEffect(() => {
//         const updateProdct = async () => {
//             const res = await fetch(`http://localhost:3000/products/${id}`);
//             const data = await res.json();
//             setForm(data);
//         };

//         updateProdct();
//     }, [id]);

//     const changeInput = (e) => {
//         setForm(
//             {
//                 ...form,
//                 [e.target.name]: e.target.value
//             });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(UPDATE_PRODUCT(id, form));
//         navigate("/products");
//     };

//     return (
//         <div style={{ textAlign: 'center' }}>
//             <h2>Update Product</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="name" value={form.name} onChange={changeInput} placeholder="Name" /><br /><br />
//                 <input type="text" name="price" value={form.price} onChange={changeInput} placeholder="Price" /><br /><br />
//                 <input type="text" name="description" value={form.description} onChange={changeInput} placeholder="Description" /><br /><br />
//                 <input type="text" name="imageUrl" value={form.imageUrl} onChange={changeInput} placeholder="Image URL" /><br /><br />
//                 <input type="number" name="quantity" value={form.quantity} onChange={changeInput} placeholder="Quantity" /><br /><br />
//                 <button type="submit">Update</button>
//             </form>
//         </div>
//     );
// };

// export default ProductUpdate;
