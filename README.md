# Taco Recipe Web App

This Node.js application utilizes Express.js to create a simple web server for displaying taco recipes. It serves static files from the "public" directory and uses body-parser middleware to handle incoming requests with URL-encoded payloads.

## Prerequisites
- Node.js installed on your machine.

## Installation
1. Clone or download this repository.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running:
    ```bash
    npm install
    ```
4. Start the server:
    ```bash
    npm start
    ```

## Overview
- **Express**: The web framework used to handle routing and other server functionalities.
- **Body-parser**: Middleware used to parse incoming request bodies.
- **Static file serving**: Static files like CSS, images, and JavaScript are served from the "public" directory.
- **Recipe Data**: Recipe information is stored as a JSON-formatted string and parsed into an array of objects representing each recipe.

## Usage
1. Visit `http://localhost:3000` in your web browser.
2. Select a taco type from the available options (chicken, beef, or fish).
3. The server responds by rendering the appropriate taco recipe on the page.

## File Structure
- **public/**: Directory containing static assets like CSS and client-side JavaScript.
- **views/index.ejs**: EJS template file for rendering the recipe page.
- **app.js**: Main application file defining routes and server setup.

## Routes
- **GET "/"**: Renders the index page with the selected recipe data.
- **POST "/recipe"**: Handles form submissions and redirects to the root URL with the selected recipe.

## Disclaimer
This application is for educational purposes only.
