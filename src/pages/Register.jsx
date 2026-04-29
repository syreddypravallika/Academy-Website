import React, { useState } from "react";
import "./Register.css";
import axios from "axios";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [statusMsg, setStatusMsg] = useState({ text: "", type: "" });

  const handleRegister = (e) => {
    e.preventDefault();
    setStatusMsg({ text: "", type: "" });

    if (!fullName || !email || !phone || !password) {
      setStatusMsg({ text: "Please fill all fields", type: "error" });
      return;
    }

  axios.post("http://localhost:5000/api/users/register", {
  fullName: fullName,
  email: email,
  PhoneNumber: phone,
  password: password,
})
    .then((response) => {
      setStatusMsg({ text: "Signed in successfully!", type: "success" });
      setFullName(""); setEmail(""); setPhone(""); setPassword("");
    })
    .catch((error) => {
      setStatusMsg({ text: error.response?.data?.message || "Sign up failed", type: "error" });
    });
  };

  return (
    <div className="register-page">
      <div className="register-box" style={{ maxWidth: "650px", width: "100%", padding: "40px" }}>
        <h1 className="register-title">Sign Up</h1>

        {statusMsg.text && (
          <div style={{
            padding: "15px", borderRadius: "8px", marginBottom: "20px", textAlign: "center",
            fontWeight: "bold", backgroundColor: statusMsg.type === "success" ? "#dcfce7" : "#fee2e2",
            color: statusMsg.type === "success" ? "#166534" : "#991b1b", border: `1px solid ${statusMsg.type === "success" ? "#bbf7d0" : "#fecaca"}`
          }}>
            {statusMsg.text}
          </div>
        )}

        <form onSubmit={handleRegister} className="register-form">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <label>Email</label>
          <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Phone Number</label>
          <input type="text" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <label>Create Password</label>
          <input type="password" placeholder="Create password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="register-btn" style={{ fontSize: "17px", padding: "15px", marginTop: "10px" }}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Register;