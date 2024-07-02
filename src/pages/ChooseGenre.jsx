import React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Typography, Container, Card, CardMedia, CardContent } from '@mui/material';
import SectionTitle from '../components/common/section-title.jsx'; // Correct path to SectionTitle

const doctors = [
    { id: 1, name: 'General', image: '/path/to/image1.jpg' },
    { id: 2, name: 'Pedia', image: '/path/to/image2.jpg' },
    { id: 3, name: 'Ortho', image: '/path/to/image3.jpg' },
    { id: 4, name: 'Gynaec', image: '/path/to/image4.jpg' },
    { id: 1, name: 'General', image: '/path/to/image1.jpg' },
    { id: 2, name: 'Pedia', image: '/path/to/image2.jpg' },
    { id: 3, name: 'Ortho', image: '/path/to/image3.jpg' },
    { id: 4, name: 'Gynaec', image: '/path/to/image4.jpg' },
    { id: 1, name: 'General', image: '/path/to/image1.jpg' },
    { id: 2, name: 'Pedia', image: '/path/to/image2.jpg' },
    { id: 3, name: 'Ortho', image: '/path/to/image3.jpg' },
    { id: 4, name: 'Gynaec', image: '/path/to/image4.jpg' },
    { id: 1, name: 'General', image: '/path/to/image1.jpg' },
    { id: 2, name: 'Pedia', image: '/path/to/image2.jpg' },
    { id: 3, name: 'Ortho', image: '/path/to/image3.jpg' },
    { id: 4, name: 'Gynaec', image: '/path/to/image4.jpg' },
    { id: 1, name: 'General', image: '/path/to/image1.jpg' },
    { id: 2, name: 'Pedia', image: '/path/to/image2.jpg' },
    { id: 3, name: 'Ortho', image: '/path/to/image3.jpg' },
    { id: 4, name: 'Gynaec', image: '/path/to/image4.jpg' },

];

function Confyde() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {' © Diagnoster'}
      <Link color="inherit" href="#" /> {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function ChooseDoctor() {
  const navigate = useNavigate();

  const handleDoctorClick = (id) => {
    navigate(`/gen/${id}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            {/* Add an icon or image if needed */}
          </Avatar>

          <SectionTitle title="Choose Your Doctor" />

          <Grid container spacing={4} sx={{ overflowY: 'auto', maxHeight: '80vh' }}>
            {doctors.map((doctor) => (
              <Grid item key={doctor.id} xs={12} sm={6} md={3}>
                <Card onClick={() => handleDoctorClick(doctor.id)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={doctor.image}
                    alt={doctor.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {doctor.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box mt={8}>
          <Confyde />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

