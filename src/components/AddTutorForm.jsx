import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSave } from 'react-icons/fa';

const AddTutorForm = () => {
  const [formData, setFormData] = useState({
    tutor_name: '',
    tutor_subject: '',
    tutor_description: '',
    tutor_rate: '',
    tutor_experience: '',
    tutor_qualification: '',
    tutor_availability: '',
    tutor_contact: ''
  });
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const addTutor = async (data) => {
    const payload = new FormData();
    for (const key in data) {
      payload.append(key, data[key]);
    }
    if (photo) {
      payload.append('photo', photo);
    }

    const response = await fetch('https://your-api-url.com/tutors', {
      method: 'POST',
      body: payload,
    });

    return await response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await addTutor(formData);
      if (response.success) {
        navigate('/admin/tutors');
      } else {
        setError(response.message || 'Failed to add tutor');
      }
    } catch (err) {
      setError(err.message || 'Failed to add tutor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <button 
          className="btn btn-outline-secondary"
          onClick={() => navigate('/admin')}
        >
          <FaArrowLeft className="me-2" />
          Back to Tutors
        </button>
        <h2>Add New Tutor</h2>
        <div></div>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="tutor_name"
                value={formData.tutor_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                name="tutor_subject"
                value={formData.tutor_subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Hourly Rate (Ksh)</label>
              <input
                type="number"
                className="form-control"
                name="tutor_rate"
                value={formData.tutor_rate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Experience</label>
              <input
                type="text"
                className="form-control"
                name="tutor_experience"
                value={formData.tutor_experience}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Qualification</label>
              <input
                type="text"
                className="form-control"
                name="tutor_qualification"
                value={formData.tutor_qualification}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Availability</label>
              <input
                type="text"
                className="form-control"
                name="tutor_availability"
                value={formData.tutor_availability}
                onChange={handleChange}
                placeholder="e.g., Mon-Fri 3-6 PM"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Contact Info</label>
              <input
                type="text"
                className="form-control"
                name="tutor_contact"
                value={formData.tutor_contact}
                onChange={handleChange}
                placeholder="Email or phone number"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Profile Photo</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={handleFileChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="tutor_description"
            value={formData.tutor_description}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>

        <div className="d-grid">
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? (
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            ) : (
              <FaSave className="me-2" />
            )}
            Save Tutor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTutorForm;
