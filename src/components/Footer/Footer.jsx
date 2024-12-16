import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-main">
          <div className="footer-text">
            <i className="fa-regular fa-copyright"></i>
            <h1>Done by Mohamed Fahad Khan</h1>
          </div>
          <div className="link-btn2">
            <a href="'https://www.facebook.com/profile.php?id=100007066690387'">
              <FontAwesomeIcon icon={faFacebookF} className="icon-b" color='1877f2'/>
            </a>
            <a href="https://www.instagram.com/_mohd_fahad_07/">
              <FontAwesomeIcon icon={faInstagram} className="icon-b" color="#dd2a7b"/>
            </a>
            <a href="https://www.linkedin.com/in/mohamedfahadkhan/">
              <FontAwesomeIcon icon={faLinkedinIn} className="icon-b" color="#0077b5" />
            </a>
            <a href="https://github.com/mfk0708">
              <FontAwesomeIcon icon={faGithub} className="icon-b" color="#3a4c8d" />
            </a>
          </div>
        </div>
        <div className="footer-list">
          <ul>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              className="list2"
            >
              HOME
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              className="list2"
            >
              ABOUT
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              className="list2"
            >
              SERVICES
            </Link>
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              className="list2"
            >
              EDUCATION
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
