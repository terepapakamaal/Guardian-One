import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Container, Card, CardContent, Grid } from '@mui/material';
import PasswordStrengthChecker from './PasswordStrengthChecker';

const LandingPage = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to Guardian-One
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your all-in-one solution for digital safety.
      </Typography>
      <Grid container spacing={2} style={{ marginTop: '20px', marginBottom: '20px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Feature 1
              </Typography>
              <Typography variant="body2">
                Description of feature 1.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Feature 2
              </Typography>
              <Typography variant="body2">
                Description of feature 2.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Feature 3
              </Typography>
              <Typography variant="body2">
                Description of feature 3.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div>
        <Button variant="contained" color="primary" component={Link} to="/auth?type=login" style={{ marginRight: '10px' }}>
          Login
        </Button>
        <Button variant="contained" color="secondary" component={Link} to="/auth?type=signup">
          Sign Up
        </Button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Check Your Password Strength
        </Typography>
        <PasswordStrengthChecker />
      </div>
    </Container>
  );
};

export default LandingPage;
