import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const URLScanner = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');

  const checkURL = () => {
    const isValid = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*$/i.test(url);
    setResult(isValid ? 'URL looks valid.' : 'URL might be malicious or invalid.');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        URL Scanner
      </Typography>
      <TextField
        label="Enter URL"
        fullWidth
        margin="normal"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={checkURL}>
        Check URL
      </Button>
      {result && (
        <Typography variant="body1" gutterBottom>
          {result}
        </Typography>
      )}
    </Container>
  );
};

export default URLScanner;

