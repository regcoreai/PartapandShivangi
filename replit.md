# Shivangi & Partap Wedding Website

## Overview

This is a wedding celebration website for Shivangi and Partap, built as a full-stack TypeScript application. The site showcases wedding events, photo galleries, and celebration details for guests attending the wedding in Punjab, India. It features an elegant, responsive design with animations and a warm wedding-themed color palette (burgundy, gold, cream).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom wedding theme colors (burgundy, gold, cream palette)
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Animations**: Framer Motion for scroll-based and entrance animations
- **Special Effects**: Canvas Confetti for celebratory effects

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (compiled with tsx for development, esbuild for production)
- **API Structure**: RESTful endpoints prefixed with `/api`
- **Static Serving**: Express static middleware serves built frontend assets

### Build System
- **Frontend Build**: Vite with React plugin
- **Backend Build**: esbuild for production bundling
- **Development**: Concurrent Vite dev server with Express backend
- **TypeScript**: Strict mode with path aliases (@/, @shared/, @assets/)

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Current Storage**: In-memory storage implementation (MemStorage class)
- **Database Ready**: Configured for PostgreSQL via Neon serverless driver

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # UI and feature components
│   │   ├── pages/        # Route pages
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage interface
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between frontend/backend
│   └── schema.ts     # Drizzle database schema
└── attached_assets/  # Wedding photos and images
```

## External Dependencies

### Database
- **PostgreSQL**: Primary database (via Neon serverless driver `@neondatabase/serverless`)
- **Drizzle Kit**: Database migrations and schema management
- **Environment**: Requires `DATABASE_URL` environment variable

### UI/Component Libraries
- **Radix UI**: Full suite of accessible primitives (dialog, dropdown, accordion, etc.)
- **shadcn/ui**: Pre-built component library with Tailwind styling
- **Lucide React**: Icon library

### Frontend Libraries
- **Framer Motion**: Animation library for scroll and entrance effects
- **Canvas Confetti**: Celebratory confetti effects on page load
- **React Day Picker**: Calendar component
- **Embla Carousel**: Carousel/slider component
- **cmdk**: Command palette component

### Fonts
- **Google Fonts**: Cormorant Garamond (headings), Montserrat (body text)

### Development Tools
- **Vite Plugins**: Runtime error overlay, cartographer (Replit-specific), dev banner
- **Custom Plugin**: `vite-plugin-meta-images.ts` for OpenGraph image handling