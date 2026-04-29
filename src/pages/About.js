import React from "react";
import "./About.css";

import aboutImg1 from "../images/frontpg3.jpg";
// import aboutImg2 from "../images/frontpg2.jpg";  // removed

import weekendImg from "../images/weekend.jpg";
import mockImg from "../images/mock.jpg";
import onlineImg from "../images/onlinetraining.jpg";
import certImg from "../images/certified.jpg";

function About() {
  return (
    <div className="about-page">
      {/* Top Section */}
      <div className="about-top">
        <div className="about-top-left">
          <h1 className="about-title">About EDU Education</h1>

          <p className="about-text">
            EDU Education is a professional training institute focused on
            providing industry-ready skills for students and freshers. We aim to
            deliver strong fundamentals, practical learning, and real-time
            guidance to help students build confidence and achieve career goals.
          </p>

          <p className="about-text">
            Our training programs are designed in a structured way, starting
            from basics and moving towards advanced concepts. We support
            students with continuous practice, assignments, and real-time
            learning methods to make them job-ready.
          </p>

          <div className="about-points">
            <div className="about-point">✔ Experienced Trainers</div>
            <div className="about-point">✔ Practical Learning Approach</div>
            <div className="about-point">✔ Student-Friendly Support</div>
            <div className="about-point">✔ Real-Time Projects</div>
          </div>
        </div>

        <div className="about-top-right">
          <img src={aboutImg1} alt="About EDU Education" />
        </div>
      </div>

      {/* Second Image Section */}
      {/* Removed the second picture */}
      {/* <div className="about-image-strip">
        <img src={aboutImg2} alt="Learning Environment" />
      </div> */}

      {/* Services Horizontal Scroll */}
      <div className="about-services">
        <h2 className="about-section-title">What We Offer</h2>

        <div className="about-scroll">
          {/* Online Training */}
          <div className="about-card">
            <img src={onlineImg} alt="Online Training" />
            <h3>Online Training</h3>
            <p>
              We provide online training with live classes, recorded sessions,
              and daily practice tasks. Students can learn from anywhere with
              full support from trainers.
            </p>
          </div>

          {/* Weekend Tests */}
          <div className="about-card">
            <img src={weekendImg} alt="Weekend Tests" />
            <h3>Weekend Tests</h3>
            <p>
              Weekly tests are conducted to evaluate student progress. This
              helps students improve their understanding and build confidence in
              technical topics.
            </p>
          </div>

          {/* Mock Interviews */}
          <div className="about-card">
            <img src={mockImg} alt="Mock Interviews" />
            <h3>Mock Interviews</h3>
            <p>
              Mock interviews are conducted to prepare students for real
              interviews. Students learn how to answer technical and HR
              questions in a professional way.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section (Certification then Career Support) */}
      <div className="about-bottom">
        <div className="about-bottom-card">
          <h2>Certifications We Provide</h2>
          <img className="about-bottom-img" src={certImg} alt="Certification" />
          <p>
            EDU Education provides certifications after course completion. This
            certification shows that the student has completed training with
            practical learning and assessments.
          </p>
          <p>
            Certifications can be added to resumes and LinkedIn profiles. It
            improves credibility and supports students while applying for jobs
            and internships.
          </p>
        </div>

        <div className="about-bottom-card">
          <h2>Career Support & Guidance</h2>
          <p>
            Along with training, EDU Education supports students with career
            guidance, resume preparation, and interview readiness. We guide
            students on how to answer technical questions and how to present
            themselves professionally.
          </p>
          <p>
            We help students understand real-world project flow and industry
            expectations so that they can confidently attend interviews and
            apply for jobs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

