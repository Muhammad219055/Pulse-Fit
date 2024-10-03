import React from "react";
import { useState } from "react";
import logo from "../assets/PulseFitlogo.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import UTube from "../assets/youtube.svg";
import linkedin from "../assets/linkedin.svg";
import FooterVerticalLinks from "./FooterVerticalLinks";

const Footer = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [siteLanguage, setSiteLanguage] = useState("English");
  function handleClick() {
    dropDownOpen ? setDropDownOpen(false) : setDropDownOpen(true);
    console.log(dropDownOpen);
  }
  const year = new Date();
  return (
    <footer>
      <div className="logo">
        <img src={logo} alt="" />
        <h1>FitPulse</h1>
      </div>
      <div className="subscribe">
        <h4>Subscribe to our newsletter</h4>
        <div className="email-input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
      <div className="footer-links">
        <FooterVerticalLinks 
        linksArr = {['Features', 'Workouts', 'Meals']}
        title = {'Products'}
        />
        <FooterVerticalLinks 
        linksArr = {['Blog', 'Guide', 'Reviews']}
        title = {'Resources'}
        />
        <FooterVerticalLinks 
        linksArr = {['About Us', 'Contact Us',]}
        title = {'Company'}
        />
      </div>
      <div className="last-footer-div">
        <div className="language">
          <div
            style={dropDownOpen ? { opacity: "1" } : { opacity: "0" }}
            className="options"
          >
            <li
              onClick={() => {
                setSiteLanguage("Spanish");
              }}
              value="Spanish"
            >
              Spanish
            </li>
            <li
              onClick={() => {
                setSiteLanguage("German");
              }}
              value={"German"}
            >
              German
            </li>
            <li
              onClick={() => {
                setSiteLanguage("French");
              }}
              value={"French"}
            >
              French
            </li>
          </div>
          <button
            onClick={handleClick}
            className={dropDownOpen ? "opened-dropdown" : "language-select"}
          >
            {siteLanguage}
            <svg
              style={{
                transform: dropDownOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease", // Ensure transition applies to 'transform'
              }}
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.07273 5.16669L2 6.23941L8 12.2394L14 6.23941L12.9273 5.16669L8 10.0939L3.07273 5.16669Z"
                fill="#171A1F"
              />
            </svg>
          </button>
        </div>
        <div className="date-rights">
          <p>© {year.getFullYear()} Brand, Inc</p>•<p>Privacy</p>•<p>Terms</p>
        </div>
        <div className="socialions">
          <a href="www.twitter.com">
            <img src={twitter} alt="" />
          </a>
          <a href="www.youtube.com">
            <img src={UTube} alt="" />
          </a>
          <a href="www.facebook.com">
            <img src={facebook} alt="" />
          </a>
          <a href="www.linkedin.com">
            <img src={linkedin} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
