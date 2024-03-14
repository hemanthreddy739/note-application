import React, { useState, useContext } from "react";
import "../../css/AuthPages.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function generateToken(username) {
  // Function to generate a token combining username and random string
  const randomString = Math.random().toString(36).substring(7);
  return `${username}-${randomString}`;
}

export default function Login() {
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    const userData = JSON.parse(localStorage.getItem("UsersData")) || [];

    const user = userData.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password
    );

    if (user) {
      // Generate token and store in local storage
      setLoggedIn(true);
      const token = generateToken(formData.username);
      localStorage.setItem("loggedInUser", token);
      navigate("/");
    } else {
      setFormData({
        username: "",
        password: "",
      });
    }
  };

  return (
    <>
      <div className="formboxOuter" >
        <div className="formBox">
          <form id="loginForm">
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
            <Button
              variant="contained"
              style={{ padding: "1% 12%" }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </form>
          <p>
            <a
              href="http://localhost:2345"
              style={{ textDecoration: "none", color: "blue" }}
            >
              Forgot password?
            </a>
          </p>
          <hr style={{ width: "40%" }} />
          <Button variant="contained" onClick={() => navigate("/signup")}>
            Signup
          </Button>
        </div>
      </div>
    </>
  );
}
