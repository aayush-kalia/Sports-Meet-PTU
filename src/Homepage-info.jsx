import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const maleTrackEvents = [
    "100m Race",
    "200m Race",
    "400m Race",
    "800m Race",
    "1500m Race",
    "5000m Race",
    "10000m Race",
    "110m Hurdles",
    "400m Hurdles",
    "4x100m Relay",
    "4x400m Relay",
  ];
  const maleFieldEvents = [
    "Long Jump",
    "High Jump",
    "Shot Put",
    "Discus Throw",
    "Javelin Throw",
    "Triple Jump",
    "Hammer Throw",
  ];
  const femaleTrackEvents = [
    "100m Race",
    "200m Race",
    "400m Race",
    "800m Race",
    "1500m Race",
    "3000m Race",
    "100m Hurdles",
    "400m Hurdles",
    "4x100m Relay",
    "4x400m Relay",
  ];
  const femaleFieldEvents = [
    "Long Jump",
    "High Jump",
    "Shot Put",
    "Discus Throw",
    "Javelin Throw",
    "Triple Jump",
  ];

  const renderEvents = (events) => (
    <ul>
      {events.map((event, index) => (
        <li key={index}>{event}</li>
      ))}
    </ul>
  );

  return (
    <div className="container">
      <header className="header">
        <nav className="navbar">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#rules">Rules</a>
            </li>
            <li>
              <a href="#dev-team">Dev Team</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="hero" id="home">
        <img src="/track.jpg" alt="Track" className="hero-image" />
        <div className="hero-text">
          <h1>
            Welcome to the 27th IKGPTU <br />
            Annual Athletic Meet
          </h1>
          <p>
            Held at Guru Nanak Dev Engineering College, Gill Park, Ludhiana.
          </p>
        </div>
      </div>

      <section id="rules" className="rules">
        <h2>Rules</h2>
        <ul>
          <li>All participants must register before the event.</li>
          <li>An athlete can participate in a 2 events and one relay.</li>
          <li>
            All colleges must submit the eligibility form and athletics detail
            form before the last date.
          </li>
          <li>
            A valid college ID and proof of enrollment for the current academic
            year are required.
          </li>
          <li>Chest number mandatory for participation.</li>
          <li>Proper athletic attire is required.</li>
          <li>Respect all officials and fellow competitors.</li>
        </ul>
      </section>

      <section id="events" className="events">
        <h2>Events</h2>
        <div className="event-container">
          <div className="male-events">
            <h3>Male Events</h3>
            <div className="event-columns">
              <div className="track-events">
                <h4>Track Events</h4>
                {renderEvents(maleTrackEvents)}
              </div>
              <div className="field-events">
                <h4>Field Events</h4>
                {renderEvents(maleFieldEvents)}
              </div>
            </div>
          </div>

          <div className="female-events">
            <h3>Female Events</h3>
            <div className="event-columns">
              <div className="track-events">
                <h4>Track Events</h4>
                {renderEvents(femaleTrackEvents)}
              </div>
              <div className="field-events">
                <h4>Field Events</h4>
                {renderEvents(femaleFieldEvents)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="login-section">
        <button className="login-btn" onClick={handleLogin}>
          Begin Registration
        </button>
      </div>

      <section id="dev-team" className="dev-team">
        <h2>Meet the Developers</h2>
        <div className="dev-container">
          <div className="dev-card">
            <img src="/Aayush.webp" alt="Developer 1" />
            <h3>Aayush Kalia</h3>
            <p className="role">Full Stack Developer</p>
            <p className="branch">Computer Science &amp; Engineering</p>
          </div>
          <div className="dev-card">
            <img src="/Aayush.webp" alt="Developer 2" />
            <h3>Abhijot Singh</h3>
            <p className="role">Frontend Developer</p>
            <p className="branch">Computer Science &amp; Engineering</p>
          </div>
          <div className="dev-card">
            <img src="/Aayush.webp" alt="Developer 3" />
            <h3>Keshav Garg</h3>
            <p className="role">Full Stack Developer</p>
            <p className="branch">Computer Science &amp; Engineering</p>
          </div>
          <div className="dev-card">
            <img src="/Aayush.webp" alt="Developer 4" />
            <h3>Simarjot Singh</h3>
            <p className="role">Backend Developer</p>
            <p className="branch">Information Technology</p>
          </div>
          <div className="dev-card">
            <img src="/Aayush.webp" alt="Developer 5" />
            <h3>Gaganjot Kaur</h3>
            <p className="role">Content Writer</p>
            <p className="branch">Computer Science &amp; Engineering</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>
          Made by Genconians, with &#x2764;&#xfe0f; &copy;{" "}
          {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Homepage;
