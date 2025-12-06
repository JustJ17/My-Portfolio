import React from 'react';
import { Box, Typography } from '@mui/material';
import { colors } from '../theme';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsData';

const Projects: React.FC = () => {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        pt: '80px', 
        pb: 8,
        px: { xs: 3, md: 6 },
        background: `linear-gradient(180deg, ${colors.dark} 0%, ${colors.secondary} 50%, ${colors.primary} 100%)`,
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '1400px', mx: 'auto' }}>
        {/* Section Header */}
        <Typography
          variant="h2"
          sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 2,
              mt: 4,
              color: 'white',
              textAlign: 'center',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '4px',
                backgroundColor: colors.brightCyan,
                borderRadius: '2px',
              },
            }}
          >
            My Projects
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              fontWeight: 400,
              color: colors.lightCyan,
              textAlign: 'center',
              mt: 4,
              mb: 6,
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Explore my portfolio of projects that showcase my skills and passion for development
          </Typography>

        {/* Projects Grid */}
        <Box
          sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              },
              gap: 4,
              mt: 6,
            }}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
