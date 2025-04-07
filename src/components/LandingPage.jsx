import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Container } from '@mui/material';

const LandingPage = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to Guardian-One
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your all-in-one solution for digital safety.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/auth?type=login">
        Login
      </Button>
      <Button variant="contained" color="secondary" component={Link} to="/auth?type=signup">
        Sign Up
      </Button>
    </Container>
  );
};

export default LandingPage;
