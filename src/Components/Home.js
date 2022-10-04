import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import numberSeparator from 'number-separator';
import LayoutPage from './Layout/LayoutPage';
import CountryLists from './countryLists';
import LayoutContainer from './Layout/LayoutContainer';

const Home = () => {
  const [index, setState] = useState('');
  const { countries } = useSelector((state) => state);
  return (
    <LayoutContainer>
      <LayoutPage />
      <div className="container">
        <div className="search">
          <h4 className="country-search">Search By Country: </h4>
          <input
            value={index}
            type="text"
            onChange={(e) => setState(e.target.value)}
            placeholder="Type to search by country"
            className="search-input"
          />
        </div>
        <div className="countries display">
          {
            countries.filter((country) => country.Country.match(index)).map((country) => (
              <CountryLists
                key={country.ID}
                id={country.ID}
                country={country}
                totallConfirmed={numberSeparator(country.TotalConfirmed, ',')}
              />
            ))
          }
        </div>
      </div>
    </LayoutContainer>
  );
};

export default Home;
