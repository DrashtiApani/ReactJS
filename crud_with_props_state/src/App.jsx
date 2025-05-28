import Form from "./Form";
import { useState } from "react";
import ViewForm from "./ViewForm";

function App() {
  const [formInput, setFormInput] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    courses: [],
    city: "",
  });

  const [submittedForms, setSubmittedForms] = useState([]);

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

    setSubmittedForms([...submittedForms, formInput]); 
    setFormInput({
      username: "",
      email: "",
      password: "",
      gender: "",
      courses: [],
      city: "",
    });
  };

  return (
    <>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formInput={formInput}
      />
      <br />
      <br />
      <ViewForm formInput={submittedForms} />
    </>
  );
}

export default App;
