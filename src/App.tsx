import * as React from 'react';
import { useLocation, BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Header from '../components/Header';
import MainPage from '../pages/MainPage';
import AboutUsPage from '../pages/AboutUsPage';
// Create and import other pages similarly
// import CustomerPage from './pages/CustomerPage'; 
// import AdvisorsPage from './pages/AdvisorsPage';
// import PortfolioPage from './pages/PortfolioPage';

/**
 * This component listens for location changes and scrolls to the
 * element specified by the URL hash (#).
 */
const ScrollToAnchor = () => {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    // If there is no hash, do nothing.
    if (!hash) {
      return;
    }

    // Find the element that corresponds to the hash.
    const id = hash.replace('#', '');
    const element = document.getElementById(id);
    
    // Scroll to the element if it exists.
    if (element) {
        // We use a small timeout to ensure the page has had time to render
        // before we try to scroll.
        setTimeout(() => {
            const headerOffset = 110; // Height of your fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }, 100);
    }
  }, [pathname, hash]); // Rerun this effect when the path or hash changes.

  return null; // This component does not render anything.
};

export default function App() {
  return (
    <BrowserRouter>
      {/* The ScrollToAnchor component needs to be inside the Router */}
      <ScrollToAnchor /> 
      <Box sx={{ overflowX: 'hidden' }}>
        <CssBaseline />
        <Header /> {/* The Header appears on every page */}
        <Routes>
          {/* The home page */}
          <Route path="/" element={<MainPage />} />
          
          {/* Other pages */}
          <Route path="/about-us" element={<AboutUsPage />} />
          
          {/* Add routes for other pages here */}
          {/* <Route path="/customer" element={<CustomerPage />} /> */}
          {/* <Route path="/advisors" element={<AdvisorsPage />} /> */}
          {/* <Route path="/portfolio-investment" element={<PortfolioPage />} /> */}
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
