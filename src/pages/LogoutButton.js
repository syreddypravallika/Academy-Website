import React from "react";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from storage
    alert("You have been logged out."); // Optional message
    navigate("/login"); // Redirect to login page
  };

  return <button className="logout-btn" onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;