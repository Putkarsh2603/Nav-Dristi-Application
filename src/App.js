import './App.css';
import React from 'react';
import Layout from './Layout';
import {Routes,Route} from 'react-router-dom';
import LoginComponent from './LoginComponent';
import ForgotPassword from './ForgotPassword';
import SignUpComponent from './SignUpComponent';

function App() {
  return (
    <div className="App">
      <p>hi</p>
      <Layout />
      <Routes> 
        <Route path="/login" element={<LoginComponent/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/signup" element={<SignUpComponent />}/>
      </Routes>
    </div>
  );
}

export default App;
