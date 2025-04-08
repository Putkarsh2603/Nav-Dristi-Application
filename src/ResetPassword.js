import React, { useState } from 'react';
import './ResetPassword.css';

const ResetPassword = ({ defaultNewPassword = '', defaultConfirmPassword = '' }) => {
  const [formData, setFormData] = useState({
    newPassword: defaultNewPassword,
    confirmPassword: defaultConfirmPassword
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Handle password reset logic here
    console.log('Password reset submitted:', formData);
  };

  return React.createElement(
    'div',
    { className: 'reset-password-container' },
    React.createElement(
      'div',
      { className: 'reset-password-card' },
      React.createElement(
        'div',
        { className: 'reset-title' },
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
            'Reset account password'
          )
        )
      ),
      React.createElement(
        'form',
        { onSubmit: handleSubmit },
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('label', { htmlFor: 'newPassword' }, 'New password'),
          React.createElement('input', {
            type: 'password',
            id: 'newPassword',
            name: 'newPassword',
            value: formData.newPassword,
            onChange: handleChange,
            placeholder: 'Password',
            required: true
          })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('label', { htmlFor: 'confirmPassword' }, 'Confirm Password'),
          React.createElement('input', {
            type: 'password',
            id: 'confirmPassword',
            name: 'confirmPassword',
            value: formData.confirmPassword,
            onChange: handleChange,
            placeholder: 'Password',
            required: true
          })
        ),
        React.createElement(
          'button',
          { type: 'submit', className: 'submit-button' },
          'Submit'
        )
      )
    )
  );
};

export default ResetPassword;
