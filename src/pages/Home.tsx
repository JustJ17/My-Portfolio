import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { colors } from '../theme';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(135deg, #1a1a2e 0%, ${colors.secondary} 50%, ${colors.primary} 100%)`,
          color: 'white',
          pt: '80px',
          px: { xs: 3, md: 6 },
          margin: 0,
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '1400px' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 4, md: 8 },
            }}
          >
            {/* Photo Section - Left */}
            <Box
              sx={{
                flex: '0 0 auto',
                order: { xs: 1, md: 1 },
              }}
            >
              <Box
                sx={{
                  width: { xs: '250px', md: '350px' },
                  height: { xs: '250px', md: '350px' },
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: `5px solid ${colors.brightCyan}`,
                  boxShadow: `0 8px 32px rgba(66, 242, 247, 0.3)`,
                  position: 'relative',
                }}
              >
                <img
                  src="/src/assets/images/profile-photo.jpg"
                  alt="Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  onError={(e) => {
                    // Fallback if photo is not found
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.background = `linear-gradient(135deg, ${colors.lightCyan}, ${colors.primary})`;
                      parent.style.display = 'flex';
                      parent.style.alignItems = 'center';
                      parent.style.justifyContent = 'center';
                      parent.innerHTML = `
                        <div style="
                          font-size: 120px;
                          font-weight: bold;
                          color: white;
                        ">👤</div>
                      `;
                    }
                  }}
                />
              </Box>
            </Box>

            {/* Text Section - Right */}
            <Box
              sx={{
                flex: 1,
                order: { xs: 2, md: 2 },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              {/* Name */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4.5rem' },
                  fontWeight: 700,
                  mb: 2,
                  background: `linear-gradient(135deg, ${colors.brightCyan}, ${colors.lightCyan})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
              Mohamed Gamal 
              </Typography>

              {/* Job Title */}
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.3rem', md: '1.8rem' },
                  fontWeight: 400,
                  mb: 3,
                  color: colors.lightCyan,
                  opacity: 0.95,
                }}
              >
                Mechatronics Engineer / FullStack Web Developer
              </Typography>

              {/* About Paragraph */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  fontWeight: 300,
                  lineHeight: 1.8,
                  maxWidth: '600px',
                  mx: { xs: 'auto', md: 0 },
                  opacity: 0.9,
                }}
              >
                A Mechatronics Engineer with a growing passion for full-stack web development. Skilled in Python, Flask, Django,
                React, with experience in Git, GitHub, Linux administration, and Agile practices. Adaptable, curious, and comfortable
                working independently or as part of a team, alwaysSkilled in crafting responsive designs and efficient code, and eager
                to join a tech-driven team to work and develop new projects .
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* About Me Section */}
      <Box
        id="about"
        sx={{
            minHeight: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            py: { xs: 8, md: 12 },
            px: { xs: 3, md: 6 },
            background: `linear-gradient(135deg, #005f7f 0%, ${colors.primary} 50%, ${colors.secondary} 100%)`,
            margin: 0,
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
          }}
        >
        <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto' }}>
          {/* Section Title */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 2,
              color: 'white',
              textAlign: 'center',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                backgroundColor: colors.brightCyan,
                borderRadius: '2px',
              },
            }}
          >
            About Me
          </Typography>

          {/* About Content */}
          <Box sx={{ mt: 6 }}>
            <Box sx={{ maxWidth: '1400px', mx: 'auto', mb: 6 }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  lineHeight: 1.8,
                  color: 'rgba(255, 255, 255, 0.9)',
                  textAlign: 'center',
                  mb: 3,
              }}
            >
              I'm a web developer who loves understanding how things work — from frontend 
              interactions in React to backend logic in Node.js and Django. I enjoy building 
              clean, functional applications and learning the "why" behind each tool or concept I use.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.9)',
                textAlign: 'center',
                mb: 3,
              }}
            >
              Over time I've explored a wide range of technologies: React, JavaScript, Python, 
              Django, Flask, Docker, and how everything connects in real projects. I'm also 
              expanding into cloud services like AWS and Azure, because I enjoy understanding 
              how applications run, scale, and operate in real-world environments.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.9)',
                textAlign: 'center',
                mb: 3,
              }}
            >
              Right now I'm focused on becoming stronger as a full-stack developer, especially 
              in building APIs, understanding backend architecture, and creating smooth frontend 
              experiences. Learning cloud platforms is helping me see the bigger picture of 
              deployment and modern web infrastructure.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.9)',
                textAlign: 'center',
                mb: 3,
              }}
            >
              I'm someone who learns by doing — whether it's debugging, setting up environments, 
              or building small apps to deeply understand a concept. My goal is to keep growing, 
              build real products, and craft a portfolio that reflects both my skills and my progress.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.9)',
                textAlign: 'center',
              }}
            >
              When I'm not coding, I enjoy exploring new technologies, improving step by step, 
              and experimenting with ideas to sharpen my understanding.
            </Typography>
            </Box>

            {/* Resume Download Button */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<DownloadIcon />}
                href="/resume.pdf"
                download
                sx={{
                  backgroundColor: colors.primary,
                  color: 'white',
                  px: 5,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: '50px',
                  boxShadow: `0 4px 20px rgba(0, 126, 167, 0.3)`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: colors.secondary,
                    boxShadow: `0 6px 30px rgba(47, 48, 97, 0.4)`,
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Download Resume
              </Button>
              <Typography
                variant="caption"
                sx={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontStyle: 'italic',
                }}
              >
                View my complete professional experience
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
            width: '100vw',
            py: 6,
            px: { xs: 3, md: 6 },
            background: '#1a1a1a',
            color: 'white',
            margin: 0,
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            marginBottom: 0,
          }}
        >
        <Box
          sx={{
            width: '100%',
            maxWidth: '1200px',
            mx: 'auto',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 4,
          }}
        >
          {/* Left Side - Branding */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 700,
                mb: 1,
                background: `linear-gradient(135deg, ${colors.brightCyan}, ${colors.lightCyan})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Your Name
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: '1rem',
                opacity: 0.8,
              }}
            >
              Building amazing digital experiences
            </Typography>
          </Box>

          {/* Center - Quick Links */}
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Typography
              component="a"
              href="#about"
              sx={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '1rem',
                opacity: 0.8,
                transition: 'all 0.3s',
                '&:hover': {
                  opacity: 1,
                  color: colors.brightCyan,
                },
              }}
            >
              About
            </Typography>
            <Typography
              component="a"
              href="/projects"
              sx={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '1rem',
                opacity: 0.8,
                transition: 'all 0.3s',
                '&:hover': {
                  opacity: 1,
                  color: colors.brightCyan,
                },
              }}
            >
              Projects
            </Typography>
            <Typography
              component="a"
              href="/contact"
              sx={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '1rem',
                opacity: 0.8,
                transition: 'all 0.3s',
                '&:hover': {
                  opacity: 1,
                  color: colors.brightCyan,
                },
              }}
            >
              Contact
            </Typography>
          </Box>

          {/* Right Side - Copyright */}
          <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: '0.9rem',
                opacity: 0.7,
              }}
            >
              © {new Date().getFullYear()} Your Name
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: '0.85rem',
                opacity: 0.6,
                mt: 0.5,
              }}
            >
              All rights reserved
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
