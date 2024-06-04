import React, { useEffect, useState } from 'react';

import './login.css';
import axios from 'axios';

export default function Login() {
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  useEffect(() => {
    // Check if there are saved login details in localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const { name, email, pass } = JSON.parse(savedUser);
      alert("Retrieved user from localStorage:", name, email, pass);
      setName(name);
      setEmail(email);
      setPass(pass);
    }
  }, []);
  

  const handleSubmit = () => {
    axios.post('http://localhost:3008/register', { name, email, password: pass })
      .then(result => {
        console.log(result);
        alert(`You are signed up with this email: ${email}`);
        window.scrollTo(0, 0);
        setIsLogin(true); // Switch back to login form after successful signup
      })
      .catch(err => console.log(err));
  };

  const handleLogin = () => {
    axios.post('http://localhost:3008/login', { name, password: pass })
      .then(result => {
        console.log(result);
        alert(`You are logged in as: ${name}`);
        window.scrollTo(0, 0);
      })
      .catch(err => {
        if (err.response) {
          // The request was made and the server responded with a non-successful status code
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.request) {
          // The request was made but no response was received
          console.log(err.request);
        } else {
          // Something happened in setting up the request that triggered an error
          console.log('Error', err.message);
        }
      });
      localStorage.setItem('user', JSON.stringify({ name, email, pass }));
console.log("Saved user in localStorage:", name, email, pass);

  };
  

  const validate = (event) => {
    event.preventDefault(); // Prevent default form submission

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const email = document.getElementById('email') ? document.getElementById('email').value : '';

    // Regular expression for email validation
    const emailRegex = /^([a-z0-9\.-]+)@([a-z0-9]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    setUsernameError('');
    setPasswordError('');
    setEmailError('');

    if (user.trim() === '') {
      setUsernameError('Please enter a username');
      return false;
    }

    if (pass.trim() === '') {
      setPasswordError('Please enter a password');
      return false;
    }

    if (!isLogin && !emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    }

    if (pass.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return false;
    }

    // All validations passed
    console.log('Form submitted');

    if (isLogin) {
      handleLogin();
    } else {
      handleSubmit();
    }

    return true;
  };

  return (
    <div>
      {isLogin ? (
        <div className='login-card'>
          <h1>Login</h1>
          <form className='myform' onSubmit={validate}>
            <div className='input'>
              <input id='username' name='username' placeholder='Username' onChange={(e) => setName(e.target.value)} />
              <label className='error'>{usernameError}</label>
            </div>
            <div className='input'>
              <input type='password' id='password' name='password' placeholder='Password' onChange={(e) => setPass(e.target.value)} />
              <label className='error'>{passwordError}</label>
            </div>
            <br />
            <div className='buttonss'>
              <button type='submit'>Log In</button>
              <button type='button' onClick={() => setIsLogin(false)}>Sign Up</button>
            </div>
          </form>
        </div>
      ) : (
        <div className='signup-card'>
        <h1>Sign Up</h1>
        <form className='myform' onSubmit={validate}>
          <div className='input'>
            <input id='username' name='username' placeholder='Username' onChange={(e) => setName(e.target.value)} />
            <label className='error'>{usernameError}</label>
          </div>
          <div className='input'>
            <input type='password' id='password' name='password' placeholder='Password' onChange={(e) => setPass(e.target.value)} />
            <label className='error'>{passwordError}</label>
          </div>
          <div className='input'>
            <input id='email' name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />  <label className='error'>{emailError}</label>
          </div>
         
          <br />
          <div className='buttonss'>
            <button type='button' onClick={() => setIsLogin(true)}>Log In</button>
            <button type='submit'>Sign Up</button>
          </div>
        </form>
      </div>
      
      )}
    </div>
  );
}