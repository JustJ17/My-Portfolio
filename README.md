# Personal Portfolio Website

A modern, responsive portfolio website built with React and TypeScript to showcase my projects, skills, and professional experience.

## Features

- 🎨 Modern UI with Material-UI components
- 📱 Fully responsive design for all devices
- 🚀 Fast performance with Vite
- 📧 Contact form with EmailJS integration
- 🎯 Project showcase with detailed pages
- 🌊 Smooth animations and transitions

## Tech Stack

- **Frontend:** React 19, TypeScript
- **UI Library:** Material-UI (MUI) v7
- **Routing:** React Router v6
- **Build Tool:** Vite
- **Form Handling:** Formik + Yup
- **Email Service:** EmailJS

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/     # Reusable components (Navbar, ProjectCard, etc.)
├── pages/          # Page components (Home, Projects, Contact)
├── data/           # Project data and content
├── assets/         # Images and static files
└── theme.ts        # MUI theme configuration
```

## Adding Projects

Edit `src/data/projectsData.ts` to add or update your projects. Each project includes:
- Title and description
- Technologies used
- GitHub and live demo links
- Project images

## Contact Form Setup

The contact form uses EmailJS. To set it up:
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Update credentials in `src/pages/Contact.tsx`

## License

MIT License - feel free to use this template for your own portfolio!

## Author

**Mohamed Gamal**  
Mechatronics Engineer / FullStack Web Developer  
📧 mohamedgamal.shafie@gmail.com