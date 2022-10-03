import React, { useState } from 'react';
import { AiOutlineRightCircle } from 'react-icons/ai';
import LayoutPage from './Layout/LayoutPage';

const Home = () => {
  const [index, setState] = useState('');
  return (
    <section>
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
          <h2 className="ea-country">country</h2>
          <AiOutlineRightCircle />
          totallConfirmed
        </div>
      </div>
    </section>
  );
};

export default Home;
