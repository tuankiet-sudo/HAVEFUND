import * as React from 'react';
import { AppBar, Toolbar, Box, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PopoverButton from './PopoverButton';
import { Link as RouterLink } from 'react-router-dom';

// Mock data for the popover menus
const navLinks = [
  {
    buttonText: 'About us',
    path: '/about-us',
    items: [
      { label: 'Our Company', anchorId: 'our-company' }, 
      { label: 'Our Services', anchorId: 'our-services' }
    ],
  },
  {
    buttonText: 'Customer',
    path: '/customer',
    items: [
      { label: 'Customer Demographics', anchorId: 'customer-demographics' }, 
      { label: 'Responsible for Client', anchorId: 'responsible-for-client' }
    ],
  },
  {
    buttonText: 'Advisors',
    path: '/advisors',
    items: [
      { label: 'Project Team Structure', anchorId: 'project-team-structure' }, 
      { label: 'Responsibility of Advisors', anchorId: 'responsibility-of-advisors' }
    ],
  },
  {
    buttonText: 'Portfolio Investment',
    path: '/portfolio-investment',
    items: [
      { label: 'Mr. Minh\'s Project', anchorId: 'minhs-project' }
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Set state based on scroll position
      setIsScrolled(window.scrollY > 50);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    const handleSearchClick = () => {
    // In the future, you can put your search logic here.
        console.log("Search icon clicked!");
    };

    return (
    // Use AppBar for a conventional header structure
    <AppBar
      position="fixed"
      elevation={isScrolled ? 4 : 0} // Add shadow on scroll
      sx={{
        backgroundColor: 'white', // A sample dark blue background
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Toolbar
        sx={{
          py: isScrolled ? 1 : 2,
          // Transition the height and padding
          minHeight: isScrolled ? '70px' : '110px', // Adjusted scrolled height
          alignItems: 'center',
          transition: 'min-height 0.3s ease-in-out',
        }}
      >
        {/* Logo */}
        <RouterLink to="/">
          <Box
            component="img"
            src="/Logo.png" // Path to the image in the 'public' folder
            alt="Company Logo"
            sx={{
              height: isScrolled ? '50px' : '80px', // Adjusted logo heights
              transition: 'height 0.3s ease-in-out', // Smooth transition for logo size
              flexShrink: 0,
              ml: 10,
            }}
          />
        </RouterLink>
        {/* This Box is a spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Right Side container */}
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', mr: 10 }}>

          {/* --- CHANGE IS HERE --- */}
          {/* Top Right Section is now conditionally rendered */}
          {!isScrolled && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 1, // Margin-bottom to space it from the links below
              }}
            >
              <TextField
                variant="outlined"
                size="small"
                // placeholder="Search..."
                sx={{
                  mr: 2,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    backgroundColor: 'rgba(0, 0, 0, 0)', // Lighter background for white header
                    color: 'black',
                    height: '30px', // Adjusted height for smaller input
                    '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.2)' },
                    '&:hover fieldset': { borderColor: 'black' },
                  },
                  '& .MuiInputBase-input': { color: 'black' }, // Changed input color
                }}
                slotProps={{
                  input: {
                    endAdornment: (
                        <IconButton
                          aria-label="search"
                          onClick={handleSearchClick}
                          edge="end"
                        >
                          <SearchIcon sx={{ color: 'rgba(0, 0, 0, 0.2)' }} />
                        </IconButton>
                    ),
                  },
                }}
              />
              <IconButton sx={{ color: '#1877F2' }}><FacebookIcon /></IconButton>
              <IconButton sx={{ color: '#FF0000' }}><YouTubeIcon /></IconButton>
              <IconButton sx={{ color: 'blue' }}><LinkedInIcon /></IconButton>
            </Box>
          )}
          {/* --- END OF CHANGE --- */}


          {/* Bottom Right Section - Always Visible */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navLinks.map((link) => (
              <PopoverButton
                key={link.buttonText}
                buttonText={link.buttonText}
                menuItems={link.items}
                path={link.path} // Use the path for navigation
              />
            ))}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}