import React from 'react';
import PasswordStrengthChecker from './PasswordStrengthChecker'; // Assuming this component exists
import SmsSpamCheck from './SmsSpamCheck'; // Assuming this component exists
import URLScanner from './URLScanner'; // Assuming this component exists
import PhoneNumberValidation from './PhoneNumberValidation'; // Assuming this component exists
import FileMaliciousChecker from './FileMaliciousChecker'; // Assuming this component exists
import PanicSection from './PanicSection'; // Assuming this component exists
import EducationSection from './EducationSection'; // Assuming this component exists

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Guardian-One Dashboard</h1>
      <PasswordStrengthChecker />
      <SmsSpamCheck />
      <URLScanner />
      <PhoneNumberValidation />
      <FileMaliciousChecker />
      <PanicSection />
      <EducationSection />
    </div>
  );
};

export default HomePage;
