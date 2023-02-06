<div align="center">
  <img width="200" src="./docs/logo-light.svg#gh-light-mode-only" />
  <img width="200" src="./docs/logo-dark.svg#gh-dark-mode-only" />

  <p align="center">
    Take control of your finances with MoneyTracker!
    <br />
    <a href="https://money-tracker-web.onrender.com/">View Demo</a>
    ·
    <a href="https://github.com/pt232/money-tracker/issues">Report Bug</a>
    ·
    <a href="https://github.com/pt232/money-tracker/issues">Request Feature</a>
  </p>
</div>

![MoneyTracker Dashboard Mockup](./docs/mockup-light.png#gh-light-mode-only)
![MoneyTracker Dashboard Mockup](./docs/mockup-dark.png#gh-dark-mode-only)

[MoneyTracker](https://money-tracker-web.onrender.com/) is a web-based application that allows users to track their income and expenses to gain insight into their financial situation. By tracking all financial transactions, users can better understand their spending habits and make informed decisions about their money.

:construction: Please note that MoneyTracker is a personal project and is still under development.

## Table of contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Technologies used](#technologies-used)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Development and Deployment](#development-and-deployment)
- [License](#license)

## Features

💸 Get a comprehensive overview of your finances<br>
🗂️ Add and categorize transactions with ease<br>
💳 Manage multiple accounts<br>
📊 View detailed statistics for in-depth analysis<br>
...and much more is yet to come!

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

### Installation

MoneyTracker is structured as a monorepo powered by [Turborepo](https://turbo.build/repo). For those who prefer not to use Docker, the setup process can be completed without it.

To get started, simply follow the provided instructions to set up a local development environment.

1. Clone the repository and install dependencies:

```sh
git clone https://github.com/pt232/money-tracker.git
cd money-tracker
npm install
```

2. Spin up all required infrastructure using Docker Compose:

```sh
# To be able to view logs
npm run dev:start

# Alternatively, if you prefer to run it in the background
npm run dev:start -- -d
```

## Technologies used

In addition to the technologies listed below, the design of the project was created using [Figma](https://www.figma.com/). It follows the principles of Brad Frost's Atomic Design framework. You can take a look at the design system of the MoneyTracker application [here](https://www.figma.com/file/qL8FNjTS0F2Jps9iPvaRSr/MoneyTracker?node-id=0%3A1&t=SwknO7cZihvmSKTM-1).

### Frontend

- [React](https://reactjs.org/) - for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - for adding static typing and improving maintainability
- [Vite](https://vitejs.dev/) - for fast and performant builds
- [Vitest](https://vitest.dev/) - for unit and integration tests
- [Cypress](https://www.cypress.io/) - for end-to-end testing

### Backend

- [Node.js](https://nodejs.org/) - as the server-side JavaScript runtime environment
- [Express.js](https://expressjs.com/) - for building the API
- [TypeScript](https://www.typescriptlang.org/) - for adding static typing and improving maintainability
- [SuperTest](https://github.com/ladjs/supertest) - for API testing in combination with Jest
- [MongoDB](https://www.mongodb.com/) - for the database
- [Swagger UI](https://swagger.io/tools/swagger-ui/) - for the API documentation

### Development and Deployment

- [Turborepo](https://turbo.build/repo) - for the monorepo management
- [Docker](https://www.docker.com/) - to serve the application in development and in production
- [GitHub Actions](https://github.com/features/actions) - for workflow automations such as the CI/CD pipeline

## License

MoneyTracker is licensed under the MIT license.
