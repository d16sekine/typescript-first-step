# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a TypeScript learning repository (typescript-first-step) that demonstrates the basic workflow from TypeScript environment setup to compilation. It's designed for educational purposes to learn TypeScript fundamentals.

## Commands

### Development
- **Install dependencies**: `yarn install`
- **Type check without emitting files**: `yarn tsc --noEmit`
- **Run TypeScript files directly**: `yarn tsx src/increment.ts`
- **Compile TypeScript to JavaScript**: `yarn tsc`
- **Run compiled JavaScript**: `node dist/increment.js`

### Complete workflow (compile and run)
```sh
yarn install
yarn tsc
node dist/increment.js
```

## Code Architecture

### Project Structure
- **src/**: TypeScript source files
- **dist/**: Compiled JavaScript output (generated after running `yarn tsc`)
- **tsconfig.json**: TypeScript configuration
  - Target: ES2016
  - Strict mode enabled
  - Source directory: `./src`
  - Output directory: `./dist`

### Key Configuration
- Uses **yarn** as package manager
- TypeScript compiler configured for ES2016 target
- **tsx** is available for running TypeScript files directly without compilation
- No testing framework is currently configured

## Important Notes
- This is a learning/tutorial repository - keep examples simple and educational
- The main example file is `src/increment.ts` which demonstrates basic TypeScript syntax
- When adding new TypeScript files, place them in the `src/` directory
- Compiled JavaScript will be output to `dist/` directory