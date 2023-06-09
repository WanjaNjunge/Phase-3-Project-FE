import React, { useState } from "react";
import { login, signUp } from "../api";

const LoginForm = ({ onLogin }) => {
  const [formType, setFormType] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Add this line

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "login") {
      login(name, email, password)
        .then((user) => {
          // Handle successful login
          onLogin(user);
        })
        .catch((error) => {
          // Handle login error
          console.error("Login error:", error);
        });
    } else if (formType === "signup") {
      signUp(name, email, password)
        .then((user) => {
          // Handle successful sign-up
          onLogin(user);
        })
        .catch((error) => {
          // Handle sign-up error
          console.error("Sign-up error:", error);
        });
    }
  };

  return (
    <div>
      <h2>{formType === "login" ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        {/* Additional form fields for sign-up */}
        {formType === "signup" && (
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
        )}
        {/* Form buttons */}
        <button type="submit">{formType === "login" ? "Login" : "Sign Up"}</button>
        <button type="button" onClick={() => setFormType(formType === "login" ? "signup" : "login")}>
          {formType === "login" ? "Switch to Sign Up" : "Switch to Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
