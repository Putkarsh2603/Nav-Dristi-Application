import React from 'react';
import './MainSection.css';

const MainSection = ({ style }) => {
  return (
    <div className="main-section" style={style}>
      <div className="content-container">
        <div className="text-content">
          <h1 className="main-heading">Your Beacon <br/> To Career Success</h1>
          <p className="sub-heading">
            "Bridge the gap to your success: Our AI web application as your career navigator with intelligent decision making"
          </p>
          <button className="register-button">
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
  );
};

MainSection.defaultProps = {
  style: {}
};

export default MainSection;

