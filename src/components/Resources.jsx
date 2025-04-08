import React from 'react';
import { Link } from 'react-router-dom';
// import './Dropdown.css'; // Use the same CSS file for consistency

function Resources() {
  return (
    <div className="dropdown-content">
      <Link to="/revision-questions">300k+ Revision Questions with Answers</Link>
      <Link to="/sample-papers">Sample Papers</Link>
      <Link to="/virtual-tutors">Virtual Meeting with Tutors</Link>
    </div>
  );
}

export default Resources;