import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const tempCountryData = [
  {
    name: "Nigeria",
    region: "Africa",
    population: 206139589,
    language: "English",
    currency: "NGN",
    flag: "https://flagcdn.com/w320/ng.png",
  },
]
function App() {

  const [countriesData] = useState(tempCountryData);

  // We'll use the first country object in the array
  const countryData = countriesData[0];

  return (
    <main className="container">
      <div className="countries">
        <article className="country">
          <img className="country__img" src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="country__data">
            <h3 className="country__name">{countryData.name}</h3>
            <h4 className="country__region">{countryData.region}</h4>
            <p className="country__row"><span>👫</span>{countryData.population.toLocaleString()} people</p>
            <p className="country__row"><span>🗣️</span>{countryData.language}</p>
            <p className="country__row"><span>💰</span>{countryData.currency}</p>
          </div>
        </article>
      </div>
      <button className="btn-country">Where am I?</button>
      <div className="images"></div>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);