import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import PasswordStrenghtChecker from '../components/PasswordStrengthChecker'; // Import PasswordMeter

export default function PasswordCenter() {
  const [password, setPassword] = useState('');
  const [breach, setBreach] = useState(null);

  const handleBreachCheck = async () => {
    if (!password) return;

    // Hash the password using SHA-1 for Have I Been Pwned API
    const hash = new TextEncoder().encode(password);
    const hashedPassword = await crypto.subtle.digest('SHA-1', hash);
    const hexHash = Array.from(new Uint8Array(hashedPassword))
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('');

    const prefix = hexHash.slice(0, 5); // Take the first 5 characters of the hash
    const suffix = hexHash.slice(5); // Remaining characters of the hash

    try {
      const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
      if (!response.ok) {
        throw new Error('Failed to fetch breach data');
      }

      const data = await response.text();
      const breaches = data.split('\n').map(line => line.split(':'));
      const isBreached = breaches.some(([hashSuffix]) => hashSuffix.toLowerCase() === suffix);

      setBreach(isBreached);
    } catch (err) {
      console.error(err);
      setBreach(null); // Reset breach state on error
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
