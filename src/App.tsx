// import * as React from 'react';
import { CssBaseline, Box } from '@mui/material'; // <-- Import Box
import MainPage from '../pages/MainPage';

export default function App() {
  return (
    // Add a Box wrapper to control global layout behavior
    <Box sx={{ overflowX: 'hidden' }}>
      <CssBaseline />
      <MainPage />
    </Box>
  );
}