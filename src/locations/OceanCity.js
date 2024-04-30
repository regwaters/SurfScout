import React from 'react';
import SurfForecastOC from '../forecasts/SurfForecastOC';
import '../styles/OceanCity.css';

const OceanCity = () => {
  return (
    <div className='oc-container'>
      <h2>Ocean City</h2>
      <SurfForecastOC />
    </div>
  );
};

export default OceanCity;
