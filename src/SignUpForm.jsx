import React from "react";
import "./LoginForm.css"; // reuse same styles

function SignUpForm({ switchToLogin, theme }) {
  return (
    <div className={`login-box ${theme}`}>
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Create Account</button>
        <p>
          Already have an account?{" "}
          <button
            type="button"
            className="link-btn"
            onClick={switchToLogin}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;