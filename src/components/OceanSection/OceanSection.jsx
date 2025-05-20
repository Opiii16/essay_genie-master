import React from 'react';

const OceanSection = () => {
  const styles = {
    section: {
      backgroundImage: 'linear-gradient(rgba(0, 119, 190, 0.7), rgba(0, 161, 224, 0.7)), url("https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: 'white',
      padding: '80px 0 0 0',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
    },
    content: {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(5px)',
      borderRadius: '15px',
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    title: {
      fontSize: '2.8rem',
      marginBottom: '25px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
      fontWeight: '700',
    },
    text: {
      fontSize: '1.3rem',
      lineHeight: 1.7,
      marginBottom: '35px',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
    },
    button: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      color: '#0077be',
      border: 'none',
      padding: '15px 40px',
      fontSize: '1.2rem',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontWeight: '600',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
      letterSpacing: '0.5px',
    },
    buttonHover: {
      backgroundColor: 'white',
      transform: 'translateY(-3px) scale(1.02)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
    },
    wave: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      overflow: 'hidden',
      lineHeight: 0,
    },
    waveSvg: {
      position: 'relative',
      display: 'block',
      width: 'calc(100% + 1.3px)',
      height: '120px',
    },
    bookIcon: {
      fontSize: '2rem',
      marginRight: '10px',
      verticalAlign: 'middle',
    },
    // Media queries
    '@media (max-width: 768px)': {
      section: {
        padding: '60px 0 0 0',
        minHeight: '400px',
      },
      content: {
        padding: '30px 20px',
      },
      title: {
        fontSize: '2rem',
      },
      text: {
        fontSize: '1.1rem',
      },
      button: {
        padding: '12px 30px',
        fontSize: '1.1rem',
      },
    },
  };

  // Hover handlers with animation
  const handleHover = (e) => {
    Object.assign(e.target.style, styles.buttonHover);
  };

  const handleHoverEnd = (e) => {
    Object.assign(e.target.style, {
      backgroundColor: styles.button.backgroundColor,
      transform: 'none',
      boxShadow: styles.button.boxShadow,
    });
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h2 style={styles.title}>Dive Into Knowledge</h2>
          <p style={styles.text}>
            <span style={{ fontStyle: 'italic' }}>"The ocean of knowledge has no shore."</span><br />
            Explore our curated collection of essays that will take you on an intellectual 
            journey as vast and fascinating as the ocean itself.
          </p>
          <button 
            style={styles.button}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverEnd}
          >
            <span style={styles.bookIcon}>📚</span> Start Reading Now
          </button>
        </div>
      </div>
      
      
    </section>
  );
};

export default OceanSection;