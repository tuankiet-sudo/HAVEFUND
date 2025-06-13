import * as React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';

interface PopoverButtonProps {
  buttonText: string;
  menuItems: { label: string; onClick: () => void }[];
}

export default function PopoverButton({ buttonText, menuItems }: PopoverButtonProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} sx={{ display: 'inline-block' }}>
      <Button
        aria-haspopup="true"
        sx={{ color: 'black', textTransform: 'none', fontSize: '1rem' }}
      >
        {buttonText}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        transition
        disablePortal // Important for the hover logic to work with the wrapper Box
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper elevation={3}>
              <MenuList autoFocusItem={false}>
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.label}
                    onClick={() => {
                      item.onClick();
                      handleMouseLeave(); // Close menu on click
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}