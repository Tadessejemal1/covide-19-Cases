import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineRightCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';

const CountryLists = ({ id, country, totallConfirmed }) => (
  <Link className="countries" to={`details/${id}`} key={id}>
    <div className="country display">
      <h2 className="ea-country">{country.Country}</h2>
      <AiOutlineRightCircle />

    </div>
    {totallConfirmed}
  </Link>
);
CountryLists.propTypes = {
  id: PropTypes.string.isRequired,
  country: PropTypes.shape({
    Country: PropTypes.string,
  }).isRequired,
  totallConfirmed: PropTypes.string.isRequired,
};
export default CountryLists;
