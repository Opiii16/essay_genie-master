import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Services from '../Services';
import Resources from '../Resources';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const userData = localStorage.getItem('user');
      setIsLoggedIn(!!userData);
      if (userData) {
        try {
          setUser(JSON.parse(userData));
        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      }
    };

    checkAuth();
    window.addEventListener('storage', checkAuth);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setShowServices(false);
    setShowResources(false);
    setShowDropdown(false);
  };

  const handleServicesClick = () => {
    if (!isLoggedIn) {
      navigate('/signin');
      return;
    }
    setShowServices(!showServices);
    setShowResources(false);
  };

  const handleResourcesClick = () => {
    if (!isLoggedIn) {
      navigate('/signin');
      return;
    }
    setShowResources(!showResources);
    setShowServices(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    setShowDropdown(false);
    navigate('/');
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showDropdown && !e.target.closest('.dropdown')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showDropdown]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center" onClick={() => {
          setShowServices(false);
          setShowResources(false);
          setShowDropdown(false);
        }}>
          <img 
            src="/assets/images/essaygenie.png" 
            alt="EssayGenie Logo" 
            className="me-2" 
            width="45"
            height="40"
          />
          <span>EssayGenie</span>
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNav}
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/about-us" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/tutors" className="nav-link">Tutors</Link>
            </li>
            
            <li className="nav-item dropdown">
              <button 
                className={`nav-link dropdown-toggle ${showServices ? 'show' : ''}`}
                onClick={handleServicesClick}
                aria-expanded={showServices}
              >
                Services
              </button>
              <div className={`dropdown-menu ${showServices ? 'show' : ''}`}>
                <Services />
              </div>
            </li>
            
            <li className="nav-item dropdown">
              <button 
                className={`nav-link dropdown-toggle ${showResources ? 'show' : ''}`}
                onClick={handleResourcesClick}
                aria-expanded={showResources}
              >
                Resources
              </button>
              <div className={`dropdown-menu ${showResources ? 'show' : ''}`}>
                <Resources />
              </div>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <form className="d-flex me-3" onSubmit={handleSearch}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search"
                />
                <button className="btn btn-light" type="submit" aria-label="Search button">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>

            {isLoggedIn ? (
              <div className="dropdown">
                <button 
                  className="btn btn-light dropdown-toggle d-flex align-items-center" 
                  type="button" 
                  id="userDropdown"
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <i className="bi bi-person-circle me-2"></i>
                  <span>{user?.name || 'My Account'}</span>
                </button>
                <ul 
                  className={`dropdown-menu dropdown-menu-end ${showDropdown ? 'show' : ''}`}
                  aria-labelledby="userDropdown"
                >
                  <li>
                    <Link to="/profile" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                      <i className="bi bi-person me-2"></i>Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/my-orders" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                      <i className="bi bi-bag me-2"></i>My Orders
                    </Link>
                  </li>
                  <li>
                    <Link to="/account-setting" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                      <i className="bi bi-gear me-2"></i>Account Settings
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button 
                      className="dropdown-item" 
                      onClick={handleLogout}
                    >
                      <i className="bi bi-box-arrow-right me-2"></i>Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="d-flex">
                <Link to="/signin" className="btn btn-outline-light me-2">
                  Sign In
                </Link>
                <Link to="/signup" className="btn btn-light">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;