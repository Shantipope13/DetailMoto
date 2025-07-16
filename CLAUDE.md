# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Core Commands
```bash
# Install dependencies
npm install

# Development server (runs on localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# TypeScript type checking
npx tsc --noEmit
```

## Architecture Overview

### Technology Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Routing**: React Router v6
- **State Management**: React Context API
- **UI Components**: Custom components with Headless UI integration
- **Icons**: Lucide React and Heroicons

### Project Structure
```
src/
├── components/
│   ├── common/          # Reusable UI components (Button, Toast, etc.)
│   ├── home/            # Homepage-specific components
│   ├── services/        # Service-related components
│   ├── gallery/         # Gallery components
│   ├── booking/         # Booking form components
│   └── examples/        # Animation examples and demos
├── pages/               # Page components and routing
├── context/             # React Context providers
├── data/                # Static data and configurations
├── types/               # TypeScript type definitions
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── content/             # Markdown content files
└── guides/              # Development guides
```

### Key Architecture Patterns

#### Component Design
- Components use TypeScript interfaces for strict typing
- Framer Motion integration for micro-interactions and animations
- Custom Button component with multiple variants (primary, secondary, outline, ghost)
- Toast notification system with context-based state management
- Lazy loading for page components to improve performance

#### Styling System
- Custom Tailwind configuration with DetailMoto brand colors
- Primary orange (#FF6B00) as brand color
- Dark mode support with class-based toggle
- Custom animations and keyframes for smooth transitions
- Responsive design with mobile-first approach

#### State Management
- React Context for global state (Toast notifications, theme)
- React Hook Form for form state management
- Local state with useState for component-specific state
- Zod schemas for form validation and type safety

#### Performance Optimizations
- Lazy loading of page components with React.Suspense
- Optimized images and assets
- Framer Motion performance optimizations
- Vite's built-in optimizations for fast development

### Business Domain
DetailMoto is a professional automotive detailing service specializing in:
- Motorcycle and car detailing
- Ceramic coating (Artdeshine products)
- Paint protection film (PPF)
- Paint correction
- Engine bay cleaning
- Helmet coating services

Located in Las Piñas City, Metro Manila, Philippines.

### Key Features
- **SEO Optimized**: Complete meta tags, structured data, and semantic HTML
- **Accessibility**: Focus management, skip links, and ARIA labels
- **Performance**: Lazy loading, optimized images, and efficient animations
- **Responsive**: Mobile-first design with breakpoint considerations
- **Dark Mode**: System preference detection with manual toggle
- **Booking System**: React Hook Form with Zod validation
- **Gallery**: Before/after image comparisons with hover effects

### Development Guidelines

#### Component Creation
- Use TypeScript interfaces for all component props
- Implement Framer Motion animations for interactive elements
- Follow the existing color scheme and styling patterns
- Use custom Button component for consistent UI
- Implement proper error boundaries and loading states

#### Styling Approach
- Use Tailwind CSS utility classes
- Leverage custom color variables defined in tailwind.config.js
- Use the safelist for dynamic classes in Framer Motion components
- Implement responsive design with xs, sm, md, lg, xl breakpoints

#### Form Handling
- Use React Hook Form with Zod schemas for validation
- Implement proper error handling with toast notifications
- Use the existing Toast context for user feedback

#### Animation Guidelines
- Use Framer Motion for component transitions and micro-interactions
- Follow the existing animation patterns in motionConfig.js
- Implement staggered animations for lists and grids
- Use proper animation variants for consistent behavior

### Important Notes
- The application uses structured data for SEO (Schema.org)
- All images should be optimized for web performance
- The booking system requires proper form validation
- Dark mode implementation uses CSS classes
- Mobile responsiveness is critical for the target audience
- The application is designed for the Philippine market