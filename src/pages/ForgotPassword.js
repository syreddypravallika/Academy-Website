import React, { useState } from "react";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    if (email === "" || newPassword === "") {
      alert("Please enter email and new password");
      return;
    }

    const savedEmail = localStorage.getItem("registerEmail");

    if (!savedEmail) {
      alert("You are not registered. Please register first!");
      return;
    }

    if (email === savedEmail) {
      localStorage.setItem("registerPassword", newPassword);
      alert("Password Updated Successfully! Now login.");
      setEmail("");
      setNewPassword("");
    } else {
      alert("Email not found! Please enter registered email.");
    }
  };

  return (
    <div className="forgot-page">
      <div className="forgot-box">
        <h1 className="forgot-title">Forgot Password</h1>

        <form onSubmit={handleReset} className="forgot-form">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Create New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <button type="submit" className="forgot-btn">
            Submit
          </button>

          <button
            type="button"
            className="login-btn2"
            onClick={() => alert("Go to Login section below")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
