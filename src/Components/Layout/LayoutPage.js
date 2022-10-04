import numberSeparator from 'number-separator';
import { useSelector } from 'react-redux';

const LandingImage = () => {
  const { global } = useSelector((state) => state);
  return (
    <div className="hero-wrapper">
      <div className="hero">
        <div className="content">
          <h1 className="text">
            Global data
          </h1>
          <h4 className="text">
            Total Confirmed :
            {numberSeparator(global.TotalConfirmed, ',')}
          </h4>
          <h4 className="text">
            Total Deaths :
            {numberSeparator(global.TotalDeaths, ',')}
          </h4>
        </div>
      </div>
    </div>
  );
};
export default LandingImage;
