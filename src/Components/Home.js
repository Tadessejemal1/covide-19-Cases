import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import numberSeparator from 'number-separator';
import LayoutPage from './Layout/LayoutPage';
import CountryLists from './countryLists';
import LayoutContainer from './Layout/LayoutContainer';

const Home = () => {
  const [index, setState] = useState('');
  const { countries } = useSelector((state) => state);
  if (countries === undefined) { return <h1>...Loading</h1>; }
  return (
    <LayoutContainer>
      <LayoutPage />
      <div className="container">
        <div className="search">
          <h4 className="country-search">Search: </h4>
          <input
            value={index}
            type="text"
            onChange={(e) => setState(e.target.value)}
            placeholder="Search Country"
            className="search-input"
          />
        </div>
        <div className="countries display">
          {countries
            && countries.filter((country) => country.Country.match(index)).map((country) => (
              <CountryLists
                key={country.ID}
                id={country.ID}
                country={country}
                totallConfirmed={numberSeparator(country.TotalConfirmed, ',')}
              />
            ))}
        </div>
      </div>
    </LayoutContainer>
  );
};

export default Home;
