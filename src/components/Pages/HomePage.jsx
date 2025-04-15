import { useState } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import CTABanner from '../CTABanner/CTABanner';
import FeaturedTutors from '../FeaturedTutors/FeaturedTutors';
import '../Pages/Page.css';

const HomePage = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const featuredSubjects = [
    { 
      name: 'Essay Writing', 
      icon: '📝',
      services: [
        'Argumentative Essays',
        'Persuasive Essays',
        'Expository Essays',
        'Narrative Essays',
        'Admission Essays',
        'Scholarship Essays'
      ]
    },
    { 
      name: 'Research Papers', 
      icon: '🔍',
      services: [
        'Literature Review',
        'Methodology',
        'Data Analysis',
        'Results Section',
        'Discussion',
        'Research Proposals'
      ]
    },
    { 
      name: 'Thesis Assistance', 
      icon: '🎓',
      services: [
        'Thesis Proposal',
        'Chapter Writing',
        'Thesis Editing',
        'Formatting Help',
        'Defense Preparation',
        'Statistical Analysis'
      ]
    },
    { 
      name: 'Literature Reviews', 
      icon: '📚',
      services: [
        'Annotated Bibliographies',
        'Systematic Reviews',
        'Meta-Analysis',
        'Critical Reviews',
        'Thematic Analysis',
        'Source Evaluation'
      ]
    },
    { 
      name: 'Dissertation Help', 
      icon: '✍️',
      services: [
        'Dissertation Proposal',
        'Chapter Development',
        'Editing Services',
        'Formatting Assistance',
        'Plagiarism Check',
        'Defense Preparation'
      ]
    },
    { 
      name: 'Proofreading', 
      icon: '✅',
      services: [
        'Grammar Check',
        'Style Editing',
        'Formatting',
        'Citation Check',
        'Plagiarism Scan',
        'Final Polish'
      ]
    },
  ];

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  const handleBackClick = () => {
    setSelectedSubject(null);
  };

  return (
    <div className="home-page">
      <HeroSection />
      <CTABanner />
      
      <section className="tutors-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Explore the best tutors across the globe</h2>
          <FeaturedTutors />
        </div>
      </section>

      <section className="subjects-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Essay Genie Specializes In</h2>
          
          {selectedSubject ? (
            <div className="services-container">
              <button onClick={handleBackClick} className="back-button btn btn-link mb-3">
                &larr; Back to Subjects
              </button>
              <h3 className="service-title text-center mb-4">{selectedSubject.name} Services</h3>
              <div className="row">
                {selectedSubject.services.map((service, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div className="service-card card h-100">
                      <div className="card-body d-flex flex-column">
                        <h4 className="card-title">{service}</h4>
                        <button className="btn btn-primary mt-auto">Request Service</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="row">
              {featuredSubjects.map((subject, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div 
                    className="subject-card card h-100"
                    onClick={() => handleSubjectClick(subject)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="card-body text-center">
                      <span className="subject-icon display-4">{subject.icon}</span>
                      <h3 className="card-title">{subject.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="essay-genie-footer bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="footer-brand">
                <img 
                  src="/assets/images/essaygenie.png" 
                  alt="Essay Genie Logo" 
                  className="footer-logo img-fluid mb-3"
                  style={{ maxWidth: '200px' }}
                />
                <h3>Essay Genie</h3>
                <p>Your academic writing assistant</p>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="footer-about">
                <h4>About Us</h4>
                <p>
                  Essay Genie connects students with expert tutors to help with all 
                  aspects of academic writing, from essays to dissertations.
                </p>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <h5>Leave a comment</h5>
              <form>
                <div className="mb-3">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="form-control" 
                  />
                </div>
                <div className="mb-3">
                  <textarea 
                    name="comment" 
                    id="comment" 
                    rows="3" 
                    placeholder="Your message"
                    className="form-control"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-light">
                  Submit
                </button>
              </form>
            </div>
          </div>
          
          <div className="row mt-4">
            <div className="col-md-6 mb-4">
              <div className="footer-contact">
                <h4>Contact Us</h4>
                <p><i className="bi bi-envelope me-2"></i> essaygenie@gmail.com</p>
                <p><i className="bi bi-phone me-2"></i> +254735709392 / +254798976120</p>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="d-flex gap-3 mb-3">
                  <a href="#" className="text-white">
                    <img src="/assets/images/in.png" alt="Instagram" height="30" />
                    <span className="ms-2">@EssayGenie</span>
                  </a>
                </div>
                <div className="d-flex gap-3">
                  <a href="#" className="text-white">
                    <img src="/assets/images/x.png" alt="Twitter" height="30" />
                    <span className="ms-2">@EssayGenie</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-copyright text-center pt-3 border-top">
            <p>© {new Date().getFullYear()} Essay Genie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
