import { Link } from 'react-router-dom';
import './CTABanner.css';

const CTABanner = () => (
  <div className="editorial-module-container">
    <div className="editorial-module-background">
      <picture className="responsive-image">
        <source
          type="image/webp"
          media="(min-width: 980px)"
          srcSet="https://cms-assets.teacherspayteachers.com/cdn-cgi/image/format=webp,quality=85/AboutTPT_bg_desktop_2-3.jpg"
        />
        <source
          media="(min-width: 980px)"
          srcSet="https://cms-assets.teacherspayteachers.com/cdn-cgi/image/AboutTPT_bg_desktop_2-3.jpg"
        />
        <source
          type="image/webp"
          srcSet="https://cms-assets.teacherspayteachers.com/cdn-cgi/image/format=webp,quality=85/AboutTPT_bg_mobile_2-2.jpg"
        />
        <img
          src="https://cms-assets.teacherspayteachers.com/AboutTPT_bg_mobile_2-2.jpg"
          alt="Teachers sharing innovative ideas"
          className="responsive-image-img"
        />
      </picture>
    </div>
    <div className="cta-content-wrapper">
      <Link to="/explore" className="cta-background-image-block">
        <div className="cta-text-container">
          <div className="cta-text">
            <div className="text-overline">WELCOME TO essayGenie</div>
            <h2>Where extraordinary teachers share their most innovative ideas</h2>
            <button type="button" className="btn btn-success cta-button">
              Explore Now
            </button>
          </div>
        </div>
      </Link>
    </div>
  </div>
);

export default CTABanner;
