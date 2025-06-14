// import * as React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const footerSections = [
//   {
//     title: 'Văn Phòng Hà Nội',
//     address: 'Representative office in Hanoi',
//     phone: '024 628 48 666',
//   },
//   {
//     title: 'Văn Phòng Đà Nẵng',
//     address: 'Representative office in DaNang',
//     phone: '023 637 21 232',
//   },
  {
    title: 'Văn Phòng TP. HCM',
    address: '36 Tôn Thất Đạm, Quận 1',
    phone: '028 629 75 599',
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0D47A1', // A deep, professional blue
        color: 'white',
        py: 6,
        // Optional: add a subtle pattern like in the image
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Left Column: Logo and Main Info */}
          <Grid size={{xs: 12, md: 4}}>
            <RouterLink to="/">
              <Box
                component="img"
                src="/Logo.png"
                alt="HAVEFUND Logo"
                sx={{ height: 60, mb: 2 }}
              />
            </RouterLink>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              HAVEFUND
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="body2">Headquarters: 36 Tôn Thất Đạm, Quận 1</Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <IconButton href="#" target="_blank" sx={{ color: 'white' }}><FacebookIcon /></IconButton>
              <IconButton href="#" target="_blank" sx={{ color: 'white' }}><YouTubeIcon /></IconButton>
              <IconButton href="#" target="_blank" sx={{ color: 'white' }}><LinkedInIcon /></IconButton>
            </Box>
          </Grid>

          {/* Right Columns: Office Locations */}
          <Grid size={{xs: 12, md: 8}}>
            <Grid container spacing={4}>
              {footerSections.map((section) => (
                <Grid size={{xs:12, sm: 4}} key={section.title}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {section.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationOnIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
                    <Typography variant="body2">{section.address}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <PhoneIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
                    <Typography variant="body2">{section.phone}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Copyright Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" sx={{ mb: { xs: 2, sm: 0 } }}>
            &copy; {new Date().getFullYear()} HAVEFUND. All rights reserved. Designed by TukiAgency.
          </Typography>
          <Box>
            <Link component={RouterLink} to="/terms-of-use" color="inherit" sx={{ ml: 3 }}>
              Terms of Use
            </Link>
            <Link component={RouterLink} to="/privacy-policy" color="inherit" sx={{ ml: 3 }}>
              Privacy Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
