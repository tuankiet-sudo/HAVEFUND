// import * as React from 'react';
import { Box, Typography, Card, CardContent, CardActionArea } from '@mui/material';

interface NewsCardProps {
  image: string;
  date: string;
  title: string;
  quote: string;
  onClick: () => void;
}

export default function NewsCard({ image, date, title, quote, onClick }: NewsCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 3,
        transition: 'box-shadow 0.3s',
        '&:hover': {
          boxShadow: 8,
        },
      }}
    >
      {/* This makes the entire card clickable with a ripple effect */}
      <CardActionArea onClick={onClick} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Image container with overflow hidden to contain the zoom effect */}
        <Box
          sx={{
            height: 200,
            width: '100%',
            overflow: 'hidden',
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
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="caption" color="text.secondary" display="block">
            {date}
          </Typography>
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`"${quote}"`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}