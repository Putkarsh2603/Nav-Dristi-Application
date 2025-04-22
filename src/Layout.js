import React from 'react';
import NavBar from './NavBar';
import MainSection from './MainSection';
import './Layout.css';

const Layout = ({ setShowLoginModal }) => {
  return (
    <div className="layout-container">
      <NavBar setShowLoginModal={setShowLoginModal} />
      <MainSection />
    </div>
  );
};

export default Layout;

