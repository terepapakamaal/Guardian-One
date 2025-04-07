import React from 'react';
import { Container, Typography } from '@mui/material';
import PasswordStrengthChecker from './PasswordStrengthChecker';
import PasswordGenerator from './PasswordGenerator'; // Assuming this component exists
import SmsSpamCheck from './SmsSpamCheck';
import URLScanner from './URLScanner';
import PhoneNumberValidation from './PhoneNumberValidation';
import FileMaliciousChecker from './FileMaliciousChecker';
import PanicSection from './PanicSection';
import Awareness from '../pages/Awareness'; // Updated import

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Guardian-One Dashboard
      </Typography>
      <PasswordStrengthChecker />
      <PasswordGenerator />
      <SmsSpamCheck />
      <URLScanner />
      <PhoneNumberValidation />
      <FileMaliciousChecker />
      <PanicSection />
      <Awareness /> {/* Updated component usage */}
    </Container>
  );
};

export default HomePage;
