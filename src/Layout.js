import React from 'react';
import NavBar from './NavBar';
import MainSection from './MainSection';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout-container">
      <NavBar />
      <MainSection />
    </div>
  );
};

export default Layout;

