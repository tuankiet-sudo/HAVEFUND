// import * as React from 'react';
import { Box, Typography, Card, CardContent, CardActionArea} from '@mui/material';

interface NewsCardProps {
  image?: string;
  date: string;
  title: string;
  quote?: string;
  onClick: () => void;
  variant?: 'normal' | 'small';
  bgColor?: string; // For the background of small cards
}

export default function NewsCard({ 
  image, 
  date, 
  title, 
  quote, 
  onClick, 
  variant = 'normal', 
  bgColor = '#e3f2fd' // Default light blue
}: NewsCardProps) {
  
  // SMALL VARIANT: Renders a text-only card, like a quote block.
  if (variant === 'small') {
    return (
      <Card
        sx={{
          height: '100%',
          backgroundColor: bgColor, // Use the provided background color
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <CardActionArea onClick={onClick} sx={{ p: 3, flexGrow: 1 }}>
          <Typography variant="h6" component="p" sx={{ fontWeight: 'bold', mb: 1 }}>
            {`"${title}"`}
          </Typography>
          <Typography variant="caption" align="right" display="block">
            {date}
          </Typography>
        </CardActionArea>
      </Card>
    );
  }

  // NORMAL VARIANT: Renders the standard image + text card.
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent', // Make background transparent
        boxShadow: 'none', // No shadow for a flatter look
      }}
    >
      <CardActionArea onClick={onClick} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Image container with overflow hidden to contain the zoom effect */}
        <Box
          sx={{
            height: 160, // Slightly smaller image height
            width: '100%',
            overflow: 'hidden',
            mb: 2, // Increased gap between image and title
          }}
        >
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              transition: 'transform 0.4s ease',
              '&:hover': {
                transform: 'scale(1.1)', // The zoom effect on hover
              },
            }}
          />
        </Box>
        <CardContent sx={{ p: 0, flexGrow: 1 }}>
          <Typography variant="caption" color="text.secondary" display="block">
            {date}
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold', lineHeight: 1.3 }}>
            {title}
          </Typography>
          {quote && ( // Only render quote if it exists
            <Typography variant="body2" color="text.secondary">
              {`${quote}`}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}