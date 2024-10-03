import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import logo from "../assets/PulseFitlogo.svg";
const NavBar = ({onGetStarted}) => {
  return (
    <nav>
      <div className="navBar-container">
        <div className="logo-links">
          <div className="logo">
            <img src={logo} alt="" />
            <h1>FitPulse</h1>
          </div>
          <div className="pages">
            <NavLink
              className={({ isActive }) => (isActive ? "activePage" : "page")}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "activePage" : "page")}
              to="/workouts"
            >
              Workouts
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "activePage" : "page")}
              to="/recipes"
            >
              Recipes
            </NavLink>
          </div>
        </div>

        <button 
        onClick={onGetStarted}
        className="get-started">Get started</button>
      </div>
    </nav>
  );
};

export default NavBar;
