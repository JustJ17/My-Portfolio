import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { colors } from '../theme';

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, image }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/projects/${id}`);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: `0 12px 40px rgba(66, 242, 247, 0.3)`,
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
        },
      }}
    >
      {/* Project Image */}
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt={title}
        sx={{
          objectFit: 'cover',
          backgroundColor: colors.secondary,
        }}
        onError={(e) => {
          // Fallback if image is not found
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.style.background = `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`;
            parent.style.display = 'flex';
            parent.style.alignItems = 'center';
            parent.style.justifyContent = 'center';
            parent.innerHTML = `
              <div style="
                font-size: 80px;
                color: white;
                opacity: 0.5;
              ">📁</div>
            `;
          }
        }}
      />

      {/* Card Content */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          p: 3,
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={{
            color: colors.brightCyan,
            fontWeight: 700,
            fontSize: '1.5rem',
            mb: 2,
          }}
        >
          {title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: 1.7,
            mb: 3,
            flexGrow: 1,
          }}
        >
          {description}
        </Typography>

        {/* Read More Button */}
        <Box sx={{ mt: 'auto' }}>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={handleReadMore}
            fullWidth
            sx={{
              backgroundColor: colors.primary,
              color: 'white',
              py: 1.2,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: colors.brightCyan,
                transform: 'translateX(4px)',
              },
            }}
          >
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
