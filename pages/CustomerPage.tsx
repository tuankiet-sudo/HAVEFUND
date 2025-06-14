// import * as React from 'react';
import { Box, Typography, Container, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Avatar, Divider, Fade, Slide } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WorkIcon from '@mui/icons-material/Work';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GavelIcon from '@mui/icons-material/Gavel';
import FactCheckIcon from '@mui/icons-material/FactCheck';

const responsibilityData = [
  {
    icon: <GavelIcon fontSize="large" color="primary" />,
    text: "The Client holds the authority to oversee and review all investment activities carried out by the advisor.",
  },
  {
    icon: <FactCheckIcon fontSize="large" color="primary" />,
    text: "The Client may only interfere in the investment strategy when there is solid proof that the allocated funds are being misused or handled inappropriately. Any such action must be evidence-based, not guided by assumptions or personal bias.",
  },
  {
    icon: <PersonIcon fontSize="large" color="primary" />,
    text: "At the beginning of the investment engagement, the Client must clearly define their financial goals, acceptable level of risk, and any specific requirements to HAVEFUND.",
  },
  {
    icon: <AccountBalanceWalletIcon fontSize="large" color="primary" />,
    text: "The Client is obligated to promptly inform HAVEFUND of any major changes in financial condition, risk preferences, or other personal factors that could affect the suitability of the investment plan.",
  },
];

export default function CustomerPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: demoRef, inView: demoInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: respRef, inView: respInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          pt: '110px',
          height: '60vh',
          minHeight: '400px',
          backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0, 33, 64, 0.6)',
          },
        }}
        ref={heroRef}
      >
        <Container>
          <Fade in={heroInView} timeout={1500}>
            <Typography
              variant="h1"
              component="h1"
              align="center"
              sx={{ fontWeight: 'bold', zIndex: 1, position: 'relative' }}
            >
              Our Customer
            </Typography>
          </Fade>
        </Container>
      </Box>

      {/* Section 1: Customer Demographics */}
      <Box id="customer-demographics" sx={{ pt: '120px', pb: 8, backgroundColor: 'white' }} ref={demoRef}>
        <Container maxWidth="lg">
            <Paper elevation={4} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, overflow: 'hidden' }}>
              <Grid container spacing={4} alignItems="center">
                <Grid size={{xs: 12, md:4 }}>
                    <Slide direction="right" in={demoInView} timeout={1000}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Avatar
                                alt="Nguyen Van Minh"
                                src="/customer.jpg"
                                sx={{ width: 200, height: 200, margin: '0 auto', mb: 2, border: '4px solid', borderColor: 'primary.main' }}
                            />
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>NGUYEN VAN MINH</Typography>
                        </Box>
                    </Slide>
                </Grid>
                <Grid size={{xs: 12, md: 8 }}>
                    <Slide direction="left" in={demoInView} timeout={1000}>
                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>Overall</Typography>
                            <List dense>
                                <ListItem><ListItemIcon><PersonIcon /></ListItemIcon><ListItemText primary="Age: 40" /></ListItem>
                                <ListItem><ListItemIcon><FavoriteIcon /></ListItemIcon><ListItemText primary="Marital Status: Married, with 1 child (born 2020)" /></ListItem>
                                <ListItem><ListItemIcon><WorkIcon /></ListItemIcon><ListItemText primary="Combined Salary (after tax): 70 million VND/month" /></ListItem>
                                <ListItem><ListItemIcon><AccountBalanceWalletIcon /></ListItemIcon><ListItemText primary="Savings: 1 billion VND" /></ListItem>
                            </List>
                            <Divider sx={{ my: 3 }} />
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>Investment Profile</Typography>
                            <Typography variant="body1" paragraph><strong>Objectives:</strong> Capital accumulation for retirement (20-25 years) and funding for child's future university tuition.</Typography>
                            <Typography variant="body1"><strong>Experience:</strong> Basic understanding of stock investing with some prior portfolio management experience.</Typography>
                        </Box>
                    </Slide>
                </Grid>
              </Grid>
            </Paper>
        </Container>
      </Box>

      {/* Section 2: Responsible for Client */}
      <Box id="responsible-for-client" sx={{ pt: '120px', pb: 8, backgroundColor: '#f4f6f8' }} ref={respRef}>
        <Container>
          <Typography variant="h2" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
            Responsibility for Client
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}>
            Mr. Minh, acting as a client and beneficiary, has assigned his assets to HAVEFUND for investment purposes. Below are the redefined responsibilities and rights of the client in this arrangement.
          </Typography>
            <Grid container spacing={4}>
              {responsibilityData.map((item, index) => (
                <Grid size={{xs: 12, sm:6 }} key={index}>
                  <Fade in={respInView} timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                    <Paper elevation={2} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                        <Box sx={{ mb: 2 }}>{item.icon}</Box>
                        <Typography variant="body1">{item.text}</Typography>
                    </Paper>
                  </Fade>
                </Grid>
              ))}
            </Grid>
        </Container>
      </Box>
    </Box>
  );
}
