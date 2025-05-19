import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaEdit, FaHistory, FaSignOutAlt, FaSpinner,FaPhone,FaMapMarkerAlt } from 'react-icons/fa';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const storedUser = localStorage.getItem('user');
        
        if (!storedUser) {
          navigate('/signin');
          return;
        }

        const parsedUser = JSON.parse(storedUser);
        
        // Simulate API call to get fresh user data
        // In a real app, you would call your backend here
        await new Promise(resolve => setTimeout(resolve, 500));
        setUser(parsedUser);
      } catch (err) {
        console.error('Error loading user data:', err);
        setError('Failed to load profile data');
        localStorage.removeItem('user');
        navigate('/signin');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/signin');
  };

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  if (loading) {
    return (
      <div className="profile-loading">
        <FaSpinner className="spinner" />
        <p>Loading your profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-error">
        <p className="text-danger">{error}</p>
        <button className="btn btn-primary" onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} className="avatar-img" />
          ) : (
            <div className="avatar-placeholder">
              <FaUser size={40} />
            </div>
          )}
        </div>
        <h2>{user.name}</h2>
        <p className="text-muted">Member since {new Date(user.createdAt || Date.now()).toLocaleDateString()}</p>
      </div>

      <div className="profile-details">
        <div className="detail-item">
          <FaUser className="detail-icon" />
          <div>
            <h5>Full Name</h5>
            <p>{user.name}</p>
          </div>
        </div>

        <div className="detail-item">
          <FaEnvelope className="detail-icon" />
          <div>
            <h5>Email Address</h5>
            <p>{user.email}</p>
          </div>
        </div>

        {/* Add more fields as needed */}
        {user.phone && (
          <div className="detail-item">
            <FaPhone className="detail-icon" />
            <div>
              <h5>Phone Number</h5>
              <p>{user.phone}</p>
            </div>
          </div>
        )}

        {user.address && (
          <div className="detail-item">
            <FaMapMarkerAlt className="detail-icon" />
            <div>
              <h5>Address</h5>
              <p>{user.address}</p>
            </div>
          </div>
        )}
      </div>

      <div className="profile-actions">
        <button 
          className="btn btn-primary action-btn"
          onClick={() => navigate('/edit-profile')}
        >
          <FaEdit /> Edit Profile
        </button>
        
        <button 
          className="btn btn-secondary action-btn"
          onClick={() => navigate('/my-orders')}
        >
          <FaHistory /> View Orders
        </button>
        
        <button onClick={handleBackClick} className="btn btn-info mb-1 fw-bold">
          🔙   Go Back 
        </button>
        
        <button 
          className="btn btn-outline-danger action-btn"
          onClick={handleLogout}
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;