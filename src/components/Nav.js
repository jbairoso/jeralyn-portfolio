import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <ul>
      <li>
        <Link to="/jeralynAiroso/Home">Home</Link>
      </li>
      <li>
        <Link to="/jeralynAiroso/About">
          About
        </Link>
      </li>
      <li>
        <Link to="/jeralynAiroso/Work">
          Work
        </Link>
      </li>
      <li>
        <Link to="/jeralynAiroso/Contact">
          Contact
        </Link>
      </li>
      <li>
        <Link to="/jeralynAiroso/Resume">
          Resume
        </Link>
      </li>
    </ul>
  );
}
