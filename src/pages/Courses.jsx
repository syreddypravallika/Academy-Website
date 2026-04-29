import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Courses.css";
// EXACT imports from your VS Code explorer screenshot
import javaImg from "../images/java.jpg";
import dsImg from "../images/ds.jpg";
import pythonImg from "../images/python.jpg";
import csharpImg from "../images/csharp.jpg"; 
import reactImg from "../images/react.jpg";
import powerbiImg from "../images/powerbi.jpg";
import securityImg from "../images/security.jpg";
import cloudImg from "../images/cloud.jpg";
import azureImg from "../images/azure.jpg";
import apiImg from "../images/api.jpg";
import awsImg from "../images/aws.jpg";
import codeImg from "../images/code.jpg";
import nextImg from "../images/next.jpg";
const Courses = () => {
  const navigate = useNavigate();

  const coursesData = [
    {
      name: "Java Full Stack Development",
      logo: javaImg,
      duration: "6 Months",
      fee: "25000",
      info: `Java Full Stack Development teaches you to create complete web applications from design to deployment. You will master both frontend and backend, along with database management, real-world projects, and deployment.

Frontend: HTML, CSS, JavaScript, React
Backend: Core Java, Spring Boot
Database: MySQL, SQL
Tools/Platforms: Git, Maven, Postman, Tomcat

Key Highlights:
* Industry-relevant projects for practical experience
* Covers complete development workflow
* Deployment on server and cloud

Career Roles: Java Full Stack Developer, Backend Developer, Software Engineer`
    },
    {
      name: "Data Science & AI",
      logo: dsImg,
      duration: "4 Months",
      fee: "15000",
      info: `This course teaches you to analyze, visualize, and model data to build AI-powered solutions. You will learn Python, data analytics, machine learning, and deep learning to create intelligent systems.

Frontend: Data visualization (Power BI, Matplotlib)
Backend: Python (NumPy, Pandas, Scikit-learn)
Database: SQL, NoSQL
Tools/Platforms: Jupyter Notebook, Google Colab, TensorFlow

Career Roles: Data Scientist, AI Engineer, Machine Learning Developer`
    },
    {
      name: "Python Full Stack with AI Integration & DSA",
      logo: pythonImg,
      duration: "6 Months",
      fee: "25000",
      info: `This course combines Python Full Stack development with AI integration and Data Structures & Algorithms for better problem-solving.

Frontend: HTML, CSS, JavaScript, React
Backend: Python Django, Flask
Database: MySQL, PostgreSQL
Tools/Platforms: Git, VS Code, Cloud deployment`
    },
    {
      name: ".NET Full Stack Development",
      logo: csharpImg,
      duration: "4 Months",
      fee: "20000",
      info: `.NET Full Stack Development focuses on Microsoft-based application building with frontend, backend, and database skills.

Frontend: HTML, CSS, JavaScript, Angular/React
Backend: C#, ASP.NET Core, MVC
Database: SQL Server
Tools/Platforms: Visual Studio, Azure`
    },
    {
      name: "React.js",
      logo: reactImg,
      duration: "1 Month",
      fee: "12000",
      info: `React.js focuses on creating modern, responsive, and interactive user interfaces. design dynamic single-page applications with best practices.

Frontend: React components, Hooks, Routing
Tools/Platforms: VS Code, Node.js, Vercel`
    },
    {
      name: "Power BI Full Stack",
      logo: powerbiImg,
      duration: "4 Months",
      fee: "15000",
      info: `Power BI Full Stack teaches you to analyze and visualize data to create interactive dashboards.

Frontend: Power BI visuals and dashboards
Backend: DAX calculations, Power Query
Database: SQL, Excel integration`
    },
    {
      name: "Cyber Security",
      logo: securityImg,
      duration: "6 Months",
      fee: "30000",
      info: `Focuses on protecting systems, networks, and data from cyber threats. Learn risk assessment, ethical hacking, and security management.

Tools/Platforms: Kali Linux, Wireshark, Firewalls`
    },
    {
      name: "Multi-Cloud",
      logo: cloudImg,
      duration: "45 Days",
      fee: "14000",
      info: `Learn to work with AWS, Azure, and Google Cloud together for flexible and optimized deployment.

Tools/Platforms: CLI tools, Terraform, Kubernetes`
    },
    {
      name: "Azure",
      logo: azureImg,
      duration: "45 Days",
      fee: "12000",
      info: `Training prepares you to work on Microsoft’s cloud platform. Learn app hosting, networking, and DevOps integration.

Tools/Platforms: Azure DevOps, Visual Studio`
    },
    {
      name: "FastAPI Full Stack",
      logo: apiImg,
      duration: "4 Months",
      fee: "20000",
      info: `Build high-performance APIs and web apps using Python and FastAPI.

Frontend: HTML, CSS, JavaScript, React
Backend: FastAPI, Python`
    },
    {
      name: "AWS DevOps",
      logo: awsImg,
      duration: "4 Months",
      fee: "15000",
      info: `Automation, continuous integration, and deployment using AWS services.

Tools/Platforms: Docker, Kubernetes, Terraform`
    },
    {
      name: "MERN Full Stack",
      logo: codeImg,
      duration: "4 Months",
      fee: "20000",
      info: `Create modern web apps using MongoDB, Express.js, React, and Node.js.

Frontend: React.js (components, routing)
Backend: Node.js, Express.js
Database: MongoDB`
    },
    {
      name: "Next.js Full Stack",
      logo: nextImg,
      duration: "4 Months",
      fee: "20000",
      info: `Build SEO-friendly, high-performance applications with React and Next.js.

Frontend: Next.js, React components
Backend: Next.js API routes`
    }
  ];

  const [selectedCourse, setSelectedCourse] = useState(null);

  const handlePay = () => {
    if (selectedCourse) {
      navigate("/payment", { 
        state: { 
          courseName: selectedCourse.name, 
          amount: selectedCourse.fee 
        } 
      });
    }
  };

  return (
    <div className="dashboard-wrapper">
      <div className="title-bar">Institute Courses</div>
      
      <div className="main-layout">
        <aside className="sidebar">
          {coursesData.map((course, index) => (
            <div 
              key={index} 
              /* FIXED LINE BELOW: Added the ? after selectedCourse */
              className={`course-card ${selectedCourse?.name === course.name ? "active-card" : ""}`}
              onClick={() => setSelectedCourse(course)}
            >
              <img src={course.logo} alt={course.name} className="course-logo" />
              <div className="course-name">{course.name}</div>
              <button className="view-btn">View More</button>
            </div>
          ))}
        </aside>

        <main className="content">
          {!selectedCourse ? (
            <div className="empty-state">
              <h1 className="course-title">Select a Course</h1>
              <div className="course-info-card">
                <p className="info-text">Click on any course on the left to view details here.</p>
              </div>
            </div>
          ) : (
            <div className="selected-course-details">
              <div className="course-header">
                <h1 className="course-title">{selectedCourse.name}</h1>
                <div className="course-meta">Duration: {selectedCourse.duration}</div>
                <div className="course-meta">Course Fee: ₹{selectedCourse.fee}</div>
              </div>

              <div className="course-info-card">
                <p className="info-text">{selectedCourse.info}</p>
                <div className="action-section">
                  <button className="pay-now-btn" onClick={handlePay}>
                    Pay & Enroll Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Courses;