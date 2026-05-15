import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Help Section */}
        <div className="footer-column">
          <h3>Help</h3>
          <p>Email:support@edu-education.com</p>
        </div>

        {/* Contact Section */}
        <div className="footer-column">
          <h3>Contact</h3>
          <p>EDU Education, 123 Main Street</p>
          <p>Hyderabad, Telangana, India</p>
          <p>Phone: +91 98765 43210</p>
        </div>

        {/* EDU Education Section */}
        <div className="footer-column">
          <h3>EDU Education</h3>
          <p>We provide training in Web Development, Data Science, Python, AI & Machine Learning, and professional skills to make students industry-ready.</p>
        </div>

        {/* About Section */}
        <div className="footer-column">
          <h3>About</h3>
          <p>EDU Education is a professional training institute helping students build technical skills and career-ready knowledge with practical guidance.</p>
        </div>

        {/* Careers Section */}
        <div className="footer-column">
          <h3>Careers</h3>
          <p>We provide career support with resume preparation, interview guidance, and practical project experience to help students land jobs in top companies.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 EDU Education. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;


