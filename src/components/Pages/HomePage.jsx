import HeroSection from '../HeroSection/HeroSection';
import CTABanner from '../CTABanner/CTABanner';
import FeaturedTutors from '../FeaturedTutors/FeaturedTutors';
// import Tutors from '../components/Tutors/Tutors';
// import Tutors from '../FeaturedTutorsPage';
import '../Pages/Page.css';

const HomePage = () => {
  const featuredSubjects = [
    { name: 'Essay Writing', icon: '📝' },
    { name: 'Research Papers', icon: '🔍' },
    { name: 'Thesis Assistance', icon: '🎓' },
    { name: 'Literature Reviews', icon: '📚' },
    { name: 'Dissertation Help', icon: '✍️' },
    { name: 'Proofreading', icon: '✅' },
  ];

  return (
    <>
      <HeroSection />
      <CTABanner />
      
      <section className="tutors-section">
        <h2>Explore the best tutors across the globe</h2>
        {/* <p>Bid a tutor for assistance in your studies</p> */}
        <FeaturedTutors />
      </section>

      <section className="subjects-section">
        <h2>Essay Genie Specializes In</h2>
        <div className="subjects-grid">
          {featuredSubjects.map((subject, index) => (
            <div key={index} className="subject-card">
              <span className="subject-icon">{subject.icon}</span>
              <h3>{subject.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <footer className="essay-genie-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img 
              src="/assets/images/essaygenie.png" 
              alt="Essay Genie Logo" 
              className="footer-logo"
            />
            <h3>Essay Genie</h3>
            <p>Your academic writing assistant</p>
          </div>
          
          <div className="footer-about">
            <h4>About Us</h4>
            <p>
              Essay Genie connects students with expert tutors to help with all 
              aspects of academic writing, from essays to dissertations.
            </p>
          </div>
          <div class="col-md-4">
            <h5>Leave a comment</h5>
             <form action="">
                  <input type="email" placeholder="Your email" class="form-control"/> <br />
                   <textarea name="comment" id="comment" rows="" class="form-control"/> <textarea ></textarea>
                    <input type="submit" value="Submit" class=" form-control   btn btn-outline-danger"/>

                  </form>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: essaygenie@gmail.com</p>
            <div className="social-links">
              <h4>Contact Us</h4>
              < h6> <b>Phone N.o</b></h6>
               <p>+254735709392/+254798976120</p>
                      <img src="/assets/images/in.png" alt="instagram" height="40px" width="40px"/>
                        <h4>Instagram: @EssayGenie</h4>
                        <img src="/assets/images/x.png" alt="Twitter" height="40px" width="40px"/>
                          <h4>Twitter: @EssayGenie</h4>
                            <h6>Incase of any questions reach us at:</h6>
                            <p>essaygenie@gmail.com</p>
                            <img src="/assets/images/essaygenie.png" alt="logo" height="100px" width="=250px"/>                                                                                                                          
              </div>
          </div>
        </div>
        
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} Essay Genie. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
