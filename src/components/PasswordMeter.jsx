import { zxcvbn } from '@zxcvbn-ts/core';
import { LinearProgress, Typography } from '@mui/material';

export default function PasswordMeter({ password }) {
  const result = zxcvbn(password);
  const strength = (result.score + 1) * 25; // Convert 0-4 score to 25-100%

  return (
    <div>
      <LinearProgress variant="determinate" value={strength} />
      <Typography variant="caption">
        {['Weak', 'Fair', 'Good', 'Strong', 'Very Strong'][result.score]}
      </Typography>
    </div>
  );
}