import React from 'react';
import { Link } from 'react-router-dom';
import PasswordStrengthChecker from './PasswordStrengthChecker'; // Assuming this component exists

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Guardian-One</h1>
      <p>Your all-in-one solution for digital safety.</p>
      <div className="buttons">
        <Link to="/auth?type=login" className="btn">Login</Link>
        <Link to="/auth?type=signup" className="btn">Sign Up</Link>
      </div>
      <div className="password-checker">
        <h2>Check Your Password Strength</h2>
        <PasswordStrengthChecker />
      </div>
    </div>
  );
};

export default LandingPage;
