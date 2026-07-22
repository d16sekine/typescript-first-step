# typescript-first-step

English | [日本語](./README.md)

[![CI](https://github.com/d16sekine/typescript-first-step/actions/workflows/ci.yml/badge.svg)](https://github.com/d16sekine/typescript-first-step/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6.svg)](https://www.typescriptlang.org/)

A hands-on TypeScript learning repository that takes you step by step from environment setup to modern type-level features.
It consists of 9 numbered lessons and self-checking exercises with solutions.

> Code comments and console output are written in Japanese, but the code itself is universal — the lesson and exercise structure works in any language.

## Table of Contents

- [Quick Start](#quick-start)
- [Curriculum](#curriculum)
- [Exercises](#exercises)
- [Available Scripts](#available-scripts)
- [Set Up the Environment Yourself](#set-up-the-environment-yourself)
- [Project Structure](#project-structure)
- [Learning Roadmap](#learning-roadmap)
- [Contributing](#contributing)
- [License](#license)

## Quick Start

Prerequisites: [Node.js](https://nodejs.org/) (v20+) and [yarn](https://classic.yarnpkg.com/)

```sh
# Install dependencies
yarn install

# Run the first lesson
yarn dev
# => 100

# Run the tests
yarn test
```

## Curriculum

Each lesson is a standalone file you can run directly with `yarn tsx src/<file>`.

| # | Lesson | Topics | Run |
|---|--------|--------|-----|
| 01 | [First Step](./src/01-first-step.ts) | Functions and type annotations | `yarn dev` |
| 02 | [Basic Types](./src/02-basic-types.ts) | Primitives, arrays, unions, type aliases | `yarn tsx src/02-basic-types.ts` |
| 03 | [Function Types](./src/03-functions.ts) | Optional/default params, callbacks | `yarn tsx src/03-functions.ts` |
| 04 | [Classes & Interfaces](./src/04-classes.ts) | Inheritance, abstract classes, getters/setters | `yarn tsx src/04-classes.ts` |
| 05 | [Narrowing](./src/05-narrowing.ts) | typeof, discriminated unions, type guards | `yarn tsx src/05-narrowing.ts` |
| 06 | [Advanced Generics](./src/06-generics.ts) | Constraints, keyof, multiple type params | `yarn tsx src/06-generics.ts` |
| 07 | [Utility Types](./src/07-utility-types.ts) | Partial, Pick, Omit, Record | `yarn tsx src/07-utility-types.ts` |
| 08 | [Async](./src/08-async.ts) | async/await, Promise.all, error handling | `yarn tsx src/08-async.ts` |
| 09 | [Modern Type Safety](./src/09-type-safety.ts) | unknown, as const, satisfies | `yarn tsx src/09-type-safety.ts` |

## Exercises

The `exercises/` directory contains problems matching the lessons.

1. Open an exercise file and replace each `throw new Error("TODO...")` with your implementation
2. Run the file to check your answers (each problem prints ✅ or ❌)

```sh
yarn tsx exercises/02-basic-types.ts
```

3. Once everything is ✅, compare with the reference solution in `exercises/solutions/`

```sh
yarn tsx exercises/solutions/02-basic-types.ts
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Run the first lesson (01-first-step.ts) |
| `yarn tsx <file>` | Run any TypeScript file directly |
| `yarn test` | Run tests (Vitest) |
| `yarn test:watch` | Run tests in watch mode |
| `yarn type-check` | Type-check without emitting files |
| `yarn check:tests` | Type-check the tests |
| `yarn check:exercises` | Type-check the exercises |
| `yarn check:all` | Type-check src, tests and exercises |
| `yarn lint` | Static analysis with ESLint |
| `yarn format` | Format code with Prettier |
| `yarn format:check` | Check formatting without writing files |
| `yarn build` | Compile TypeScript to JavaScript |
| `yarn start` | Run the compiled JavaScript |
| `yarn clean` | Remove the dist directory |

## Set Up the Environment Yourself

These are the steps to recreate this environment from scratch.

### 1. Create package.json

```sh
yarn init -y
```

### 2. Install typescript and tsx

```sh
yarn add -D typescript tsx
```

### 3. Create tsconfig.json

Generate a `tsconfig.json` with the compiler:

```sh
yarn tsc --init
```

Then replace it with the following (customize as needed):

```json
{
  "compilerOptions": {
    /* Language and environment */
    "target": "ES2022",                     /* Fully supported by Node.js 20 */
    "module": "commonjs",                   /* Node.js default module system */

    /* Input / output */
    "rootDir": "./src",                     /* Root directory of TypeScript sources */
    "outDir": "./dist",                     /* Output directory for compiled JavaScript */
    "sourceMap": true,                      /* Generate source maps for debugging */
    "removeComments": true,                 /* Strip comments from the compiled output */

    /* Type checking */
    "strict": true,                         /* Enable strict type checking */
    "noUnusedLocals": true,                 /* Report unused local variables */
    "noUnusedParameters": true,             /* Report unused function parameters */
    "noImplicitReturns": true,              /* Require a return in every code path */

    /* Module resolution */
    "esModuleInterop": true,                /* Interop with CommonJS modules */
    "skipLibCheck": true,                   /* Skip type checking of declaration files */
    "forceConsistentCasingInFileNames": true, /* Enforce consistent file name casing */
    "resolveJsonModule": true               /* Allow importing JSON files */
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

References:

- Target per Node.js version: [Recommended Node TSConfig settings](https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping)
- Official docs: [tsconfig reference](https://www.typescriptlang.org/tsconfig/)

### 4. Development workflow

```sh
# Run a TS file directly without compiling (tsx)
yarn tsx src/01-first-step.ts
# => 100

# Type check
yarn type-check

# Compile to JavaScript (emitted to the outDir in tsconfig.json)
yarn build

# Run the compiled code
node dist/01-first-step.js
# => 100
```

## Project Structure

```
typescript-first-step/
├── src/                  # Lessons (numbered 01–09)
├── exercises/            # Exercises (implement the TODOs, then self-check)
│   └── solutions/        # Reference solutions
├── tests/                # Tests for each lesson (Vitest)
├── dist/                 # Compiled JavaScript (generated by yarn build)
├── tsconfig.json         # TypeScript configuration
├── vitest.config.ts      # Test configuration
├── eslint.config.mjs     # ESLint configuration
└── .prettierrc.json      # Prettier configuration
```

## Learning Roadmap

1. **01–04**: Cover the TypeScript basics (annotations, functions, classes)
2. **05–07**: Learn the type features you will use daily at work (narrowing, generics, utility types)
3. **08–09**: Reach async code and modern type-safety features
4. Solidify what you learned with the exercises (available for lessons 02, 03, 05, 07 and 08)

### Next steps

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) - The official guide
- [TypeScript Playground](https://www.typescriptlang.org/play) - Experiment with types in the browser
- [サバイバルTypeScript](https://typescriptbook.jp/) - Comprehensive practical guide (Japanese)

## Contributing

Issues and pull requests are welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

[MIT](./LICENSE)
