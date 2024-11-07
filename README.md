### Welcome to Country Quest
## In this project, we are creating an interactive application where users can learn about different countries by fetching data from an API. This project provides the base URL and documentation on how to use the API endpoints to get country data.

# Project Overview
***When you start the application, you will see an example country displayed (Nigeria) with its flag, population, region, official language, and currency. Your task is to expand the project by displaying as many countries as possible, fetching data dynamically, and integrating it within the JSX structure.***

Getting Started
This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.


Copy code
# Base URL: https://restcountries.com/v3.1
**Here’s how to use the endpoints:**

API Endpoints
Get all countries:

Endpoint: /all
Description: Fetches data for all available countries.
Example: https://restcountries.com/v3.1/all
Get country by name:

Endpoint: /name/{name}
Description: Fetches data for a country by its name. Replace {name} with the country’s name.
Example: https://restcountries.com/v3.1/name/nigeria
Get countries by region:

Endpoint: /region/{region}
Description: Fetches data for countries within a specific region. Replace {region} with regions like Africa, Europe, etc.
Example: https://restcountries.com/v3.1/region/africa
How to Use the API Endpoints
To make requests to these endpoints, use JavaScript’s fetch() method or a library like Axios. Here’s a simple example using fetch():

javascript
Copy code
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
Project Challenge
The initial setup displays Nigeria’s flag along with basic information. Your challenge in this project is to:

Fetch data for as many countries as possible using the /all endpoint.
Dynamically display each country's information (flag, name, population, language, etc.) within the JSX.
Integrate the data seamlessly into the component structure.
Tips on Expanding the Project
Use Maps: Use the .map() method to loop through the fetched countries and display each as a unique component.
Error Handling: Implement error handling to catch and manage any issues while fetching data.
Styling: Customize the appearance by modifying the CSS or adding your own styles.
Happy coding, and welcome to the Country Quest journey