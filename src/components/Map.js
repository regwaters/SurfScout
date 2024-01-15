

import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/Map.css';
import asburyParkImage from '../assets/button.png';
import oceanCityImage from '../assets/button.png';
import shipBottomImage from '../assets/button.png';
import longBranchImage from '../assets/button.png';
import pointPleasantImage from '../assets/button.png';
import belmarImage from '../assets/button.png';
import sandyHookImage from '../assets/button.png';

const Map = () => {
  useEffect(() => {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    if (mapContainer._leaflet_id) return;

    const bounds = [
      [39.6, -75.6], // Southwest coordinates of New Jersey
      [41.4, -73.8], // Northeast coordinates of New Jersey
    ];

    const map = L.map('map').fitBounds(bounds);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

   
    const asburyParkIcon = new L.Icon({
      iconUrl: asburyParkImage,
      iconSize: [40, 40], 
      iconAnchor: [20, 40], 
      popupAnchor: [0, -40], 
    });

    const oceanCityIcon = new L.Icon({
      iconUrl: oceanCityImage,
      iconSize: [40, 40], 
      iconAnchor: [20, 40], 
      popupAnchor: [0, -40], 
    });

    const shipBottomIcon = new L.Icon({
      iconUrl: shipBottomImage,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

    const longBranchIcon = new L.Icon({
      iconUrl: longBranchImage,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

    const pointPleasantIcon = new L.Icon({
      iconUrl: pointPleasantImage,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

    const belmarIcon = new L.Icon({
      iconUrl: belmarImage,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

    const sandyHookIcon = new L.Icon({
      iconUrl: sandyHookImage,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });



    const longBranchMarker = L.marker([40.3043, -73.9924], { icon: longBranchIcon }).addTo(map);
    const sandyHookMarker = L.marker([40.4714, -74.0165], { icon: sandyHookIcon }).addTo(map);
    const belmarMarker = L.marker([40.1789, -74.0212], { icon: belmarIcon }).addTo(map);
    const pointPleasantMarker = L.marker([40.0912, -74.0476], { icon: pointPleasantIcon }).addTo(map);
    const asburyParkMarker = L.marker([40.2206, -74.0120], { icon: asburyParkIcon }).addTo(map);
    const shipBottomMarker = L.marker([39.6429, -74.17], { icon: shipBottomIcon }).addTo(map);
    const oceanCityMarker = L.marker([39.2776, -74.5740], { icon: oceanCityIcon }).addTo(map);

    
    asburyParkMarker.bindPopup(`
      <a href="/asbury-park" class="popup-button">
        Visit Asbury Park
      </a>
    `);

    oceanCityMarker.bindPopup(`
      <a href="/ocean-city" class="popup-button">
        Visit Ocean City
      </a>
    `);

    shipBottomMarker.bindPopup(`
      <a href="/ship-bottom" class="popup-button">
        Visit Ship Bottom
      </a>
    `);

    longBranchMarker.bindPopup(`
      <a href="/long-branch" class="popup-button">
        Visit Long Branch
      </a>
    `);

    pointPleasantMarker.bindPopup(`
    <a href="/point-pleasant" class="popup-button">
      Visit Point Pleasant
    </a>
    `);

    belmarMarker.bindPopup(`
      <a href="/belmar" class="popup-button">
        Visit Belmar
      </a>
    `);

    sandyHookMarker.bindPopup(`
      <a href="/sandy-hook" class="popup-button">
        Visit Sandy Hook
      </a>
    `);


    map.on('popupopen', function (e) {
      const popup = e.popup;
      const button = popup._container.querySelector('.popup-button');
      button.style.backgroundColor = '#ddd'; 
    });

  
  }, []); 

  return <div id="map" style={{ height: '600px' }}></div>;
};

export default Map;
