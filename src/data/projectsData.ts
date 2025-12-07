// Project data interface
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  resourceLinks?: { title: string; url: string }[];
  gallery: string[];
}

// Your actual projects
export const projects: Project[] = [
  {
    id: 'bash-dbms',
    title: 'Bash Database Management System',
    description: 'A database management system that simulates databases and tables using directories and files, providing basic CRUD operations with datatype validation and primary key constraints.',
    image: '/images/projects/bash-dbms.png',
    fullDescription: `
      This project simulates databases and tables using directories and files, providing a complete database management experience through a command-line interface.
      
      Key Features:
      - Create, list, connect, and drop databases
      - Create, list, and drop tables
      - Insert, select, update, and delete rows
      - Column datatype checks (int, string, etc.)
      - Primary key enforcement
      - Menu-driven CLI interface
      
      This project demonstrates strong understanding of file systems, data validation, and shell scripting to create a functional database system entirely in Bash.
    `,
    technologies: ['Bash', 'Shell Scripting', 'Linux', 'File Systems'],
    githubLink: 'https://github.com/JustJ17/Bash-DBMS/tree/main',
    gallery: [
      '/images/projects/bash-dbms.png',
      '/images/projects/cli_ascii.png',
    ],
  },
  {
    id: 'crack-n-stack',
    title: 'Crack-n-Stack (Retro Block Breaker Game)',
    description: 'A classic breakout-style arcade game where you control a paddle to guide the ball and smash through rows of bricks. Features multiple levels, power-ups, and a leaderboard system.',
    image: '/images/projects/crack-n-stack.png',
    fullDescription: `
      Take control of the paddle and guide the ball to smash through rows of bricks! Break them all to clear the stage and advance to the next level. Watch your angles, time your moves, and don't let the ball slip past your paddle.
      
      Game Features:
      - 🎮 Classic Breakout Gameplay - Navigate the paddle to keep the ball in play
      - 🎵 Background Music - Immersive audio experience with volume controls
      - 🏆 Leaderboard System - Track your high scores and compete with others
      - 📊 Multiple Levels - Progressive difficulty with 10 challenging levels
      - ⚡ Power-ups - Collect special items to enhance your gameplay
      - 🎯 Scoring System - Time-based bonus points for faster completion
      
      Simple to play, hard to master—the timeless arcade challenge awaits!
    `,
    technologies: ['HTML', 'CSS', 'JavaScript', 'OOP', 'Game Development'],
    githubLink: 'https://github.com/JustJ17/Crack-n-Stack',
    gallery: [
      '/images/projects/crack-n-stack.jpg',
    ],
  },
  {
    id: 'xonix-game',
    title: 'Xonix Game (Assembly)',
    description: 'A complete arcade game built entirely in Assembly Language, featuring VGA graphics, keyboard input, collision detection, and score tracking.',
    image: '/images/projects/xonix-game.jpg',
    fullDescription: `
      Created the entire Xonix game using Assembly Language, demonstrating low-level programming expertise and understanding of computer architecture.
      
      Technical Features:
      - VGA graphics using BIOS interrupt INT 10h
      - Keyboard input via INT 16h
      - Collision detection and movement logic
      - Score tracking and color-based area filling
      - Fully written in MASM-compatible Assembly
      
      This project showcases deep understanding of computer systems, memory management, and direct hardware interaction. Building a complete game in Assembly requires careful attention to performance optimization and resource management.
    `,
    technologies: ['Assembly', 'MASM', 'BIOS Interrupts', 'VGA Graphics'],
    githubLink: 'https://github.com/JustJ17/XONIX-using-asm?tab=readme-ov-file',
    gallery: [
      '/images/projects/xonix-game.jpg',
    ],
  },
  {
    id: 'snakeopoly',
    title: 'Monopoly Snake and Ladders',
    description: 'A university OOP project that combines Snakes & Ladders with Monopoly mechanics, where players encounter ladders, snakes, and unique cards that affect their progress.',
    image: '/images/projects/snakeoply.png',
    fullDescription: `
      Snakeopoly is a university project built for an Object-Oriented Programming (OOP) course, showcasing strong understanding of OOP principles and game design.
      
      Game Mechanics:
      - Hybrid gameplay mixing Snakes & Ladders with Monopoly elements
      - Players move across a board with strategic decisions
      - Encounter ladders (help), snakes (setback), and special cards
      - Turn-based gameplay with multiple players
      - Score tracking and win conditions
      
      Technical Implementation:
      - Object-Oriented design with clean class hierarchies
      - Inheritance and polymorphism for game entities
      - Encapsulation of game logic and state management
      - Event-driven architecture for player actions
      
      This project demonstrates strong software engineering fundamentals and creative game design.
    `,
    technologies: ['Java', 'OOP', 'Game Design', 'Swing GUI'],
    githubLink: 'https://github.com/JustJ17/Snakeopoly/tree/main#',
    gallery: [
      '/images/projects/snakeoply.png',
      '/images/projects/snakoply1.png',
      '/images/projects/snakoply2.png',
    ],
  },
  {
    id: 'personal-finance-manager',
    title: 'Personal Finance Manager',
    description: 'A Python console application for tracking income and expenses, generating financial reports, setting savings goals, and managing recurring transactions.',
    image: '/images/projects/PythonFinance2.png',
    fullDescription: `
      The Personal Finance Manager is a comprehensive Python console application that helps users take control of their financial life.
      
      Core Features:
      - 💰 Track income and expenses with detailed categorization
      - 📊 Generate detailed financial reports and visualizations
      - 🎯 Set and monitor savings goals with progress tracking
      - 🔄 Manage recurring transactions (monthly bills, subscriptions)
      - 🔍 Filter, search, and sort transaction history
      - 📥 Import/export transaction data for backup and analysis
      
      Technical Highlights:
      - Professional programming practices and clean code architecture
      - Comprehensive data validation and error handling
      - Efficient file I/O operations for data persistence
      - Modular code design with clear separation of concerns
      - User-friendly command-line interface
      - CSV export for integration with other tools
      
      This project demonstrates practical software development skills applicable to real-world financial management needs.
    `,
    technologies: ['Python', 'File I/O', 'Data Validation', 'CLI Design'],
    githubLink: 'https://github.com/JustJ17/Personal-Finance-Manager-using-Python',
    gallery: [
      '/images/projects/PythonFinance.png',
      '/images/projects/PythonFinance2.png',
    ],
  },
  {
    id: 'pid-controller-kit',
    title: 'PID Controller Learning Kit',
    description: 'A graduation project featuring a hands-on PID controller learning kit with custom mechanical design, Arduino control, and desktop application for real-time tuning and visualization.',
    image: '/images/projects/PLC5.jpeg',
    fullDescription: `
      A comprehensive PID controller learning kit developed as my graduation project at Cairo University Faculty of Engineering.
      
      Project Components:
      - Mechanical Design: Custom enclosure using sheet metal and 3D printed parts designed in SolidWorks
      - Electronics: Arduino Uno microcontroller for control system implementation
      - Software: Desktop application built with C# .NET and Arduino IDE
      - User Interface: Real-time control panel for adjusting PID parameters
      - Visualization: Live graphs showing system response and performance
      
      Educational Value:
      - Hands-on learning tool for automatic control concepts
      - Real-time parameter tuning for understanding P, I, and D effects
      - Visual feedback for immediate comprehension of control theory
      - Practical application of mechatronics engineering principles
      
      Skills Demonstrated:
      - Mechatronics system integration (mechanical, electrical, software)
      - SolidWorks CAD design and 3D printing
      - Embedded systems programming (Arduino)
      - Desktop application development (C# .NET)
      - Control systems theory and implementation
      
      This project represents the culmination of my mechatronics engineering education, combining mechanical design, electronics, and software development.
    `,
    technologies: ['Arduino', 'C#', '.NET', 'SolidWorks', 'PID Control', '3D Printing', 'Sheet Metal' ],
    gallery: [
      '/images/projects/PLC1.jpeg',
      '/images/projects/PLC2.png',
      '/images/projects/PLC3.png',
      '/images/projects/PLC4.jpeg',
      '/images/projects/PLC5.jpeg',
      '/images/projects/PLC6.png',
    ],
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations, project showcases, and an integrated contact form with email functionality.',
    image: '/images/projects/PortfolioHomepage.png',
    fullDescription: `
      A fully responsive personal portfolio website designed to showcase my projects, skills, and professional experience in an elegant and interactive way.
      
      Design Features:
      - 🎨 Modern UI/UX: Clean, professional design with custom color gradients
      - 📱 Fully Responsive: Optimized for desktop, tablet, and mobile devices
      - 🌊 Smooth Animations: Subtle hover effects and transitions for enhanced user experience
      - 🎯 Intuitive Navigation: Fixed navbar with smooth scrolling to sections
      
      Key Sections:
      - Hero Section: Eye-catching introduction with professional title and profile photo
      - About Me: Comprehensive background, skills, and experience overview
      - Projects Gallery: Card-based layout showcasing all major projects with details
      - Project Detail Pages: Individual pages for each project with full descriptions
      - Contact Form: Integrated EmailJS for direct communication
      
      Technical Implementation:
      - Frontend Framework: React 19 with TypeScript for type safety
      - UI Library: Material-UI (MUI) v7 for consistent, professional components
      - Routing: React Router v6 for smooth navigation between pages
      - Form Handling: Formik with Yup validation for robust form management
      - Email Integration: EmailJS for automated contact form submissions
      - Build Tool: Vite with Rolldown for fast development and optimized builds
      - Code Quality: ESLint for code consistency and TypeScript for type checking
      
      Architecture Highlights:
      - Component-based architecture for reusability
      - Custom theme configuration for consistent branding
      - Centralized project data management
      - Glassmorphism effects for modern aesthetics
      - Optimized performance with lazy loading and code splitting
      
      Deployment:
      - Production-ready build configuration
      - Optimized assets and bundle sizes
      - SEO-friendly structure
      - Fast loading times
      
      This portfolio website itself demonstrates my full-stack web development skills and attention to detail in creating polished, user-friendly applications.
    `,
    technologies: ['React', 'TypeScript', 'Material-UI', 'Vite', 'React Router', 'EmailJS', 'Formik', 'Yup'],
    githubLink: 'https://github.com/JustJ17/My_Portfolio',
    liveLink: 'https://your-portfolio-domain.com',
    gallery: [
      '/images/projects/Portfolio1.png',
      '/images/projects/Portfolio2.png',
      '/images/projects/Portfolio3.png',
    ],
  },
];
