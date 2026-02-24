import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="home-link">
        <Link to="/">Knowledge Vault</Link>
      </div>
      <div className="pages-links">
        {/*<Link to="/about">About</Link>*/}
        {/*<Link to="/contact">Contact</Link>}*/}
        {/*<Link to="/login"><FaUser />Login</Link>*/}
        <Link to="create-note">Create Note</Link>
        <Link to="notes-list">View All</Link>
      </div>
    </nav>
  )
}

export default NavBar;
