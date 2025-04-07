import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { db } from '../config/firebase';

export default function SpamCheck() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!number) {
      setResult({ severity: 'info', message: 'Enter a phone number.' });
      return;
    }
    setLoading(true);
    try {
      const snapshot = await db.collection('spamNumbers')
        .where('number', '==', number.trim())
        .get();
      if (!snapshot.empty) {
        const desc = snapshot.docs[0].data().description;
        setResult({ severity: 'error', message: `Spam detected: ${desc}` });
      } else {
        setResult({ severity: 'success', message: 'Number is clean.' });
      }
    } catch (err) {
      console.error(err);
      setResult({ severity: 'warning', message: 'Error checking number.' });
    }
    setLoading(false);
  };

  return (
    <Container sx={{ my: 4 }}>
      <TextField
        fullWidth
        label="Phone Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        disabled={loading}
      />
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleCheck} disabled={loading}>
        {loading ? 'Checking...' : 'Check Spam'}
      </Button>
      {result && (
        <Alert severity={result.severity} sx={{ mt: 2 }}>
          {result.message}
        </Alert>
      )}
    </Container>
  );
}