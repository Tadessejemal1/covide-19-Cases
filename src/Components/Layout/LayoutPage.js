import numberSeparator from 'number-separator';
import { useSelector } from 'react-redux';

const LayoutPage = () => {
  const { global } = useSelector((state) => state);
  return (
    <div className="hero-wrapper">
      <div className="hero">
        <div className="content">
          <h1 className="white">
            Global data
          </h1>
          <h4 className="white">
            Total Confirmed :
            {numberSeparator(global.TotalConfirmed, ',')}
          </h4>
          <h4 className="white">
            Total Deaths :
            {numberSeparator(global.TotalDeaths, ',')}
          </h4>
        </div>
      </div>
    </div>
  );
};
export default LayoutPage;
