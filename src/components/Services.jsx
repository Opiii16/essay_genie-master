import React from 'react';
import { Link } from 'react-router-dom';
// import './Dropdown.css'; // Make sure this CSS file exists

function Services() {
  return (
    <div className="dropdown-content">
      <Link to="/essay-writing">Essay Writing</Link>
      <Link to="/take-my-online-classes">Take My Online Classes</Link>
      <Link to="/homework-help">Homework Help</Link>
      <Link to="/coursework-help">Coursework Help</Link>
    </div>
  );
}

export default Services;