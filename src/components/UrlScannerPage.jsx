import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { scanUrl } from '../utils/urlScanner';

const UrlScannerPage = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');

  const handleScan = async () => {
    try {
      const scanResult = await scanUrl(url);
      setResult(scanResult);
    } catch (error) {
      setResult('Error scanning URL.');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        URL Scanner
      </Typography>
      <Box>
        <TextField
          label="Enter URL"
          fullWidth
          margin="normal"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleScan}>
          Scan URL
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

export default UrlScannerPage;
