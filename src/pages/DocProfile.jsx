import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Button, Avatar, Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SectionTitle from '../components/common/section-title.jsx'; // Correct path to SectionTitle

const theme = createTheme();

const doctors = [
    { id: 1, name: 'Dr. John Doe', image: '/path/to/image1.jpg' },
    { id: 2, name: 'Dr. Jane Smith', image: '/path/to/image2.jpg' },
    { id: 3, name: 'Dr. Richard Roe', image: '/path/to/image3.jpg' },
    { id: 4, name: 'Dr. Emily Johnson', image: '/path/to/image4.jpg' },
];

export default function DoctorProfile() {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return <Typography variant="h6">Doctor not found</Typography>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            {/* Add an icon or image if needed */}
          </Avatar>
            <br></br>
            <br></br>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
              <img src={doctor.image} alt={doctor.name} style={{ width: '100%', borderRadius: '8px' }} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h5" gutterBottom>
                {doctor.name}
              </Typography>
              <Typography variant="body1" paragraph>
                Dr. {doctor.name} is a renowned specialist with extensive experience in their field. A highly respected and experienced cardiologist, known for exceptional patient care and dedication to cardiology. With over 20 years of experience, Dr. Johnson has advanced heart health through innovative treatments and personalized care plans.
              </Typography>
              <Typography variant="body1" paragraph>
                Graduating top of her class from Harvard Medical School, she completed her residency at the renowned Mayo Clinic. Dr. Johnson is passionate about preventive cardiology and educates patients on lifestyle changes to improve heart health.
              </Typography>
              <Typography variant="body1" paragraph>
                Her warm demeanor and commitment to patients have earned her numerous accolades, including the prestigious Heart Health Award. Outside her practice, Dr. Johnson is an avid researcher, published in leading medical journals, and involved in community outreach programs to increase awareness about heart disease prevention.
              </Typography>
              <Typography variant="body1" paragraph>
                Her warm demeanor and commitment to patients have earned her numerous accolades, including the prestigious Heart Health Award. Outside her practice, Dr. Johnson is an avid researcher, published in leading medical journals, and involved in community outreach programs to increase awareness about heart disease prevention.
              </Typography>
              <Typography variant="body1" paragraph>
                Her warm demeanor and commitment to patients have earned her numerous accolades, including the prestigious Heart Health Award. Outside her practice, Dr. Johnson is an avid researcher, published in leading medical journals, and involved in community outreach programs to increase awareness about heart disease prevention.
              </Typography>
              <Typography variant="body1" paragraph>
                Her warm demeanor and commitment to patients have earned her numerous accolades, including the prestigious Heart Health Award. Outside her practice, Dr. Johnson is an avid researcher, published in leading medical journals, and involved in community outreach programs to increase awareness about heart disease prevention.
              </Typography>
              <Box mt={4} display="flex" justifyContent="space-between" width="100%">
                <Button variant="contained" color="primary" href="/video">
                  Video Call
                </Button>
                <Button variant="contained" color="secondary" href="/voice">
                  Voice Call
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
