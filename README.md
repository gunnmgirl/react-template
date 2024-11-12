# React Template

This React template is a starter project designed to streamline the development process. It includes setup for Chakra UI, React Query, Zustand, Axios, and React Router, along with theming, layout components, and routing for authenticated and dashboard pages.

## Features

- **Chakra UI**: For theming and responsive components.
- **React Query**: For data fetching and caching.
- **Zustand**: For global state management.
- **Axios**: For HTTP requests, with interceptors and custom instance.
- **React Router**: For routing, including private routes for authenticated users.
- **Husky and ESLint**: Pre-commit hooks and linting for code consistency.

## Directory Structure

Here's an overview of the folder structure:

```plaintext
src/
├── components/
│   └── ui/                       # Reusable UI components
├── hooks/                        # Custom hooks
├── http/                         # Axios instance and interceptors
├── layouts/                      # Layout components (e.g., AuthLayout, DashboardLayout)
├── pages/                        # Page components for each route
│   ├── auth/                     # Authentication pages (e.g., login)
│   └── dashboard/                # Dashboard pages
├── providers/                    # Context and providers (e.g., Chakra, React Query)
├── router/                       # Routing setup with private routes
├── store/                        # Zustand stores
├── theme/                        # Custom theme and color mode settings
└── types/                        # TypeScript types for global usage
```

# Setup

## Prerequisites

Node.js >= 14.x
npm or yarn

# Installation

1. Clone the repository:
   `git clone https://github.com/your-username/react-template.git
cd react-template`

2. Install dependencies:
   `npm install`

3. Create an .env file in the root directory and add your environment variables:
   `REACT_APP_API_BASE_URL=<your_api_base_url>`

4. Start the development server:
   `npm start`

# Usage

## Commands

```
npm start - Run the development server.
npm run build - Build the project for production.
npm run lint - Run ESLint to check for linting issues.
npm run format - Run Prettier to format the code.
npm test - Run the test suite.
```

## Routing

Public Routes: Login and other non-authenticated pages are located in pages/auth.
Protected Routes: Dashboard and other authenticated pages use PrivateRoute in the router folder to protect these routes.

## Theming

The theme is configured in theme/index.ts using Chakra UI's extendTheme. Light and dark mode toggle is enabled through ColorModeButton.

## State Management

_Global State:_ Managed using Zustand in the store folder.
_UI State:_ useUIStore for UI-related state (e.g., sidebar open/close).
_Auth State:_ useAuthStore for managing user authentication state.

## Axios Configuration

The http/axiosInstance.ts file configures Axios with a base URL, headers, and timeout settings.
interceptors.ts adds interceptors for adding authorization tokens and handling errors globally.

## Custom Hooks

Write your custom hooks here.

## Husky and Linting

Husky is configured to run Prettier and ESLint checks before commits. This ensures code quality and consistency.
