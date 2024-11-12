import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Typography, Box } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Tooltip from '@mui/material/Tooltip';

import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import FeedbackIcon from '@mui/icons-material/Feedback';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '40ch',
      '&:focus': {
        width: '50ch',
      },
    },
  },
}));

const Navbar = () => {
    return (
      <AppBar 
        position="fixed"
        sx={{ 
          margin: '0 auto',
          height: '80px',
          justifyContent: 'center',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Tooltip title="Menu">
            <IconButton color="inherit" aria-label="search" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Typography class="navbar-title" variant="h2" sx={{ flexShrink: 0 }}>
            <a 
              href="about"
              style={{ color: '#FFFFFF', textDecoration: 'none' }}
            >
              Safe Connect
            </a>
          </Typography>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2}}>
            <Tooltip title="Feedback">
              <IconButton color="inherit" aria-label="account" sx={{ mr: 2 }}>
                <FeedbackIcon />
              </IconButton>
            </Tooltip>
            
            <Tooltip title="Donate">
              <IconButton color="inherit" aria-label="account" sx={{ mr: 2 }}>
                <VolunteerActivismIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="My Account">
              <IconButton color="inherit" aria-label="account" sx={{ mr: 2 }}>
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;