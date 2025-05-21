import React, { useState } from 'react';
import './AskedQuestions.css';

const AskedQuestions = () => {
  const [formData, setFormData] = useState({
    essayTopic: '',
    essayType: 'argumentative',
    academicLevel: 'college',
    wordCount: 1500
  });
  const [generatedEssay, setGeneratedEssay] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'wordCount' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsGenerating(true);
    
    setTimeout(() => {
      setGeneratedEssay(`# ${formData.essayTopic || 'Generated Essay'} (${formData.essayType.charAt(0).toUpperCase() + formData.essayType.slice(1)})
      
      [AI-generated content based on your input...]`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="essay-genie-container">
      <section className="elementor-section elementor-top-section elementor-element elementor-element-cf8f807 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
        <div className="elementor-container">
          <div className="elementor-row">
            <div className="elementor-column elementor-col-100">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-242fefa elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                <div className="elementor-container">
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6235351f">
                    <div className="elementor-widget-wrap">
                      <h2 className="essay-genie-title">
                        Essay<span className="highlight">Genie</span>
                      </h2>
                      <p className="essay-genie-description">
                        Our AI essay generator creates high-quality, plagiarism-free essays in minutes. 
                        Perfect for students needing argumentative, persuasive, or analytical papers.
                      </p>
                      
                      <div className="essay-genie-questions">
                        <h3>Frequently Asked Questions</h3>
                        
                        <div className="question-item">
                          <h4 className="question">How does EssayGenie create essays?</h4>
                          <p className="answer">
                            Our AI analyzes millions of academic sources to generate original, well-structured essays 
                            tailored to your specific requirements and academic level.
                          </p>
                        </div>
                        
                        <div className="question-item">
                          <h4 className="question">Is the content plagiarism-free?</h4>
                          <p className="answer">
                            Absolutely. Each essay is generated uniquely for your request. We recommend adding 
                            your personal touch and properly citing sources for optimal academic integrity.
                          </p>
                        </div>
                        
                        <div className="question-item">
                          <h4 className="question">Can I specify an argumentative structure?</h4>
                          <p className="answer">
                            Yes! When generating argumentative essays, our AI automatically includes:
                            <ul>
                              <li>Clear thesis statement</li>
                              <li>Supporting arguments with evidence</li>
                              <li>Counterarguments</li>
                              <li>Strong conclusion</li>
                            </ul>
                          </p>
                        </div>
                        
                        <div className="question-item">
                          <h4 className="question">What academic levels do you support?</h4>
                          <p className="answer">
                            We generate essays for all levels:
                            <ul>
                              <li>High School (9-12 grade)</li>
                              <li>Undergraduate (College)</li>
                              <li>Graduate (Master's level)</li>
                              <li>Professional/Research</li>
                            </ul>
                          </p>
                        </div>
                        
                        <div className="question-item">
                          <h4 className="question">How long does generation take?</h4>
                          <p className="answer">
                            Typically 1-2 minutes for standard essays (up to 2000 words). Complex research papers 
                            may take 3-5 minutes. You'll see real-time progress during generation.
                          </p>
                        </div>
                        
                        <div className="question-item">
                          <h4 className="question">Can I edit the generated essay?</h4>
                          <p className="answer">
                            Yes! All essays are provided in editable format. We encourage students to:
                            <ul>
                              <li>Add personal insights</li>
                              <li>Adjust tone/style</li>
                              <li>Incorporate specific references</li>
                              <li>Modify structure as needed</li>
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6235352f">
                    <div className="essay-genie-form-container">
                      <h3>Generate Your Essay Now</h3>
                      <form className="essay-genie-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="essay-topic">Essay Topic/Question</label>
                          <textarea 
                            id="essay-topic"
                            name="essayTopic"
                            value={formData.essayTopic}
                            onChange={handleChange}
                            placeholder="Paste your essay topic or question here. E.g. 'Should social media be banned in schools?'"
                            required
                            rows="4"
                            className="essay-topic-input"
                          />
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="essay-type">Essay Type</label>
                          <select 
                            id="essay-type"
                            name="essayType"
                            value={formData.essayType}
                            onChange={handleChange}
                            required
                            className="essay-type-select"
                          >
                            <option value="argumentative">Argumentative</option>
                            <option value="persuasive">Persuasive</option>
                            <option value="expository">Expository</option>
                            <option value="analytical">Analytical</option>
                            <option value="compare-contrast">Compare & Contrast</option>
                            <option value="cause-effect">Cause & Effect</option>
                            <option value="descriptive">Descriptive</option>
                            <option value="narrative">Narrative</option>
                          </select>
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="academic-level">Academic Level</label>
                          <select 
                            id="academic-level"
                            name="academicLevel"
                            value={formData.academicLevel}
                            onChange={handleChange}
                            required
                            className="academic-level-select"
                          >
                            <option value="high-school">High School (9-12)</option>
                            <option value="college">College/Undergraduate</option>
                            <option value="university">University</option>
                            <option value="masters">Master's Degree</option>
                            <option value="phd">PhD/Doctoral</option>
                          </select>
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="word-count">
                            Word Count: <span className="word-count-display">{formData.wordCount}</span> words
                          </label>
                          <input 
                            type="range" 
                            id="word-count"
                            name="wordCount"
                            min="500" 
                            max="5000" 
                            step="100"
                            value={formData.wordCount}
                            onChange={handleChange}
                            className="word-count-slider"
                          />
                          <div className="word-count-range">
                            <span>500</span>
                            <span>2500</span>
                            <span>5000</span>
                          </div>
                        </div>
                        
                        <button 
                          type="submit" 
                          className="generate-button" 
                          disabled={isGenerating}
                        >
                          {isGenerating ? (
                            <>
                              <i className="fas fa-spinner fa-spin"></i> Generating...
                            </>
                          ) : (
                            <>
                              <i className="fas fa-magic"></i> Generate Essay
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
              
              {generatedEssay && (
                <section className="essay-output-section">
                  <div className="elementor-container">
                    <div className="elementor-column elementor-col-100">
                      <h3>Your Generated Argumentative Essay</h3>
                      <div className="essay-output-content">
                        {generatedEssay.split('\n').map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                      <div className="essay-actions">
                        <button className="download-button">
                          <i className="fas fa-download"></i> Download PDF
                        </button>
                        <button className="copy-button">
                          <i className="fas fa-copy"></i> Copy to Clipboard
                        </button>
                        <button className="regenerate-button">
                          <i className="fas fa-sync-alt"></i> Regenerate
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              )}
              
              {isGenerating && (
                <div className="generation-progress">
                  <div className="progress-bar">
                    <div className="progress"></div>
                  </div>
                  <p>AI is crafting your perfect argumentative essay...</p>
                </div>
              )}

              <section className="elementor-section elementor-inner-section elementor-element elementor-element-10165593 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                <div className="elementor-container">
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7533b54c">
                    <div className="feature-box">
                      <div className="feature-icon">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <h4>Plagiarism-Free</h4>
                      <p>100% original content with proper citations and references included</p>
                    </div>
                  </div>
                  
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7533b54d">
                    <div className="feature-box">
                      <div className="feature-icon">
                        <i className="fas fa-clock"></i>
                      </div>
                      <h4>Fast Turnaround</h4>
                      <p>Get quality essays in as little as 5 minutes, even with tight deadlines</p>
                    </div>
                  </div>
                  
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7533b54e">
                    <div className="feature-box">
                      <div className="feature-icon">
                        <i className="fas fa-edit"></i>
                      </div>
                      <h4>Unlimited Revisions</h4>
                      <p>Request adjustments until you're completely satisfied with the result</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AskedQuestions;