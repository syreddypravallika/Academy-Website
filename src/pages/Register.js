import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (fullName === "" || email === "" || phone === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    // ✅ SAVE REGISTER DETAILS HERE
    localStorage.setItem("registerName", fullName);
    localStorage.setItem("registerEmail", email);
    localStorage.setItem("registerPhone", phone);
    localStorage.setItem("registerPassword", password);

    alert("Registration Successful!");

    setFullName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h1 className="register-title">Register</h1>

        <form onSubmit={handleRegister} className="register-form">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label>Create Password</label>
          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

