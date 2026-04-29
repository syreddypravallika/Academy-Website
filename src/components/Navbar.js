import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>EDU Education</h2>
      <div style={styles.links}>
        <NavLink to="/" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Home</NavLink>
        <NavLink to="/courses" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Courses</NavLink>
        <NavLink to="/about" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>About</NavLink>
        <NavLink to="/register" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Register</NavLink>
        <NavLink to="/login" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Login</NavLink>
        <NavLink to="/contact" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Contact</NavLink>
      </div>
    </nav>
  );
}

const styles = {
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 30px", background: "#222", color: "#fff", position: "sticky", top: 0, zIndex: 1000 },
  logo: { fontSize: "1.5rem", fontWeight: "bold" },
  links: { display: "flex", gap: "20px" },
  link: { color: "#fff", textDecoration: "none", fontWeight: "bold" },
  activeLink: { color: "#f39c12", textDecoration: "underline", fontWeight: "bold" },
};

export default Navbar;

