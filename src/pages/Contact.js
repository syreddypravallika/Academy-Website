import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <h1 className="contact-title">EDU Education</h1>
        <p className="contact-subtitle">
          Get in touch with us for admissions, courses, and training details.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="contact-container">
        <div className="contact-card">
          <h2>Contact Information</h2>

          <p>
            <span>Email:</span> edueducation@gmail.com
          </p>
          <p>
            <span>Phone:</span> +91 98765 43210
          </p>
          <p>
            <span>Address:</span> 2nd Floor, Tech Plaza, Jubilee Hills, Hyderabad,
            Telangana - 500033
          </p>
          <p>
            <span>Institute Hours:</span> Mon - Sat (9:00 AM - 7:00 PM)
          </p>
        </div>

        {/* Social Media */}
        <div className="contact-card">
          <h2>Social Media</h2>

          <p className="social-links">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </div>

        {/* FAQ */}
        <div className="contact-card">
          <h2>FAQ (Common Questions)</h2>

          <p>
            <a href="/faq" className="faq-link">
              Click here to view FAQ
            </a>
          </p>

          <div className="faq-mini">
            <p>
              <strong>Q:</strong> Do you provide placements?
              <br />
              <strong>A:</strong> Yes, we provide placement assistance and
              interview training.
            </p>

            <p>
              <strong>Q:</strong> Do you provide online classes?
              <br />
              <strong>A:</strong> Yes, online and offline classes are available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

