import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import './CTABanner.css';

const CTABanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const slides = [
    {
      desktopImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      mobileImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Where extraordinary teachers share their most innovative ideas",
      subtitle: "WELCOME TO ESSAYGENIE",
      cta: "Explore Now",
      link: "/tutors"
    },
    {
      desktopImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      mobileImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Transform your writing with AI-powered assistance",
      subtitle: "SMART WRITING TOOLS",
      cta: "Try Our Features",
      link: "/asked-questions"
    },
    {
      desktopImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      mobileImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "From rough draft to polished masterpiece in minutes",
      subtitle: "ELEVATE YOUR ESSAYS",
      cta: "See How It Works",
      link: "/how-it-works"
    }
  ];

  const nextSlide = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTransitioning(false);
    }, 300);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTransitioning(false);
    }, 300);
  }, [slides.length]);

  const goToSlide = useCallback((index) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTransitioning(false);
    }, 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, nextSlide]);

  return (
    <div className="editorial-module-container">
      <div className="editorial-module-background">
        <div className={`slide-container ${transitioning ? 'transitioning' : ''}`}>
          {slides.map((slide, index) => (
            <picture 
              key={index}
              className={`responsive-image ${index === currentSlide ? 'active' : ''}`}
            >
              <source
                type="image/webp"
                media="(min-width: 980px)"
                srcSet={`${slide.desktopImage.replace('.jpg', '.webp')}`}
              />
              <source
                media="(min-width: 980px)"
                srcSet={slide.desktopImage}
              />
              <source
                type="image/webp"
                srcSet={`${slide.mobileImage.replace('.jpg', '.webp')}`}
              />
              <img
                src={slide.mobileImage}
                alt="Academic resources with EssayGenie"
                className="responsive-image-img"
              />
            </picture>
          ))}
        </div>
      </div>
      
      <div className="carousel-controls">
        <button className="carousel-arrow left-arrow" onClick={prevSlide}>
          &lt;
        </button>
        <button className="carousel-arrow right-arrow" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      
      <div className="cta-content-wrapper">
        <div className={`slide-container ${transitioning ? 'transitioning' : ''}`}>
          {slides.map((slide, index) => (
            <Link 
              to={slide.link} 
              key={index}
              className={`cta-background-image-block ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="cta-text-container">
                <div className="cta-text">
                  <div className="text-overline">{slide.subtitle}</div>
                  <h2>{slide.title}</h2>
                  <button type="button" className="btn btn-success cta-button">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <span 
            key={index}
            className={`indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CTABanner;