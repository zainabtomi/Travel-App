import "./styles/header.scss";
import "./styles/form.scss";
import "./styles/footer.scss";

// importing necessary functions from the app.js File
import {
  getFromGeonamesAPI,
  getFromWeatherbit,
  getFromPixabayAPI,
  tripInfo,
} from "./js/app.js";

document.addEventListener("DOMContentLoaded", () => {
  const formElement = document.getElementById("myform");

  formElement.addEventListener("submit", handleFormSubmit);

  async function handleFormSubmit(event) {
    event.preventDefault();

    const destinationInput = document.getElementById("location").value;
    const tripStartDate = document.getElementById("start-date").value;
    const tripEndDate = document.getElementById("return-date").value;

    try {
      // Fetch coordinates from GeoNames API
      const locationCoordinates = await getFromGeonamesAPI(destinationInput);

      // from Weatherbit API
      const locationWeather = await getFromWeatherbit(
        locationCoordinates.lat,
        locationCoordinates.lng
      );

      //  from Pixabay API
      const locationImage = await getFromPixabayAPI(destinationInput);

      // process and display Trip information
      tripInfo(
        locationCoordinates,
        locationWeather,
        locationImage,
        tripStartDate,
        tripEndDate
      );
    } catch (error) {
      console.error("An error occurred while fetching trip data:", error);
      alert(
        "Failed to retrieve trip details. Please check your input and try again later."
      );
    }
  }
});
