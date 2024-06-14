# Portfolio Project

## Overview

This project is a portfolio website built using React, Express, Material-UI (MUI), and JavaScript. It showcases a collection of projects across different categories including Web Design, App Design, and Graphic Design. Each project is displayed with detailed information such as title, description, category, and optional image URL.

## Features

- **Responsive Design**: The website is fully responsive, ensuring a seamless experience across various devices and screen sizes.
- **Project Categories**: Projects are categorized into Web Design, App Design, and Graphic Design, each with its own section highlighting relevant works.
- **Create New Projects**: Users can create new projects by filling out a form with details such as title, description, category, and image URL. Submitted projects are stored and displayed dynamically.
- **Project Details Page**: Clicking on a project card navigates to a detailed view, displaying additional information about the project including title, image, description, and a link to view all projects.
- **Delete Projects**: Administrators can delete projects directly from the portfolio, updating the display dynamically without requiring a page refresh.

## Technologies Used

- **React**: Front-end framework for building user interfaces and managing state.
- **Express**: Back-end framework for handling HTTP requests and managing server-side logic.
- **Material-UI (MUI)**: React component library for designing consistent and attractive UI elements.
- **JavaScript (ES6+)**: Programming language used for both front-end and back-end development.
- **JSON Server**: Lightweight mock API server to simulate backend data storage during development.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Repository**: `git clone <repository-url>`
2. **Install Dependencies**: `npm install`
3. **Start the Frontend**: `npm start`
4. **Start the Mock API Server**: `npm run server`
5. **Start JSON Server**:json-server --watch data/db.json --port 8000

Ensure the backend server (`JSON Server`) is running to handle project data. You can access the website at `http://localhost:3000`.

## Project Structure

- `src/components`: Contains React components used to build different sections of the website.
- `src/useFetch.js`: Custom hook for fetching project data from the mock API server.
- `server/db.json`: JSON file acting as a mock database to store project information.

## Contributors

- **Hassan Sherafatmand**: CIS255 Student at Olympic College

## License

This project is licensed under the MIT License - see the LICENSE file for details.
