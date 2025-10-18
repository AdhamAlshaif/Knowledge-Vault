import React, { useState } from "react";
import "./CreateUser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CreateUser() {
  //This here will help us navigate to different pages, and in this case after we create.
  //a user we will navigate to the login page so that user can login.
  let navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    password: ""
  });
  const { firstName, lastName, dateOfBirth, email, password } = loginInfo;


  //go over this bottom portion again.
  const handleChange = (e) =>
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/users", loginInfo);
    navigate("/");
  }


  return (
    <div className="create-user-container">
      <h2>Create a New Account</h2>
      <form className="create-user-form" onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text"  placeholder="Enter Your First Name" name="firstName" value={firstName} onChange={handleChange} required />

        <label>Last Name:</label>
        <input type="text" placeholder="Enter Your Last Name" name="lastName" value={lastName} onChange={handleChange} required />

  <label>Date of Birth:</label>
  <input type="date" name="dateOfBirth" value={dateOfBirth} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handleChange} required />

        <h3>
          Already have an Account?{" "}
          <Link to="/login">Login</Link>
        </h3>

        <button type="submit" className="create-user-button">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
