import React from 'react';
import './NavBar.css';

const NavBar = ({ style = {} }) => {
  const buttons = [
    { text: 'Features', width: 100 },
    { text: 'Job Recommendation', width: 180,},
    { text: 'Skill Analysis', width: 110 },
    { text: 'Trending Skill', width: 110 },
    { text: 'How It Works', width: 110 },
    { text: 'Login', width: 100 }
  ];

  return (
    <nav className="navbar" style={style}>
      <div className="logo-container">
        <img src="https://dashboard.codeparrot.ai/api/image/Z-_lpQz4-w8v6SUZ/logo-1.png" alt="Logo" className="logo" />
        <span className="brand-name">Navdristi</span>
      </div>
      
      <div className="nav-buttons">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="nav-button"
            style={{ width: button.width }}
          >
            {button.text}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;

