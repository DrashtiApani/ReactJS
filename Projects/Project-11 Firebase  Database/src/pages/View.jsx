import { getDatabase, onValue, ref, remove } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { app } from '../firebase';

const View = () => {
  const navigate = useNavigate();
  const [allUser, setAllUser] = useState({});

  const db = getDatabase(app);

  const getUser = () => {
    const record = ref(db, `users`);
    onValue(record, (snapshot) => {
      const data = snapshot.val();
      setAllUser(data || {}); // fallback in case of null
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  const deleteUser = (id) => {
    const deleteRef = ref(db, `users/${id}`);
    remove(deleteRef)
      .then(() => {
        alert("User Deleted Successfully");
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  };

  const updateUser = (id, userData) => {
    navigate("/edit", { state: { id, ...userData } });
  };


  
  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f7f7f7",
      minHeight: "100vh"
    },
    title: {
      fontSize: "28px",
      color: "#b71c1c",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "20px"
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      backgroundColor: "#fff",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    },
    th: {
      backgroundColor: "#d32f2f",
      color: "white",
      padding: "10px"
    },
    td: {
      padding: "10px",
      borderBottom: "1px solid #ccc"
    },
    button: {
      marginRight: "10px",
      padding: "6px 12px",
      backgroundColor: "#d32f2f",
      color: "white",
      border: "none",
      cursor: "pointer",
      borderRadius: "3px"
    },
    link: {
      display: "inline-block",
      marginTop: "20px",
      padding: "10px 20px",
      backgroundColor: "#d32f2f",
      color: "white",
      textDecoration: "none",
      borderRadius: "4px"
    }
  };

  return (
    <div align="center">
      <h1>View User</h1>

      <table border="1px solid black" cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(allUser).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value.name}</td>
              <td>{value.company}</td>
              <td>{value.email}</td>
              <td>{value.phone}</td>
              <td>{value.message}</td>
              <td>
                <button onClick={() => deleteUser(key)}>Delete</button>
                <button onClick={() => updateUser(key, value)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br /><hr /><br />
      <Link to="/add">Add User</Link>
    </div>
  );
};

export default View;


// import { getDatabase, onValue, ref, remove } from 'firebase/database'
// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { app } from '../firebase';

// const View = () => {

//   const navigate = useNavigate();
//   const [allUser, setAllUser] = useState("");

//   const db = getDatabase(app);
//   const getUser = () => {
//     const record = ref(db, `users`)
//     onValue(record, (row) => {
//       const data = row.val();
//       setAllUser(data);

//     })

//   }

//   useEffect(() => {
//     getUser();
//   }, [])

//   const deleteUser = (id) =>{
//     const deleteUser = ref(db, `users/${id}`)  
//   remove(deleteUser)
//   .then(() => {
//     alert("User Deleted Successfully")
//   }).catch((error) => {
//     console.log(error);
//     return false
//   });
//   }

//   const updateUser = (id,name,email) => {
    
//     let data = {id,name,email}
//     navigate("/edit", {state: data})

//   }

//   return (
//     <div align="center" >

//       <h1>View User</h1>

//       <table border="1px solid black">
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             Object.entries(allUser).map(([key, value]) => {
//               return (
//                 <tr key={key}>
//                   <td>{key}</td>
//                   <td>{value.name}</td>
//                   <td>{value.email}</td>
//                   <td>
//                     <button onClick={() => deleteUser(key)}>Delete</button>
//                     <button onClick={() => updateUser(key,value.name,value.email)}>Update</button>
//                   </td>
//                 </tr>
//               )
//             })
//           }
//         </tbody>
//       </table>
//       <br /><br />
//       <hr />
//       <br /><br />


//       <Link to="/add">Add User</Link>
//     </div>
//   )
// }

// export default View