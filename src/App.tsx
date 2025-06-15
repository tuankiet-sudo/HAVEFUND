import * as React from 'react';
import { useLocation, BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer'; // Import the new Footer component
import MainPage from '../pages/MainPage';
import AboutUsPage from '../pages/AboutUsPage';
import CustomerPage from '../pages/CustomerPage';
import NewsPage from '../pages/NewsPage';
import AdvisorsPage from '../pages/AdvisorsPage';
import PortfolioPage from '../pages/PortfolioPage';

const ScrollToAnchor = () => {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0); // Scroll to top on new page load without hash
      return;
    }

    const id = hash.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
        setTimeout(() => {
            const headerOffset = 110;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }, 100);
    }
  }, [pathname, hash]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor /> 
      <Box sx={{ backgroundColor: '#f0f2f5' }}> 
        <Box sx={{ 
          maxWidth: '1800px', 
          mx: 'auto',
          backgroundColor: 'white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column', // Make the main box a flex container
          px: { xs: 1, sm: 0 }
        }}>
          <CssBaseline />
          <Header />
          {/* Main content should grow to fill available space */}
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/news/:articleId" element={<NewsPage />} />
              <Route path="/customer" element={<CustomerPage />} />
              <Route path="/advisors" element={<AdvisorsPage />} />
              <Route path="/portfolio-investment" element={<PortfolioPage />} />
            </Routes>
          </Box>
          <Footer /> {/* Add the Footer at the end */}
        </Box>
      </Box>
    </BrowserRouter>
  );
}
