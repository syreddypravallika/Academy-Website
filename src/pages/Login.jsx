import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ text: "", type: "" });
 const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setStatusMsg({ text: "", type: "" });

    if (email === "" || password === "") {
      setStatusMsg({ text: "Please enter email and password", type: "error" });
      return;
    }
axios.post("http://localhost:5000/api/users/login", {
  email: email,
  password: password
})
.then((response) => {

  console.log("LOGIN RESPONSE:", response.data);

  localStorage.setItem("token", response.data.token);
  localStorage.setItem("userEmail", email);

  setStatusMsg({
    text: response.data.message || "Login successful",
    type: "success"
  });

  setTimeout(() => {
    navigate("/");
    window.location.reload();
  }, 1000);

})
 
    .catch((error) => {
  console.log("LOGIN ERROR:", error.response);
  setStatusMsg({ text: error.response?.data?.message || "Login failed", type: "error" });
});
  };

  return (
    <div className="login-page">
      <div className="login-box" style={{ maxWidth: "650px", width: "100%", padding: "40px" }}>
        <h1 className="login-title">Sign In</h1>

        {statusMsg.text && (
          <div style={{
            padding: "15px", borderRadius: "8px", marginBottom: "20px", textAlign: "center",
            fontWeight: "bold", backgroundColor: statusMsg.type === "success" ? "#dcfce7" : "#fee2e2",
            color: statusMsg.type === "success" ? "#166534" : "#991b1b", border: `1px solid ${statusMsg.type === "success" ? "#bbf7d0" : "#fecaca"}`
          }}>
            {statusMsg.text}
          </div>
        )}

        <form onSubmit={handleLogin} className="login-form">
          <label>Email</label>
          <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <div className="login-row">
            <div className="remember-box">
              <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
              <span>Remember me</span>
            </div>
            <Link to="/forgot" className="forgot-link">Forgot Password ?</Link>
          </div>

          <button type="submit" className="login-btn" style={{ fontSize: "17px", padding: "15px", marginTop: "15px" }}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;