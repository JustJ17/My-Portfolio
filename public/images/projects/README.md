# Project Images

Place your project images in this folder.

## Required Images

### Project Card Images (Main)
- `project1.jpg` - Main image for Project 1
- `project2.jpg` - Main image for Project 2
- `project3.jpg` - Main image for Project 3

**Recommended size:** 800×500px  
**Formats:** JPG, PNG, WebP

### Gallery Images (Optional)
For each project, you can add multiple gallery images:
- `project1-gallery-1.jpg`
- `project1-gallery-2.jpg`
- `project1-gallery-3.jpg`
- (and so on for other projects)

**Recommended size:** 1200×800px  
**Formats:** JPG, PNG, WebP

## Fallback Images
If images are not found, the system will display:
- 📁 Folder icon for card images
- 🖼️ Picture icon for gallery images

## Updating Project Data
To add or modify projects, edit: `src/data/projectsData.ts`

Each project should include:
- `id`: Unique identifier (used in URL)
- `title`: Project name
- `description`: Short summary (2-3 sentences)
- `image`: Path to main project image
- `fullDescription`: Detailed explanation
- `technologies`: Array of tech stack
- `githubLink`: (Optional) GitHub repository URL
- `liveLink`: (Optional) Live demo URL
- `resourceLinks`: (Optional) Additional resource links
- `gallery`: Array of gallery image paths
