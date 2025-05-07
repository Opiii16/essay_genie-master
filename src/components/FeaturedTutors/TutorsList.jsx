import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FeaturedTutors = () => {
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSubject, setFilterSubject] = useState('');
  const [sortOption, setSortOption] = useState('');

  const tutors = [
    {
      name: 'Ali Musa',
      subject: 'Essay Writing',
      experience: 5,
      rating: 4.8,
      bio: 'Specializes in admission essays and scholarship applications with 5 years of experience.',
      image: '/assets/images/tutors1.jpg'
    },
    {
      name: 'Jane Wanjiru',
      subject: 'Thesis Assistance',
      experience: 7,
      rating: 4.9,
      bio: 'Expert in qualitative and quantitative research for graduate students.',
      image: '/assets/images/tutors2.jpg'
    },
    {
      name: 'Micheal Otieno',
      subject: 'Proofreading',
      experience: 4,
      rating: 4.6,
      bio: 'Helps polish your final papers with keen grammar skills and attention to detail.',
      image: '/assets/images/tutors3.jpg'
    },
    {
      name: 'Nora Kamau',
      subject: 'Research Papers',
      experience: 6,
      rating: 4.7,
      bio: 'Specialist in scientific research papers and methodology sections.',
      image: '/assets/images/tutors4.jpg'
    },
    {
      name: 'David Mwangi',
      subject: 'Dissertation Help',
      experience: 8,
      rating: 4.9,
      bio: 'PhD holder with extensive experience in dissertation writing and defense preparation.',
      image: '/assets/images/tutors5.jpg'
    },
    {
      name: 'Grace Akinyi',
      subject: 'Literature Reviews',
      experience: 5,
      rating: 4.5,
      bio: 'Expert in comprehensive literature reviews and citation management.',
      image: '/assets/images/tutors6.jpg'
    }
  ];

  const subjects = [...new Set(tutors.map(t => t.subject))];

  const handleTutorClick = (tutor) => {
    setSelectedTutor(tutor);
    setShowModal(true);
  };

  const filteredTutors = tutors
    .filter(tutor =>
      tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutor.subject.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(tutor => !filterSubject || tutor.subject === filterSubject)
    .sort((a, b) => {
      if (sortOption === 'rating') return b.rating - a.rating;
      if (sortOption === 'experience') return b.experience - a.experience;
      return 0;
    });

  return (
    <div>
      {/* Search + Filter Controls */}
      <div className="row mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search tutor or subject..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={filterSubject}
            onChange={(e) => setFilterSubject(e.target.value)}
          >
            <option value="">Filter by Subject</option>
            {subjects.map((subj, idx) => (
              <option key={idx} value={subj}>
                {subj}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="rating">Highest Rating</option>
            <option value="experience">Most Experience</option>
          </select>
        </div>
      </div>

      {/* Tutors List */}
      <div className="row">
        {filteredTutors.map((tutor, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div
              className="card h-100 text-center tutor-card"
              onClick={() => handleTutorClick(tutor)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={tutor.image}
                alt={tutor.name}
                className="card-img-top"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{tutor.name}</h5>
                <p className="text-muted">{tutor.subject}</p>
                <p className="text-warning mb-0">
                  {'⭐'.repeat(Math.floor(tutor.rating))}
                  {tutor.rating % 1 >= 0.5 && '⭐'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tutor Modal */}
      {selectedTutor && (
        <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedTutor.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-4">
                <img
                  src={selectedTutor.image}
                  alt={selectedTutor.name}
                  className="img-fluid rounded mb-3"
                />
              </div>
              <div className="col-md-8">
                <p><strong>Subject:</strong> {selectedTutor.subject}</p>
                <p><strong>Experience:</strong> {selectedTutor.experience} years</p>
                <p><strong>Rating:</strong> ⭐ {selectedTutor.rating}/5</p>
                <p><strong>About:</strong> {selectedTutor.bio}</p>
                
                <form onSubmit={(e) => { e.preventDefault(); alert('Thanks for your feedback!'); }}>
                  <div className="mb-2">
                    <label>Rate Tutor (1–5):</label>
                    <input type="number" min="1" max="5" className="form-control" required />
                  </div>
                  <div className="mb-2">
                    <label>Your Feedback:</label>
                    <textarea className="form-control" rows="2" required></textarea>
                  </div>
                  <button className="btn btn-sm btn-secondary mt-2">Submit Review</button>
                </form>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Link
              to="/book-meeting"
              state={{ tutor: selectedTutor }}
              className="btn btn-primary"
            >
              📅 Book Zoom Meeting
            </Link>
            <Link
              to="/make-payment"
              state={{
                tutor: selectedTutor,
                service: {
                  name: selectedTutor.subject,
                  price: 1500,
                  description: `Custom session with ${selectedTutor.name}`
                }
              }}
              className="btn btn-success"
            >
              ✅ Book Session
            </Link>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default FeaturedTutors;