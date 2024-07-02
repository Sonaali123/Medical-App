import React from 'react';
import { Button, Box, Typography } from '@mui/material';

export default function VoiceCall() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Voice Call
      </Typography>
      {/* Here you can add your voice call integration */}
      <Box
        sx={{
          width: '100%',
          height: '80%',
          bgcolor: 'grey.300', // Placeholder for voice call screen
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography>Voice Call Screen</Typography>
      </Box>
      <Button href="/chatbot"
        variant="contained"
        color="error"
        sx={{ mt: 2 }}
      >
        End Call
      </Button>
    </Box>
  );
}
