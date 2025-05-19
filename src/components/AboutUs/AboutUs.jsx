import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Essay Genie</h1>
          <p>Your trusted academic writing partner since 2023</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              At Essay Genie, we're dedicated to helping students achieve academic success by providing 
              high-quality, custom-written papers tailored to each student's unique needs. We believe 
              every student deserves access to reliable academic support.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/assets/images/tutors2.jpg" alt="Dr. Sarah Johnson" />
              </div>
              <h3>Dr. Sarah Johnson</h3>
              <p className="position">Chief Academic Officer</p>
              <p className="bio">
                PhD in English Literature from Oxford with 10+ years of academic writing experience.
              </p>
            </div>

            <div className="team-member">
              <div className="member-image">
                <img src="/assets/images/tutors3.jpg" alt="Prof. Michael Chen" />
              </div>
              <h3>Prof. Michael Chen</h3>
              <p className="position">Head of STEM Department</p>
              <p className="bio">
                Former MIT professor specializing in computer science and engineering papers.
              </p>
            </div>

            <div className="team-member">
              <div className="member-image">
                <img src="/assets/images/tutors4.jpg" alt="Emma Rodriguez" />
              </div>
              <h3>Emma Rodriguez</h3>
              <p className="position">Customer Success Manager</p>
              <p className="bio">
                Dedicated to ensuring every client receives personalized attention and top-quality work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">✍️</div>
              <h3>Academic Integrity</h3>
              <p>We create original, plagiarism-free content that serves as a model for your own work.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h3>Confidentiality</h3>
              <p>Your privacy is our top priority. All interactions and transactions remain strictly confidential.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⏱️</div>
              <h3>Timeliness</h3>
              <p>We meet even the tightest deadlines without compromising on quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Experience the Essay Genie Difference?</h2>
          <div className="cta-buttons">
            <Link to="/services" className="cta-button primary">
              Explore Our Services
            </Link>
            <Link to="/contact" className="cta-button secondary">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;