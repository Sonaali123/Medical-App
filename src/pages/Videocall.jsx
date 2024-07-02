import React from 'react';
import { Button, Box, Typography } from '@mui/material';

export default function VideoCall() {
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
        Video Call
      </Typography>
      {/* Here you can add your video call integration */}
      <Box
        sx={{
          width: '100%',
          height: '80%',
          bgcolor: 'grey.300', // Placeholder for video screen
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography>Video Screen</Typography>
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
