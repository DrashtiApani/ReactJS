import React, { useEffect, useState } from 'react';
import { category, products } from './Data';

const App = () => {
  const [record, setRecord] = useState([]);

  const filterdata = (title) => {
    if (title === "All") {
      setRecord(products);
    } else {
      const data = products.filter((p) => p.category === title);
      setRecord(data);
    }
  };

  useEffect(() => {
    setRecord(products);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#FF5200' }}>🛒 Product Filter</h1>

      {/* Category Buttons */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '30px'
      }}>
        {
          category.map((c, i) => (
            <button
              key={i}
              onClick={() => filterdata(c.title)}
              style={{
                padding: '10px 20px',
                border: 'none',
                borderRadius: '20px',
                backgroundColor: '#FF5200',
                color: 'white',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: '0.3s'
              }}
              onMouseOver={e => e.target.style.backgroundColor = "#e04c00"}
              onMouseOut={e => e.target.style.backgroundColor = "#FF5200"}
            >
              {c.title}
            </button>
          ))
        }
      </div>

      {/* Product Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {
          record.map((r, index) => (
            <div key={index} style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '15px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              backgroundColor: '#fff'
            }}>
              <h3 style={{ color: '#333' }}>{r.name}</h3>
              <p style={{ color: '#777' }}>📦 Category: <strong>{r.category}</strong></p>
              <p style={{ fontSize: '14px', color: '#999' }}>🆔 ID: {r.id}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default App;

{/* <>

// import React, { useEffect, useState } from 'react'
// import { category, products } from './Data'

// const App = () => {

//   console.log(category);
//   console.log(products);

//   const [record, setRecord] = useState([]);

//   const filterdata=(title)=>{
//     if(title==="All"){
//       setRecord(products);
//     }else{
//       let data=products.filter((p)=>p.category==title)
//       setRecord(data)
//     }
//   }

//   useEffect(()=>{
//     setRecord(products)
//   },[])

//   return (
//     <div align="center">
//       <h2>Filter Data</h2>

//       {
//         category.map((c, i) => {
//           return (
//             <>
//               <button key={i} onClick={() => filterdata(c.title)}>{c.title}</button>
//             </>
//           )
//         })
//       }

//       <h2>All Products</h2>

//       {
//         record.map((r,index)=>{
//           return(
//             <tr key={index}>
//               <td>Id : {r.id}</td>
//               <td>Name: {r.name}</td>
//               <td>Categopry:{r.category}</td>
//             </tr>
//           )
//         })
//       }


//     </div>


//   )
// } 
</> */}