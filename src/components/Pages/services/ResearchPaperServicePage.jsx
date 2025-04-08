// src/pages/services/ResearchPaperServicePage.jsx
import { Link } from 'react-router-dom';
import '../ServicePages.css'; 


const ResearchPaperServicePage = () => {
  return (
    <div className="service-page">
      <h1>Research Paper Service</h1>
      
      <div className="service-description">
        <p>Comprehensive research paper assistance from topic selection to final draft.</p>
        <div className="features">
          <h3>Our service includes:</h3>
          <ul>
            <li>Topic development and research questions</li>
            <li>Literature review and analysis</li>
            <li>Methodology section development</li>
            <li>Full academic formatting</li>
          </ul>
        </div>
      </div>
      
      <div className="samples-cta">
        <h3>View our research paper samples:</h3>
        <Link to="/samples/research" className="btn btn-primary">
          Browse Research Samples
        </Link>
      </div>
      
      <div className="order-cta">
        <Link to="/order?service=research-paper" className="btn btn-success">
          Order Research Paper Service
        </Link>
      </div>
    </div>
  );
};

export default ResearchPaperServicePage;
