import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home: React.FC = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Rogers Wire EDM
        </Typography>
        <Typography variant="body1">
          We specialize in precision machining services.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;