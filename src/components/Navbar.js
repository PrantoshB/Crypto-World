import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <Link to="/">
      <i className="fa-solid fa-chevron-left" />
    </Link>

    <p>
      Crypto World
    </p>
    <div className="lastmenu">
      <i className="fa-solid fa-microphone" />
      <i className="fa-solid fa-gear" />
    </div>
  </div>
);

export default Navbar;
