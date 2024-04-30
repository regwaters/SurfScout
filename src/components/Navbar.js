import React, { useState, useEffect } from 'react';
import Logo from '../assets/surfscout.png';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import '../styles/Navbar.css';

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const handleSignOut = () => {
    auth.signOut().then(() => {
      setUser(null);
    }).catch((error) => {
      console.error('Error signing out:', error);
    });
  };

  return (
    <div className='navbar'>
      <div className="leftSide">
        <img src={Logo} alt="Surf Scout Logo" />
      </div>    
      <div className='rightSide'>
        <Link to='/'>Home</Link>
        <Link to='/search'>Search</Link>
        <Link to='/forecasts'>Forecasts</Link>
        {user ? (
          <div className="user-info">
            <h4>Welcome, {user.email}!</h4>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <Link to='/login'>Login</Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
