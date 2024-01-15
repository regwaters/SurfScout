import React from 'react';
import Map from '../components/Map';
import Button from '../components/Button';
import '../styles/Search.css';

const Search = () => {
  return (
    <div className="search-container">
      <h1>NJ Surf Spots</h1>
      <Map />
      <Button to="/forecasts" label="Search Forecasts" className="button" />
    </div>
  );
};

export default Search;
