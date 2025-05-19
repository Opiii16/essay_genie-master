import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeroSection from '../HeroSection/HeroSection';
import CTABanner from '../CTABanner/CTABanner';
import FeaturedTutors from '../FeaturedTutors/FeaturedTutors';
import '../Pages/Page.css';

const HomePage = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const servicePrices = {
    'Essay Writing': 1500,
    'Research Papers': 2000,
    'Thesis Assistance': 5000,
    'Literature Reviews': 2500,
    'Dissertation Help': 6000,
    'Proofreading': 1000
  };

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
      ],
      testimonials: [
        {
          name: 'Jane M.',
          rating: 5,
          comment: 'Helped me write the best admission essay. I got into my dream school!'
        },
        {
          name: 'Ali K.',
          rating: 4,
          comment: 'Reliable and fast service. Will definitely use again.'
        }
      ]
    },
    {
      name: 'Research Papers',
      icon: '🔬',
      services: [
        'Quantitative Research',
        'Qualitative Research',
        'Case Studies',
        'Literature Reviews',
        'Methodology Help'
      ],
      testimonials: [
        {
          name: 'David O.',
          rating: 5,
          comment: 'My research paper got an A+ thanks to the detailed methodology section!'
        }
      ]
    },
    {
      name: 'Thesis Assistance',
      icon: '🎓',
      services: [
        'Proposal Writing',
        'Data Analysis',
        'Chapter Writing',
        'Editing',
        'Formatting'
      ],
      testimonials: [
        {
          name: 'Sarah T.',
          rating: 5,
          comment: 'Finished my thesis 2 weeks early with their help!'
        }
      ]
    }
  ];

  const handleSubjectClick = (subject) => {
    if (!isLoggedIn) {
      navigate('/signin');
      return;
    }
    setSelectedSubject(subject);
  };

  const handleBackClick = () => {
    setSelectedSubject(null);
  };

  return (
    <div className="home-page">
      <HeroSection /> <br />
      <CTABanner />

      <section className="tutors-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Explore the best tutors across the globe</h2>
          {!isLoggedIn && (
            <div className="alert alert-info text-center mb-4">
              Please <Link to="/signin" className="alert-link">sign in</Link> to book sessions with our tutors
            </div>
          )}
          <FeaturedTutors />
        </div>
      </section>

      <section className="subjects-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Essay Genie Specializes In</h2>

          {!isLoggedIn && (
            <div className="alert alert-info text-center">
              Please <Link to="/signin" className="alert-link">sign in</Link> or <Link to="/signup" className="alert-link">create an account</Link> to access our services.
            </div>
          )}

          {selectedSubject ? (
            <>
              <button onClick={handleBackClick} className="btn btn-info mb-3 fw-bold">
                🔙 Back to Subjects
              </button>
              
              <div className="text-center mb-4">
                <h5>🎥 Watch how Essay Genie helps with {selectedSubject.name}</h5>
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title={`${selectedSubject.name} Intro Video`}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {selectedSubject.testimonials && (
                <div className="testimonial-section mb-5">
                  <h4 className="text-center mb-3">What Students Say</h4>
                  <div className="row justify-content-center">
                    {selectedSubject.testimonials.map((testimonial, index) => (
                      <div key={index} className="col-md-5 mb-3">
                        <div className="card p-3 h-100 shadow-sm">
                          <div className="card-body">
                            <p className="text-warning mb-1">
                              {'⭐'.repeat(testimonial.rating)}{' '}
                              {'☆'.repeat(5 - testimonial.rating)}
                            </p>
                            <p className="mb-2">"{testimonial.comment}"</p>
                            <small className="text-muted">– {testimonial.name}</small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <h3 className="text-center mb-4">{selectedSubject.name} Services</h3>
              <div className="row">
                {selectedSubject.services.map((service, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div className="card h-100">
                      <div className="card-body d-flex flex-column">
                        <h4 className="card-title">{service}</h4>
                        <Link 
                          to={isLoggedIn ? "/make-payment" : "/signin"}
                          state={{ 
                            service: {
                              name: `${selectedSubject.name} - ${service}`,
                              price: servicePrices[selectedSubject.name],
                              description: `Professional ${service.toLowerCase()} service`
                            },
                            tutor: {
                              name: 'Expert Tutor'
                            }
                          }}
                          className="btn btn-info mt-auto fw-bold"
                        >
                          ✨ Request Service
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="row">
              {featuredSubjects.map((subject, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div
                    className="card h-100 text-center subject-card"
                    onClick={() => handleSubjectClick(subject)}
                    style={{ cursor: isLoggedIn ? 'pointer' : 'not-allowed', opacity: isLoggedIn ? 1 : 0.7 }}
                  >
                    <div className="card-body">
                      <span className="display-4">{subject.icon}</span>
                      <h3 className="card-title mt-3">{subject.name}</h3>
                      <p className="text-muted mt-2">
                        Starting from KES {servicePrices[subject.name].toLocaleString()}
                      </p>
                      {!isLoggedIn && (
                        <div className="mt-3 text-danger">
                          Sign in to access
                        </div>
                      )}
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
          <div className="row">
            <div className="col-md-4">
              <h5>Essay Genie</h5>
              <p>Your trusted academic writing partner</p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/" className="text-white">Home</Link></li>
                <li><Link to="/services" className="text-white">Services</Link></li>
                <li><Link to="/tutors" className="text-white">Tutors</Link></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact</h5>
              <p>info@essaygenie.com</p>
              <p>+254 700 123456</p>
            </div>
          </div>
          <div className="text-center mt-3">
            <p className="mb-0">&copy; {new Date().getFullYear()} Essay Genie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;