import { useState } from 'react';
import { Link } from 'react-router-dom';
import Services from '../Services';
import Resources from '../Resources';
import MobileMenuButton from './MobileMenuButton';
import { useNavigate } from 'react-router-dom';
import Signup from '../Signup';
import Signin from '../Signin';
import './Navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [cartCount] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();


  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setShowServices(false);
    setShowResources(false);
  };

  const toggleServices = () => {
    setShowServices(!showServices);
    if (showResources) setShowResources(false);
  };

  const toggleResources = () => {
    setShowResources(!showResources);
    if (showServices) setShowServices(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };
   const [showSignup, setShowSignup] = useState(false);

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  return (
    <nav className="app-navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src="/assets/images/essaygenie.png" alt="EssayGenie Logo" className="navbar-logo-icon" />
          <Link to="/" className="nav-logo-text">EssayGenie</Link>
          <MobileMenuButton isOpen={isNavOpen} onClick={toggleNav} />
        </div>

        <div className={`navbar-menu ${isNavOpen ? 'open' : ''}`}>
          <div className="navbar-left">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/order" className="nav-link">Order</Link>
              </li>
              <li className="nav-item">
                <Link to="/tutors" className="nav-link">Tutors</Link>
              </li>
              <li className="nav-item nav-dropdown">
                <button 
                  className={`nav-link ${showServices ? 'active' : ''}`} 
                  onClick={toggleServices}
                  aria-expanded={showServices}
                >
                  Services <span className="dropdown-arrow">&#9660;</span>
                </button>
                {showServices && (
                  <div className="dropdown-menu services-dropdown">
                    <Services />
                  </div>
                )}
              </li>
              <li className="nav-item nav-dropdown">
                <button 
                  className={`nav-link ${showResources ? 'active' : ''}`} 
                  onClick={toggleResources}
                  aria-expanded={showResources}
                >
                  Resources <span className="dropdown-arrow">&#9660;</span>
                </button>
                {showResources && (
                  <div className="dropdown-menu resources-dropdown">
                    <Resources />
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div className="navbar-right">
            <div className="search-container">
              <form onSubmit={handleSearch} className="search-form">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                  <img 
                    src="/assets/images/loupe.png" 
                    alt="Search"
                    width="16"
                    height="16"
                  />
                </button>
              </form>
            </div>
            
            <div className="auth-cart-container">
              <Link to="/cart" className="cart-link">
                <img 
                  src="/assets/images/shopping-cart.png"
                  alt="Cart" 
                  className="nav-icon"
                  width="20"
                  height="20"
                />
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </Link>
              
              <div className="auth-buttons">
                <Link to="/signin" className="btn btn-outline-light auth-btn"  onClick={() =>navigate('/Signin', {state:{Signin}})}>
                  Sign In
                </Link>
                <Link to="/signup" className="btn btn-light auth-btn signup-btn"  onClick={() =>navigate('/Signup', {state:{Signup}})}>
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      {/* Your existing content */}
      <button onClick={handleSignupClick}>Sign Up</button>
      
      {/* Conditionally render the Signup component */}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
    </div>
    </nav>
  );
  
};

export default Navbar;
