import React from 'react';
import { Link } from 'react-router-dom';
import BlurredVideo from '../assets/backgroundvideo.mp4';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <video autoPlay muted loop className="background-video">
        <source src={BlurredVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="headerContainer">
        <div className="h2-container">
        <h3>Surf Scout</h3>
        </div>
        <Link to='/Search'>
          <button>Begin Search</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
