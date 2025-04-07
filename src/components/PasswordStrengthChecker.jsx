import React from 'react';
import zxcvbn from 'zxcvbn';
import { LinearProgress, Typography } from '@mui/material';

const PasswordStrengthChecker = ({ password }) => {
  const result = zxcvbn(password || '');
  const strength = result.score; // Score ranges from 0 (weak) to 4 (strong)

  const getStrengthLabel = () => {
    switch (strength) {
      case 0: return 'Very Weak';
      case 1: return 'Weak';
      case 2: return 'Fair';
      case 3: return 'Good';
      case 4: return 'Strong';
      default: return '';
    }
  };

  return (
    <div>
      <Typography variant="body1">Password Strength: {getStrengthLabel()}</Typography>
      <LinearProgress variant="determinate" value={(strength / 4) * 100} />
    </div>
  );
};

export default PasswordStrengthChecker;

