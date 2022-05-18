import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    const intialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };


  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
        axios.post("http://127.0.0.1:8000/api/login", 
        formValues
    ).then((res) => localStorage.setItem("token", res.data.success.token))
 
    
    
    // {
    //     "email": "aminatokunuga24@gmail.com",
    //     "password": "password"
    // }
  };
  
  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    return errors;
  };

  
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors])
    
  return (
     <div>
        <h1>Sign in to continue</h1>
        {Object.keys(formErrors).length === 0 && isSubmitting && <Navigate to ="/"/>}
        <form onSubmit={handleSubmit} noValidate>
          
        <div class="login-page">
        <div class="form">
        
                <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
            />
            {formErrors.email && <span>{formErrors.email}</span>}
                
            <input
              type="password"
              name="password"
              id="password"
              value={formValues.password}
              onChange={handleChange}
            />
            {formErrors.password && <span>{formErrors.password}</span>}
                <button type="submit">login</button>
                <p class="message">Not registered? <a href="signnup">Create an account</a></p>
      
        </div>
        </div>
        </form>
      </div>
  )
}

export default Login