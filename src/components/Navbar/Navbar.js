import React from "react";
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink />
          </li>
          <li>
            <NavLink />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
