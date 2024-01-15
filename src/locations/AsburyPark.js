
import React from 'react';
import SurfForecastAB from '../forecasts/SurfForecastAB';
import '../styles/AsburyPark.css'; 

const AsburyPark = () => {
  return (
    <div className="asbury-park-container">
      <h2>Asbury Park</h2>
      <SurfForecastAB />
    </div>
  );
};

export default AsburyPark;



