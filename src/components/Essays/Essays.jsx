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
  const [selectedEssay, setSelectedEssay] = useState(null);

  useEffect(() => {
    const mockEssays = [
      {
        id: 1,
        title: "The Art of Mindful Living in a Digital Age",
        summary: "Exploring how mindfulness practices can help us navigate the constant distractions of our connected world while maintaining mental wellbeing and productivity.",
        fullContent: (
          <>
            <h2>Introduction</h2>
            <p>In our hyper-connected world, where digital notifications constantly demand our attention, the practice of mindfulness has emerged as a vital counterbalance. This essay explores how ancient mindfulness techniques can be adapted to modern life, helping individuals maintain focus, reduce stress, and improve overall wellbeing.</p>
            <h2>The Digital Dilemma</h2>
            <p>Research shows the average person checks their phone 58 times daily, with 30% of these occurring during work hours. This constant switching between tasks reduces our ability to concentrate deeply. Neuroscientific studies demonstrate that chronic digital distraction actually rewires our brains, making sustained attention more difficult.</p>
            <h2>Mindfulness as an Antidote</h2>
            <p>Mindfulness meditation, rooted in Buddhist traditions but now widely secularized, trains the brain to focus on the present moment. Studies at Harvard Medical School show that just eight weeks of mindfulness practice can increase gray matter density in brain regions associated with memory and emotional regulation.</p>
            <h2>Practical Applications</h2>
            <p>Simple techniques like the "20-20-20 rule" (every 20 minutes, look at something 20 feet away for 20 seconds) can reduce digital eye strain. Scheduled "tech-free" periods during the day allow for deeper work and more meaningful personal connections.</p>
            <h2>Conclusion</h2>
            <p>While technology isn't inherently bad, mindful usage helps prevent it from controlling our lives. By cultivating awareness and intentionality, we can harness technology's benefits without sacrificing our mental health or human connections.</p>
          </>
        ),
        date: "2023-05-15T10:30:00Z",
        averageRating: 4.5,
        reviews: []
      },
      // Add other essays similarly...
      {
        id: 2,
        title: "Neural Networks: Mimicking the Human Brain",
        summary: "A deep dive into how artificial neural networks...",
        fullContent: (
          <>
            <h2>The Biological Inspiration</h2>
            <p>The concept of artificial neural networks dates back to the 1940s, when Warren McCulloch and Walter Pitts created a computational model of neural activity. Their work demonstrated how networks of artificial neurons could, in theory, perform logical operations.</p>
            <h2>From Perceptrons to Deep Learning</h2>
            <p>Frank Rosenblatt's perceptron in 1958 marked the first trainable neural network. While limited in capability, it established the framework for modern deep learning systems. Today's networks contain billions of parameters arranged in dozens of layers, far surpassing biological brains in certain specialized tasks.</p>
            <h2>Key Differences</h2>
            <p>Biological neurons communicate via complex electrochemical signals and can form new connections throughout life. Artificial neurons use simplified mathematical functions. However, artificial networks can process information millions of times faster than biological ones.</p>
            <h2>Ethical Considerations</h2>
            <p>As neural networks approach human-level performance in specific domains, questions emerge about consciousness, creativity, and rights. Most experts agree current AI lacks subjective experience, but the philosophical debate continues.</p>
            <h2>Future Directions</h2>
            <p>Neuromorphic computing aims to create chips that mimic brain architecture more closely, potentially leading to more energy-efficient AI. Hybrid systems combining symbolic reasoning with neural approaches may produce more general intelligence.</p>
          </>
        ),
        date: "2023-04-22T08:45:00Z",
        averageRating: 4.8,
        reviews: [
          { rating: 5, comment: "Perfect blend of technical and accessible writing!", studentName: "Taylor Smith", date: "2023-05-10T16:40:00Z" }
        ]
      },
      {
        id: 3,
        title: "The Lost Art of Handwritten Letters",
        summary: "Examining the emotional and psychological benefits of handwritten communication...",
        fullContent: (
          <>
            <h2>The Personal Touch</h2>
            <p>Handwritten letters carry a physical presence that digital messages lack. The unique characteristics of someone's handwriting, the choice of paper, even the scent of ink create a multisensory experience that fosters deeper emotional connection.</p>
            <h2>Cognitive Benefits</h2>
            <p>Studies show the physical act of writing by hand engages the brain differently than typing. The slower pace allows for more thoughtful composition, and the motor skills involved enhance memory retention of the written content.</p>
            <h2>Historical Significance</h2>
            <p>Collections of personal correspondence provide invaluable insights into historical periods and relationships. Would we understand Vincent van Gogh as deeply without his letters to Theo? Digital messages rarely achieve this archival quality.</p>
            <h2>Modern Revival</h2>
            <p>Ironically, digital platforms have enabled a resurgence of interest in handwritten correspondence. Pen pal networks, calligraphy tutorials, and specialty stationery shops all thrive online while promoting offline writing.</p>
            <h2>Practical Tips</h2>
            <p>Start small with postcards or brief notes. Invest in quality pens and paper that make writing pleasurable. Consider establishing a regular correspondence with one or two people rather than trying to maintain many connections.</p>
          </>
        ),
        date: "2023-03-30T11:20:00Z",
        averageRating: 4.2,
        reviews: []
      },
      {
        id: 4,
        title: "Urban Green Spaces and Mental Health",
        summary: "How city parks and community gardens contribute...",
        fullContent: (
          <>
            <h2>The Nature Deficit</h2>
            <p>Urbanization has increasingly separated people from natural environments. Studies link this separation to higher rates of anxiety, depression, and attention disorders, particularly in children.</p>
            <h2>Scientific Evidence</h2>
            <p>Research demonstrates that even brief exposure to green spaces lowers cortisol levels, reduces heart rate, and improves mood. MRI scans show nature exposure decreases activity in the brain's subgenual prefrontal cortex, associated with rumination.</p>
            <h2>Design Principles</h2>
            <p>Effective urban green spaces incorporate biodiversity, water features, and varied topography. The "biophilic design" movement advocates for integrating natural elements into all aspects of urban planning.</p>
            <h2>Equity Issues</h2>
            <p>Access to quality green spaces often correlates with income level. Community-led initiatives like guerrilla gardening and park adoption programs help address these disparities.</p>
            <h2>Policy Recommendations</h2>
            <p>Cities should mandate green space within walking distance of all residences. "Pocket parks" in vacant lots and green roofs on buildings can maximize limited urban space.</p>
          </>
        ),
        date: "2023-06-05T13:10:00Z",
        averageRating: 4.7,
        reviews: [
          { rating: 5, comment: "As a city planner, I found this incredibly valuable.", studentName: "Jordan Lee", date: "2023-06-12T10:05:00Z" },
          { rating: 4, comment: "Great research, would love more case studies.", studentName: "Casey Brown", date: "2023-06-08T15:30:00Z" }
        ]
      },
      {
        id: 5,
        title: "Culinary Diplomacy: Food as Cultural Bridge",
        summary: "Exploring how sharing meals and recipes has historically brought people together...",
        fullContent: (
          <>
            <h2>Historical Precedents</h2>
            <p>The Silk Road wasn't just about goods—it was a highway for culinary exchange. Marco Polo's travels introduced pasta to Italy, while the Columbian Exchange radically transformed diets worldwide.</p>
            <h2>Modern Examples</h2>
            <p>State-sponsored culinary diplomacy programs, like Thailand's Global Thai initiative, use food to promote national image. Refugee-run restaurants help preserve cultural identity while fostering integration.</p>
            <h2>Psychological Mechanisms</h2>
            <p>Sharing food triggers oxytocin release, promoting bonding. The collaborative nature of meal preparation breaks down barriers more effectively than formal dialogue.</p>
            <h2>Case Study: The Oslo Accords</h2>
            <p>Secret negotiations between Israelis and Palestinians included carefully planned meals that accommodated kosher and halal requirements while introducing each side to the other's culinary traditions.</p>
            <h2>Home Diplomacy</h2>
            <p>Simple acts like hosting international students for traditional meals or participating in cultural potlucks can build understanding at the grassroots level.</p>
          </>
        ),
        date: "2023-02-18T09:55:00Z",
        averageRating: 4.9,
        reviews: [
          { rating: 5, comment: "Made me appreciate every meal as a cultural experience!", studentName: "Riley Chen", date: "2023-03-05T12:20:00Z" },
          { rating: 5, comment: "Beautifully written and thoroughly researched.", studentName: "Morgan Taylor", date: "2023-02-25T17:15:00Z" }
        ]
      },
      {
        id: 6,
        title: "The Psychology of Color in Marketing",
        summary: "How different hues influence consumer behavior and brand perception...",
        fullContent: (
          <>
            <h2>Color and Emotion</h2>
            <p>Studies consistently show color can affect mood and perception. Warm colors (red, orange) tend to excite, while cool colors (blue, green) calm. These associations are partly cultural but have some universal elements.</p>
            <h2>Brand Identity</h2>
            <p>Color increases brand recognition by up to 80%. Think Tiffany blue or Coca-Cola red. Successful brands often own a specific Pantone shade that becomes synonymous with their identity.</p>
            <h2>Cultural Variations</h2>
            <p>While red signifies danger in Western cultures, it represents prosperity in China. White, associated with purity in the West, symbolizes mourning in parts of Asia. Global brands must consider these differences.</p>
            <h2>Conversion Optimization</h2>
            <p>Button color can dramatically impact click-through rates. Orange often performs well for calls-to-action, while green suggests environmental friendliness. A/B testing is crucial as responses vary by context.</p>
            <h2>Accessibility Considerations</h2>
            <p>With 4.5% of the population experiencing color blindness, successful designs ensure sufficient contrast and don't rely solely on color to convey information.</p>
          </>
        ),
        date: "2023-01-10T14:40:00Z",
        averageRating: 4.3,
        reviews: [
          { rating: 4, comment: "Fascinating read for anyone in design or marketing.", studentName: "Jamie Wilson", date: "2023-01-25T11:50:00Z" }
        ]
      }
    ];

    const timer = setTimeout(() => {
      setEssays(mockEssays);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleReviewSubmit = (e) => {
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
    setReviewForm({ essayId: null, rating: 0, comment: '', studentName: '' });
    setModalOpen(false);
  };

  const calculateNewAverage = (essay, newRating) => {
    const currentTotal = essay.averageRating * essay.reviews.length;
    const newTotal = currentTotal + newRating;
    return newTotal / (essay.reviews.length + 1);
  };

  const openReviewModal = (essayId) => {
    setReviewForm({ ...reviewForm, essayId });
    setModalOpen(true);
  };

  const closeEssayModal = () => setSelectedEssay(null);
  const openEssayModal = (essay) => setSelectedEssay(essay);

  const renderStars = (rating, interactive = false, onChange) => (
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

  return (
    <div className="essays-container">
      <h1>Sample Essays</h1>
      <p>Browse our collection of high-quality essay samples. Don’t forget to leave your review!</p>

      <div className="essays-grid">
        {essays.map(essay => (
          <div key={essay.id} className="essay-card">
            <h3>{essay.title}</h3>
            <p className="essay-date">Posted on {new Date(essay.date).toLocaleDateString()}</p>
            <p className="essay-summary">
              {essay.summary.length > 150
                ? `${essay.summary.substring(0, 150)}...`
                : essay.summary}
            </p>

            <div className="essay-rating">
              {renderStars(essay.averageRating)}
              <span>({essay.reviews?.length || 0} reviews)</span>
            </div>

            <div className="essay-actions">
              <button className="btn read-btn" onClick={() => openEssayModal(essay)}>
                Read Full Essay
              </button>
              <button className="btn review-btn" onClick={() => openReviewModal(essay.id)}>
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
                  onChange={(e) => setReviewForm({ ...reviewForm, studentName: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Rating</label>
                {renderStars(reviewForm.rating, true, (rating) => setReviewForm({ ...reviewForm, rating }))}
              </div>
              <div className="form-group">
                <label>Comment</label>
                <textarea
                  placeholder="Write your feedback here..."
                  value={reviewForm.comment}
                  onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">Submit Review</button>
            </form>
          </div>
        </div>
      )}

      {selectedEssay && (
        <div className="modal-overlay" onClick={closeEssayModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedEssay.title}</h2>
              <button className="close-btn" onClick={closeEssayModal}>×</button>
            </div>
            <div className="essay-full-content">{selectedEssay.fullContent}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Essays;
