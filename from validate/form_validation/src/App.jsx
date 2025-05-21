import { useState } from "react"


function App() {

  const [formInputs, setFormInputs] = useState({
    username: "",
    useremail: "",
    gender: ""
  })

  const [formErrors, setFormErrors] = useState({
    username: "",
    useremail: "",
    gender: ""
  })


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormInputs({
      ...formInputs,
      [name]: value
    })
  }

  const formValidation = (e) => {

    let check = true
    const errors = {
      username: "",
      useremail: "",
      gender: ""
    }

    if (formInputs.username === "") {
      errors.username = "Name is required"
      check = false
    }
    if (formInputs.useremail === "") {
      errors.useremail = "Email is required"
      check = false
    }
    if (formInputs.gender === "") {
      errors.gender = "Gender is required"
      check = false
    }

    setFormErrors(errors)

    return check
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formValidation()) {

      console.log(formInputs);

      // value null thai jai after submit
      setFormInputs({
        username: "",
        useremail: "",
        gender: ""
      })
    }

  }


  return (
    <div align="center">
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit} >
        <table border={6}>

          <tr>
            <td>Name</td>
            <td><input type="text" name="username" value={formInputs.username} onChange={handleChange} placeholder="Enter your name" />
              {
                formErrors.username && (
                  <span style={{ color: "red" }}>{formErrors.username}</span>
                )
              }
            </td>

          </tr>

          <tr>
            <td>Email</td>
            <td><input type="email" name="useremail" value={formInputs.useremail} onChange={handleChange} placeholder="Enter your email" />
            {
                formErrors.useremail && (
                  <span style={{ color: "red" }}>{formErrors.useremail}</span>
                )
              }</td>
          </tr>

          <tr>
            <td>Gender</td>
            <td><input type="radio" name="gender" value="male" checked={formInputs.gender === "male"} onChange={handleChange} /> Male
              <input type="radio" name="gender" value="female" checked={formInputs.gender === "female"} onChange={handleChange} /> Female </td>
          </tr>

          <tr>
            <td></td>
            <td align="center"><input type="submit" /></td>
          </tr>
        </table>
      </form>
    </div>
  )
}

export default App
