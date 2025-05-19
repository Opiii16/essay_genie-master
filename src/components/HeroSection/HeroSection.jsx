import './HeroSection.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="logo-container">
          <img 
            src="/assets/images/essaygenie.png" 
            alt="EssayGenie Logo" 
            className="hero-logo" 
          />
        </div>
        <h1>Get Expert Essay Help</h1>
        <p className="hero-tagline">Unlock your academic potential with our AI-powered Essay Genie.</p>
        
        <div className="button-wrapper">
          <button 
            className="get-started-button"
            onClick={() => navigate('/signin')}
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;