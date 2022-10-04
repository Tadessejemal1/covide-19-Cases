import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addCovidDataAsync } from '../../Redux/reducer';
import Navbar from '../NavBar';

function LayoutContainer({ children, navtitle }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addCovidDataAsync());
  }, []);
  const { loading, error } = useSelector((state) => state);
  if (loading) {
    return (
      <>
        <Navbar title={navtitle} />
      </>
    );
  }
  if (error) {
    return (
      <>
        <Navbar title={navtitle} />
        <h1 className="text-center">{error}</h1>
      </>
    );
  }

  return (
    <>
      <Navbar title={navtitle} />
      {children}
    </>
  );
}

LayoutContainer.defaultProps = {
  navtitle: '',
};
LayoutContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  navtitle: PropTypes.string,
};
export default LayoutContainer;
