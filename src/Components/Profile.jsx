import React from "react";
import "../css/Profile.css";

function PortfolioProfile() {
  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="portfolio-header">
        <h1>My Portfolio</h1>
      </header>

      {/* Main Content */}
      <main className="portfolio-main">
        <section className="profile-content">
          <h2>About Me</h2>
          <p>
            This is a dummy profile content. You can add more details here about
            your work, experience, and skills.
          </p>
        </section>

        {/* Single Image */}
        <section className="image-slider">
          <img src="https://via.placeholder.com/200" alt="Project 1" />
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
