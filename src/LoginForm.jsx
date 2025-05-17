import React from "react";
import "./LoginForm.css";

function LoginForm({ switchToSignUp, theme }) {
  return (
    <div className={`login-box ${theme}`}>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p>
          Don't have an account?{" "}
          <button
            type="button"
            className="link-btn"
            onClick={switchToSignUp}
          >
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;