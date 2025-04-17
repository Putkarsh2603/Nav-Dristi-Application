import React, { useState } from 'react';
import './LoginComponent.css';
import {Link} from 'react-router-dom';

const LoginComponent = ({ defaultEmail = '', defaultPassword = '', onSuccessfulLogin }) => {
  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState(defaultPassword);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted with:', { email, password });

    onSuccessfulLogin();
  };


  return React.createElement(
    'div',
    { className: 'login-container' },
    React.createElement(
      'div',
      { className: 'login-content' },
      React.createElement(
        'div',
        { className: 'login-form-section' },
        React.createElement('h1', { className: 'login-title' }, 'LOGIN'),
        React.createElement(
          'form',
          { onSubmit: handleLogin },
          React.createElement(
            'div',
            { className: 'input-group' },
            React.createElement('label', null, 'E-mail'),
            React.createElement('input', {
              type: 'email',
              value: email,
              onChange: (e) => setEmail(e.target.value),
              className: 'input-field',
            })
          ),
          React.createElement(
            'div',
            { className: 'input-group' },
            React.createElement('label', null, 'Password'),
            React.createElement('input', {
              type: 'password',
              value: password,
              onChange: (e) => setPassword(e.target.value),
              className: 'input-field',
            })
          ),
          React.createElement(
            'button',
            { type: 'submit', className: 'login-button' },
            'Login'
          ),
          React.createElement(
            'div',
            { className: 'links-container' },
            React.createElement(
              Link,
              { to: '/signup', className: 'create-account' },
              'Create an account'
            ),
            React.createElement(
              Link,
              { to:'/forgot-password', className: 'forgot-password' },
              'Forget password?'
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'illustration-section' },
        React.createElement('img', {
          src: 'https://dashboard.codeparrot.ai/api/image/Z_SdcK264jGQAeND/frame-6.png',
          alt: 'Login illustration',
          className: 'login-illustration',
        })
      )
    )
  );
};

export default LoginComponent;
