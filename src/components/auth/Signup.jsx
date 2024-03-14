import React, { useState} from "react";

import "../../css/AuthPages.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

export default function Signup() {
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  // Function to handle input change and update form data state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Save user data to local storage
    const userData = JSON.parse(localStorage.getItem("UsersData")) || [];
    userData.push(formData);
    localStorage.setItem("UsersData", JSON.stringify(userData));

    setFormData({
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
    });

    setTimeout(navigate("/login"), 2000);
  };

  return (
    <>
      <div className="formboxOuter" >
        <div className="formBox">
          <form onSubmit={handleSubmit}>
            <TextField
              required
              id="username"
              name="username"
              label="Required"
              placeholder="username"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              color="primary"
              value={formData.username}
              onChange={handleChange}
            />
            <br />
            <br />
            <TextField
              required
              id="email"
              name="email"
              label="Required"
              placeholder="email"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            <br />

            <TextField
              required
              id="password"
              name="password"
              label="Required"
              placeholder="password"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            <br />
            <br />
            <TextField
              required
              id="phoneNumber"
              name="phoneNumber"
              label="Required"
              placeholder="mobile no"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
            />

            <br />
            <br />
            <Button type="submit" variant="contained">
              SignUp
            </Button>
          </form>
          <hr style={{ width: "40%" }} />
          <Button
            variant="contained"
            style={{ padding: "1% 12%" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            login
          </Button>
        </div>
      </div>
    </>
  );
}
