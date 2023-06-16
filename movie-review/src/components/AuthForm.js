import React, { useState } from "react";

const AuthForm = () => {
  const [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const renderForm = () => {
    switch (authMode) {
      case "signin":
        return (
          <form>
            <h3>Sign In</h3>
            <div>
              Not registered yet?
              <a href="#">Sign Up</a>
            </div>
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <button type="submit">Submit</button>
            <a href="#">Forgot password?</a>
          </form>
        );
      case "signup":
        return (
          <form>
            <h3>Sign Up</h3>
            <div>
              Already registered?
              <a href="#">Sign In</a>
            </div>
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <button type="submit">Submit</button>
            <a href="#">Forgot password?</a>
          </form>
        );
      default:
        throw new Error("Invalid auth mode");
    }
  };

  return (
    <div>
      {renderForm()}
      <button onClick={changeAuthMode}>Switch to {authMode === "signin" ? "Sign Up" : "Sign In"}</button>
    </div>
  );
};

export default AuthForm;