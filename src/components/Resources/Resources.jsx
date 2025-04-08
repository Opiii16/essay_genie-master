import { Link } from 'react-router-dom';
import './Resources.css';

const Resources = () => {
  return (
    <div className="resources-dropdown">
      {/* Learning Resources Section */}
      <div className="dropdown-section">
        <h4 className="dropdown-heading">Learning Resources</h4>
        <ul className="dropdown-list">
          <li><Link to="/resources/writing-guides" className="dropdown-link">Writing Guides</Link></li>
          <li><Link to="/resources/citation-guides" className="dropdown-link">Citation Styles</Link></li>
          <li><Link to="/resources/research-tips" className="dropdown-link">Research Tips</Link></li>
        </ul>
      </div>
      
      {/* Templates Section */}
      <div className="dropdown-section">
        <h4 className="dropdown-heading">Templates</h4>
        <ul className="dropdown-list">
          <li>
            <Link to="/templates/essay-outline" className="dropdown-link">
              Essay Outline
              <span className="download-icon"></span>
            </Link>
          </li>
          <li><Link to="/templates/research-proposal" className="dropdown-link">Research Proposal</Link></li>
          <li><Link to="/templates/lab-report" className="dropdown-link">Lab Report</Link></li>
        </ul>
      </div>
      
      {/* Tools Section */}
      <div className="dropdown-section">
        <h4 className="dropdown-heading">Tools</h4>
        <ul className="dropdown-list">
          <li><Link to="/tools/plagiarism-checker" className="dropdown-link">Plagiarism Checker</Link></li>
          <li><Link to="/tools/grammar-checker" className="dropdown-link">Grammar Checker</Link></li>
          <li><Link to="/tools/citation-generator" className="dropdown-link">Citation Generator</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
