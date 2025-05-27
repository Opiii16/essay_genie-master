import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSave } from 'react-icons/fa';

const AddServiceForm = () => {
  const [formData, setFormData] = useState({
    service_name: '',
    service_category: '',
    service_description: '',
    service_price: '',
    delivery_time: '',
    features: '',
    benefits: '',
    target_audience: ''
  });
  const [thumbnail, setThumbnail] = useState(null);
  const [sampleFile, setSampleFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleSampleFileChange = (e) => {
    setSampleFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      if (thumbnail) {
        formDataToSend.append('service_thumbnail', thumbnail);
      }
      if (sampleFile) {
        formDataToSend.append('sample_file', sampleFile);
      }

      const response = await fetch('/api/add_service', {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error('Failed to add service/resource');
      }

      navigate('/admin/services');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <button 
          className="btn btn-outline-secondary"
          onClick={() => navigate('/admin/services')}
        >
          <FaArrowLeft className="me-2" />
          Back to Services
        </button>
        <h2>Add New Service/Resource</h2>
        <div></div> {/* Empty div for spacing */}
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Service Name</label>
              <input
                type="text"
                className="form-control"
                name="service_name"
                value={formData.service_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                name="service_category"
                value={formData.service_category}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                <option value="essay_writing">Essay Writing</option>
                <option value="research_paper">Research Paper</option>
                <option value="thesis">Thesis/Dissertation</option>
                <option value="editing">Editing/Proofreading</option>
                <option value="resource">Study Resource</option>
                <option value="template">Template</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Price (Ksh)</label>
              <input
                type="number"
                className="form-control"
                name="service_price"
                value={formData.service_price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Delivery Time</label>
              <input
                type="text"
                className="form-control"
                name="delivery_time"
                value={formData.delivery_time}
                onChange={handleChange}
                placeholder="e.g., 3 days, 1 week"
                required
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Key Features</label>
              <textarea
                className="form-control"
                name="features"
                value={formData.features}
                onChange={handleChange}
                rows="3"
                placeholder="List key features separated by commas"
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Benefits</label>
              <textarea
                className="form-control"
                name="benefits"
                value={formData.benefits}
                onChange={handleChange}
                rows="3"
                placeholder="List benefits separated by commas"
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Target Audience</label>
              <input
                type="text"
                className="form-control"
                name="target_audience"
                value={formData.target_audience}
                onChange={handleChange}
                placeholder="e.g., High school, University students"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Thumbnail Image</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={handleThumbnailChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Sample File (Optional)</label>
              <input
                type="file"
                className="form-control"
                onChange={handleSampleFileChange}
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="service_description"
            value={formData.service_description}
            onChange={handleChange}
            rows="6"
            required
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
            Save Service/Resource
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddServiceForm;