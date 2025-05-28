const Form = ({ handleChange, handleSubmit, formInput }) => {
  return (
    <div align="center">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tbody>
            <tr>
              <td>Name</td>
              <td><input type="text" name="username" onChange={handleChange} value={formInput.username} /></td>
            </tr>

            <tr>
              <td>Email</td>
              <td><input type="text" name="email" onChange={handleChange} value={formInput.email} /></td>
            </tr>

            <tr>
              <td>Password</td>
              <td><input type="password" name="password" onChange={handleChange} value={formInput.password} /></td>
            </tr>

            <tr>
              <td>Gender</td>
              <td>
                <input type="radio" name="gender" onChange={handleChange} value="male" checked={formInput.gender === "male"} /> Male
                <input type="radio" name="gender" onChange={handleChange} value="female" checked={formInput.gender === "female"} /> Female
              </td>
            </tr>

            <tr>
              <td>Courses</td>
              <td>
                <input type="checkbox" name="courses" onChange={handleChange} value="React" checked={formInput.courses.includes("React")} /> React
                <input type="checkbox" name="courses" onChange={handleChange} value="HTML" checked={formInput.courses.includes("HTML")} /> HTML
                <input type="checkbox" name="courses" onChange={handleChange} value="CSS" checked={formInput.courses.includes("CSS")} /> CSS
                <input type="checkbox" name="courses" onChange={handleChange} value="C++" checked={formInput.courses.includes("C++")} /> C++
                <input type="checkbox" name="courses" onChange={handleChange} value="C" checked={formInput.courses.includes("C")} /> C
              </td>
            </tr>

            <tr align="center">
              <td></td>
              <td><input type="submit" value="Submit" /></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Form;