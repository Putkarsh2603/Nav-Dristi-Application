import React, { useState } from 'react';
import './NavBar.css';
import LoginComponent from './LoginComponent';

const NavBar = ({ style = {} }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add any logout logic here
  };

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const buttons = [
    { text: 'Features', width: 100, onClick: {LoginComponent} },
    { text: 'Job Recommendation', width: 180, onClick: () => console.log('Job Recommendation clicked') },
    { text: 'Skill Analysis', width: 110, onClick: () => console.log('Skill Analysis clicked') },
    { text: 'Trending Skill', width: 110, onClick: () => console.log('Trending Skill clicked') },
    { text: 'How It Works', width: 110, onClick: () => console.log('How It Works clicked') },
    { 
      text: isLoggedIn ? 'Logout' : 'Login', 
      width: 100, 
      onClick: isLoggedIn ? handleLogout : handleLoginClick 
    }
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
            onClick={button.onClick}          
            >
            {button.text}
          </button>
        ))}
      </div>

      {showLogin && (
        <div className="login-modal-overlay">
          <div className="login-modal">
            <button 
              className="close-button" 
              onClick={() => setShowLogin(false)}
            >
              ×
            </button>
            <LoginComponent 
              onSuccessfulLogin={handleSuccessfulLogin}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

