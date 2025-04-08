// src/pages/services/ServicesOverview.jsx
import { Link } from 'react-router-dom';
import '../ServicePages.css'; 


const ServicesOverview = () => {
  return (
    <div className="service-page">
      <h1>Our Writing Services</h1>
      
      <div className="services-grid">
        <div className="service-card">
          <h2>Essay Writing</h2>
          <p>From high school to PhD level essays</p>
          <Link to="/services/essays" className="btn btn-primary">
            Learn More
          </Link>
        </div>
        
        <div className="service-card">
          <h2>Research Papers</h2>
          <p>Comprehensive research assistance</p>
          <Link to="/services/research-papers" className="btn btn-primary">
            Learn More
          </Link>
        </div>
        
        {/* Add more service cards as needed */}
      </div>
    </div>
  );
};

export default ServicesOverview;
