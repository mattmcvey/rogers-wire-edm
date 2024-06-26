import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ p: 2, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
      <Typography variant="body1">
        © 2024 Rogers Wire EDM. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;