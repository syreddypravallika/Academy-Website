import React from "react";
import "./Courses.css";

import javaImg from "../images/java.jpg";
import pythonImg from "../images/python.jpg";
import dataScienceImg from "../images/datascience.jpg";
import reactImg from "../images/react.jpg";

function Courses() {
  const coursesData = [
    {
      title: "Full Stack Java Development",
      price: "₹25,000",
      duration: "3 Months",
      img: javaImg,
      description: `This course covers complete Java programming from basics to advanced.
You will learn core Java, OOP concepts, JDBC, Servlets, JSP, and Spring framework.
It also includes hands-on projects and real-world application development.
By the end, you will be confident to build enterprise-level Java applications.`,
    },
    {
      title: "Python Full Stack Development",
      price: "₹30,000",
      duration: "4 Months",
      img: pythonImg,
      description: `Learn Python programming along with front-end and back-end development.
The course covers Python, Django, Flask, HTML, CSS, JavaScript, and database integration.
You will build full-stack web applications and APIs with practical projects.
This program prepares you for professional Python developer roles.`,
    },
    {
      title: "Data Science & Machine Learning",
      price: "₹35,000",
      duration: "3 Months",
      img: dataScienceImg,
      description: `Master data analysis, visualization, and machine learning using Python.
The course includes pandas, NumPy, Matplotlib, scikit-learn, and real datasets.
You will learn to build predictive models and perform exploratory data analysis.
By completion, you will be ready to work on data science projects confidently.`,
    },
    {
      title: "React.js Frontend Development",
      price: "₹15,000",
      duration: "1 Month",
      img: reactImg,
      description: `Learn to build dynamic and responsive web applications using React.js.
The course covers JSX, components, props, state, hooks, and routing.
You will create modern single-page applications and reusable UI components.
Hands-on projects help you gain professional front-end development skills.`,
    },
  ];

  return (
    <div className="courses-page">
      <div className="courses-header">
        <h1 className="courses-title">Courses</h1>
        <p className="courses-subtitle">
          Choose the best course and start your career journey with EDU Education.
        </p>
      </div>

      <div className="courses-container">
        {coursesData.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.img} alt={course.title} className="course-img" />

            <div className="course-content">
              <h2 className="course-name">{course.title}</h2>

              <div className="course-info">
                <p>
                  <span>Price:</span> {course.price}
                </p>
                <p>
                  <span>Duration:</span> {course.duration}
                </p>
              </div>

              <p className="course-desc">{course.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
