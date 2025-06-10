import { useState } from "react";

const Form = () => {
    const [input, setInput] = useState([
        {
            name: "",
            address: "",
            contact: ""
        }
    ]);

    // Styles object
    const styles = {
        container: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        },
        title: {
            textAlign: 'center',
            color: '#2c3e50',
            marginBottom: '30px'
        },
        card: {
            background: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            marginBottom: '20px',
            position: 'relative'
        },
        formGroup: {
            marginBottom: '15px'
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: '500',
            color: '#34495e'
        },
        input: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '16px',
            boxSizing: 'border-box' // यह लाइन जोड़ें
        },
        deleteBtn: {
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            padding: '8px 15px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
        },
        actions: {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px'
        },
        addBtn: {
            backgroundColor: '#2ecc71',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
        },
        submitBtn: {
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
        }
    };

    const addForm = () => {
        let newField = {
            name: "",
            address: "",
            contact: ""
        };
        setInput([...input, newField]);
    };

    const deleteForm = (index) => {
        if (input.length <= 1) return;
        let deleteForm = input.filter((item, i) => index !== i);
        setInput(deleteForm);
    };

    const changeInput = (e, index) => {
        const { name, value } = e.target;
        let oldRecord = [...input];
        oldRecord[index][name] = value;
        setInput(oldRecord);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        alert('Form submitted successfully!');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Dynamic Contact Form</h1>

            <form onSubmit={handleSubmit}>
                {input.map((item, index) => (
                    <div key={index} style={styles.card}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                onChange={(e) => changeInput(e, index)} 
                                value={item.name}
                                placeholder="Enter full name"
                                style={styles.input}
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label style={styles.label}>Address</label>
                            <input 
                                type="text" 
                                name="address" 
                                onChange={(e) => changeInput(e, index)} 
                                value={item.address}
                                placeholder="Enter your address"
                                style={styles.input}
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label style={styles.label}>Contact</label>
                            <input 
                                type="tel" 
                                name="contact" 
                                onChange={(e) => changeInput(e, index)} 
                                value={item.contact}
                                placeholder="Enter phone number"
                                style={styles.input}
                            />
                        </div>

                        {index > 0 && (
                            <button 
                                type="button" 
                                style={styles.deleteBtn}
                                onClick={() => deleteForm(index)}
                            >
                                Remove
                            </button>
                        )}
                    </div>
                ))}

                <div style={styles.actions}>
                    <button 
                        type="button" 
                        style={styles.addBtn}
                        onClick={addForm}
                    >
                        Add Another
                    </button>
                    
                    <button 
                        type="submit" 
                        style={styles.submitBtn}
                    >
                        Submit All
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;


////// method by sir

// import { useState } from "react";

// const Form = () => {
//     const [input, setInput] = useState([
//         {
//             name: "",
//             address: "",
//             contact:""
//         }
//     ]);

//     const addForm = () => {
//         let newField = {
//             name: "",
//             address: "",
//             contact:""
//         };
//         setInput([...input, newField]);
//     };

//     const deleteForm = (index) => {
//        let deleteeForm = input.filter((item, i) =>
//         {
//             return index !== i;
//         });
//         setInput(deleteeForm);
//     };
//     const changeInput = (e, index) => {
//         const { name, value } = e.target;
//         let oldRecord = [...input];
//         oldRecord[index][name] = value;
//         setInput(oldRecord);
//     };

//     const handleSubmit = (e) => {
//         console.log(input);
//     };

//     return (
//         <div align="center">
//             <h1>Dynamic Form</h1>

//             {input.map((item, index) => {
//                 return ( 
//                     <table border={1} align="center" style={{ marginBottom: "10px" }}>
//                         <tbody>
//                             <tr>
//                                 <td>Name</td>
//                                 <td> <input type="text" name="name" onChange={(e) => changeInput(e, index)} value={item.name} /></td>
//                             </tr>
//                             <tr>
//                                 <td>Address</td>
//                                 <td><input type="text" name="address" onChange={(e) => changeInput(e, index)} value={item.address} /> </td>
//                             </tr>
//                             <tr>
//                               <td>contact</td>
//                               <td><input type="number" name="contact" onChange={(e) => changeInput(e, index)} value={item.contact} /></td>
//                             </tr>

//                         </tbody>
//                        {
//                         index > 0 &&(
//                              <button align="center" onClick={ () => deleteForm(index)}>Delete</button>
//                         )
//                        }
//                     </table>
                    
//                 );
//             })}

//             <hr />
//             <button onClick={ () =>addForm()}>Add</button>
//             <button onClick={ () =>handleSubmit()}>Submit</button>
//         </div>
//     );
// };