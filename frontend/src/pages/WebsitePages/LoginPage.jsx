import React from "react";
import "./LoginPage.css";
import CreateUser from "./CreateUser";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="login-container">
      <h2>Login to Knowledge Vault</h2>
      <form className="login-form">
        <label>Email</label>
        <input type="email" name="email" required />

        <label>Password:</label>
        <input type="password" name="password" required />
        <h3>
          Don't have an account?{" "}
          <Link to="/create-user">Create an account</Link>
        </h3>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}
export default LoginPage;
