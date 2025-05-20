import React, { useState, useEffect } from 'react';
import './Essays.css';

const Essays = () => {
  const [essays, setEssays] = useState([]);
  const [reviewForm, setReviewForm] = useState({
    essayId: null,
    rating: 0,
    comment: '',
    studentName: ''
  });
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Mock data instead of API call
    const mockEssays = [
      {
        id: 1,
        title: "The Art of Mindful Living in a Digital Age",
        summary: "Exploring how mindfulness practices can help us navigate the constant distractions of our connected world while maintaining mental wellbeing and productivity.",
        date: "2023-05-15T10:30:00Z",
        averageRating: 4.5,
        reviews: [
          {
            rating: 5,
            comment: "This essay changed my daily routine completely!",
            studentName: "Alex Johnson",
            date: "2023-06-01T14:25:00Z"
          },
          {
            rating: 4,
            comment: "Very insightful, though I wish it had more practical exercises.",
            studentName: "Sam Wilson",
            date: "2023-05-20T09:15:00Z"
          }
        ]
      },
      {
        id: 2,
        title: "Neural Networks: Mimicking the Human Brain",
        summary: "A deep dive into how artificial neural networks were inspired by biological neurons and the implications for future AI development.",
        date: "2023-04-22T08:45:00Z",
        averageRating: 4.8,
        reviews: [
          {
            rating: 5,
            comment: "Perfect blend of technical and accessible writing!",
            studentName: "Taylor Smith",
            date: "2023-05-10T16:40:00Z"
          }
        ]
      },
      {
        id: 3,
        title: "The Lost Art of Handwritten Letters",
        summary: "Examining the emotional and psychological benefits of handwritten communication in an era dominated by digital messages and emails.",
        date: "2023-03-30T11:20:00Z",
        averageRating: 4.2,
        reviews: []
      },
      {
        id: 4,
        title: "Urban Green Spaces and Mental Health",
        summary: "How city parks and community gardens contribute to reduced stress levels and improved quality of life for urban dwellers.",
        date: "2023-06-05T13:10:00Z",
        averageRating: 4.7,
        reviews: [
          {
            rating: 5,
            comment: "As a city planner, I found this incredibly valuable.",
            studentName: "Jordan Lee",
            date: "2023-06-12T10:05:00Z"
          },
          {
            rating: 4,
            comment: "Great research, would love to see more case studies.",
            studentName: "Casey Brown",
            date: "2023-06-08T15:30:00Z"
          }
        ]
      },
      {
        id: 5,
        title: "Culinary Diplomacy: Food as Cultural Bridge",
        summary: "Exploring how sharing meals and recipes has historically brought people together across political and cultural divides.",
        date: "2023-02-18T09:55:00Z",
        averageRating: 4.9,
        reviews: [
          {
            rating: 5,
            comment: "Made me appreciate every meal as a cultural experience!",
            studentName: "Riley Chen",
            date: "2023-03-05T12:20:00Z"
          },
          {
            rating: 5,
            comment: "Beautifully written and thoroughly researched.",
            studentName: "Morgan Taylor",
            date: "2023-02-25T17:15:00Z"
          }
        ]
      },
      {
        id: 6,
        title: "The Psychology of Color in Marketing",
        summary: "How different hues influence consumer behavior and brand perception, with examples from successful advertising campaigns.",
        date: "2023-01-10T14:40:00Z",
        averageRating: 4.3,
        reviews: [
          {
            rating: 4,
            comment: "Fascinating read for anyone in design or marketing.",
            studentName: "Jamie Wilson",
            date: "2023-01-25T11:50:00Z"
          }
        ]
      }
    ];

    const timer = setTimeout(() => {
      setEssays(mockEssays);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setEssays(essays.map(essay => {
      if (essay.id === reviewForm.essayId) {
        return {
          ...essay,
          reviews: [...essay.reviews, {
            rating: reviewForm.rating,
            comment: reviewForm.comment,
            studentName: reviewForm.studentName,
            date: new Date().toISOString()
          }],
          averageRating: calculateNewAverage(essay, reviewForm.rating)
        };
      }
      return essay;
    }));
    setReviewForm({
      essayId: null,
      rating: 0,
      comment: '',
      studentName: ''
    });
    setModalOpen(false);
  };

  const calculateNewAverage = (essay, newRating) => {
    const currentTotal = essay.averageRating * essay.reviews.length;
    const newTotal = currentTotal + newRating;
    return newTotal / (essay.reviews.length + 1);
  };

  const openReviewModal = (essayId) => {
    setReviewForm({
      ...reviewForm,
      essayId
    });
    setModalOpen(true);
  };

  const renderStars = (rating, interactive = false, onChange) => {
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span 
            key={star} 
            className={star <= rating ? 'star filled' : 'star'}
            onClick={interactive ? () => onChange(star) : null}
            style={{ cursor: interactive ? 'pointer' : 'default' }}
          >
            {star <= rating ? '★' : '☆'}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="essays-container">
      <h1>Sample Essays</h1>
      <p>Browse our collection of high-quality essay samples. Don't forget to leave your review!</p>
      
      <div className="essays-grid">
        {essays.map(essay => (
          <div key={essay.id} className="essay-card">
            <h3>{essay.title}</h3>
            <p className="essay-date">Posted on {new Date(essay.date).toLocaleDateString()}</p>
            <p className="essay-summary">
              {essay.summary.length > 150 ? `${essay.summary.substring(0, 150)}...` : essay.summary}
            </p>
            
            <div className="essay-rating">
              {renderStars(essay.averageRating)}
              <span>({essay.reviews?.length || 0} reviews)</span>
            </div>
            
            <div className="essay-actions">
              <button 
                className="btn read-btn"
                onClick={() => alert(`Would normally open essay ${essay.id} in full view`)}
              >
                Read Full Essay
              </button>
              <button 
                className="btn review-btn"
                onClick={() => openReviewModal(essay.id)}
              >
                Leave Review
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Write Your Review</h2>
              <button className="close-btn" onClick={() => setModalOpen(false)}>×</button>
            </div>
            
            <form onSubmit={handleReviewSubmit} className="review-form">
              <div className="form-group">
                <label>Your Name</label>
                <input 
                  type="text" 
                  placeholder="Name (optional)" 
                  value={reviewForm.studentName}
                  onChange={(e) => setReviewForm({...reviewForm, studentName: e.target.value})}
                />
              </div>
              
              <div className="form-group">
                <label>Rating</label>
                {renderStars(reviewForm.rating, true, (rating) => 
                  setReviewForm({...reviewForm, rating})
                )}
              </div>
              
              <div className="form-group">
                <label>Your Review</label>
                <textarea 
                  placeholder="Share your thoughts about this essay..." 
                  value={reviewForm.comment}
                  onChange={(e) => setReviewForm({...reviewForm, comment: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-actions">
                <button type="button" className="btn cancel-btn" onClick={() => setModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn submit-btn">
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Essays;
