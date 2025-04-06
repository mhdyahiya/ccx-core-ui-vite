# CCX Core UI

A modern React module federation library that exposes reusable UI components and utilities.

## Overview

CCX Core UI is built with React 19, TypeScript, and Vite. It serves as a UI component library that can be consumed by other applications through Module Federation.

## Technologies

- React 19.1.0
- TypeScript 5.8.3
- Vite 6.2.5
- SCSS for styling
- Module Federation for component sharing
- Vitest for testing
- Redux Toolkit for state management

## Prerequisites

- Node.js >=21.6.1

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/mhdyahiya/ccx-core-ui-vite.git
cd ccx-core-ui-vite

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run start:dev

# Build for development
npm run build:dev
```

### Production

```bash
# Build for production
npm run build
```

### Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:cover

# Run tests in development mode
npm run test:dev
```

### Linting and Formatting

```bash
# Lint code
npm run lint

# Format code
npm run format
```

### Clean Build

```bash
# Clean and reinstall dependencies
npm run clean-build
```

## Module Federation

This project exposes the following components and utilities via Module Federation:

- `./MyButton` - Button component
- `./formatDate` - Date formatting utility

### Consuming Components

In the consuming application, you'll need to configure Module Federation to consume these components:

```javascript
// vite.config.js of consuming app
import { federation } from '@module-federation/vite';

export default {
  plugins: [
    federation({
      name: 'consumer',
      remotes: {
        ccxcoreui: 'http://localhost:3000/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^19.1.0' },
        'react-dom': { singleton: true, requiredVersion: '^19.1.0' }
      }
    })
  ]
};
```

Then, you can import and use components in your application:

```jsx
// Using a component
import MyButton from 'ccxcoreui/MyButton';

function App() {
  return (
    <div>
      <MyButton label="Click me" onClick={() => alert('Clicked!')} />
    </div>
  );
}
```

```jsx
// Using a utility
import formatDate from 'ccxcoreui/formatDate';

function DateDisplay() {
  return <div>Today is {formatDate(new Date())}</div>;
}
```

## Project Structure

```
├── configs/               # Vite configurations
│   ├── vite.config.ts     # Base config
│   ├── vite.dev.config.ts # Development config
│   ├── vite.prod.config.ts# Production config
├── src/                   # Source code
│   ├── components/        # React components
│   │   └── MyButton/      # Button component
│   ├── utils/             # Utility functions
│   │   └── formatDate.ts  # Date formatting utility
│   ├── store/             # Redux store
│   │   └── slices/        # Redux slices
│   ├── App.tsx            # Main App component
│   └── index.tsx          # Entry point
├── .github/               # GitHub configurations
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── vitest.config.ts       # Vitest configuration
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
# Server port
VITE_APP_SERVER_PORT=3000

# Public path for production builds
VITE_APP_PUBLIC_PATH=/static
```

## Contributing

Please follow the project's coding standards when contributing:
- Use Prettier for code formatting
- Follow ESLint rules
- Write tests for new features
- Use SCSS for styling (avoid inline styles)

## License

ISC