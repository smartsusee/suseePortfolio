import React from "react";
import "../css/Profile.css";
import img1 from "../images/WhatsApp Image 2024-08-28 at 7.40.30 PM.jpeg";

function PortfolioProfile() {
  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="portfolio-header">
        <button className="back-button" onClick={() => window.history.back()}>
          ← Back
        </button>
        <h1>My Portfolio</h1>
      </header>

      {/* Main Content */}
      <main className="portfolio-main">
        <section className="profile-content">
          <h2>About Me</h2>
          <p>
            Hello! I'm Suseentheran, a dedicated software developer with a
            passion for creating innovative and efficient software solutions.
            With a strong foundation in [mention any specific programming
            languages, technologies, or frameworks you're proficient in], I
            specialize in developing robust applications that meet the evolving
            needs of businesses and users alike. My journey in software
            development began [mention how or when you started], and over the
            years, I have honed my skills in [mention specific areas of
            expertise, such as web development, mobile app development, backend
            systems, etc.]. I take pride in writing clean, maintainable code and
            constantly strive to stay updated with the latest industry trends
            and best practices. Whether it's building dynamic web applications,
            crafting seamless user experiences, or optimizing backend systems, I
            approach every project with a commitment to excellence and a focus
            on delivering results that exceed expectations. When I'm not coding,
            I enjoy [mention any hobbies or interests related to tech or
            otherwise, e.g., exploring new technologies, contributing to
            open-source projects, etc.], which further fuels my creativity and
            problem-solving skills. Thank you for taking the time to learn about
            me. I’m always excited to collaborate on new and challenging
            projects that push the boundaries of what's possible with software
            development.
          </p>
        </section>

        {/* Single Image */}
        <section className="image-slider">
          <img src={img1} alt="Project 1" />
        </section>
      </main>

      {/* Footer */}
      <footer className="portfolio-footer">
        <p>© 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default PortfolioProfile;
