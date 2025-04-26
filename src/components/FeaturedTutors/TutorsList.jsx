// FeaturedTutors/TutorsList.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tutors.css';

const tutors = [
  { id: 1, name: 'John Doe', subject: 'Mathematics', rating: 7.8, image: '/assets/images/tutors1.jpg', price: 'ksh2500/hr' },
  { id: 2, name: 'Jane Smith', subject: 'English', rating: 8.6, image: '/assets/images/tutors2.jpg', price: 'ksh2000/hr' },
  { id: 3, name: 'David Johnson', subject: 'Physics', rating: 6.9, image: '/assets/images/tutors3.jpg', price: 'ksh800/hr' },
  { id: 4, name: 'Laura Brown', subject: 'Biology', rating: 9.7, image: '/assets/images/tutors4.jpg', price: 'ksh1500/hr' },
  { id: 5, name: 'Michael Lee', subject: 'Chemistry', rating: 8.8, image: '/assets/images/tutors5.jpg', price: 'ksh300/hr' },
  { id: 6, name: 'Emily Davis', subject: 'History', rating: 9.5, image: '/assets/images/tutors6.jpg', price: 'ksh750/hr' },
];

const TutorsList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const tutorsPerSlide = 3;
  const navigate = useNavigate();

  const prevSlide = () => {
    const firstIndex = 0;
    const newIndex = currentIndex === firstIndex ? tutors.length - tutorsPerSlide : currentIndex - tutorsPerSlide;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const lastIndex = tutors.length - tutorsPerSlide;
    const newIndex = currentIndex >= lastIndex ? 0 : currentIndex + tutorsPerSlide;
    setCurrentIndex(newIndex);
  };

  const handlePayNow = (tutor) => {
    navigate('/make-payment', { state: { tutor } });
  };

  const translateX = -(currentIndex * (100 / tutorsPerSlide));

  return (
    <section className="featured-tutors">
      {/* <h2>Featured Tutors</h2> */}
      <div className="tutors-carousel-container">
        <div className="tutors-carousel">
          <div
            className="tutors-slides"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {tutors.map((tutor) => (
              <div className="tutor-card" key={tutor.id}>
                <img src={tutor.image} alt={tutor.name} className="tutor-image" />
                <div className="tutor-info">
                  <div className="tutor-name">{tutor.name}</div>
                  <div className="tutor-subject">{tutor.subject}</div>
                  <div className="tutor-rating">⭐ {tutor.rating}</div>
                  <div className="tutor-price">{tutor.price}</div>
                  <div className="tutor-actions">
                    <button className="view-profile-btn">View Profile</button>
                    <button className="pay-now-btn" onClick={() => handlePayNow(tutor)}>
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-button prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="carousel-button next" onClick={nextSlide}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default TutorsList;
