import numberSeparator from 'number-separator';
import { useSelector } from 'react-redux';

const LandingImage = () => {
  const { global } = useSelector((state) => state);
  return (
    <div className="Total_world_data">
      <div className="data_world">
        <div className="data">
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
