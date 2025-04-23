import React, { useState } from 'react';
import './MainSection.css';
import RegisterComponent from './RegisterComponent';

const MainSection = ({ style }) => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className="main-section" style={style}>
        <div className="content-container">
          <div className="text-content">
            <h1 className="main-heading">Your Beacon <br/> To Career Success</h1>
            <p className="sub-heading">
            <i>"When Purpose Meets Passion, Performance Follows"</i><br />
            Our AI web application as your career navigator with intelligent decision making
            </p>
            <button 
              className="register-button"
              onClick={() => setShowRegister(true)}
            >
              Register
            </button>
          </div>
          <div className="image-container">
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z-_lpQz4-w8v6SUZ/21404-1.png" 
              alt="Career Success Illustration"
              className="main-image"
            />
          </div>
        </div>
      </div>

      {showRegister && (
        <RegisterComponent 
          onClose={() => setShowRegister(false)} 
          showLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}
      
    </>
  );
};

MainSection.defaultProps = {
  style: {}
};

export default MainSection;
