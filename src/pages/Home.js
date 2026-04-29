import React from "react";
import "./Home.css";
import homeImg from "../images/home.jpg";

function Home() {
  return (
    <div className="home-page">
     
      {/* MAIN SECTION */}
      <div className="home-main" id="home">
        <div className="home-left">
          <p className="home-welcome">Welcome to EDU Education</p>

          <h1 className="home-title">Master the skills to drive your career</h1>

          <p className="home-desc">
            EDU Education is a professional training institute that helps
            students and freshers gain real-time skills in trending technologies.
            We focus on strong fundamentals, practical learning, and step-by-step
            guidance so that students can confidently build projects and attend
            interviews.
          </p>

          <p className="home-desc">
            Our training is designed to support learners from beginner level to
            job-ready level. With regular practice sessions, structured learning
            plans, and mentor support, we ensure every student gets the clarity
            needed to start and grow in their career.
          </p>
        </div>

        <div className="home-right">
          <img src={homeImg} alt="EDU Education Home" />
        </div>
      </div>

      {/* NOT SURE SECTION */}
      <div className="home-help" id="about">
        <h2 className="home-help-title">Not sure where to begin?</h2>

        <p className="home-help-text">
          Many students feel confused about which course to start with, how much
          time it will take, and whether they can really crack interviews. At
          EDU Education, we guide you step-by-step based on your background and
          your career goals.
        </p>

        <p className="home-help-text">
          If you are a beginner, we help you start from basics. If you already
          have some knowledge, we help you improve skills through projects,
          mock interviews, and assessments. Our goal is to make learning simple,
          structured, and career-focused.
        </p>
      </div>

      {/* CERTIFICATIONS SECTION */}
      <div className="home-cert" id="courses">
        <h2 className="home-section-title">More Certifications</h2>

        <p className="home-section-text">
          EDU Education provides course completion certifications for students.
          These certifications show that the student has completed training with
          practical knowledge, assessments, and skill-based learning. Students
          can add these certifications to their resumes and LinkedIn profiles.
        </p>

        <p className="home-section-text">
          Certifications help students improve credibility and confidence while
          applying for jobs and internships. Along with certification, we also
          support students in building strong portfolios and projects to stand
          out in interviews.
        </p>
      </div>

      {/* STUDENTS FEEDBACK SECTION */}
      <div className="home-feedback">
        <h2 className="home-section-title">Students Community Feedback</h2>

        <p className="home-section-text">
          Our students share their learning experience and growth journey with
          EDU Education. We focus on practical training, clear explanation, and
          friendly mentor support. Here are some of the feedback comments from
          students.
        </p>

        <div className="feedback-scroll">
          <div className="feedback-card">
            <p className="feedback-text">
              “The classes are very clear and beginner friendly. I learned step
              by step and gained confidence in coding. The trainers explained
              everything in a simple way.”
            </p>
            <h4 className="feedback-name">— Student Review</h4>
          </div>

          <div className="feedback-card">
            <p className="feedback-text">
              “Weekend tests helped me understand where I am weak. Mock
              interviews were very useful. Now I feel ready to attend real
              interviews confidently.”
            </p>
            <h4 className="feedback-name">— Student Review</h4>
          </div>

          <div className="feedback-card">
            <p className="feedback-text">
              “The practical projects and assignments were very helpful. I built
              my own portfolio website and learned how real-time development
              works. Good support from mentors.”
            </p>
            <h4 className="feedback-name">— Student Review</h4>
          </div>

          <div className="feedback-card">
            <p className="feedback-text">
              “I joined as a beginner and I was scared about coding. But the
              teaching style was very friendly and structured. I improved my
              skills a lot.”
            </p>
            <h4 className="feedback-name">— Student Review</h4>
          </div>
        </div>
      </div>

      {/* SECTION IDs for linking */}
      <div id="login"></div>
      <div id="register"></div>
      <div id="contact"></div>
    </div>
  );
}

export default Home;
