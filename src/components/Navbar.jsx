import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check login user
  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    const token = localStorage.getItem("token");

    if (token && email) {
      setIsLoggedIn(true);
      setUserName(email.split("@")[0]); // username before @
    }
  }, []);

  // Logout
  const handleLogout = () => {

  const confirmLogout = window.confirm("Are you sure you want to logout?");

  if (confirmLogout) {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  }

};
  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <h2 style={styles.logo}>EDU Education</h2>

      {/* Hamburger */}
      {isMobile && (
        <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      )}

      {/* Links */}
      <div
        style={{
          ...styles.linksContainer,
          ...(isMobile
            ? menuOpen
              ? styles.mobileMenuOpen
              : styles.mobileMenuClosed
            : {})
        }}
      >
        <NavLink to="/" style={navLinkStyle}>Home</NavLink>
        <NavLink to="/about" style={navLinkStyle}>About</NavLink>
        <NavLink to="/courses" style={navLinkStyle}>Courses</NavLink>
        <NavLink to="/contact" style={navLinkStyle}>Contact</NavLink>

        {!isLoggedIn ? (
          <>
            <NavLink to="/login" style={styles.button}>Sign In</NavLink>
            <NavLink to="/register" style={styles.button}>Sign Up</NavLink>
          </>
        ) : (
          <div style={{ position: "relative" }}>
            <button
              style={styles.button}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              👤 {userName} ▼
            </button>

            {dropdownOpen && (
              <div style={styles.dropdown}>
                <div style={{ padding: "10px" }}>👤 {userName}</div>
                <button style={styles.logoutBtn} onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

const navLinkStyle = ({ isActive }) => ({
  color: isActive ? "#f39c12" : "#fff",
  textDecoration: "none",
  fontWeight: "500",
  borderBottom: isActive ? "2px solid #f39c12" : "none",
  paddingBottom: "4px"
});

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#222",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    flexWrap: "wrap"
  },

  logo: {
    fontSize: "1.6rem",
    fontWeight: "bold",
    margin: 0
  },

  hamburger: {
    fontSize: "1.8rem",
    cursor: "pointer"
  },

  linksContainer: {
    display: "flex",
    gap: "25px",
    alignItems: "center"
  },

  mobileMenuOpen: {
    flexDirection: "column",
    width: "100%",
    marginTop: "15px"
  },

  mobileMenuClosed: {
    display: "none"
  },

  button: {
    backgroundColor: "#f39c12",
    color: "#fff",
    padding: "8px 18px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer"
  },

  dropdown: {
    position: "absolute",
    right: 0,
    top: "45px",
    background: "#fff",
    color: "#000",
    borderRadius: "6px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    width: "140px",
    textAlign: "center"
  },

  logoutBtn: {
    width: "100%",
    padding: "10px",
    border: "none",
    background: "#e74c3c",
    color: "#fff",
    cursor: "pointer"
  }
};

export default Navbar;