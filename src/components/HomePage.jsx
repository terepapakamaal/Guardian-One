import React from 'react';
import PasswordStrengthChecker from './PasswordStrengthChecker';
import SmsSpamCheck from './SmsSpamCheck';
import URLScanner from './URLScanner';
import PhoneNumberValidation from './PhoneNumberValidation';
import FileMaliciousChecker from './FileMaliciousChecker';
import PanicSection from './PanicSection';
import EducationSection from './EducationSection';
import { Container, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Guardian-One Dashboard
      </Typography>
      <PasswordStrengthChecker />
      <SmsSpamCheck />
      <URLScanner />
      <PhoneNumberValidation />
      <FileMaliciousChecker />
      <PanicSection />
      <EducationSection />
    </Container>
  );
};

export default HomePage;
