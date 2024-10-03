import React from "react";
import { NavLink } from "react-router-dom";

const FooterVerticalLinks = ({ title, linksArr }) => {
  return (
    <div className="footer-vertical-links-container">
      <h5>{title}</h5>
      <div className="links">
        {linksArr.map((link, index) => (
          <NavLink key={index} to={`/${link.replace(/\s+/g, '')}`}>
            {link}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default FooterVerticalLinks;
