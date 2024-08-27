# EmployeesFront

This project is an Angular-based front-end application for managing employee data. It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.1.

## Features

- Employee search functionality
- Display of employee details
- Responsive design using Bootstrap

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (latest LTS version)
- npm (comes with Node.js)
- Angular CLI (`npm install -g @angular/cli`)

## Installation

1. Clone the repository:
   ```
   git clone [repository-url]
   ```
2. Navigate to the project directory:
   ```
   cd employees-front
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Project Structure

- `src/app/pages/employee-search`: Contains the employee search component
- `src/app/services`: Contains the employee service for API calls
- `src/app/models`: Contains the Employee interface
- `src/app/navbar`: Contains the navigation bar component

## API Integration

The application integrates with a backend API. The base URL for the API can be configured in the `src/app/services/employee.service.ts` file.

## Styling

This project uses Bootstrap for styling. The Bootstrap CSS and JS files are included via the `angular.json` configuration.
