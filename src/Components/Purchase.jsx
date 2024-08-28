import React from "react";
import "../css/Purchase.css";
import html2pdf from "html2pdf.js";
import img from "../images/Screenshot 2024-08-13 134437.png"; // Ensure this path is correct

function Purchase() {
  const handleDownloadPDF = () => {
    const element = document.getElementById("resume");
    const options = {
      margin: 1,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "px", format: [1700, 900], orientation: "portrait" },
    };
    html2pdf().from(element).set(options).save();
  };

  return (
    <>
      <div id="resume" className="resume-container ">
        <header className="resume-header">
          <h1>Suseentheran</h1>
          <p className="contact-info">
            Email:{" "}
            <a href="mailto:susee37432@gmail.com">susee37432@gmail.com</a>
            <br />
            <br />
            Phone: 73-97-27-77-86
            <br />
            <br />
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/johndoe
            </a>
          </p>
        </header>
        <section className="resume-section">
          <h2>Experience</h2>
          <div className="resume-item">
            <h3>Software Engineer</h3>
            <p>ABC Company, Jan 2020 - Present</p>
            <ul>
              <li>Developed web applications using React and Node.js.</li>
              <li>Led a team of developers on various projects.</li>
            </ul>
          </div>
          <div className="resume-item">
            <h3>Junior Developer</h3>
            <p>XYZ Corp, Jun 2018 - Dec 2019</p>
            <ul>
              <li>
                Assisted in building and maintaining client-side applications.
              </li>
              <li>
                Collaborated with designers to create user-friendly interfaces.
              </li>
            </ul>
          </div>
        </section>
        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-item">
            <h3>Bachelor of Science in Computer Science</h3>
            <p>University of Example, Graduated 2018</p>
          </div>
        </section>
        <section className="resume-section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>CSS</li>
            <li>HTML</li>
          </ul>
        </section>
        <div className="image-with-text-container">
          <img
            src={img}
            alt="Software Engineer"
            className="software-engineer-image"
          />
          <p className="software-engineer-text">Software Engineer</p>
        </div>
        <div className="button-container">
          <button className="download-pdf-btn" onClick={handleDownloadPDF}>
            Download PDF
          </button>
        </div>
      </div>
    </>
  );
}

export default Purchase;
