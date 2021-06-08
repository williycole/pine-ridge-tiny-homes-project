import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../styles/component-styles/_nav.scss';
import '../App';


function Navbar() {
  /*
  uses react hooks to create a variable called showMenu
  and sets the setShowMenu function to be able to change
  the showMenu variable using the setState hook, and
  initializes the state to false or closed menu
  */
  const [showMenu, setShowMenu] = useState(false)
  let regMenu =
      <ul className="nav-desktop-ul">
         <a href="#donate-card-btn" className="nav-link">
          <li className="link-text">About</li>
        </a>
        <a href="#donate-card-btn" className="nav-link">
          <li className="link-text">Donate</li>
        </a>
        {/* <a href="#donate-card-btn" className="nav-link">
          <li className="link-text">Contact</li>
        </a> */}
      </ul>;

  let mobileMenu;
  if(showMenu){
      mobileMenu =
      <ul className="nav-mobile-ul">
        <a href="#donate-card-btn" className="nav-link">
          <li className="link-text">About</li>
        </a>
        <a href="#donate-card-btn" className="nav-link">
          <li className="link-text">Donate</li>
        </a>
        {/* <a href="#donate-card-btn" className="nav-link">
          <li className="link-text">Contact</li>
        </a> */}
      </ul>
  }

  return (
    <header>
      <div className="logo-container">
          <p id="logo">Pine Ridge Tiny Homes Project</p>
      </div>
        <nav>
          { regMenu }
          <div className="hamburger-container">
            <FontAwesomeIcon
              icon={faBars}
              //Note for learning: uses arrow function to set setShowMenu to the opposite of whatever it is on click
              onClick={() => setShowMenu(!showMenu)}
              className="faBars"
            />
          </div>
            { mobileMenu }
        </nav>
    </header>
  )
}

export default Navbar;


