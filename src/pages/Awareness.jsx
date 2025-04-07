import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Awareness() {
  return (
    <Container sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom>
        Cybersecurity Awareness
      </Typography>
      <Typography>
        Learn about best practices to avoid spam, phishing, and data breaches.
      </Typography>
    </Container>
  );
}