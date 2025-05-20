import OceanSection from '../OceanSection/OceanSection';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <section className="hero">
        <div className="hero-content">
          <div className="logo-container left-align">
            <img 
              src="/assets/images/essaygenie.png" 
              alt="EssayGenie Logo" 
              className="hero-logo" 
            />
          </div>
          <h1 className="hero-title">Get Expert Essay Help</h1>
          <p className="hero-tagline">Unlock your academic potential with our AI-powered Essay Genie.</p>
          
          <div className="button-wrapper right-align">
          <button 
            className="get-started-button"
            onClick={() => navigate('/signin')}
          >
            Get Started Now
          </button>
        </div>
        </div>
      </section>
      
      <OceanSection />
      <br/>
    </div>
  );
};

export default HeroSection;