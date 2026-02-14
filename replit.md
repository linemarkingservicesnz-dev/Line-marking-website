# replit.md

## Overview

This is a business website for **Line-Marking.co.nz** (Workspace Safety), a New Zealand-based line marking and industrial flooring services company operating in Christchurch and Canterbury. The site is a multi-page marketing website with service pages, regional landing pages, and a contact form that stores inquiries in a PostgreSQL database. It's built as a full-stack TypeScript application with a React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side router) — not React Router
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives, installed in `client/src/components/ui/`
- **Forms**: React Hook Form with Zod validation via `@hookform/resolvers`
- **Data Fetching**: TanStack React Query for server state management
- **Build Tool**: Vite with React plugin
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Page Structure
The site has multiple static content pages for SEO purposes:
- Home page with regional links (Rolleston, Rangiora, Ashburton, etc.)
- Service pages (Line Marking, Industrial, Non-Slip Flooring, Protective Coatings, Epoxy Flooring, Pedestrian Walkways, Line Removals, Sports Court)
- Regional landing pages using a shared `RegionalLanding` component with per-region content
- About and Contact pages
- The Contact page includes a `ContactForm` component that submits inquiries to the API

### Backend
- **Framework**: Express 5 on Node.js
- **Language**: TypeScript, run with `tsx` in development
- **API Design**: RESTful, all routes prefixed with `/api/`. Route definitions are shared between client and server via `shared/routes.ts`
- **Build**: esbuild bundles the server for production into `dist/index.cjs`
- **Dev Server**: Vite dev server is integrated as Express middleware for HMR during development
- **Static Serving**: In production, the built client is served from `dist/public/`

### Shared Layer (`shared/`)
- `schema.ts` — Drizzle ORM table definitions and Zod insert schemas (source of truth for DB schema and validation)
- `routes.ts` — API route contracts (paths, methods, input/output schemas) shared between frontend and backend

### Database
- **Database**: PostgreSQL (required, via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema Push**: `npm run db:push` uses `drizzle-kit push` to sync schema to database
- **Migrations**: Output to `./migrations` directory
- **Connection**: `node-postgres` Pool in `server/db.ts`
- **Current Tables**:
  - `inquiries` — stores contact form submissions (id, name, email, phone, message, createdAt)

### Storage Pattern
- `server/storage.ts` defines an `IStorage` interface and a `DatabaseStorage` implementation
- The storage instance is exported as a singleton for use in route handlers
- This pattern allows swapping storage implementations if needed

### Key Commands
- `npm run dev` — Start development server with Vite HMR
- `npm run build` — Build client (Vite) and server (esbuild) for production
- `npm start` — Run production build
- `npm run db:push` — Push Drizzle schema to PostgreSQL
- `npm run check` — TypeScript type checking

## External Dependencies

### Database
- **PostgreSQL** — Primary data store, connected via `DATABASE_URL` environment variable
- **connect-pg-simple** — Listed as dependency (for session storage if needed)

### Key NPM Packages
- **drizzle-orm** + **drizzle-kit** — ORM and migration tooling for PostgreSQL
- **zod** — Schema validation, shared between client and server
- **@tanstack/react-query** — Client-side server state management
- **react-hook-form** — Form state management
- **wouter** — Client-side routing
- **shadcn/ui** (Radix UI primitives) — Full suite of accessible UI components
- **lucide-react** — Icon library
- **tailwindcss** — Utility-first CSS framework
- **embla-carousel-react** — Carousel component
- **recharts** — Chart library (available via shadcn chart component)
- **vaul** — Drawer component
- **date-fns** — Date utility library

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal` — Runtime error overlay in development
- `@replit/vite-plugin-cartographer` — Dev tooling (dev only)
- `@replit/vite-plugin-dev-banner` — Dev banner (dev only)

### Fonts (External CDN)
- Google Fonts: Architects Daughter, DM Sans, Fira Code, Geist Mono (loaded in `client/index.html`)