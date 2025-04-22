import './App.css';
import React, { useState } from 'react';
import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import ForgotPassword from './ForgotPassword';
import SignUpComponent from './SignUpComponent';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <Router>
      <div className="App">
        {/* Wrap only the background content */}
        <div className={showLoginModal ? 'blur-background' : ''}>
          <Layout setShowLoginModal={setShowLoginModal} />
          <Routes>
            <Route path="/login" element={<LoginComponent onClose={() => setShowLoginModal(false)} />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signup" element={<SignUpComponent />} />
          </Routes>
        </div>
        
        {/* Modal renders outside the blurred content */}
        {showLoginModal && (
          <LoginComponent onClose={() => setShowLoginModal(false)} />
        )}
      </div>
    </Router>
  );
}

export default App;