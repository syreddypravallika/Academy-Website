import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [statusMsg, setStatusMsg] = useState({ text: "", type: "" });

  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    setStatusMsg({ text: "", type: "" });

    if (!email || !newPassword) {
      setStatusMsg({ text: "Please fill all fields", type: "error" });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/forgot-password",
        {
          email: email,
          newPassword: newPassword,
        }
      );

      setStatusMsg({ text: response.data.message, type: "success" });

      setEmail("");
      setNewPassword("");

      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (error) {
      setStatusMsg({
        text: error.response?.data?.message || "Password reset failed",
        type: "error",
      });
    }
  };

  return (
    <div className="forgot-page">
      <div className="forgot-box">
        <h1 className="forgot-title">Forgot Password</h1>

        {statusMsg.text && (
          <div
            style={{
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "6px",
              textAlign: "center",
              fontWeight: "bold",
              backgroundColor:
                statusMsg.type === "success" ? "#dcfce7" : "#fee2e2",
              color:
                statusMsg.type === "success" ? "#166534" : "#991b1b",
            }}
          >
            {statusMsg.text}
          </div>
        )}

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
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;