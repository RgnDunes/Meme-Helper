import React from "react";

import "./Navbar.css";

const Navbar = ({ onClick }) => {
  return (
    <div className="nav_container">
      <ul>
        <li
          onClick={() => {
            onClick("home");
            window.location.reload();
          }}
        >
          Home
        </li>
        <li onClick={() => onClick("saved")}>Saved Memes</li>
      </ul>
    </div>
  );
};

export default Navbar;
