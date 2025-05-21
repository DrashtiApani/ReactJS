import { useState } from "react";

function App() {
  const [formInput, setFormInput] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    usergender: "",
    usercourse: [],
    usercity: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formInput.username.trim()) {
      newErrors.username = "Name is required";
    }

    if (!formInput.useremail.trim()) {
      newErrors.useremail = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formInput.useremail)) {
      newErrors.useremail = "Invalid email format";
    }

    if (!formInput.userpassword.trim()) {
      newErrors.userpassword = "Password is required";
    } else if (formInput.userpassword.length < 6) {
      newErrors.userpassword = "Password must be at least 6 characters";
    }

    if (!formInput.usergender) {
      newErrors.usergender = "Gender is required";
    }

    if (formInput.usercourse.length === 0) {
      newErrors.usercourse = "Select at least one course";
    }

    if (!formInput.usercity) {
      newErrors.usercity = "Please select a city";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormInput((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
    } else {
      setFormInput((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (validate()) {
      console.log(formInput);
      alert("Form submitted successfully!");
      setFormInput({
        username: "",
        useremail: "",
        userpassword: "",
        usergender: "",
        usercourse: [],
        usercity: "",
      });
      setErrors({});
      setSubmitted(false);
    }
  };

  const inputClass = (field) =>
    submitted && errors[field] ? "form-input error" : "form-input";

  return (
    <div className="app-container">
      <div className="form-container">
        <h1 className="form-title">Form Registration</h1>

        <form onSubmit={handleSubmit}>
          <table className="form-table">
            <tbody>
              {/* Name */}
              <tr>
                <td className="form-label">Name</td>
                <td>
                  <input
                    type="text"
                    name="username"
                    value={formInput.username}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={inputClass("username")}
                  />
                  {submitted && errors.username && (
                    <div className="error-text">{errors.username}</div>
                  )}
                </td>
              </tr>

              {/* Email */}
              <tr>
                <td className="form-label">Email</td>
                <td>
                  <input
                    type="email"
                    name="useremail"
                    value={formInput.useremail}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={inputClass("useremail")}
                  />
                  {submitted && errors.useremail && (
                    <div className="error-text">{errors.useremail}</div>
                  )}
                </td>
              </tr>

              {/* Password */}
              <tr>
                <td className="form-label">Password</td>
                <td>
                  <input
                    type="password"
                    name="userpassword"
                    value={formInput.userpassword}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className={inputClass("userpassword")}
                  />
                  {submitted && errors.userpassword && (
                    <div className="error-text">{errors.userpassword}</div>
                  )}
                </td>
              </tr>

              {/* Gender */}
              <tr>
                <td className="form-label">Gender</td>
                <td className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="usergender"
                      value="male"
                      checked={formInput.usergender === "male"}
                      onChange={handleChange}
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="usergender"
                      value="female"
                      checked={formInput.usergender === "female"}
                      onChange={handleChange}
                    />
                    Female
                  </label>
                  {submitted && errors.usergender && (
                    <div className="error-text">{errors.usergender}</div>
                  )}
                </td>
              </tr>

              {/* Courses */}
              <tr>
                <td className="form-label">Courses</td>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      name="usercourse"
                      value="react"
                      checked={formInput.usercourse.includes("react")}
                      onChange={handleChange}
                    />
                    React
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="usercourse"
                      value="C++"
                      checked={formInput.usercourse.includes("C++")}
                      onChange={handleChange}
                    />
                    C++
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="usercourse"
                      value="angular"
                      checked={formInput.usercourse.includes("angular")}
                      onChange={handleChange}
                    />
                    Angular
                  </label>
                  {submitted && errors.usercourse && (
                    <div className="error-text">{errors.usercourse}</div>
                  )}
                </td>
              </tr>

              {/* City */}
              <tr>
                <td className="form-label">City</td>
                <td>
                  <select
                    name="usercity"
                    value={formInput.usercity}
                    onChange={handleChange}
                    className={inputClass("usercity")}
                  >
                    <option value="">-- Select City --</option>
                    <option value="Surat">Surat</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Vadodara">Vadodara</option>
                    <option value="Rajkot">Rajkot</option>
                    <option value="Mumbai">Mumbai</option>
                  </select>
                  {submitted && errors.usercity && (
                    <div className="error-text">{errors.usercity}</div>
                  )}
                </td>
              </tr>

              {/* Submit */}
              <tr>
                <td colSpan="2" className="submit-cell">
                  <button type="submit" className="submit-button">
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>

      <style jsx>{`
        .app-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f0f2f5;
          font-family: 'Segoe UI', sans-serif;
        }

        .form-container {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          width: 100%;
        }

        .form-title {
          text-align: center;
          color: #333;
          margin-bottom: 1.5rem;
        }

        .form-table {
          width: 100%;
        }

        .form-label {
          font-weight: 500;
          padding: 0.5rem;
          vertical-align: top;
          width: 25%;
        }

        .form-input, select {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .form-input.error, select.error {
          border-color: red;
        }

        .error-text {
          color: red;
          font-size: 0.85rem;
          margin-top: 4px;
        }

        .radio-group {
          display: flex;
          gap: 1.5rem;
          padding-top: 0.5rem;
        }

        .submit-cell {
          text-align: center;
          padding-top: 1rem;
        }

        .submit-button {
          background-color: #007bff;
          color: white;
          padding: 0.6rem 1.5rem;
          font-size: 1rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .submit-button:hover {
          background-color: #0056b3;
        }

        label {
          margin-right: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }
      `}</style>
    </div>
  );
}

export default App;



///// {***method by sir****}




// import { useState } from "react";

// function App() {
//   // State to manage form inputs
//   let [formInput, setFormInput] = useState({
//     username: "",
//     useremail: "",
//     userpassword: "",
//     usergender: "",
//     usercourse: [],
//   });

//   // Function to handle input changes
// const handleChange = (e) => {
//   const { name, value, type, checked } = e.target;

//   if (type === "checkbox") {
//     if (checked) {
//       setFormInput({
//         ...formInput,
//         [name]: [...formInput[name], value],
//       });
//     } else {
//       setFormInput({
//         ...formInput,
//         [name]: formInput[name].filter((item) => item !== value),
//       });
//     }
//   } else {
//     setFormInput({
//       ...formInput,
//       [name]: value,
//     });
//   }
// };


//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // page doesn't refresh
//     console.log(formInput); // Log form data to console (in real app, you'd send to server)

//     // Reset form after submission
//     setFormInput({
//       username: "",
//       useremail: "",
//       userpassword: "",
//       usergender: "",
//       usercourse: [],
//     });
//   }

//   return (
//     <div className="app-container">
//       <div className="form-container">
//         <h1 className="form-title">Form Registration</h1>

//         {/* Form element with submit handler */}
//         <form onSubmit={handleSubmit}>
//           <table className="form-table">
//             <tbody>
//               {/* Name input field */}
//               <tr>
//                 <td className="form-label">Name</td>
//                 <td>
//                   <input
//                     type="text"
//                     onChange={handleChange} // Calls handleChange when value changes
//                     name="username" // Identifies which field is being changed
//                     value={formInput.username} // Controlled component value
//                     placeholder="Enter your name"
//                     className="form-input"
//                   />
//                 </td>
//               </tr>

//               {/* Email input field */}
//               <tr>
//                 <td className="form-label">Email</td>
//                 <td>
//                   <input
//                     type="email"
//                     onChange={handleChange}
//                     name="useremail"
//                     value={formInput.useremail}
//                     placeholder="Enter your email"
//                     className="form-input"
//                   />
//                 </td>
//               </tr>

//               {/* Password input field */}
//               <tr>
//                 <td className="form-label">Password</td>
//                 <td>
//                   <input
//                     type="password"
//                     onChange={handleChange}
//                     name="userpassword"
//                     value={formInput.userpassword}
//                     placeholder="Enter your password"
//                     className="form-input"
//                   />
//                 </td>
//               </tr>

//               {/* Gender radio buttons */}
//               <tr>
//                 <td className="form-label">Gender</td>
//                 <td className="radio-group">
//                   <label className="radio-label">
//                     <input
//                       type="radio"
//                       checked={formInput.usergender === "male"} // Controls which radio is selected
//                       onChange={handleChange}
//                       name="usergender" // Same name groups the radios together
//                       value="male"
//                       className="radio-input"
//                     />
//                     Male
//                   </label>
//                   <label className="radio-label">
//                     <input
//                       type="radio"
//                       checked={formInput.usergender === "female"}
//                       onChange={handleChange}
//                       name="usergender"
//                       value="female"
//                       className="radio-input"
//                     />
//                     Female
//                   </label>
//                 </td>
//               </tr>

//               <tr>
//                 <td>Courses</td>
//                 <td><input type="checkbox" onChange={handleChange} name="usercourse" value="react" checked={formInput.usercourse.includes("react")}  /> React
//                   <input type="checkbox" onChange={handleChange} name="usercourse" value="C++"  checked={formInput.usercourse.includes("C++")} /> C++
//                   < input type="checkbox" onChange={handleChange} name="usercourse" value="angular"  checked={formInput.usercourse.includes("angular")} /> Angular</td>
//               </tr>

//               {/* Submit button */}
//               <tr>
//                 <td colSpan="2" className="submit-cell">
//                   <button type="submit" className="submit-button">Submit</button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </form>
//       </div>

//       {/* CSS styles for the component */}
//       <style jsx>{`
//         .app-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           min-height: 100vh;
//           background-color: #f5f5f5;
//           font-family: 'Arial', sans-serif;
//         }
        
//         .form-container {
//           background-color: white;
//           padding: 2rem;
//           border-radius: 8px;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           width: 100%;
//           max-width: 500px;
//         }
        
//         .form-title {
//           text-align: center;
//           color: #333;
//           margin-bottom: 1.5rem;
//         }
        
//         .form-table {
//           width: 100%;
//           border-collapse: collapse;
//         }
        
//         .form-table tr:not(:last-child) {
//           margin-bottom: 1rem;
//         }
        
//         .form-label {
//           padding: 0.5rem;
//           text-align: right;
//           font-weight: 500;
//           color: #555;
//         }
        
//         .form-input {
//           width: 100%;
//           padding: 0.5rem;
//           border: 1px solid #ddd;
//           border-radius: 4px;
//           font-size: 1rem;
//         }
        
//         .form-input:focus {
//           outline: none;
//           border-color: #4a90e2;
//           box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
//         }
        
//         .radio-group {
//           padding: 0.5rem;
//           display: flex;
//           gap: 1rem;
//         }
        
//         .radio-label {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           cursor: pointer;
//         }
        
//         .radio-input {
//           margin: 0;
//         }
        
//         .submit-cell {
//           text-align: center;
//           padding-top: 1rem;
//         }
        
//         .submit-button {
//           background-color: #4a90e2;
//           color: white;
//           border: none;
//           padding: 0.5rem 1.5rem;
//           border-radius: 4px;
//           font-size: 1rem;
//           cursor: pointer;
//           transition: background-color 0.2s;
//         }
        
//         .submit-button:hover {
//           background-color: #3a7bc8;
//         }
//       `}</style>
//     </div>
//   )
// }

// export default App;