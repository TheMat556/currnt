# Contributing to currnt

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for us maintainers and smooth out the experience for all involved. The community looks forward to your contributions. 🎉

> And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:
>
> - Star the project
> - Tweet about it
> - Refer this project in your project's readme
> - Mention the project at local meetups and tell your friends/colleagues

<!-- omit in toc -->

## Table of Contents

- [Contributing to currnt](#contributing-to-currnt)
  - [Table of Contents](#table-of-contents)
  - [Code of Conduct](#code-of-conduct)
  - [I Want To Contribute](#i-want-to-contribute)
    - [Reporting Bugs](#reporting-bugs)
      - [How Do I Submit a Good Bug Report?](#how-do-i-submit-a-good-bug-report)
      - [Issue workflow](#issue-workflow)
    - [Suggesting Enhancements](#suggesting-enhancements)
      - [Before Submitting an Enhancement](#before-submitting-an-enhancement)
      - [How Do I Submit a Good Enhancement Suggestion?](#how-do-i-submit-a-good-enhancement-suggestion)
  - [Your First Code Contribution](#your-first-code-contribution)
    - [I want to contribute a new feature or integration](#i-want-to-contribute-a-new-feature-or-integration)
    - [I want to contribute a bugfix or enhancement](#i-want-to-contribute-a-bugfix-or-enhancement)
  - [Development Setup](#development-setup)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Environment Variables](#environment-variables)
  - [Available Scripts](#available-scripts)
  - [Project Structure](#project-structure)
  - [Code Style & Quality](#code-style--quality)
    - [Linting & Formatting](#linting--formatting)
    - [Type Checking](#type-checking)
    - [Dead Code Detection](#dead-code-detection)
    - [Secret Scanning](#secret-scanning)
    - [Commit Convention](#commit-convention)
  - [Testing](#testing)
    - [Unit Tests](#unit-tests)
    - [E2E Tests](#e2e-tests)
  - [Pull Request Process](#pull-request-process)
  - [Attribution](#attribution)

## Code of Conduct

This project and everyone participating in it is governed by the
[Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code.

## I Want To Contribute

> ### Legal Notice <!-- omit in toc -->
>
> When contributing to this project, you must agree that you have authored 100% of the content, that you have the necessary rights to the content and that the content you contribute may be provided under the project license.

### Reporting Bugs

<!-- omit in toc -->

#### How Do I Submit a Good Bug Report?

> You must never report security related issues, vulnerabilities or bugs including sensitive information to the issue tracker, or elsewhere in public. Instead sensitive bugs must be sent by email to [INSERT EMAIL].

We use GitHub issues to track bugs and errors. If you run into an issue with the project:

- Open an [Issue](https://github.com/themat556/currnt/issues/new).
- Explain the behavior you would expect and the actual behavior.
- Please provide as much context as possible and describe the _reproduction steps_ that someone else can follow to recreate the issue on their own. This usually includes your code. For good bug reports you should isolate the problem and create a reduced test case.
- Provide the information you collected in the previous section.

Once it's filed:

#### Issue workflow

- The project team will label the issue accordingly.
- A team member will try to reproduce the issue with your provided steps. If there are no reproduction steps or no obvious way to reproduce the issue, the team will ask you for those steps. Ideally you can provide a link to a running example.
- If the team is able to reproduce the issue, it will be marked and prioritized.

### Suggesting Enhancements

<!-- omit in toc -->

#### Before Submitting an Enhancement

- Read the documentation carefully and find out if the functionality is already covered, maybe by an individual configuration.
- Perform a [search](https://github.com/themat556/currnt/issues) to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.
- Find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature.

<!-- omit in toc -->

#### How Do I Submit a Good Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://github.com/themat556/currnt/issues).

- Use a **clear and descriptive title** for the issue to identify the suggestion.
- Provide a **step-by-step description of the suggested enhancement** in as many details as possible.
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
- **Explain why this enhancement would be useful** to most currnt users.

## Your First Code Contribution

### I want to contribute a new feature or integration

Contributions are always welcome. Here's how to get started:

- Before you dive in, open a GitHub issue. This helps us stay in sync and avoid duplicate work.
- Once the idea is discussed and approved, you can start building.

### I want to contribute a bugfix or enhancement

- Before you dive in, open a GitHub issue. This helps us stay in sync and avoid duplicate work.

## Development Setup

### Prerequisites

- [Bun](https://bun.sh/) v1.x (install via `curl -fsSL https://bun.sh/install | bash`)
- Node.js 20+ (Bun includes Node.js compatibility)

### Installation

1. Fork this repository.
2. Clone your fork.
3. Create a new branch from `develop` for your change:
   ```bash
   git checkout -b feat/my-feature
   ```
4. Install dependencies:
   ```bash
   bun install
   ```
5. Copy the environment template and fill in your credentials:
   ```bash
   cp .env.example .env.local
   ```

### Environment Variables

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Supabase anon/publishable key | Yes |
| `STRIPE_SECRET_KEY` | Stripe secret key | For payments |
| `RESEND_API_KEY` | Resend API key | For email |

## Available Scripts

| Command | Description |
|---|---|
| `bun run dev` | Start dev server on port 3000 |
| `bun run build` | Production build |
| `bun run start` | Start production server |
| `bun run test:run` | Run Vitest once |
| `bun run test:e2e` | Run Cypress E2E tests |
| `bun run check` | Biome lint + format + organize imports |
| `bun run typecheck` | TypeScript type checking |
| `bun run knip` | Dead code detection |
| `bun run secrets` | Secret scanning |

## Project Structure

```
app/          — Next.js App Router pages and API routes
components/   — React components (ui/ = shadcn/Base UI primitives)
lib/          — Utility functions and Supabase clients
tests/        — Test fixtures and helpers
cypress/      — E2E tests
proxy.ts      — Next.js middleware (session refresh)
```

## Code Style & Quality

### Linting & Formatting

This project uses [Biome](https://biomejs.dev/) for both linting and formatting — no ESLint or Prettier needed.

- Run `bun run check` to lint, format, and organize imports.
- Biome runs automatically on staged files via the pre-commit hook.

### Type Checking

TypeScript strict mode is enabled. Run type checking separately:

```bash
bun run typecheck
```

### Dead Code Detection

[knip](https://knip.dev/) finds unused files, exports, and dependencies:

```bash
bun run knip
```

### Secret Scanning

Secrets and credentials are scanned to prevent accidental commits:

```bash
bun run secrets
```

This also runs automatically in the pre-commit hook.

### Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) enforced by commitlint + Husky.

Allowed types: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`, `style:`

```
feat: add Stripe checkout integration
fix: resolve session refresh on page navigation
```

## Testing

### Unit Tests

Unit tests use [Vitest](https://vitest.dev/):

```bash
bun run test          # Watch mode
bun run test:run      # Run once
bun run test:coverage # With coverage report
```

Test files follow the `*.test.ts` or `*.spec.ts` naming convention.

### E2E Tests

End-to-end tests use [Cypress](https://www.cypress.io/):

```bash
bun run test:e2e
```

This starts the dev server, waits for port 3000, then runs Cypress.

## Pull Request Process

1. Run all checks locally before pushing:
   ```bash
   bun run check && bun run typecheck && bun run knip && bun run test:run
   ```
2. Ensure your commit messages follow [Conventional Commits](#commit-convention).
3. Create a pull request targeting the `develop` branch.
4. Fill out the provided Pull Request template to the best of your ability.
5. All CI checks must pass before merge.

## Attribution

This guide is based on the **contributing-gen**. [Make your own](https://github.com/bttger/contributing-gen)!
