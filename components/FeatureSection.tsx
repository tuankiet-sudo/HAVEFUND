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
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2,    // Trigger when 20% of the element is visible
  });

  return (
    <Box ref={ref} sx={{ py: { xs: 4, md: 6 } }}>
      <Grid container spacing={6} alignItems="center" direction={imagePosition === 'left' ? 'row' : 'row-reverse'}>
        {/* Image Column */}
        <Grid size={{xs: 12, md: 6}}>
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

        {/* Text Column */}
        <Grid size={{xs: 12, md: 6}}>
          <Fade in={inView} timeout={1500}>
            <Box>
              <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                {title}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'text.secondary' }}>
                {description}
              </Typography>
            </Box>
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
}