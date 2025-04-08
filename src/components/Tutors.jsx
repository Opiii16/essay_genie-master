import React from 'react';
// import './Tutor.css'; 

const tutorData = [
  
  {
    id: 2,
    name: 'Bob',
    photo: `https://via.placeholder.com/150/4CAF50/FFFFFF?Text=Tutor2`, // Placeholder image URL
    subjects: 'English, Literature',
    description: 'Creative and engaging tutor specializing in language arts.',
    price: '$15/hour',
    rating: 4.5,
  },
  
 
  {
    id: 5,
    name: 'Eve',
    photo: `https://via.placeholder.com/150/9C27B0/FFFFFF?Text=Tutor5`, // Placeholder image URL
    subjects: 'Biology, Chemistry',
    description: 'Dedicated tutor simplifying complex biological and chemical concepts.',
    price: '$22/hour',
    rating: 4.7,
  },
  {
    id: 6,
    name: 'Frank',
    photo: `https://via.placeholder.com/150/607D8B/FFFFFF?Text=Tutor6`, // Placeholder image URL
    subjects: 'Economics, Business Studies',
    description: 'Practical tutor helping students understand economic and business principles.',
    price: '$20/hour',
    rating: 4.4,
  },
  // You can add more tutor data here
];

function TutorCard({ tutor }) {
  return (
    <div className="tutor-card">
      <img src={tutor.photo} alt={tutor.name} className="profile-photo" />
      <h3>{tutor.name}</h3>
      <p className="subjects">Subjects: {tutor.subjects}</p>
      <p className="description">{tutor.description}</p>
      <div className="pricing-rating">
        <p>Price: {tutor.price}</p>
        <p>Rating: {tutor.rating}/5</p>
      </div>
    </div>
  );
}

function Tutors() {
  return (
    <div className="tutor-carousel">
      {tutorData.map((tutor) => (
        <TutorCard key={tutor.id} tutor={tutor} />
      ))}
    </div>
  );
}

export default Tutors;