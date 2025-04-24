import React, { useState } from 'react';
import './LoginComponent.css';

export default function LoginComponent({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className='container'>
          <div className="side-image">
            <img src="https://dashboard.codeparrot.ai/api/image/Z_Qe1IDi91IKZZkN/search-r.png" alt="description" />
          </div>
          <div className='form-container'>
            <div className='form-toggle'>
              <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
              <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>Sign Up</button>
            </div>

            {isLogin ? (
              <div className='form'>
                <h2>Namaste! Please Login to your account</h2>
                <input type='email' placeholder='Write your email here' />
                <input type='password' placeholder='Password' />
                
                <div className="button-container">
                  <button className="primary-btn" type="submit"
                  style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '30px 30px 30px 30px' }}
>Login</button>
                  <button 
                    className="text-button" 
                    onClick={() => {/* Add forgot password logic */}}
                  >
                    Forgot Password?
                  </button>
                  
                  <div className="social-buttons">
                    <button className="social-btn google-btn">
                      <i className="fab fa-google"></i> Continue with Google
                    </button>
                    <button className="social-btn linkedin-btn">
                      <i className="fab fa-linkedin"></i> Continue with Linkedin
                    </button>
                  </div>
                  
                  <p className="toggle-text">Not a Member? 
                    <button 
                      className="text-button" 
                      onClick={() => setIsLogin(false)}
                    >
                      Sign Up now!
                    </button>
                  </p>
                </div>
              </div>
            ) : (
              <div className="form">
                <h2>Sign Up and discover great opportunities</h2>
                <input type='email' placeholder='Your email ID' />
                <input type='password' placeholder='Enter a strong password' />
                <input type='password' placeholder='Confirm your password' />
                
                <div className="button-container">
                  <button className="primary-btn" type="submit"
                   style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '30px 30px 30px 30px' }}>Sign Up</button>
                  
                  <div className="social-buttons">
                    <button className="social-btn google-btn">
                      <i className="fab fa-google"></i> Continue with Google
                    </button>
                    <button className="social-btn linkedin-btn">
                      <i className="fab fa-linkedin"></i> Continue with Linkedin
                    </button>
                  </div>
                  
                  <p className="toggle-text">Already a member? 
                    <button 
                      className="text-button" 
                      onClick={() => setIsLogin(true)}
                    >
                      Login here!
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}