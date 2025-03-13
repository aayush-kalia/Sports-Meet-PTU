import React from "react";
import { useNavigate } from "react-router-dom";
import "./afterLogin.css";

function ButtonsPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="home-buttons-container">
      {/* Navbar */}
      <header className="header">
        <nav className="navbar">
          <h1 className="logo">IKGPTU 27th Athletic Meet</h1>
          <ul className="nav-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#register">Register</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="hero">
        <h1>Thrilling Events await you!</h1>
      </div>

      {/* Event Buttons */}
      <section className="event-buttons">
        <h2>Select Your Event</h2>
        <div className="buttons-container">
          <button onClick={() => handleNavigation("/male-track")}>
            Male Track Events
          </button>
          <button onClick={() => handleNavigation("/female-track")}>
            Female Track Events
          </button>
          <button onClick={() => handleNavigation("/male-field")}>
            Male Field Events
          </button>
          <button onClick={() => handleNavigation("/female-field")}>
            Female Field Events
          </button>
          <button onClick={() => handleNavigation("/male-relay")}>
            Male Relay
          </button>
          <button onClick={() => handleNavigation("/female-relay")}>
            Female Relay
          </button>
        </div>
      </section>

      {/* Steps to Register */}
      <section id="register" className="register-steps">
        <h2>Steps to Register</h2>
        <ol>
          <li>Visit the official registration portal.</li>
          <li>Fill in your personal details and event selection.</li>
          <li>Upload your student ID and required documents.</li>
          <li>Submit the form and receive your confirmation email.</li>
          <li>
            Report at the venue on the event day with your confirmation slip.
          </li>
        </ol>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          Made by Genconians, with &#x2764;&#xfe0f; &copy;{" "}
          {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default ButtonsPage;
