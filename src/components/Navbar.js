import React from 'react'
import Logo from '../assets/surfscout.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className="leftSide">
            <img src={Logo} />
        </div>    
        <div className='rightSide'>
            <Link to='/'> Home</Link>
            <Link to='/search'> Search</Link>
            <Link to='/forecasts'> Forecasts</Link>
            <Link to='/login'> Login</Link>
        
        </div>
    </div>
  )
}

export default Navbar

