// src/pages/services/EssayServicePage.jsx
import { Link } from 'react-router-dom';
import '../ServicePages.css'; 


const EssayServicePage = () => {
  const pricingTiers = [
    {
      level: 'High School',
      price: '$12.99/page',
      features: [
        '500+ word essays',
        'Basic research',
        'Standard formatting',
        '3-day delivery'
      ]
    },
    {
      level: 'College',
      price: '$18.99/page',
      features: [
        '1000+ word essays',
        'Advanced research',
        'Citation formatting',
        '2-day delivery'
      ],
      popular: true
    },
    {
      level: 'University',
      price: '$24.99/page',
      features: [
        '1500+ word essays',
        'In-depth analysis',
        'Custom formatting',
        '24-hour delivery'
      ]
    }
  ];

  const writers = [
    {
      qualification: 'PhD Holders',
      count: '120+',
      description: 'Subject matter experts with advanced degrees'
    },
    {
      qualification: 'Native Speakers',
      count: '95%',
      description: 'English as first language'
    },
    {
      qualification: 'Experience',
      count: '5+ years',
      description: 'Average writing experience'
    }
  ];

  const testimonials = [
    {
      quote: "My philosophy essay earned me an A+! The depth of analysis was incredible.",
      author: "Sarah M., UCLA"
    },
    {
      quote: "Turned in my 10-page history essay 3 hours before deadline. Lifesaver!",
      author: "James T., NYU"
    }
  ];

  return (
    <div className="service-page">
      <h1>Essay Writing Service</h1>
      
      <div className="service-description">
        <p className="lead">Professional essay writing assistance for all academic levels with 24/7 support.</p>
        
        <div className="guarantee-badges">
          <div className="badge">
            <span className="icon">✓</span>
            <span>100% Plagiarism-Free</span>
          </div>
          <div className="badge">
            <span className="icon">✓</span>
            <span>Money-Back Guarantee</span>
          </div>
          <div className="badge">
            <span className="icon">✓</span>
            <span>Confidential & Secure</span>
          </div>
        </div>
      </div>
      
      {/* Pricing Section */}
      <section className="pricing-section">
        <h2>Transparent Pricing</h2>
        <div className="pricing-tiers">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`tier-card ${tier.popular ? 'popular' : ''}`}>
              {tier.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{tier.level}</h3>
              <div className="price">{tier.price}</div>
              <ul className="features-list">
                {tier.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link 
                to={`/order?service=essay&tier=${tier.level.toLowerCase().replace(' ', '-')}`} 
                className="btn btn-primary"
              >
                Order Now
              </Link>
            </div>
          ))}
        </div>
      </section>
      
      {/* Writer Qualifications */}
      <section className="writers-section">
        <h2>Our Expert Writers</h2>
        <div className="writers-grid">
          {writers.map((writer, index) => (
            <div key={index} className="writer-card">
              <div className="count">{writer.count}</div>
              <h3>{writer.qualification}</h3>
              <p>{writer.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Samples CTA */}
      <div className="samples-cta">
        <h3>View our essay samples before ordering:</h3>
        <Link to="/samples/essays" className="btn btn-outline">
          Browse Essay Samples
        </Link>
      </div>
      
      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Students Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote">"{testimonial.quote}"</div>
              <div className="author">— {testimonial.author}</div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Final CTA */}
      <div className="order-cta">
        <Link to="/order?service=essay" className="btn btn-success btn-lg">
          Start Your Order Now
        </Link>
        <div className="support-note">24/7 Customer Support</div>
      </div>
    </div>
  );
};
export default EssayServicePage;