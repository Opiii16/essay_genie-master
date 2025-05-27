import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaChartLine, 
  FaBook, 
  FaFileAlt,
  FaTools,
  FaUserTie
} from 'react-icons/fa';
import { 
  getTutors, 
  deleteTutor, 
  getServices, 
  deleteService, 
  getResources, 
  deleteResource,
  getEssays,
  deleteEssay,
  getCurrentUser
} from './services/api.js';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [tutors, setTutors] = useState([]);
  const [services, setServices] = useState([]);
  const [resources, setResources] = useState([]);
  const [essays, setEssays] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const currentUser = await getCurrentUser();
        if (currentUser.email !== 'oprahjane860@gmail.com') {
          navigate('/signin');
        }
        setUser(currentUser);
      } catch (err) {
        navigate('/admin');
      }
    };

    checkAdmin();
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      if (!user || user.email !== 'oprahjane860@gmail.com') return;

      setLoading(true);
      try {
        if (activeTab === 'tutors') {
          const data = await getTutors();
          setTutors(data || []);
        } else if (activeTab === 'services') {
          const data = await getServices();
          setServices(data || []);
        } else if (activeTab === 'resources') {
          const data = await getResources();
          setResources(data || []);
        } else if (activeTab === 'essays') {
          const data = await getEssays();
          setEssays(data || []);
        }
      } catch (err) {
        setError(err.message);
        if (err.response?.status === 401 || err.response?.status === 403) {
          navigate('/admin/signin');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab, navigate, user]);

  const handleDelete = async (type, id) => {
    if (!window.confirm(`Are you sure you want to delete this ${type}?`)) return;

    try {
      switch(type) {
        case 'tutor':
          await deleteTutor(id);
          setTutors(tutors.filter(t => t.id !== id));
          break;
        case 'service':
          await deleteService(id);
          setServices(services.filter(s => s.id !== id));
          break;
        case 'resource':
          await deleteResource(id);
          setResources(resources.filter(r => r.id !== id));
          break;
        case 'essay':
          await deleteEssay(id);
          setEssays(essays.filter(e => e.id !== id));
          break;
        default:
          break;
      }
    } catch (err) {
      setError(err.message);
    }
  };

  if (!user || user.email !== 'oprahjane860@gmail.com') {
    // return (
    //   <div className="d-flex justify-content-center align-items-center vh-100">
    //     <div className="spinner-border text-primary" role="status">
    //       <span className="visually-hidden">Loading...</span>
    //     </div>
    //   </div>
    // );
  }

  return (
    <div className="d-flex min-vh-100">
      {/* Sidebar */}
      <div className="bg-dark text-white" style={{ width: '250px' }}>
        <div className="p-3">
          <h4 className="text-center mb-4">EssayGenie Admin</h4>
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <button 
                className={`nav-link text-white ${activeTab === 'dashboard' ? 'active bg-primary' : ''}`}
                onClick={() => setActiveTab('dashboard')}
              >
                <FaChartLine className="me-2" />
                Dashboard
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link text-white ${activeTab === 'tutors' ? 'active bg-primary' : ''}`}
                onClick={() => setActiveTab('tutors')}
              >
                <FaUserTie className="me-2" />
                Tutors
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link text-white ${activeTab === 'services' ? 'active bg-primary' : ''}`}
                onClick={() => setActiveTab('services')}
              >
                <FaTools className="me-2" />
                Services
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link text-white ${activeTab === 'resources' ? 'active bg-primary' : ''}`}
                onClick={() => setActiveTab('resources')}
              >
                <FaBook className="me-2" />
                Resources
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link text-white ${activeTab === 'essays' ? 'active bg-primary' : ''}`}
                onClick={() => setActiveTab('essays')}
              >
                <FaFileAlt className="me-2" />
                Essays
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-capitalize">{activeTab}</h2>
          {activeTab !== 'dashboard' && (
            <Link 
              to={activeTab === 'tutors' ? '/tutor-form' : `/admin/${activeTab}/new`} 
              className="btn btn-primary"
            >
              <FaPlus className="me-2" />
              Add {activeTab.charAt(0).toUpperCase() + activeTab.slice(1).slice(0, -1)}
            </Link>
          )}
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {activeTab === 'dashboard' && (
              <div className="row">
                <div className="col-md-3 mb-4">
                  <div className="card bg-primary text-white">
                    <div className="card-body">
                      <h5 className="card-title">Total Tutors</h5>
                      <p className="card-text display-4">{tutors.length}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className="card bg-success text-white">
                    <div className="card-body">
                      <h5 className="card-title">Active Services</h5>
                      <p className="card-text display-4">{services.length}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className="card bg-info text-white">
                    <div className="card-body">
                      <h5 className="card-title">Resources</h5>
                      <p className="card-text display-4">{resources.length}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className="card bg-warning text-white">
                    <div className="card-body">
                      <h5 className="card-title">Sample Essays</h5>
                      <p className="card-text display-4">{essays.length}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tutors' && (
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Photo</th>
                      <th>Name</th>
                      <th>Specialization</th>
                      <th>Rating</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tutors.map(tutor => (
                      <tr key={tutor.id}>
                        <td>{tutor.id}</td>
                        <td>
                          <img 
                            src={tutor.profile_picture || '/default-tutor.jpg'} 
                            alt={tutor.name}
                            className="rounded-circle"
                            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                          />
                        </td>
                        <td>{tutor.name}</td>
                        <td>{tutor.specialization}</td>
                        <td>{tutor.rating || 'N/A'}</td>
                        <td>
                          {tutor.is_active ? (
                            <span className="badge bg-success">Active</span>
                          ) : (
                            <span className="badge bg-secondary">Inactive</span>
                          )}
                        </td>
                        <td>
                          <Link 
                            to={`/admin/tutors/edit/${tutor.id}`}
                            className="btn btn-sm btn-outline-primary me-2"
                          >
                            <FaEdit />
                          </Link>
                          <button 
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDelete('tutor', tutor.id)}
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Add tables for services, resources, essays here if needed */}
            
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
