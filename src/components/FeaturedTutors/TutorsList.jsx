import React, { useState, useEffect } from 'react';
import './Tutors.css';

const visibleItems = 3;

const tutors = [
  // Your original 6 tutors
  {
    id: 1,
    name: 'Dr. Amina Diallo',
    subject: 'English Literature',
    rating: '★★★★★',
    price: '$45/hr',
    image: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    id: 2,
    name: 'Prof. Kwame Mensah',
    subject: 'Computer Science',
    rating: '★★★★☆',
    price: '$60/hr',
    image: 'https://randomuser.me/api/portraits/men/85.jpg'
  },
  {
    id: 3,
    name: 'Dr. Nia Adebayo',
    subject: 'Mathematics, Physics',
    rating: '★★★★★',
    price: '$50/hr',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 4,
    name: 'Prof. Jelani Okafor',
    subject: 'Computer Science, Programming',
    rating: '★★★★☆',
    price: '$55/hr',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 5,
    name: 'Dr. Fatoumata Bâ',
    subject: 'Biology, Chemistry',
    rating: '★★★★★',
    price: '$48/hr',
    image: 'https://randomuser.me/api/portraits/women/33.jpg'
  },
  {
    id: 6,
    name: 'Prof. Chinedu Okonkwo',
    subject: 'Economics, Business Studies',
    rating: '★★★★☆',
    price: '$52/hr',
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  },

  // 12 New Tutors
  {
    id: 7,
    name: 'Dr. Zanele Dlamini',
    subject: 'Political Science',
    rating: '★★★★★',
    price: '$58/hr',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    id: 8,
    name: 'Prof. Tunde Adeleke',
    subject: 'Mechanical Engineering',
    rating: '★★★★☆',
    price: '$65/hr',
    image: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
  {
    id: 9,
    name: 'Dr. Amani Nkosi',
    subject: 'Psychology',
    rating: '★★★★★',
    price: '$49/hr',
    image: 'https://randomuser.me/api/portraits/women/51.jpg'
  },
  {
    id: 10,
    name: 'Prof. Femi Balogun',
    subject: 'Electrical Engineering',
    rating: '★★★★☆',
    price: '$62/hr',
    image: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    id: 11,
    name: 'Dr. Ifeoma Eze',
    subject: 'History, African Studies',
    rating: '★★★★★',
    price: '$47/hr',
    image: 'https://randomuser.me/api/portraits/women/29.jpg'
  },
  {
    id: 12,
    name: 'Prof. Jabari Sowande',
    subject: 'Data Science, Statistics',
    rating: '★★★★★',
    price: '$70/hr',
    image: 'https://randomuser.me/api/portraits/men/88.jpg'
  },
  {
    id: 13,
    name: 'Dr. Naledi Mbeki',
    subject: 'Public Health',
    rating: '★★★★☆',
    price: '$53/hr',
    image: 'https://randomuser.me/api/portraits/women/72.jpg'
  },
  {
    id: 14,
    name: 'Prof. Olumide Adebayo',
    subject: 'Law, Constitutional Studies',
    rating: '★★★★★',
    price: '$75/hr',
    image: 'https://randomuser.me/api/portraits/men/91.jpg'
  },
  {
    id: 15,
    name: 'Dr. Adanna Okeke',
    subject: 'Creative Writing',
    rating: '★★★★★',
    price: '$42/hr',
    image: 'https://randomuser.me/api/portraits/women/38.jpg'
  },
  {
    id: 16,
    name: 'Prof. Thabo van der Merwe',
    subject: 'Artificial Intelligence',
    rating: '★★★★★',
    price: '$80/hr',
    image: 'https://randomuser.me/api/portraits/men/64.jpg'
  },
  {
    id: 17,
    name: 'Dr. Amara Diop',
    subject: 'French, Linguistics',
    rating: '★★★★☆',
    price: '$46/hr',
    image: 'https://randomuser.me/api/portraits/women/56.jpg'
  },
  {
    id: 18,
    name: 'Prof. Ekon Bassey',
    subject: 'Accounting, Finance',
    rating: '★★★★★',
    price: '$68/hr',
    image: 'https://randomuser.me/api/portraits/men/78.jpg'
  }
];

const TutorsList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % tutors.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleTutors = () => {
    const visibleTutors = [];
    for (let i = 0; i < visibleItems; i++) {
      visibleTutors.push(tutors[(currentIndex + i) % tutors.length]);
    }
    return visibleTutors;
  };

  return (
    <div className="tutors-carousel-container">
      <div className="tutors-carousel">
        {getVisibleTutors().map((tutor) => (
          <div key={tutor.id} className="tutor-card">
            <img src={tutor.image} alt={tutor.name} className="tutor-image" />
            <div className="tutor-info">
              <h3 className="tutor-name">{tutor.name}</h3>
              <span className="tutor-subject">{tutor.subject}</span>
              <div className="tutor-rating">{tutor.rating}</div>
              <div className="tutor-price">{tutor.price}</div>
              <a href="#profile" className="view-profile-btn">View Profile</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorsList;

