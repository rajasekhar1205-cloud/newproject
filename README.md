# React Native Test Project

A React Native project with GitHub Actions CI pipeline for testing linting, type checking, unit tests, and builds.

## Features

- ⚛️ React Native with Expo
- 📝 TypeScript support
- 🧹 ESLint for code quality
- ✅ Jest for unit testing
- 🔄 GitHub Actions CI/CD pipeline
- 📊 Code coverage reporting

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
cd rn-test-project
npm install
```

### Running the Project

```bash
# Start the development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on web
npm run web
```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix linting issues automatically
- `npm run type-check` - Run TypeScript type checking
- `npm test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

## Project Structure

```
src/
├── components/       # Reusable React components
│   └── Welcome.tsx
├── utils/           # Utility functions
│   └── math.ts
└── __tests__/       # Test files
    ├── math.test.ts
    └── Welcome.test.tsx

.github/
└── workflows/       # GitHub Actions workflows
    └── ci.yml       # CI pipeline configuration

App.tsx             # Root component
app.json            # Expo configuration
```

## CI/CD Pipeline

The GitHub Actions workflow (`ci.yml`) includes:

### 1. **Lint and Type Check Job**
- Runs ESLint to check code quality
- Runs TypeScript type checking
- Triggers on push and pull requests

### 2. **Test Job**
- Runs Jest unit tests
- Generates code coverage reports
- Uploads coverage to Codecov

### 3. **Build Job**
- Verifies the project builds successfully
- Runs type checking

All jobs run on Ubuntu latest and cache npm dependencies for faster builds.

## Testing

The project includes example tests for:
- Utility functions (math operations)
- React components (Welcome component)

Run tests with:

```bash
npm test              # Run all tests
npm run test:watch   # Run in watch mode
npm run test:coverage # Generate coverage report
```

## Linting

```bash
npm run lint         # Check for linting issues
npm run lint:fix    # Auto-fix linting issues
```

## Type Checking

```bash
npm run type-check  # Run TypeScript type checker
```

## Setting Up GitHub Actions

1. Push this project to a GitHub repository
2. Create a branch or make a pull request
3. GitHub Actions will automatically run the CI pipeline
4. Check the "Actions" tab to see workflow results

## Configuration Files

- **`.eslintrc.json`** - ESLint configuration
- **`tsconfig.json`** - TypeScript configuration
- **`jest.config.js`** - Jest testing configuration
- **`babel.config.js`** - Babel configuration for JSX/ES6
- **`.github/workflows/ci.yml`** - GitHub Actions workflow

## License

MIT
