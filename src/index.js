import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function App() {

  return (
    <main className="container">
      <div className="countries">
        <article className="country">
          <img className="country__img" src="" alt="Country flag" />
          <div className="country__data">
            <h3 className="country__name">COUNTRY</h3>
            <h4 className="country__region">REGION</h4>
            <p className="country__row"><span>👫</span>POP people</p>
            <p className="country__row"><span>🗣️</span>LANG</p>
            <p className="country__row"><span>💰</span>CUR</p>
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
