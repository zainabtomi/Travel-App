zainab tomi
FEND Capstone - Travel App
This project is a travel application that helps users plan their trips. Users can enter a destination and departure date, and the app will provide weather forecasts and destination images to aid in their travel planning.

Project Overview
This is a Front-End Capstone project for Udacity, developed as part of the Front-End Web Development (FEND) Nanodegree program. The app uses APIs to fetch relevant data for users, including:

Geonames API for location data
Weatherbit API for weather forecasts
Pixabay API for images of the destination
APIs Used
Geonames: Provides geographic data, including latitude and longitude of locations.
Weatherbit: Supplies weather forecasts for the entered destination.
Pixabay: Retrieves images of the destination for visual reference.
Node.js Version
This project requires Node.js version 20.15.1. Ensure you have the correct version installed by checking with:

nginx
نسخ
تحرير
node -v
If you need to update or install Node.js, visit nodejs.org.

Project Dependencies
The app relies on the following npm packages:

Express: A fast, unopinionated, minimalist web framework for Node.js.
Webpack: A module bundler that compiles JavaScript, CSS, and other assets.
Babel: A JavaScript compiler that helps transpile ES6+ code into backward-compatible versions.
Jest: A testing framework for running unit tests on the application.
How to Run the App
Follow these steps to set up and run the app locally:

Install dependencies:
Run the following command to install the necessary npm packages:

nginx
نسخ
تحرير
npm install
Build the project:
Once dependencies are installed, compile the project files:

arduino
نسخ
تحرير
npm run build
Start the server:
After building the project, you can start the server by running:

sql
نسخ
تحرير
npm start
Access the app:
Open your browser and go to http://localhost:8000 to use the application.

Running Tests
The project includes tests that ensure the functionality works as expected. To run the tests, use the following command:

bash
نسخ
تحرير
npm test
Troubleshooting Tips
If you encounter issues with the app, try running the following commands to ensure your environment is correctly set up:

arduino
نسخ
تحرير
npm install
npm run build
npm start
If problems persist, ensure your Node.js version is up to date or check the console for any errors during the build or server startup.

Conclusion
This README provides all the essential information to help you set up and use the Travel App project effectively. The app allows users to plan trips with ease by providing relevant weather and image information based on their destination and travel dates.


