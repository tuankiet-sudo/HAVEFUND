import * as React from 'react';
import { Box, Typography, Container, Divider, Fade, Slide } from '@mui/material';
import Header from '../components/Header';

export default function MainPage() {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Box>
      <Header />

      {/* Main content area with background image */}
      <Box
        component="main"
        sx={{
          minHeight: '100vh',
          backgroundImage: 'url(/part1-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center', // Center the content vertically
          pt: '110px', // Add padding to push content below the initial header
          pb: 4, // Add some bottom padding
        }}
      >
        {/* Container to constrain the width of the text content */}
        <Container maxWidth="md">
          {/* --- ANIMATION WRAPPERS START --- */}
          <Slide direction="up" in={loaded} mountOnEnter unmountOnExit timeout={1000}>
            <Fade in={loaded} timeout={1500}>
              <Box
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  p: { xs: 3, md: 5 },
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              >
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{ fontWeight: 'bold', color: '#0D47A1' /* A deep blue */ }}
                >
                  INTRODUCTION
                </Typography>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{ color: '#1565C0', letterSpacing: '1px', mb: 2 }}
                >
                  INVESTMENT POLICY STATEMENT
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Typography variant="body1" sx={{ lineHeight: 1.7, fontSize: '1.1rem' }}>
                  The Investment Policy Statement (IPS) is an official document that outlines the objectives, constraints, and unique circumstances that shape an organization's investment strategy. It provides clear guidelines for managing the investment portfolio and helps ensure alignment between the investor and advisor regarding goals, acceptable risk levels, and execution methods. Serving as a foundational framework, the IPS is essential in minimizing risks and enhancing returns, supporting long-term financial success.
                </Typography>
              </Box>
            </Fade>
          </Slide>
          {/* --- ANIMATION WRAPPERS END --- */}
        </Container>
      </Box>
      <Box sx={{ height: '100vh' }}> {/* Adjusted from 200vh for a more reasonable scroll */}
          <Typography variant="h5" sx={{ mt: 4, p: 3 }}>
            More Content Down Here...
          </Typography>
        </Box>
    </Box>
  );
}