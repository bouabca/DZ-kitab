# EstinBib Digital Library System - QWEN.md

## Project Overview

**EstinBib** is a comprehensive digital library management system built with Next.js, designed specifically for the ESTIN educational institution. The system provides a modern, AI-enhanced digital library experience with features for book management, borrowing, user authentication with email domain restrictions, AI-powered chat functionality, and comprehensive administrative tools.

### Key Technologies

- **Framework**: Next.js 15.1.4 with TypeScript
- **Database**: PostgreSQL with Drizzle ORM and NeonDB
- **Authentication**: NextAuth.js with Google OAuth (restricted to @estin.dz domain)
- **AI Integration**: Google Gemini AI for semantic search and chat functionality
- **File Storage**: Cloudinary for PDF and image hosting
- **Styling**: Tailwind CSS with shadcn/ui components
- **Deployment**: Docker containerization with standalone Next.js output

### Architecture

The system follows a modern web application architecture:
- **Frontend**: Next.js with React components and client-side interactivity
- **API Layer**: Next.js API routes for data management and business logic
- **Business Logic**: Server-side processing with AI integration and validation
- **Database**: PostgreSQL with Drizzle ORM for data persistence
- **External Services**: Google Gemini AI, Cloudinary, Google OAuth

## Building and Running

### Development Environment

```bash
# Install dependencies
bun install

# Set up environment variables (see env.docker.exemple for reference)
cp env.docker.exemple .env.local

# Run the development server
bun dev

# The development server will start on http://localhost:3000
```

### Production Build

```bash
# Build the application
bun build

# Start the production server
bun start
```

### Database Setup

```bash
# Generate database migrations
npx drizzle-kit generate

# Apply migrations to the database
npx drizzle-kit migrate

# Seed the database (if seed script exists)
bun run seed
```

### Docker Deployment

The project includes Docker configurations for containerized deployment:

```bash
# Using the provided docker-compose file
docker-compose up -d

# Or for local development
docker-compose -f docker-compose.local.yml up -d
```

## Development Conventions

### File Structure
- **`app/`**: Next.js 13+ App Router pages and components
- **`components/`**: Reusable React components
- **`db/`**: Database schema and migration files
- **`drizzle/`**: Drizzle ORM configuration and generated files
- **`lib/`**: Utility functions and business logic
- **`public/`**: Static assets and files

### Authentication
- All users must have @estin.dz email addresses to access the system
- Google OAuth is the primary authentication method
- Librarian role has additional administrative privileges
- Middleware restricts access to certain routes based on role

### AI Features
- Google Gemini AI integration for semantic search and chat functionality
- PDF content analysis using AI embeddings
- AI-powered book recommendations

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `NEXTAUTH_SECRET`: Secret for NextAuth.js
- `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`: Google OAuth credentials
- `CLOUDINARY_*`: Cloudinary storage credentials
- `GeminiApiKey`: Google Gemini AI API key
- `NEXT_SERVER_ACTIONS_ENCRYPTION_KEY`: Server actions encryption key

## Project Features

### Core Functionality
- **User Authentication**: OAuth with @estin.dz domain restriction
- **Book Management**: Digital and physical book cataloging
- **Borrowing System**: Physical book borrowing with librarian approval
- **PDF Access**: Direct PDF access for digital materials
- **AI Chat**: Semantic search and AI-powered book recommendations
- **Admin Dashboard**: Comprehensive librarian management tools

### Database Schema
- Users with role-based access (STUDENT, LIBRARIAN)
- Books with metadata, categories, and availability status
- Borrowing records with due dates and extensions
- Book requests and SNDL (Scientific and Technical Documentation Library) demands
- Complaints and idea submissions
- PDF access logs for security and analytics

### Security Features
- Domain-restricted authentication (@estin.dz only)
- Secure PDF access logging
- Role-based access control
- Input validation and sanitization
- Secure session management with NextAuth.js

### AI Integration
- Vector similarity matching for book recommendations
- Semantic analysis for chat queries
- PDF content extraction and embedding generation
- Natural language processing for search enhancement

## Key Endpoints

- `/api/auth/[...nextauth]`: NextAuth.js authentication
- `/api/books`: Book management endpoints
- `/api/chat`: AI-powered chat functionality
- `/api/users`: User management
- `/api/borrows`: Borrowing system endpoints
- `/api/requests`: Book request system
- `/api/complaints`: Complaint management
- `/api/ideas`: Idea box functionality
- `/api/dashboard`: Administrative dashboard data

## Special Features

### Domain-Restricted Authentication
The system enforces that only users with @estin.dz email addresses can access the library system, implemented through NextAuth.js middleware.

### Physical Book Borrowing Workflow
Physical books require librarian approval through a structured workflow including request, approval, pickup, and return tracking.

### AI-Powered Chat System
The chat system uses Google Gemini AI to provide semantic search capabilities and connect users with relevant PDF resources based on their queries.

### PDF Access Control
Digital resources are accessible only to authenticated @estin.dz users, with access logging for security and analytics.

## Testing
(TODO: Add specific test commands and frameworks if test files are found in the project)

## Common Commands

```bash
# Development
bun dev

# Build & Start
bun build && bun start

# Linting
bun lint

# Database operations (if seed script exists)
bun run seed
```