import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  function handleMenu() {
    setIsMenu(!isMenu);
  }
  function handleName(){
    location.reload();
  }

  return (
    <div className="header">
      <h1 className='name' onClick={handleName}>FAHAD.</h1>
      <FontAwesomeIcon
        icon={isMenu ? faTimes : faBars}
        className="menu"
        onClick={handleMenu}
        aria-expanded={isMenu}
      />
      <ul className={`list ${isMenu ? 'active' : ''}`}>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={150} className="list-item" activeClass="active">
          HOME
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-100} duration={150} className="list-item" activeClass="active">
          ABOUT
        </Link>
        <Link to="services" spy={true} smooth={true} offset={-100} duration={150} className="list-item" activeClass="active">
          SERVICES
        </Link>
        <Link to="education" spy={true} smooth={true} offset={-100} duration={150} className="list-item" activeClass="active">
          EDUCATION
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={-100} duration={150} className="list-item" activeClass="active">
          CONTACT
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
