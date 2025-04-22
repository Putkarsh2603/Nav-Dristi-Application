import React from 'react';
import './NavBar.css';

const NavBar = ({ style = {}, setShowLoginModal }) => {
  const buttons = [
    { text: 'Features', width: 100, onClick: () => console.log('Features clicked') },
    { text: 'Job Recommendation', width: 180, onClick: () => console.log('Job Recommendation clicked') },
    { text: 'Skill Analysis', width: 110, onClick: () => console.log('Skill Analysis clicked') },
    { text: 'Trending Skill', width: 110, onClick: () => console.log('Trending Skill clicked') },
    { text: 'How It Works', width: 110, onClick: () => console.log('How It Works clicked') },
    { text: 'Login', width: 100, onClick: () => setShowLoginModal(true) }
  ];

  return (
    <nav className="navbar" style={style}>
      <div className="logo-container">
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z-_lpQz4-w8v6SUZ/logo-1.png" 
          alt="Company Logo" 
          className="logo" 
        />
        <span className="brand-name">Navdristi</span>
      </div>
      
      <div className="nav-buttons">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="nav-button"
            style={{ width: `${button.width}px` }}
            onClick={button.onClick}
            aria-label={button.text}
          >
            {button.text}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;