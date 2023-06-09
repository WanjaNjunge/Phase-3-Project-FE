import React, { useState } from "react";
import { signUp, login } from "../api";
import "./LoginForm.css";

const LoginForm = ({ onLogin }) => {
  const [formType, setFormType] = useState("login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleFormToggle = () => {
    setFormType(formType === "login" ? "signup" : "login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = { email, password };

    if (formType === "login") {
      login(credentials)
        .then(() => onLogin())
        .catch((error) => console.log(error));
    } else {
      signUp(credentials)
        .then(() => onLogin())
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="login-form">
      <h2>{formType === "login" ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div>
            <input  type="checkbox" value="remember-me" />
            <label for="flexCheckDefault">
                Remember me
            </label>
        </div>
        <br />
        <button type="submit">{formType === "login" ? "Login" : "Sign Up"}</button>
      </form>
      <p>
        {formType === "login" ? "Don't have an account?" : "Already have an account?"}
        <button onClick={handleFormToggle}>{formType === "login" ? "Sign Up" : "Login"}</button>
      </p>
    </div>
  );
};

export default LoginForm;
