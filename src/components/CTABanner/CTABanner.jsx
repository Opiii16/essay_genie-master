import { Link } from 'react-router-dom';
import { useState } from 'react';
import './CTABanner.css';

const CTABanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Original slide as the first item
    {
      desktopImage: "https://cms-assets.teacherspayteachers.com/cdn-cgi/image/AboutTPT_bg_desktop_2-3.jpg",
      mobileImage: "https://cms-assets.teacherspayteachers.com/AboutTPT_bg_mobile_2-2.jpg",
      title: "Where extraordinary teachers share their most innovative ideas",
      subtitle: "WELCOME TO ESSAYGENIE",
      cta: "Explore Now",
      link: "/explore"
    },
    // New slides added
    {
      desktopImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      mobileImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Transform your writing with AI-powered assistance",
      subtitle: "SMART WRITING TOOLS",
      cta: "Try Our Features",
      link: "/features"
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="editorial-module-container">
      <div className="editorial-module-background">
        <picture className="responsive-image">
          <source
            type="image/webp"
            media="(min-width: 980px)"
            srcSet={`${slides[currentSlide].desktopImage.replace('.jpg', '.webp')}`}
          />
          <source
            media="(min-width: 980px)"
            srcSet={slides[currentSlide].desktopImage}
          />
          <source
            type="image/webp"
            srcSet={`${slides[currentSlide].mobileImage.replace('.jpg', '.webp')}`}
          />
          <img
            src={slides[currentSlide].mobileImage}
            alt="Academic resources with EssayGenie"
            className="responsive-image-img"
          />
        </picture>
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
        <Link to={slides[currentSlide].link} className="cta-background-image-block">
          <div className="cta-text-container">
            <div className="cta-text">
              <div className="text-overline">{slides[currentSlide].subtitle}</div>
              <h2>{slides[currentSlide].title}</h2>
              <button type="button" className="btn btn-success cta-button">
                {slides[currentSlide].cta}
              </button>
            </div>
          </div>
        </Link>
      </div>
      
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <span 
            key={index}
            className={`indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CTABanner;
