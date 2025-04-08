import React, { useState } from 'react';
import './SignUpComponent.css';

const SignUpComponent = ({ defaultUsername = '', defaultEmail = '', defaultPassword = '' }) => {
  const [formData, setFormData] = useState({
    username: defaultUsername,
    email: defaultEmail,
    password: defaultPassword
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return React.createElement(
    'div',
    { className: 'signup-container' },
    React.createElement(
      'div',
      { className: 'content-wrapper' },
      React.createElement(
        'div',
        { className: 'illustration-section' },
        React.createElement('img', {
          src: 'https://dashboard.codeparrot.ai/api/image/Z_Qe1IDi91IKZZkN/search-r.png',
          alt: 'Search illustration',
          className: 'search-illustration'
        })
      ),
      React.createElement(
        'div',
        { className: 'form-section' },
        React.createElement(
          'div',
          { className: 'form-container' },
          React.createElement(
            'div',
            { className: 'form-header' },
            React.createElement('p', { className: 'register-text' }, 'Register now'),
            React.createElement('h1', { className: 'signup-title' }, 'SIGN UP FOR FREE'),
            React.createElement('p', { className: 'login-link' }, 'Already have an account? Sign in')
          ),
          React.createElement(
            'form',
            { onSubmit: handleSubmit, className: 'signup-form' },
            React.createElement(
              'div',
              { className: 'input-group' },
              React.createElement('label', { htmlFor: 'username' }, 'Username'),
              React.createElement('input', {
                type: 'text',
                id: 'username',
                name: 'username',
                value: formData.username,
                onChange: handleInputChange
              })
            ),
            React.createElement(
              'div',
              { className: 'input-group' },
              React.createElement('label', { htmlFor: 'email' }, 'Email'),
              React.createElement('input', {
                type: 'email',
                id: 'email',
                name: 'email',
                value: formData.email,
                onChange: handleInputChange
              })
            ),
            React.createElement(
              'div',
              { className: 'input-group' },
              React.createElement('label', { htmlFor: 'password' }, 'Password'),
              React.createElement('input', {
                type: 'password',
                id: 'password',
                name: 'password',
                value: formData.password,
                onChange: handleInputChange
              })
            ),
            React.createElement(
              'button',
              { type: 'submit', className: 'signup-button' },
              'SIGN UP'
            )
          )
        )
      )
    )
  );
};

export default SignUpComponent;
