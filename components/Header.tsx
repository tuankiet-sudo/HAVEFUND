import * as React from 'react';
import { AppBar, Toolbar, Box, TextField, IconButton, Popper, Paper, MenuList, MenuItem, Typography, Fade, InputAdornment } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PopoverButton from './PopoverButton';
import { searchableContent } from '../src/data/searchableContent'; // Import our unified search data

// ... (navLinks data remains the same)
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
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<typeof searchableContent>([]);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const searchAnchorRef = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length > 2) {
      const results = searchableContent.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.content.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results.slice(0, 5)); // Limit to top 5 results
      setIsSearchOpen(true);
    } else {
      setSearchResults([]);
      setIsSearchOpen(false);
    }
  };

  const handleResultClick = (path: string) => {
    navigate(path);
    setSearchQuery('');
    setSearchResults([]);
    setIsSearchOpen(false);
  };

  return (
    <AppBar position="fixed" elevation={isScrolled ? 4 : 0} sx={{ backgroundColor: 'white', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease-in-out' }}>
      <Toolbar sx={{ py: isScrolled ? 1 : 2, minHeight: isScrolled ? '70px' : '110px', alignItems: 'center', transition: 'min-height 0.3s ease-in-out' }}>
        <RouterLink to="/">
          <Box component="img" src="/Logo.png" alt="Company Logo" sx={{ height: isScrolled ? '50px' : '80px', transition: 'height 0.3s ease-in-out', flexShrink: 0, ml: 10, display: 'block' }} />
        </RouterLink>
        
        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', mr: 10 }}>
          {!isScrolled && (
            <Box ref={searchAnchorRef}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  sx={{
                    mr: 2,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px', height: '30px',
                      '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.2)' },
                      '&:hover fieldset': { borderColor: 'black' },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton size="small" aria-label="search">
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <IconButton sx={{ color: '#1877F2' }}><FacebookIcon /></IconButton>
                <IconButton sx={{ color: '#FF0000' }}><YouTubeIcon /></IconButton>
                <IconButton sx={{ color: 'blue' }}><LinkedInIcon /></IconButton>
              </Box>
              <Popper open={isSearchOpen} anchorEl={searchAnchorRef.current} placement="bottom-end" transition sx={{ zIndex: 1200 }}>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper elevation={4} sx={{ mt: 1, width: 300 }}>
                      <MenuList>
                        {searchResults.length > 0 ? (
                          searchResults.map(result => (
                            <MenuItem key={result.id} onClick={() => handleResultClick(result.path)}>
                              <Typography variant="body1" noWrap>{result.title}</Typography>
                            </MenuItem>
                          ))
                        ) : (
                          <MenuItem disabled>No results found.</MenuItem>
                        )}
                      </MenuList>
                    </Paper>
                  </Fade>
                )}
              </Popper>
            </Box>
          )}

          <Box sx={{ display: 'flex', gap: 2 }}>
            {navLinks.map((link) => (
              <PopoverButton key={link.buttonText} buttonText={link.buttonText} path={link.path} menuItems={link.items} />
            ))}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
