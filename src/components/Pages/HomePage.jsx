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
            'Mathematics',
            'English',
            'Chemistry',
            'Biology',
            'History & Geography',
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
        }
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
                  <button onClick={handleBackClick} className="btn btn-info mb-3 fw-bold">
                    🔙 Back to Subjects
                  </button>
                  <h3 className="text-center mb-4">{selectedSubject.name} Services</h3>
                  <div className="row">
                    {selectedSubject.services.map((service, index) => (
                      <div key={index} className="col-md-4 mb-4">
                        <div className="card h-100">
                          <div className="card-body d-flex flex-column">
                            <h4 className="card-title">{service}</h4>
                            <button className="btn btn-info mt-auto fw-bold">
                              ✨ Request Service
                            </button>
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
                        className="card h-100 text-center subject-card"
                        onClick={() => handleSubjectClick(subject)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="card-body">
                          <span className="display-4">{subject.icon}</span>
                          <h3 className="card-title mt-3">{subject.name}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
          <footer className="essay-genie-footer bg-dark text-white pt-4 pb-2">
            <div className="container">
              <div className="row text-center text-md-start">
      
            {/* Column 1: Branding */}
              <div className="col-md-4 mb-3">
                <img
                src="/assets/images/essaygenie.png"
                alt="Essay Genie Logo"
                className="img-fluid mb-2"
                style={{ maxWidth: '100px' }}
              />
              <p className="mb-1 fw-bold">Essay Genie</p>
              <p style={{ fontSize: '0.85rem' }}>
                Your academic writing assistant for essays, dissertations, and more.
              </p>
            </div>

            {/* Column 2: Comment Form */}
            <div className="col-md-4 mb-3">
              <h6 className="fw-bold mb-2">Leave a Comment</h6>
              <form>
                <input
                  type="email"
                  className="form-control form-control-sm mb-2"
                  placeholder="Your email"
                />
                <textarea
                  className="form-control form-control-sm mb-2"
                  rows="2"
                  placeholder="Your message"
                ></textarea>
                <button type="submit" className="btn btn-outline-light btn-sm w-100">
                  Submit
                </button>
              </form>
            </div>

            {/* Column 3: Contact Info */}
            <div className="col-md-4 mb-3">
              <h6 className="fw-bold mb-2">Contact Us</h6>
              <p style={{ fontSize: '0.85rem', marginBottom: '0.3rem' }}>
                <strong>Phone:</strong> +254735709392 / +254798976120
              </p>
              <p style={{ fontSize: '0.85rem', marginBottom: '0.3rem' }}>
                <strong>Email:</strong> essaygenie@gmail.com
              </p>
              <div className="d-flex justify-content-center justify-content-md-start gap-2 mt-2">
                <img src="/assets/images/fb.png" alt="Facebook" height="24" />
                <img src="/assets/images/in.png" alt="Instagram" height="24" />
                <img src="/assets/images/x.png" alt="Twitter" height="24" />
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center mt-3 border-top pt-2" style={{ fontSize: '0.75rem' }}>
            <img
              src="/assets/images/essaygenie.png"
              alt="Logo"
              height="24"
              className="me-2"
            />
            Developed by Essay Genie © {new Date().getFullYear()} All rights reserved
            <img
              src="/assets/images/essaygenie.png"
              alt="Logo"
              height="24"
              className="ms-2"
            />
          </div>
        </div>
      </footer>


        


        </div>
      );
    };

    export default HomePage;
