// import * as React from 'react';
import { Box, Typography, Container, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LanguageIcon from '@mui/icons-material/Language';
import LabelIcon from '@mui/icons-material/Label';
import FeatureSection from '../components/FeatureSection';
import { Grid } from '@mui/material';

// --- Data for Section 2 ---
const servicesData = [
  {
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop',
    title: 'A. Establishing and Updating Investment Policy',
    description: 'We collaborate closely with each client to develop a tailored Investment Policy Statement (IPS), which clearly defines their financial goals, acceptable risk levels, and other key considerations. This policy is regularly reviewed and adjusted to reflect any changes in the client’s circumstances or market conditions.',
  },
  {
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    title: 'B. Strategic Asset Allocation',
    description: 'Based on the approved IPS, HAVEFUND works with professional investment advisors to allocate the client’s capital across suitable asset classes. The objective is to achieve optimal returns while staying within the defined risk limits of the client.',
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    title: 'C. Portfolio Monitoring and Risk Alignment',
    description: 'We continuously evaluate the alignment between the investment strategy and the IPS. HAVEFUND uses advanced risk monitoring tools to detect early warning signs of potential threats. When any asset shows signs of exceeding the client’s risk threshold, HAVEFUND promptly assesses the situation and recommends appropriate portfolio adjustments.',
  },
  {
    image: 'https://images.unsplash.com/photo-1581092446347-a5633a7e9bae?q=80&w=2070&auto=format&fit=crop',
    title: 'D. Accountability and Client Protection',
    description: 'HAVEFUND takes full responsibility for the entrusted assets. If any losses occur due to subjective errors or mismanagement on our part, we are committed to compensating the client accordingly. All investment strategies are built upon the client’s individual financial needs, time horizon, and risk tolerance—ensuring a fully personalized and responsible investment approach.',
  }
];

export default function AboutUsPage() {
  const companyInfo = [
    { icon: <BusinessIcon color="primary" />, primary: "Company name", secondary: "HAVEFUND (HEF)" },
    { icon: <LabelIcon color="primary" />, primary: "Slogan", secondary: "Grow More. Risk Less. HaveFund." },
    { icon: <MonetizationOnIcon color="primary" />, primary: "Charter Capital", secondary: "VND" },
    { icon: <DesignServicesIcon color="primary" />, primary: "Services", secondary: "Providing financial solutions, investment consulting, and asset portfolio management for businesses and individuals" },
    { icon: <LanguageIcon color="primary" />, primary: "Network", secondary: "Headquarters in Ho Chi Minh City, with representative offices in Hanoi and Da Nang" },
  ];

  return (
    <Box>
      {/* Section 1: Our Company */}
      <Box id="our-company" sx={{ pt: '120px', pb: 8, backgroundColor: 'white' }}>
        <Container>
          <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 6 }}>
            About HAVEFUND
          </Typography>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{xs: 12, md: 6}}>
              <Box component="img" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="Our Company" sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }} />
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
          <Typography variant="h2" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
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