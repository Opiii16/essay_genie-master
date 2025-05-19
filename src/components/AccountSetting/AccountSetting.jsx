import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaUser, FaLock, FaBell, FaPalette, 
   FaTrash, FaSignOutAlt, FaSave, 
  FaSpinner, FaCheck, FaTimes, FaEye, FaEyeSlash 
} from 'react-icons/fa';
import './AccountSetting.css';

const AccountSettings = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    location: ''
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    newsletter: false
  });
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const [showPassword, setShowPassword] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching user data
    const fetchUserData = async () => {
      try {
        // In a real app, you would fetch from your backend
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const mockUser = {
          id: 'user123',
          name: 'Alex Johnson',
          email: 'alex.johnson@student.edu',
          phone: '+1 (555) 123-4567',
          bio: 'Computer Science student passionate about web development',
          location: 'San Francisco, CA',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          joinedDate: '2023-01-15'
        };
        
        setUser(mockUser);
        setFormData({
          name: mockUser.name,
          email: mockUser.email,
          phone: mockUser.phone,
          bio: mockUser.bio,
          location: mockUser.location
        });
      } catch (err) {
        setError('Failed to load user data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  const handleNotificationToggle = (type) => {
    setNotifications(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const handleSaveProfile = async () => {
    setSaveStatus('saving');
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser(prev => ({ ...prev, ...formData }));
      setSaveStatus('success');
      setEditMode(false);
      setTimeout(() => setSaveStatus(null), 3000);
    } catch (err) {
      setSaveStatus('error');
      setError('Failed to save changes');
    }
  };

  const handleChangePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    
    setSaveStatus('saving');
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSaveStatus('success');
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      setTimeout(() => setSaveStatus(null), 3000);
    } catch (err) {
      setSaveStatus('error');
      setError('Failed to change password');
    }
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      // Handle account deletion
      console.log('Account deletion requested');
      navigate('/');
    }
  };

  const handleLogout = () => {
    // Handle logout logic
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="settings-loading">
        <FaSpinner className="spinner" />
        <p>Loading your settings...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="settings-error">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="account-settings-container">
      <div className="settings-header">
        <h1>Account Settings</h1>
        <p>Manage your profile, security, and preferences</p>
      </div>

      <div className="settings-layout">
        <div className="settings-sidebar">
          <button 
            className={`sidebar-tab ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <FaUser /> Profile
          </button>
          <button 
            className={`sidebar-tab ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <FaLock /> Security
          </button>
          <button 
            className={`sidebar-tab ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <FaBell /> Notifications
          </button>
          <button 
            className={`sidebar-tab ${activeTab === 'appearance' ? 'active' : ''}`}
            onClick={() => setActiveTab('appearance')}
          >
            <FaPalette /> Appearance
          </button>
          <div className="sidebar-footer">
            <button className="logout-btn" onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>

        <div className="settings-content">
          {activeTab === 'profile' && (
            <div className="profile-settings">
              <div className="section-header">
                <h2>Profile Information</h2>
                {!editMode ? (
                  <button className="edit-btn" onClick={() => setEditMode(true)}>
                    Edit Profile
                  </button>
                ) : (
                  <div className="save-actions">
                    <button className="cancel-btn" onClick={() => setEditMode(false)}>
                      Cancel
                    </button>
                    <button className="save-btn" onClick={handleSaveProfile}>
                      {saveStatus === 'saving' ? (
                        <><FaSpinner className="spin" /> Saving...</>
                      ) : (
                        <><FaSave /> Save Changes</>
                      )}
                    </button>
                  </div>
                )}
              </div>

              {saveStatus === 'success' && (
                <div className="alert success">
                  <FaCheck /> Profile updated successfully!
                </div>
              )}

              <div className="profile-display">
                <div className="avatar-section">
                  <div className="avatar">
                    <img src={user.avatar} alt={user.name} />
                    {editMode && (
                      <button className="change-avatar-btn">Change Photo</button>
                    )}
                  </div>
                </div>

                <div className="profile-fields">
                  <div className="form-group">
                    <label>Full Name</label>
                    {editMode ? (
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p>{user.name}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    {editMode ? (
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p>{user.email}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    {editMode ? (
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p>{user.phone || 'Not provided'}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Bio</label>
                    {editMode ? (
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        rows="3"
                      />
                    ) : (
                      <p>{user.bio || 'No bio yet'}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Location</label>
                    {editMode ? (
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p>{user.location || 'Not specified'}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="account-meta">
                <p><strong>Account ID:</strong> {user.id}</p>
                <p><strong>Member since:</strong> {new Date(user.joinedDate).toLocaleDateString()}</p>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="security-settings">
              <h2>Security Settings</h2>
              
              <div className="password-change">
                <h3>Change Password</h3>
                {error && <div className="alert error"><FaTimes /> {error}</div>}
                
                <div className="form-group">
                  <label>Current Password</label>
                  <div className="password-input">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      placeholder="Enter current password"
                    />
                    <button 
                      className="toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label>New Password</label>
                  <div className="password-input">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      placeholder="Enter new password"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Confirm New Password</label>
                  <div className="password-input">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>

                <button 
                  className="save-btn" 
                  onClick={handleChangePassword}
                  disabled={saveStatus === 'saving'}
                >
                  {saveStatus === 'saving' ? (
                    <><FaSpinner className="spin" /> Updating...</>
                  ) : (
                    <>Update Password</>
                  )}
                </button>

                {saveStatus === 'success' && (
                  <div className="alert success">
                    <FaCheck /> Password updated successfully!
                  </div>
                )}
              </div>

              <div className="danger-zone">
                <h3>Danger Zone</h3>
                <div className="danger-content">
                  <p>Permanently delete your account and all associated data.</p>
                  <button className="delete-btn" onClick={handleDeleteAccount}>
                    <FaTrash /> Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="notification-settings">
              <h2>Notification Preferences</h2>
              
              <div className="notification-options">
                <div className="notification-item">
                  <div>
                    <h3>Email Notifications</h3>
                    <p>Receive important updates via email</p>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={notifications.email}
                      onChange={() => handleNotificationToggle('email')}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="notification-item">
                  <div>
                    <h3>Push Notifications</h3>
                    <p>Get alerts on your device</p>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={notifications.push}
                      onChange={() => handleNotificationToggle('push')}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="notification-item">
                  <div>
                    <h3>Newsletter</h3>
                    <p>Receive our monthly newsletter</p>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={notifications.newsletter}
                      onChange={() => handleNotificationToggle('newsletter')}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="appearance-settings">
              <h2>Appearance Settings</h2>
              
              <div className="theme-selection">
                <h3>Theme</h3>
                <div className="theme-options">
                  <div 
                    className={`theme-option ${theme === 'light' ? 'active' : ''}`}
                    onClick={() => setTheme('light')}
                  >
                    <div className="theme-preview light"></div>
                    <span>Light</span>
                  </div>
                  <div 
                    className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
                    onClick={() => setTheme('dark')}
                  >
                    <div className="theme-preview dark"></div>
                    <span>Dark</span>
                  </div>
                  <div 
                    className={`theme-option ${theme === 'system' ? 'active' : ''}`}
                    onClick={() => setTheme('system')}
                  >
                    <div className="theme-preview system"></div>
                    <span>System</span>
                  </div>
                </div>
              </div>

              <div className="language-selection">
                <h3>Language</h3>
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                  <option value="zh">中文</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;