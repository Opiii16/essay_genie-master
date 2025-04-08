import { NavLink } from 'react-router-dom';
import './Services.css';

const Services = ({ onItemClick }) => {
  return (
    <div className="services-dropdown">
      <div className="dropdown-section">
        <h4 className="dropdown-heading">Writing Services</h4>
        <ul className="dropdown-list">
          <li>
            <NavLink to="/services/essays" className="dropdown-link" onClick={onItemClick}>
              Essays
            </NavLink>
          </li>
          <li>
            <NavLink to="/services/research-papers" className="dropdown-link" onClick={onItemClick}>
              Research Papers
            </NavLink>
          </li>
        </ul>
      </div>
      
      <div className="dropdown-section">
        <h4 className="dropdown-heading">Sample Papers</h4>
        <ul className="dropdown-list">
          <li>
            <NavLink 
              to="/samples/essays" 
              state={{ from: 'services' }}
              className="dropdown-link" 
              onClick={onItemClick}
            >
              Essay Samples
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
