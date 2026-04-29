import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter email and password");
      return;
    }

    // Registered user check (saved from Register page)
    const savedEmail = localStorage.getItem("registerEmail");
    const savedPassword = localStorage.getItem("registerPassword");

    if (!savedEmail || !savedPassword) {
      alert("You are not registered. Please register first!");
      return;
    }

    if (email === savedEmail && password === savedPassword) {
      alert("Login Successful!");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="login-title">Login</h1>

        <form onSubmit={handleLogin} className="login-form">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Remember + Forgot */}
          <div className="login-row">
            <div className="remember-box">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Remember me</span>
            </div>

    <Link to="/forgot" className="forgot-link">Forgot Password ?</Link>

          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

