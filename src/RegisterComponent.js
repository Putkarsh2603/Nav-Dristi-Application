import React, { useState } from 'react';
import './RegisterComponent.css';

export default function RegisterComponent({ onClose, showLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
    console.log('Registering with:', formData);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className='container'>
          <div className="side-image">
            <img src="https://dashboard.codeparrot.ai/api/image/Z_Qe1IDi91IKZZkN/search-r.png" alt="Join our community" />
          </div>
          <div className='form-container'>
            <div className='form-toggle'>
              {/* <button onClick={() => showLogin()}>Login</button> */}
              <button className="active">Sign Up</button>
            </div>

            <form className='form' onSubmit={handleSubmit}>
              <h2>Join our community today!</h2>
              
              <input
                type='email'
                name='email'
                placeholder='Your email address'
                value={formData.email}
                onChange={handleChange}
                required
              />
              
              <input
                type='password'
                name='password'
                placeholder='Create a password'
                value={formData.password}
                onChange={handleChange}
                required
              />
              
              <input
                type='password'
                name='confirmPassword'
                placeholder='Confirm your password'
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              
              <div className="button-container">
                <button className="primary-btn" type="submit">Create Account</button>
                
                <div className="divider">
                  <span>or sign up with</span>
                </div>
                
                <div className="social-buttons">
                  <button type="button" className="social-btn google-btn">
                    <i className="fab fa-google"></i> Google
                  </button>
                  <button type="button" className="social-btn linkedin-btn">
                    <i className="fab fa-linkedin"></i> Linkedin
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}