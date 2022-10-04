// eslint-disable-next-line
import { useEffect, useState } from 'react';

const CountryData = (id, countries) => {
  const [country, setCountry] = useState(null);
  useEffect(() => {
    const country = countries.find((c) => c.ID === id);
    if (country) { setCountry({ ...country, flag: `https://countryflagsapi.com/png/${country.CountryCode}` }); }
  }, [id, countries]);
  return country;
};

export default CountryData;
