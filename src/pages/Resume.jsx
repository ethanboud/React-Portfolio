// import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import resume from "../assets/Ethan_Boud Resume.pdf"

export default function Resume() {
    return (
      <div>
        <h1 className="center">Resume and Proficiencies</h1>
        <ul className="center-list">
          <li>Quality Engineer</li>
          <li>Problem Solving</li>
          <li>Quality Control</li>
          <li>Process improvements</li>
          <li>Troubleshooting</li>
          <li>Auditing</li>
          <li>3D modeling</li>
          <li>AutoCAD</li>
          <li>Technology and Engineering</li>
          <li>Design Thinking</li>
          <li>Communication technology</li>
          <li>Creativity</li>
          <li>Design for X</li>
          <li>Creative solutions</li>
          <li>Applied Engineering</li>
          <li>HTML</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>SQL</li>
          <li>Version Control</li>
          <li>Web Hosting</li>
          <li>Debugging</li>
          <li>Collaboration</li>
          <li>Attention to Detail</li>
          <li>Adaptability</li>
          <li>Wireframing</li>
          <li>VS Code</li>
          <li>Browser DevTools</li>
        </ul>
        <br></br>
        <h2 className="center">Resume</h2>
        <div className="center">
         <a className="downbtn" href={resume} download="EB_Resume">DOWNLOAD</a>
        </div>
      </div>
    );
  }
  