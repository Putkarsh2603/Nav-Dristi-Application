import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = ({ defaultEmail = '' }) => {
  const [email, setEmail] = useState(defaultEmail);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset requested for:', email);
  };

  return React.createElement(
    'div',
    { className: 'forgot-password-container' },
    React.createElement(
      'div',
      { className: 'forgot-password-card' },
      React.createElement(
        'div',
        { className: 'title' },
        React.createElement('svg', { width: '100%', height: '1em' },
          React.createElement('defs', null,
            React.createElement('linearGradient', { id: 'gradient', x1: '0%', y1: '0%', x2: '0%', y2: '100%' },
              React.createElement('stop', { offset: '0%', style: { stopColor: 'rgba(3, 83, 137, 1)', stopOpacity: 1 } }),
              React.createElement('stop', { offset: '29.69%', style: { stopColor: 'rgba(28, 134, 161, 1)', stopOpacity: 1 } }),
              React.createElement('stop', { offset: '66.48%', style: { stopColor: 'rgba(23, 26, 27, 1)', stopOpacity: 1 } }),
              React.createElement('stop', { offset: '78.89%', style: { stopColor: 'rgba(0, 0, 0, 1)', stopOpacity: 1 } }),
              React.createElement('stop', { offset: '86%', style: { stopColor: 'rgba(27, 6, 6, 1)', stopOpacity: 1 } })
            )
          ),
          React.createElement('text', { x: '50%', y: '50%', textAnchor: 'middle', dy: '.35em', fill: 'url(#gradient)' },
            'FORGET PASSWORD?'
          )
        )
      ),
      React.createElement(
        'form',
        { onSubmit: handleSubmit },
        React.createElement(
          'div',
          { className: 'input-group' },
          React.createElement('label', { htmlFor: 'email' }, 'Email'),
          React.createElement('input', {
            type: 'email',
            id: 'email',
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: 'Enter valid email',
            required: true,
          })
        ),
        React.createElement(
          'button',
          { type: 'submit', className: 'next-button' },
          React.createElement('span', null, 'Next')
        )
      )
    )
  );
};

export default ForgotPassword;
