const MobileMenuButton = ({ isOpen, onClick }) => (
    <button 
      className="navbar-toggle" 
      onClick={onClick}
      aria-label="Toggle navigation"
      aria-expanded={isOpen}
    >
      <div className={`hamburger ${isOpen ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
  
  export default MobileMenuButton;