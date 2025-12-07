import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useLocation } from 'react-router-dom';
import { colors } from '../theme';
import { getImagePath } from '../utils/paths';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Me', path: '/', hash: '#about' },
    { label: 'My Projects', path: '/projects' },
    { label: 'Contact Me', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (item: { path: string; hash?: string }) => {
    setMobileOpen(false); // Close mobile drawer when navigating
    
    if (item.hash && item.path === '/') {
      // If we're navigating to About Me section on home page
      if (location.pathname === '/') {
        // Already on home page, just scroll
        const element = document.querySelector(item.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home page first, then scroll
        navigate(item.path);
        setTimeout(() => {
          if (item.hash) {
            const element = document.querySelector(item.hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, 100);
      }
    } else {
      // Navigate to other pages and scroll to top
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: colors.secondary,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        width: '100%',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
      }}
    >
      <Container maxWidth={false} disableGutters sx={{ px: 4 }}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo Section */}
          <Box
            onClick={handleLogoClick}
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8,
              },
              transition: 'opacity 0.3s',
            }}
          >
            <img
              src={getImagePath('images/logo.png')}
              alt="Logo"
              style={{
                height: '50px',
                width: 'auto',
                objectFit: 'contain',
              }}
              onError={(e) => {
                // Fallback if logo is not found
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div style="
                      background: linear-gradient(135deg, ${colors.brightCyan}, ${colors.primary});
                      width: 50px;
                      height: 50px;
                      border-radius: 8px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-weight: bold;
                      color: white;
                      font-size: 24px;
                    ">P</div>
                  `;
                }
              }}
            />
          </Box>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleNavigation(item)}
                sx={{
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  px: 3,
                  py: 1,
                  borderRadius: '8px',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    backgroundColor: colors.primary,
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: '3px',
                    backgroundColor: colors.brightCyan,
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '80%',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: colors.secondary,
            color: 'white',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(item)}
                sx={{
                  py: 2,
                  px: 3,
                  '&:hover': {
                    backgroundColor: colors.primary,
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      color: 'white',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
