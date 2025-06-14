import * as React from 'react';
import { Box, Typography, Container, List, ListItem, ListItemIcon, ListItemText, Paper, Grid, Fade } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LanguageIcon from '@mui/icons-material/Language';
import LabelIcon from '@mui/icons-material/Label';
import FeatureSection from '../components/FeatureSection';

// --- Data for Section 2 ---
const servicesData = [
  {
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'A. Establishing and Updating Investment Policy',
    description: 'We collaborate closely with each client to develop a tailored Investment Policy Statement (IPS), which clearly defines their financial goals, acceptable risk levels, and other key considerations. This policy is regularly reviewed and adjusted to reflect any changes in the client’s circumstances or market conditions.',
  },
  {
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'B. Strategic Asset Allocation',
    description: 'Based on the approved IPS, HAVEFUND works with professional investment advisors to allocate the client’s capital across suitable asset classes. The objective is to achieve optimal returns while staying within the defined risk limits of the client.',
  },
  {
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'C. Portfolio Monitoring and Risk Alignment',
    description: 'We continuously evaluate the alignment between the investment strategy and the IPS. HAVEFUND uses advanced risk monitoring tools to detect early warning signs of potential threats. When any asset shows signs of exceeding the client’s risk threshold, HAVEFUND promptly assesses the situation and recommends appropriate portfolio adjustments.',
  },
  {
    image: 'https://images.unsplash.com/photo-1672380135241-c024f7fbfa13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'D. Accountability and Client Protection',
    description: 'HAVEFUND takes full responsibility for the entrusted assets. If any losses occur due to subjective errors or mismanagement on our part, we are committed to compensating the client accordingly. All investment strategies are built upon the client’s individual financial needs, time horizon, and risk tolerance—ensuring a fully personalized and responsible investment approach.',
  }
];

export default function AboutUsPage() {
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
      setLoaded(true);
    }, []);
  const companyInfo = [
    { icon: <BusinessIcon color="primary" />, primary: "Company name", secondary: "HAVEFUND (HEF)" },
    { icon: <LabelIcon color="primary" />, primary: "Slogan", secondary: "Grow More. Risk Less. HaveFund." },
    { icon: <MonetizationOnIcon color="primary" />, primary: "Charter Capital", secondary: "VND" },
    { icon: <DesignServicesIcon color="primary" />, primary: "Services", secondary: "Providing financial solutions, investment consulting, and asset portfolio management for businesses and individuals" },
    { icon: <LanguageIcon color="primary" />, primary: "Network", secondary: "Headquarters in Ho Chi Minh City, with representative offices in Hanoi and Da Nang" },
  ];

  return (
    <Box>
      <Box
        sx={{
          pt: '110px', // Padding to clear the fixed header
          height: '60vh',
          minHeight: '400px',
          backgroundImage: 'url(https://images.unsplash.com/photo-1582647509711-c8aa8a8bda71?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          '&::before': { // This creates a dark overlay for text readability
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <Container>
          <Fade in={loaded} timeout={1500}>
            <Typography
              variant="h1"
              component="h1"
              align="center"
              sx={{ fontWeight: 'bold', zIndex: 1, position: 'relative' }}
            >
              About Us
            </Typography>
          </Fade>
        </Container>
      </Box>
      {/* Section 1: Our Company */}
      <Box id="our-company" sx={{ pt: '120px', pb: 8, backgroundColor: 'white' }}>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{xs: 12, md: 6}}>
              <Box component="img" src="/Logo.png" alt="Our Company" sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }} />
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <List>
                  {companyInfo.map(item => (
                    <ListItem key={item.primary} alignItems="flex-start">
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.primary} secondary={item.secondary} primaryTypographyProps={{ fontWeight: 'bold' }} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section 2: Entrusted Investment Services */}
      <Box id="our-services" sx={{ pt: '120px', pb: 8, backgroundColor: '#f4f6f8' }}>
        <Container>
          <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
            Entrusted Investment Services
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
            HAVEFUND receives investment mandates from clients (such as Mr. Minh) to manage assets in alignment with their specific requirements. The fund is committed to optimizing the investment portfolio according to each client's risk appetite and long-term financial objectives.
          </Typography>
          {servicesData.map((service, index) => (
            <FeatureSection
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              imagePosition={index % 2 === 0 ? 'right' : 'left'} // Alternating layout
            />
          ))}
        </Container>
      </Box>
    </Box>
  );
}