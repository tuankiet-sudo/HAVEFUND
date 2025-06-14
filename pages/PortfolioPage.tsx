import { Box, Typography, Container, Grid, Paper, List, ListItem, ListItemIcon, Divider, ListItemText, Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const shortTermGoals = [
  "Achieve rapid growth while maintaining adequate liquidity through high-growth, high-volume stocks.",
  "Generate flexible passive income from both dividend-paying stocks and capital appreciation.",
  "Utilize swing trading for short-term gains, governed by strict stop-loss and take-profit rules.",
  "Asset Allocation: 80% equities, 10% stable dividend stocks, 10% cash."
];

const longTermGoals = [
  "Build a high-growth portfolio over 20 years for real estate, retirement, and education goals.",
  "Accept short-term fluctuations to achieve superior long-term returns.",
  "Integrate discipline, quantitative analysis, and a long-term vision.",
  "Optimally allocate assets across five carefully screened equities within a robust risk management framework."
];

export default function PortfolioPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: goalsRef, inView: goalsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: scheduleRef, inView: scheduleInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: allocationRef, inView: allocationInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: rebalancingRef, inView: rebalancingInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Box>
      {/* Hero Section */}
      <Box ref={heroRef} sx={{
          pt: '110px', height: '60vh', minHeight: '400px',
          backgroundImage: 'url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop)',
          backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
          '&::before': {
            content: '""', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0, 33, 64, 0.7)',
          },
      }}>
        <Container>
          <Fade in={heroInView} timeout={1500}>
            <Typography variant="h2" component="h2" align="center" sx={{ fontWeight: 'bold', zIndex: 1, position: 'relative' }}>
              Mr. Minh’s Portfolio
            </Typography>
          </Fade>
        </Container>
      </Box>

      {/* Section 1: Investment Goals */}
      <Box id="minhs-project" sx={{ pt: '120px', pb: 8, backgroundColor: 'white' }} ref={goalsRef}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 8 }}>
            Investment Goals, Objectives, and Constraints
          </Typography>
          <Grid container spacing={4}>
            {/* Short-term Goals */}
            <Grid size={{ xs: 12, md: 6}}>
              <Fade in={goalsInView} timeout={1000}>
                <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                  <Typography variant="h5" gutterBottom>Short-Term Goals</Typography>
                  <List>
                    {shortTermGoals.map((goal, i) => (
                      <ListItem key={i}><ListItemIcon><CheckCircleOutlineIcon color="primary" /></ListItemIcon><ListItemText primary={goal} /></ListItem>
                    ))}
                  </List>
                </Paper>
              </Fade>
            </Grid>
            {/* Long-term Goals */}
            <Grid size={{ xs: 12, md: 6}}>
              <Fade in={goalsInView} timeout={1000} style={{ transitionDelay: '200ms' }}>
                <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                  <Typography variant="h5" gutterBottom>Long-Term Goals</Typography>
                  <List>
                    {longTermGoals.map((goal, i) => (
                      <ListItem key={i}><ListItemIcon><CheckCircleOutlineIcon color="primary" /></ListItemIcon><ListItemText primary={goal} /></ListItem>
                    ))}
                  </List>
                </Paper>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section 2: Asset Allocation */}
      <Box sx={{ pt: 8, pb: 8, backgroundColor: '#f4f6f8' }} ref={allocationRef}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 8 }}>
            The Asset Allocation
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6}}>
              <Fade in={allocationInView} timeout={1200}>
                <Box
                  component="img"
                  src="/asset.png"
                  alt="Asset Allocation Chart"
                  sx={{ width: '100%', height: 'auto', borderRadius: 2, boxShadow: 3 }}
                />
              </Fade>
            </Grid>
            <Grid size={{ xs: 12, md: 6}}>
              <Fade in={allocationInView} timeout={1200} style={{ transitionDelay: '300ms' }}>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                    The Asset Allocation chart illustrates the distribution of assets within the investment portfolio, enabling investors to evaluate its suitability concerning their financial strategy. This allocation structure reflects the investor’s risk tolerance, with a significant portion allocated to risk-free assets for stability, while a majority is directed toward equities to maximize potential returns.
                </Typography>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Section 3: Review Schedule */}
      <Box sx={{ pt: 8, pb: 8, backgroundColor: 'white' }} ref={scheduleRef}>
          <Container maxWidth="lg">
              <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 8 }}>
                  Schedule for Review
              </Typography>
              <Grid container spacing={5} alignItems="center">
                  <Grid size={{ xs: 12, md: 6}}>
                      <Fade in={scheduleInView} timeout={1200}>
                          <Box
                              component="img"
                              src="/schedule.png"
                              alt="Review Schedule"
                              sx={{ width: '100%', height: 'auto', borderRadius: 2, boxShadow: 3 }}
                          />
                      </Fade>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6}}>
                      <Fade in={scheduleInView} timeout={1200} style={{ transitionDelay: '200ms' }}>
                          <Box>
                              <Typography variant="body1" paragraph>HAVEFUND will conduct an annual review of the IPS with Mr. Minh at least once a year, and more often if needed. The firm will also check how well the investment strategy is working every six months or once a year. Meanwhile, Mr. Minh will receive monthly reports showing how the portfolio is performing.</Typography>
                              <Typography variant="body1">These reports will measure both returns and risks, using tools like the Sharpe ratio and utility functions to evaluate performance. Based on these results, adjustments can be made to improve the portfolio if necessary.</Typography>
                          </Box>
                      </Fade>
                  </Grid>
              </Grid>
          </Container>
      </Box>

      {/* Section 4: Rebalancing Guidelines */}
      <Box sx={{ pt: 8, pb: 8, backgroundColor: '#f4f6f8' }} ref={rebalancingRef}>
          <Container maxWidth="md">
              <Fade in={rebalancingInView} timeout={1200}>
                  <Paper elevation={3} sx={{ p: 4 }}>
                      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>Rebalancing Guidelines</Typography>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="body1" sx={{ lineHeight: 1.7, textAlign: 'center' }}>
                        Asset allocation is a cornerstone of portfolio management, providing long-term stability and risk control. As market dynamics shift and asset prices fluctuate, portfolio compositions may drift from their intended targets. To ensure that the portfolio remains aligned with the investor’s financial objectives and risk profile, rebalancing is periodically required.
                      </Typography>
                  </Paper>
              </Fade>
          </Container>
      </Box>

    </Box>
  );
}
