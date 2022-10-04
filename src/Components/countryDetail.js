import numberSeparator from 'number-separator';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CountryData from './Countries';
import LayoutContainer from './Layout/LayoutContainer';

const Details = () => {
  const { id } = useParams();
  const { countries } = useSelector((state) => state);
  const country = CountryData(id, countries);
  return (
    <LayoutContainer navtitle={`${country ? country.Country : ''} covid statics`}>
      {
      country
        ? (
          <div className="container">
            <div>
              <section className="info-covid display">
                <div className="flag">
                  <img className="img-world" src={country.flag} alt="world-covid" />
                </div>
              </section>
            </div>
            <div className="country-info">
              <p>STATS BY COUNTRY</p>
            </div>
            <ul>
              <li>
                <span className="name">Date:</span>
                <div className="info">{new Date(country.Date).toUTCString().slice(0, 16)}</div>
              </li>
              <li>
                <span className="name">Total Confirmed:</span>
                <div className="info">{numberSeparator(country.TotalConfirmed, ',')}</div>
              </li>
              <li>
                <span className="name">New Confirmed:</span>
                <div className="info">{numberSeparator(country.NewConfirmed, ',')}</div>
              </li>
              <li>
                <span className="name">New Recovered:</span>
                <div className="info">{numberSeparator(country.NewRecovered, ',')}</div>
              </li>
              <li>
                <span className="name">Total Deaths:</span>
                <div className="info">{numberSeparator(country.TotalDeaths, ',')}</div>
              </li>
              <li>
                <span className="name">New Deaths:</span>
                <div className="info">{numberSeparator(country.NewDeaths, ',')}</div>
              </li>
            </ul>

          </div>
        )
        : <h4 className="unless">sorry, No Country data found  </h4>
    }
    </LayoutContainer>
  );
};

export default Details;
