import React, { useState } from 'react';
import './RevisionQuestions.css';

const originalQuestions = [ // Move this outside component to avoid resetting on re-render
  {
    id: 1,
    subject: "Biology",
    topic: "Cell Biology",
    difficulty: "Medium",
    question: "Explain the difference between prokaryotic and eukaryotic cells.",
    answer: "Prokaryotic cells are simpler, smaller cells without a nucleus or membrane-bound organelles...",
    date: "2023-05-15T10:30:00Z"
  },
  {
    id: 2,
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "Hard",
    question: "Solve for x: 2x² + 5x - 3 = 0",
    answer: "Using the quadratic formula: x = [-b ± √(b²-4ac)] / 2a...",
    date: "2023-04-22T08:45:00Z"
  },
  {
    id: 3,
    subject: "History",
    topic: "World War II",
    difficulty: "Easy",
    question: "What were the main causes of World War II?",
    answer: "The main causes were: Treaty of Versailles, rise of fascism, appeasement failure, weak League of Nations, Japanese expansionism, and Germany invading Poland.",
    date: "2023-03-30T11:20:00Z"
  },
  {
    id: 4,
    subject: "Chemistry",
    topic: "Periodic Table",
    difficulty: "Medium",
    question: "Why do noble gases not readily form compounds?",
    answer: "Noble gases have complete valence shells, making them stable and unreactive.",
    date: "2023-06-05T13:10:00Z"
  },
  {
    id: 5,
    subject: "Physics",
    topic: "Mechanics",
    difficulty: "Hard",
    question: "Derive the equations of motion for constant acceleration.",
    answer: "Equations: v = u + at, s = ut + ½at², and v² = u² + 2as.",
    date: "2023-02-18T09:55:00Z"
  },
  {
    id: 6,
    subject: "English Literature",
    topic: "SetBook...The Good Samaritan",
    difficulty: "Medium",
    question: "Analyze the theme of ambition in Macbeth.",
    answer: "Ambition drives Macbeth's downfall. It corrupts him and leads to his and Lady Macbeth's demise.",
    date: "2023-01-10T14:40:00Z"
  },
  {
    id: 7,
    subject: "Geography",
    topic: "Environmental Changes",
    difficulty: "Easy",
    question: "What causes earthquakes?",
    answer: "Earthquakes are caused by sudden movements of tectonic plates at fault lines.",
    date: "2023-05-01T09:00:00Z"
  },
  {
    id: 8,
    subject: "Computer ",
    topic: "Data Science",
    difficulty: "Medium",
    question: "What is the difference between a stack and a queue?",
    answer: "A stack is LIFO (last-in, first-out), while a queue is FIFO (first-in, first-out).",
    date: "2023-04-10T15:30:00Z"
  },
  {
    id: 9,
    subject: "Economics",
    topic: "Supply and Demand",
    difficulty: "Easy",
    question: "What happens when supply exceeds demand?",
    answer: "Prices tend to fall as sellers compete to attract buyers.",
    date: "2023-03-22T12:00:00Z"
  },
  {
    id: 10,
    subject: "Philosophy",
    topic: "Ethics",
    difficulty: "Hard",
    question: "Explain the difference between consequentialism and deontology.",
    answer: "Consequentialism judges actions by outcomes; deontology judges actions by adherence to rules.",
    date: "2023-01-15T18:45:00Z"
  },
  {
    id: 11,
    subject: "Business Studies",
    topic: "Marketing Mix",
    difficulty: "Medium",
    question: "What are the 4Ps in marketing?",
    answer: "Product, Price, Place, Promotion.",
    date: "2023-02-12T14:10:00Z"
  },
  {
    id: 12,
    subject: "Psychology",
    topic: "Memory",
    difficulty: "Medium",
    question: "What is the difference between short-term and long-term memory?",
    answer: "Short-term memory holds information temporarily, while long-term memory stores it indefinitely.",
    date: "2023-01-25T13:00:00Z"
  },
  {
    id: 13,
    subject: "Art",
    topic: "Renaissance",
    difficulty: "Easy",
    question: "Name two famous Renaissance artists.",
    answer: "Leonardo da Vinci and Michelangelo.",
    date: "2023-05-18T11:40:00Z"
  },
  {
    id: 14,
    subject: " Islamic Religious Studies",
    topic: "World Religions",
    difficulty: "Easy",
    question: "What are the Five Pillars of Islam?",
    answer: "Shahada, Salah, Zakat, Sawm, Hajj.",
    date: "2023-03-12T16:20:00Z"
  },
  {
    id: 15,
    subject: "Music",
    topic: "Notation",
    difficulty: "Medium",
    question: "What is a treble clef?",
    answer: "A symbol used to indicate the pitch of written notes for higher ranges.",
    date: "2023-04-30T10:05:00Z"
  },
  // ... include all 16 questions here
];

const RevisionQuestions = () => {
  const [questions, setQuestions] = useState(originalQuestions);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [filter, setFilter] = useState("All");

  const openQuestionModal = (question) => {
    setSelectedQuestion(question);
    setShowAnswer(false);
  };

  const closeQuestionModal = () => {
    setSelectedQuestion(null);
    setShowAnswer(false);
  };

  const toggleAnswer = () => setShowAnswer(!showAnswer);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return '#4CAF50';
      case 'medium': return '#FFC107';
      case 'hard': return '#F44336';
      default: return '#9E9E9E';
    }
  };

  const shuffleQuestions = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
  };

  const resetQuestions = () => {
    setQuestions(originalQuestions);
    setFilter("All");
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    if (value === "All") {
      setQuestions(originalQuestions);
    } else {
      const filtered = originalQuestions.filter(q => q.difficulty.toLowerCase() === value.toLowerCase());
      setQuestions(filtered);
    }
  };

  return (
    <div className="revision-container">
      <h1>Revision Questions</h1>
      <p>Practice with these questions to test your knowledge across various subjects.</p>

      <div className="controls">
        <button className="btn" onClick={shuffleQuestions}>🔀 Shuffle Questions</button>
        <button className="btn" onClick={resetQuestions}>🔄 Reset</button>
        <select value={filter} onChange={handleFilterChange}>
          <option value="All">Filter: All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="questions-grid">
        {questions.map(question => (
          <div key={question.id} className="question-card">
            <div className="question-header">
              <span className="difficulty-badge" style={{ backgroundColor: getDifficultyColor(question.difficulty) }}>
                {question.difficulty}
              </span>
              <span className="subject-tag">{question.subject}</span>
            </div>

            <h3>{question.topic}</h3>
            <p className="question-date">Posted on {new Date(question.date).toLocaleDateString()}</p>

            <div className="question-preview">
              {question.question.length > 100
                ? `${question.question.substring(0, 100)}...`
                : question.question}
            </div>

            <button className="btn view-btn" onClick={() => openQuestionModal(question)}>
              View Question
            </button>
          </div>
        ))}
      </div>

      {selectedQuestion && (
        <div className="modal-overlay" onClick={closeQuestionModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="difficulty-badge" style={{ backgroundColor: getDifficultyColor(selectedQuestion.difficulty) }}>
                  {selectedQuestion.difficulty}
                </span>
                <span className="subject-tag">{selectedQuestion.subject}</span>
              </div>
              <h2>{selectedQuestion.topic}</h2>
              <button className="close-btn" onClick={closeQuestionModal}>×</button>
            </div>

            <div className="question-full-content">
              <h3>Question:</h3>
              <p>{selectedQuestion.question}</p>

              <button className="btn answer-btn" onClick={toggleAnswer}>
                {showAnswer ? 'Hide Answer' : 'Show Answer'}
              </button>

              {showAnswer && (
                <div className="answer-section">
                  <h3>Answer:</h3>
                  <p>{selectedQuestion.answer}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RevisionQuestions;
