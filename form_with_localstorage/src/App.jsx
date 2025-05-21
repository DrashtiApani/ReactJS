import { useState } from "react";

function App() {
  const [formInput, setFormInput] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    usergender: "",
    usercourse: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setFormInput({
          ...formInput,
          [name]: [...formInput[name], value],
        });
      } else {
        setFormInput({
          ...formInput,
          [name]: formInput[name].filter((item) => item !== value),
        });
      }
    } else {
      setFormInput({
        ...formInput,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInput);

    


    // value null thai jai ane form rest thai
    setFormInput({
      username: "",
      useremail: "",
      userpassword: "",
      usergender: "",
      usercourse: [],
    });
  };

  return (
    <div className="app">
      <div className="form-card">
        <h2 className="title">Registration Form</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="username"
              value={formInput.username}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="useremail"
              value={formInput.useremail}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="userpassword"
              value={formInput.userpassword}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <div className="options">
              <label>
                <input
                  type="radio"
                  name="usergender"
                  value="male"
                  checked={formInput.usergender === "male"}
                  onChange={handleChange}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="usergender"
                  value="female"
                  checked={formInput.usergender === "female"}
                  onChange={handleChange}
                />{" "}
                Female
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Courses</label>
            <div className="options">
              <label>
                <input
                  type="checkbox"
                  name="usercourse"
                  value="react"
                  checked={formInput.usercourse.includes("react")}
                  onChange={handleChange}
                />{" "}
                React
              </label>
              <label>
                <input
                  type="checkbox"
                  name="usercourse"
                  value="C++"
                  checked={formInput.usercourse.includes("C++")}
                  onChange={handleChange}
                />{" "}
                C++
              </label>
              <label>
                <input
                  type="checkbox"
                  name="usercourse"
                  value="angular"
                  checked={formInput.usercourse.includes("angular")}
                  onChange={handleChange}
                />{" "}
                Angular
              </label>
            </div>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>

      {/* CSS */}
      <style jsx>{`
        .app {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(to right, #ece9e6, #ffffff);
          padding: 20px;
        }

        .form-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 500px;
        }

        .title {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #333;
          font-size: 1.5rem;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: #444;
        }

        .form-group input[type="text"],
        .form-group input[type="email"],
        .form-group input[type="password"] {
          padding: 0.6rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
          transition: border 0.3s, box-shadow 0.3s;
        }

        .form-group input:focus {
          border-color: #4a90e2;
          box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
          outline: none;
        }

        .options {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .options label {
          font-weight: normal;
          cursor: pointer;
        }

        .submit-btn {
          padding: 0.7rem 1.2rem;
          background-color: #4a90e2;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #357ab8;
        }

        @media (max-width: 480px) {
          .options {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
