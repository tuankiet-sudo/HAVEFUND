import * as React from 'react';
import { Box, Typography, Grid, Slide, Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';

interface FeatureSectionProps {
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
  imagePosition?: 'left' | 'right';
}

export default function FeatureSection({ image, title, description, imagePosition = 'left' }: FeatureSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box ref={ref} sx={{ py: { xs: 4, md: 6 } }}>
      <Grid container spacing={6} alignItems="center" direction={{ xs: 'column-reverse', md: (imagePosition === 'left' ? 'row' : 'row-reverse') }}>
        <Grid size={{ xs: 12, md: 6}}>
          <Slide direction={imagePosition === 'left' ? 'right' : 'left'} in={inView} timeout={1000}>
            <Box
              component="img"
              src={image}
              alt="Feature Image"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              }}
            />
          </Slide>
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
          <Fade in={inView} timeout={1500}>
            <Box>
              <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
                {title}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'text.secondary', textAlign: { xs: 'center', md: 'left' } }}>
                {description}
              </Typography>
            </Box>
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
}
