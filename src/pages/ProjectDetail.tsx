import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Chip,
  ImageList,
  ImageListItem,
  Link,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import LinkIcon from '@mui/icons-material/Link';
import { colors } from '../theme';
import { projects } from '../data/projectsData';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  // Find the project by ID
  const project = projects.find((p) => p.id === projectId);

  // If project not found, show error
  if (!project) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          pt: '80px',
          px: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 100%)`,
        }}
      >
        <Typography variant="h3" color="white" gutterBottom>
          Project Not Found
        </Typography>
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/projects')}
          sx={{
            mt: 3,
            backgroundColor: colors.brightCyan,
            color: colors.dark,
            '&:hover': { backgroundColor: colors.lightCyan },
          }}
        >
          Back to Projects
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: '80px',
        pb: 8,
        px: { xs: 3, md: 6 },
        background: `linear-gradient(180deg, ${colors.dark} 0%, ${colors.secondary} 100%)`,
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto' }}>
        {/* Back Button */}
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/projects')}
          sx={{
            mb: 4,
            color: colors.brightCyan,
            borderColor: colors.brightCyan,
            '&:hover': {
              borderColor: colors.lightCyan,
              backgroundColor: 'rgba(66, 242, 247, 0.1)',
            },
          }}
        >
          Back to Projects
        </Button>

        {/* Project Title */}
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 700,
            mb: 3,
            color: 'white',
          }}
        >
          {project.title}
        </Typography>

        {/* Technologies */}
        <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {project.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              sx={{
                backgroundColor: colors.primary,
                color: 'white',
                fontWeight: 600,
                fontSize: '0.9rem',
              }}
            />
          ))}
        </Box>

        {/* Action Links */}
        <Box sx={{ mb: 6, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {project.githubLink && (
            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              href={project.githubLink}
              target="_blank"
              sx={{
                backgroundColor: colors.brightCyan,
                color: colors.dark,
                fontWeight: 600,
                '&:hover': { backgroundColor: colors.lightCyan },
              }}
            >
              View on GitHub
            </Button>
          )}
          {project.liveLink && (
            <Button
              variant="contained"
              startIcon={<LaunchIcon />}
              href={project.liveLink}
              target="_blank"
              sx={{
                backgroundColor: colors.primary,
                color: 'white',
                fontWeight: 600,
                '&:hover': { backgroundColor: colors.secondary },
              }}
            >
              Live Demo
            </Button>
          )}
        </Box>

        {/* Project Description */}
        <Box
          sx={{
            mb: 6,
            p: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: 3,
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              fontWeight: 700,
              mb: 3,
              color: colors.brightCyan,
            }}
          >
            Project Description
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.9)',
              whiteSpace: 'pre-line',
            }}
          >
            {project.fullDescription}
          </Typography>
        </Box>

        {/* Resource Links */}
        {project.resourceLinks && project.resourceLinks.length > 0 && (
          <Box
            sx={{
              mb: 6,
              p: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.8rem', md: '2.2rem' },
                fontWeight: 700,
                mb: 3,
                color: colors.brightCyan,
              }}
            >
              Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {project.resourceLinks.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.url}
                  target="_blank"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: colors.lightCyan,
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    transition: 'all 0.3s',
                    '&:hover': {
                      color: colors.brightCyan,
                      transform: 'translateX(8px)',
                    },
                  }}
                >
                  <LinkIcon />
                  {resource.title}
                </Link>
              ))}
            </Box>
          </Box>
        )}

        {/* Photo Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.8rem', md: '2.2rem' },
                fontWeight: 700,
                mb: 3,
                color: 'white',
              }}
            >
              Gallery
            </Typography>
            <ImageList
              sx={{ width: '100%', height: 'auto' }}
              cols={project.gallery.length === 1 ? 1 : project.gallery.length === 2 ? 2 : 3}
              gap={16}
            >
              {project.gallery.map((image, index) => (
                <ImageListItem
                  key={index}
                  sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      borderColor: colors.brightCyan,
                    },
                  }}
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    loading="lazy"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background = `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`;
                        parent.style.minHeight = '250px';
                        parent.style.display = 'flex';
                        parent.style.alignItems = 'center';
                        parent.style.justifyContent = 'center';
                        parent.innerHTML = `
                          <div style="
                            font-size: 60px;
                            color: white;
                            opacity: 0.5;
                          ">🖼️</div>
                        `;
                      }
                    }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProjectDetail;
