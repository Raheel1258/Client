# Client Application

React application built with TypeScript, Vite, and Tailwind CSS,

## Features

- **React Architecture**: Built with React 19 and TypeScript for type safety
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Form Handling**: Contact form with validation using React Hook Form and Zod
- **Data Fetching**: TanStack Query for efficient API communication
- **UI Components**: Custom UI components with Radix UI primitives
- **Error Handling**: Comprehensive error boundaries and error states

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Forms**: React Hook Form with Zod validation
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Project Structure

```
src/
├── Api/                    # API configuration and endpoints
│   └── api.ts
├── Components/             # Reusable UI components
│   └── ui/                # Base UI components (buttons, forms, etc.)
├── context/               # React context providers
│   └── QueryProvider.tsx
├── errors/                # Error handling components
│   ├── ErrorBoundary.tsx
│   ├── Errormessage.tsx
│   ├── Forbidden.tsx
│   ├── InternalError.tsx
│   ├── Maintenance.tsx
│   └── NotFound.tsx
├── hooks/                 # Custom React hooks
│   ├── contactform-hook.ts
│   └── newslettter-hook.ts
├── lib/                   # Utility functions and configurations
│   ├── query-client.ts
│   └── utils.ts
├── schema/                # Zod validation schemas
│   ├── contactschema.ts
│   └── newsletter-schema.ts
├── Store/                 # Zustand stores
│   └── useErrorStore.ts
├── types/                 # TypeScript type definitions
│   ├── contactform.ts
│   └── newsletter.ts
├── view/                  # Page components and layouts
│   ├── Component/         # Page-specific components
│   │   ├── contactform.tsx
│   │   ├── CostSection.tsx
│   │   ├── Customcomponent.tsx
│   │   ├── emailsubscription.tsx
│   │   ├── HeroSection.tsx
│   │   └── ProtectYou.tsx
│   ├── home.tsx           # Main home page
│   └── layout/            # Layout components
│       ├── footer.tsx
│       ├── header.tsx
│       └── main-layout.tsx
├── main.tsx               # Application entry point
└── router.tsx             # React Router configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Client
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Environment Setup**

   Create a `.env` file in the root directory:

   ```env
   VITE_BASE_URL=http://localhost:3000
   ```

4. **Start Development Server**

   ```bash
   pnpm dev
   ```

5. **Open in Browser**

   Navigate to `http://localhost:5173` to view the application.

## Available Scripts

```bash
# Development
pnpm dev              # Start development server with hot reload

# Production
pnpm build            # Build for production
pnpm preview          # Preview production build locally

# Code Quality
pnpm lint             # Run ESLint
pnpm format           # Format code with Prettier

# Git Hooks
pnpm prepare          # Setup Husky git hooks
```

## Key Features

### Contact Form

- **Form Validation**: Client-side validation using Zod schemas
- **Error Handling**: Comprehensive error states and user feedback
- **Responsive Design**: Mobile-optimized form layout
- **Loading States**: Visual feedback during form submission

## Styling

### Tailwind Configuration

- **Custom Colors**: Brand-specific color palette
- **Typography**: Custom font families (Sora, Roboto)
- **Responsive Design**: Mobile-first approach
- **Dark Theme**: Professional dark color scheme

### Custom Components

- **Gradient Buttons**: Eye-catching call-to-action buttons
- **Cards**: Consistent card design with backdrop blur
- **Forms**: Styled form inputs with validation states
- **Loading States**: Smooth loading animations

### TanStack Query

- **Data Fetching**: Efficient API communication
- **Caching**: Automatic request caching
- **Error Handling**: Built-in error management
- **Loading States**: Automatic loading state management

## Form Handling

### React Hook Form

- **Validation**: Integration with Zod schemas
- **Error Handling**: Field-level error messages
- **Type Safety**: Full TypeScript integration

### Zod Validation

- **Schema Validation**: Runtime type checking
- **Error Messages**: Customizable validation messages
- **Type Inference**: Automatic TypeScript type generation

## Error Handling

### Error Boundaries

- **Component-Level**: Catch errors in component tree
- **Graceful Degradation**: Fallback UI for errors
- **User Experience**: Clear error messages

### API Error Handling

- **Axios Integration**: HTTP error handling
- **User Feedback**: Toast notifications and error states
- **Retry Logic**: Automatic retry for failed requests

## Deployment

### Build Process

```bash
pnpm build
```

### Output

- **Static Files**: Generated in `dist/` directory
- **Optimized Assets**: Minified and compressed
- **Environment Variables**: Injected at build time

### Environment Variables

- `VITE_BASE_URL`: Backend API URL
