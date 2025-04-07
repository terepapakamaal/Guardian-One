import React from 'react';
import { Typography, List, ListItem, ListItemText, Container } from '@mui/material';

const PanicSection = () => {
  const resources = [
    { name: 'Cyber Crime Helpline', contact: '155260', website: 'https://cybercrime.gov.in/' },
    { name: 'Report Phishing', contact: 'reportphishing@antiphishing.org', website: '' },
    { name: 'Freeze Bank Account', contact: 'Contact your bank immediately' },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Panic Section
      </Typography>
      <Typography variant="body1" gutterBottom>
        If you suspect a scam or cyber attack, follow these steps:
      </Typography>
      <List>
        {resources.map((resource, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={resource.name}
              secondary={`Contact: ${resource.contact} ${resource.website ? `| Website: ${resource.website}` : ''}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PanicSection;

