This project is a travel application that helps users plan their trips. Users can enter a destination and departure date, and the app will provide weather forecasts and destination images.

APIs Used:

Geonames: Retrieves geographical coordinates (latitude & longitude) based on the user's destination.

Weatherbit: Fetches weather forecasts for the given location.

Pixabay: Provides images related to the entered destination.

Node.js Version

This project requires Node.js version 20.15.1

Project Dependencies

The app relies on the following npm packages:

Express: For handling server-side operations.

Webpack: For bundling and optimizing JavaScript files.

Babel: For transpiling modern JavaScript to ensure compatibility.

Jest: For running unit tests.

How to Run the App:

Clone the repository:

git clone <repository-url>
cd <project-folder>

Install dependencies:

npm install

Build the project:

npm run build

Start the server:

npm start

Access the app at http://localhost:8000

To Run Tests:

Run the tests using:

npm test

Additional Notes:

Ensure that you have valid API keys for Geonames, Weatherbit, and Pixabay.

Update .env file with your API keys if needed.

The application provides an interactive UI for entering travel details and retrieving relevant information.

A well-structured README enhances maintainability and helps collaborators understand the project quickly
