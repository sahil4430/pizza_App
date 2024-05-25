import React, { useState } from 'react';
import './login.css';

export default function Login() {
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function validate(event) {
    event.preventDefault(); // Prevent default form submission
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    
    // Regular expression for email validation
    const emailRegex = /^([a-z0-9\.-]+)@([a-z0-9]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    setUsernameError('');
    setPasswordError('');

    if (user.trim() === '') {
        setUsernameError('Please enter a username');
        return false;
    }

    if (pass.trim() === '') {
        setPasswordError('Please enter a password');
        return false;
    }

    if (!emailRegex.test(user)) {
        setUsernameError('Please enter a valid email address');
        return false;
    }

    // Additional password validation (e.g., minimum length)
    if (pass.length < 6) {
        setPasswordError('Password must be at least 6 characters long');
        return false;
    }

    // All validations passed
    return true;
  }

  return (
    <div className='login-card'>
      <h1>Login</h1>
      <form className='myform' onSubmit={validate}>
        <div className='input'>
        
          <input id='username' name='username' placeholder='Username' />
          <label className='error'>{usernameError}</label>
        </div>

        <div className='input'>
          <input type='password' id='password' name='password' placeholder='Password' />
          <label className='error'>{passwordError}</label>
        </div>
        <br />
        
        <button type='submit'>Log In</button>
      </form>
    </div>
  );
}
