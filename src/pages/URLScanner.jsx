import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { db } from '../config/firebase';

export default function URLScanner() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!url) {
      setResult({ severity: 'info', message: 'Enter a URL.' });
      return;
    }
    setLoading(true);
    try {
      const snapshot = await db.collection('spamWebsites')
        .where('url', '==', url.trim())
        .get();
      if (!snapshot.empty) {
        const desc = snapshot.docs[0].data().description;
        setResult({ severity: 'error', message: `Malicious site: ${desc}` });
      } else {
        setResult({ severity: 'success', message: 'Website is safe.' });
      }
    } catch (err) {
      console.error(err);
      setResult({ severity: 'warning', message: 'Error checking URL.' });
    }
    setLoading(false);
  };

  return (
    <Container sx={{ my: 4 }}>
      <TextField
        fullWidth
        label="Website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        disabled={loading}
      />
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleCheck} disabled={loading}>
        {loading ? 'Checking...' : 'Check URL'}
      </Button>
      {result && (
        <Alert severity={result.severity} sx={{ mt: 2 }}>
          {result.message}
        </Alert>
      )}
    </Container>
  );
}
