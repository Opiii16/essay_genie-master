import React from 'react';
import './AskedQuestions.css';

const AskedQuestions = () => {
  return (
    <div className="glass-wrapper">
      <div className="glass-card">
        {/* First Section */}
        <section className="elementor-section elementor-top-section elementor-element elementor-element-cf8f807 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
          <div className="elementor-container">
            <div className="elementor-row">
              <div className="elementor-column elementor-col-100">
                {/* Inner Section 1 */}
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-242fefa elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                  <div className="elementor-container">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6235351f">
                      <div className="elementor-widget-wrap">
                        <h2 className="essay-genie-title">
                          Essay<span className="highlight">Genie</span>
                        </h2>
                        <p className="essay-genie-description">
                          Our AI essay generator is designed to help you create high-quality essays quickly and efficiently. 
                          Simply provide your topic and requirements, and let our tool do the rest!
                        </p>
                        
                        <div className="essay-genie-questions">
                          <h3>Frequently Asked Questions</h3>
                          <div className="question-item">
                            <h4 className="question">How does the EssayGenie work?</h4>
                            <p className="answer">
                              EssayGenie uses advanced AI to analyze your topic and generate well-structured, 
                              original content tailored to your requirements.
                            </p>
                          </div>
                          
                          <div className="question-item">
                            <h4 className="question">Is the content plagiarism-free?</h4>
                            <p className="answer">
                              Yes, our AI generates original content for each request. However, we always 
                              recommend reviewing and citing properly.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Second Column - Probably the form */}
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6235352f">
                      <div className="essay-genie-form-container">
                        <h3>Generate Your Essay Now</h3>
                        <form className="essay-genie-form">
                          <div className="form-group">
                            <label htmlFor="essay-topic">Essay Topic</label>
                            <input 
                              type="text" 
                              id="essay-topic" 
                              placeholder="Enter your essay topic or question" 
                            />
                          </div>
                          
                          <div className="form-group">
                            <label htmlFor="essay-type">Essay Type</label>
                            <select id="essay-type">
                              <option value="argumentative">Argumentative</option>
                              <option value="descriptive">Descriptive</option>
                              <option value="narrative">Narrative</option>
                              <option value="expository">Expository</option>
                            </select>
                          </div>
                          
                          <div className="form-group">
                            <label htmlFor="word-count">Word Count</label>
                            <input 
                              type="range" 
                              id="word-count" 
                              min="500" 
                              max="5000" 
                              step="100"
                            />
                            <span className="word-count-display">1500 words</span>
                          </div>
                          
                          <button type="submit" className="generate-button">
                            Generate Essay
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
                
                {/* Inner Section 2 */}
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-10165593 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                  <div className="elementor-container">
                    <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7533b54c">
                      <div className="elementor-widget-wrap">
                        <div className="feature-box">
                          <div className="feature-icon">
                            <i className="fas fa-bolt"></i>
                          </div>
                          <h4 className="feature-title">Fast Generation</h4>
                          <p className="feature-description">
                            Get your essay in minutes, not hours. Our AI works quickly to deliver quality content.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7533b54d">
                      <div className="elementor-widget-wrap">
                        <div className="feature-box">
                          <div className="feature-icon">
                            <i className="fas fa-graduation-cap"></i>
                          </div>
                          <h4 className="feature-title">Academic Quality</h4>
                          <p className="feature-description">
                            Our essays meet academic standards with proper structure and formatting.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7533b54e">
                      <div className="elementor-widget-wrap">
                        <div className="feature-box">
                          <div className="feature-icon">
                            <i className="fas fa-edit"></i>
                          </div>
                          <h4 className="feature-title">Easy Customization</h4>
                          <p className="feature-description">
                            Adjust tone, style, and length to perfectly match your needs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AskedQuestions;
