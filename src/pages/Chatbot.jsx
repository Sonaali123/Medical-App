import React, { useState } from 'react';
import { Container, Typography, Box, Button, TextField, AppBar, Toolbar } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function DiagnosisSuccess() {
  const [chatInput, setChatInput] = useState('');

  const handleChatSubmit = () => {
    // Handle chat search functionality
    alert(`Searching for: ${chatInput}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Diagnosis Report
            </Typography>
            <Button color="inherit">Next</Button>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Successfully diagnosed. Reports will be sent to your email soon.
          </Typography>
          <Typography variant="body1" paragraph>
            Meanwhile, you can use our chatbot for any doubts.
          </Typography>
          <TextField
            label="Chat with us"
            variant="outlined"
            fullWidth
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            sx={{ mt: 2, mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleChatSubmit}
            sx={{ mb: 2 }}
          >
            Done
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
