import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const SmsSpamCheck = () => {
  const [smsText, setSmsText] = useState('');
  const [result, setResult] = useState('');

  const checkForSpam = () => {
    // Simple spam checker logic (for demonstration purposes)
    const spamKeywords = ['win', 'prize', 'free', 'money', 'urgent'];
    const isSpam = spamKeywords.some(keyword => smsText.toLowerCase().includes(keyword));
    setResult(isSpam ? 'This message is likely spam.' : 'This message is not spam.');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        SMS Spam Checker
      </Typography>
      <Box component="form" noValidate>
        <TextField
          label="Enter SMS Text"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          value={smsText}
          onChange={(e) => setSmsText(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={checkForSpam}>
          Check for Spam
        </Button>
      </Box>
      {result && (
        <Typography variant="body1" gutterBottom>
          {result}
        </Typography>
      )}
    </Container>
  );
};

export default SmsSpamCheck;
