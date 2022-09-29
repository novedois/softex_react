import React from "react";

import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.ABOUT}>About</Link>
        </li>
        <li>
          <Link to={ROUTES.CONTACT}>Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
