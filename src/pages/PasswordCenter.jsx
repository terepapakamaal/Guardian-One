import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import { db } from '../config/firebase';
import PasswordMeter from '../components/PasswordMeter'; // Import PasswordMeter

export default function PasswordCenter() {
  const [password, setPassword] = useState('');
  const [breach, setBreach] = useState(null);

  const handleBreachCheck = async () => {
    if (!password) return;
    const hash = btoa(password);
    try {
      const snapshot = await db.collection('breachData')
        .where('hash', '==', hash)
        .get();
      setBreach(!snapshot.empty);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container sx={{ my: 4 }}>
      <TextField
        fullWidth
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <PasswordMeter password={password} /> {/* Add PasswordMeter here */}
      <Button variant="contained" onClick={handleBreachCheck} sx={{ mt: 2 }}>
        Check Breach
      </Button>
      {breach !== null && (
        <Alert severity={breach ? 'error' : 'success'} sx={{ mt: 2 }}>
          {breach
            ? '⚠️ Password found in breach!'
            : '✅ No breaches found.'}
        </Alert>
      )}
    </Container>
  );
}