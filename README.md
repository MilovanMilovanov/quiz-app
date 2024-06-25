Quiz App

A simple interactive Quiz App built using Vite, React, TypeScript, and Tailwind CSS.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Clone the repository](#clone-the-repository)
- [Start the App](#start-the-app)
- [Testing](#testing)
- [State Management](#state-management)
- [API](#api)

## Overview

The Quiz App is designed to provide a seamless and interactive experience for users to take quizzes.

## Technologies Used

- React Features: Utilized React Routing, React Suspense for loader indicator and ErrorBoundary for the error handling.
- TypeScript: Applied for static typing and better code quality.
- State Management: Managed using useReducer combined with the Context API for efficient state handling.
- Build Tool: Vite is used for fast and efficient builds.
- Unit Testing: Integrated Vitest with Vite for comprehensive unit testing.
- End-to-End Testing: Cypress is employed for thorough end-to-end testing.
- Styling: Tailwind CSS for modern, responsive styling.
- API: i used json-server for simplicity

## Start the App:

git clone https://github.com/MilovanMilovanov/quiz-app.git

install dependencies:

npm install

Start the JSON server:

npm run server

Start the development server:

npm run dev

## Testing

-- Unit Tests --

To run tests with Vitest:

npm run test

-- End-to-End Tests --

To run E2E tests with Cypress:

npm run cy:open

# or

npx cypress run

## State Management

The app uses useReducer combined with the Context API for state management

## API

I decided to use json-server for simplicity
