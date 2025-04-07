import React, { useState } from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    // Simple password generator logic
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
    let newPassword = '';
    for (let i = 0; i < 12; i++) {
      newPassword += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(newPassword);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Password Generator
      </Typography>
      <Button variant="contained" color="primary" onClick={generatePassword}>
        Generate Password
      </Button>
      {password && (
        <TextField
          label="Generated Password"
          fullWidth
          margin="normal"
          value={password}
          InputProps={{
            readOnly: true,
          }}
        />
      )}
    </Container>
  );
};

export default PasswordGenerator;
