import React from "react";
import "./About.css";
import aboutImg1 from "../images/frontpg3.jpg";
import weekendImg from "../images/weekend.jpg";
import mockImg from "../images/mock.jpg";
import onlineImg from "../images/onlinetraining.jpg";
import certImg from "../images/certified.jpg";

function About() {
  return (
    <div className="about-page">
      {/* SECTION 1: EMPOWERING (BALANCED HEIGHT + DEEP INFO) */}
      <section className="full-width-section empower-bg">
        <div className="split-grid">
          <div className="image-side">
            <img src={aboutImg1} alt="EDU Training Session" />
          </div>
          <div className="text-side">
            <h2 className="tagline">EMPOWERING CAREERS</h2>
            <h1 className="main-heading">Building The Next Generation of Tech Leaders</h1>
            <p>
              EDU Education is a specialized training hub designed specifically for students 
              and freshers aiming to break into the fast-paced tech industry. We recognized 
              that traditional academic routes often focus heavily on theory, leaving a massive 
              gap when it comes to the practical, "Real World" aspect of software development.
            </p>
            <p>
              Our entire curriculum is built around <strong>live projects, industry standards, 
              and hands-on logic building.</strong> We don't just teach tools; we mentor you 
              through the process of thinking like a professional engineer. You will learn to 
              handle complex Git workflows, participate in code reviews, and understand the 
              full lifecycle of a project from conception to deployment.
            </p>
            <p>
              By the time you complete your training, you will have developed the confidence 
              to work in high-pressure corporate environments. We focus on grooming your 
              technical mindset so that you are ready to tackle any technology stack with 
              ease and professional maturity.
            </p>
            <div className="feature-list">
              <div className="feature">✦ Hands-on Industrial Work Culture</div>
              <div className="feature">✦ Expert Mentorship from Senior Developers</div>
              <div className="feature">✦ Real-Time Debugging & Problem Solving</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE OFFER (CIRCLE PICTURES + EXTENDED INFO) */}
      <section className="offer-section">
        <div className="full-container">
          <h2 className="offer-title">What We Offer</h2>
          <p className="offer-intro">A comprehensive 360-degree approach to professional skill development, ensuring you are prepared for every challenge in the tech world.</p>
          
          <div className="offer-grid">
            <div className="offer-card">
              <div className="card-image-circle">
                <img src={onlineImg} alt="Online Training" />
              </div>
              <h3>Interactive Online Training</h3>
              <p>
                Our online classes aren't just one-way lectures. We provide a fully 
                interactive virtual classroom experience where students can share screens, 
                collaborate on live code editors, and get instant feedback from 
                instructors. Every session is backed up with recorded versions and 
                daily practice assignments to ensure that your learning never stops, 
                no matter where you are located.
              </p>
            </div>

            <div className="offer-card">
              <div className="card-image-circle">
                <img src={weekendImg} alt="Weekly Tests" />
              </div>
              <h3>Technical Skill Assessments</h3>
              <p>
                We believe that consistent evaluation is the key to mastery. Every weekend, 
                we conduct rigorous technical challenges that are designed to mirror the 
                entrance exams of top-tier product companies. These tests focus on 
                data structures, algorithmic logic, and clean coding standards. Detailed 
                performance reports help you identify your strengths and work on your 
                weaknesses systematically.
              </p>
            </div>

            <div className="offer-card">
              <div className="card-image-circle">
                <img src={mockImg} alt="Mock Interviews" />
              </div>
              <h3>Mock Interview Bootcamps</h3>
              <p>
                Conquer your interview fears with our specialized mock sessions. We conduct 
                multiple rounds of technical and HR interviews, simulating the exact 
                environment of a corporate hiring process. Our experts provide 
                in-depth feedback on your communication skills, technical depth, and 
                body language. We also help you build a professional resume and 
                LinkedIn profile to help you stand out to recruiters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CERTIFICATION (BALANCED HEIGHT + DEEP INFO) */}
      <section className="full-width-section cert-bg">
        <div className="split-grid reverse">
          <div className="image-side">
            <img src={certImg} alt="Professional Certification" className="cert-image-tweak" />
          </div>
          <div className="text-side">
            <h2 className="tagline">VALIDATION</h2>
            <h1 className="main-heading">Global Certification & Career Roadmap</h1>
            <p>
              The EDU Education Certificate is more than just a piece of paper; it is a 
              globally recognized validation of technical excellence. This certificate 
              proves that you have successfully completed hundreds of hours of 
              intensive training and have cleared our high-standard internal assessments.
            </p>
            <p>
              Our certification is highly regarded by our network of industry partners 
              because it is backed by a <strong>Verifiable Project Portfolio.</strong> 
              Hiring managers know that an EDU certified student has the practical skills 
              required to contribute to a project from day one without needing 
              extensive basic training.
            </p>
            <p>
              Beyond the certificate, we offer a dedicated career roadmap. We guide you 
              through the entire placement process, helping you optimize your professional 
              presence and connecting you with opportunities that match your skill set 
              and career aspirations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;