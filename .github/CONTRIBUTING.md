# Contributing to CCX Core UI

Thank you for your interest in contributing to CCX Core UI! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and considerate of others when contributing to this project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/ccx-core-ui-vite.git`
3. Create a branch: `git checkout -b feature/your-feature-name`

## Development Process

1. Install dependencies: `npm install`
2. Start development server: `npm run start:dev`
3. Make your changes
4. Run tests: `npm test`
5. Run linting: `npm run lint`
6. Fix any issues

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Update any relevant documentation
3. Ensure tests pass and code is linted
4. Submit your pull request

## Style Guide

- Follow the project's ESLint and Prettier configurations
- Write meaningful commit messages
- Include tests for new features
- Use SCSS for styling (avoid inline styles)
- Keep components modular and reusable

## Creating Components

When creating new components for the library:

1. Create a new directory in `src/components/`
2. Include any necessary SCSS files
3. Export the component in the module federation configuration
4. Add tests for your component
5. Document your component's props and usage

## Git Workflow

We use GitFlow as our branching strategy:

- `main`: Production-ready code
- `develop`: Latest development changes
- `feature/*`: New features
- `bugfix/*`: Bug fixes
- `release/*`: Release preparation

## Testing

- Write unit tests for components and utilities
- Ensure tests are meaningful and cover edge cases
- Run tests before submitting a pull request

## License

By contributing, you agree that your contributions will be licensed under the project's ISC license.