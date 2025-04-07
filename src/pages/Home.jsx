import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <Container sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Guardian One
      </Typography>
      <Typography>
        Protect yourself from spam calls, malicious websites, and weak passwords.
        Use the navigation above to get started.
      </Typography>
    </Container>
  );
}