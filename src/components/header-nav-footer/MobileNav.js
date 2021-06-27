import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {  faTimes } from '@fortawesome/free-solid-svg-icons'

function MobileNav() {
  const [showMenu, setShowMenu] = useState(false)
  if(showMenu){
    return (
      <header className="mobile-head">
        <div className="mobile-logo-container">
          <p className="mobile-logo">Pine Ridge Tiny Homes Project</p>
        </div>
        <nav>
           <div className="hamburger-container">
               <FontAwesomeIcon
                icon={faTimes}
                //Note for learning: uses arrow function to set setShowMenu to the opposite of whatever it is on click
                onClick={() => setShowMenu(!showMenu)}
                className="faBars fixed"
               />
            </div>
            <ul className="nav-ul-mobile flex flex-col top-24 right-0 fixed w-screen bg-darkTan">
              <span className="mobile-nav-link-divider"/>
                 <a href="#about-summary-section" className="nav-link ">
                   <li className="mobile-nav-li">About</li>
                 </a>
              <span className="mobile-nav-link-divider"/>
                <a href="#donate-section" className="nav-link">
                  <li className="mobile-nav-li">Donate</li>
                </a>
              <span className="mobile-nav-link-divider"/>
                <a href="#contact-section"  className="nav-link">
                  <li className="mobile-nav-li">Contact</li>
                </a>
              <span className="mobile-nav-link-divider"/>
                {/* <a href="#contact-section"  className="nav-link border-b-2 w-screen text-green">
                  <li className="mobile-nav-li">Blog</li>
                </a> */}
            </ul>
         </nav>
      </header>
    )
  } else {
    return (
      <header className="mobile-head">
          <div id="logo-container" className="mobile-logo-container">
            <p id="logo" className="mobile-logo">Pine Ridge Tiny Homes Project</p>
          <div className="hamburger-container">
            <FontAwesomeIcon
              icon={faBars}
              //Note for learning: uses arrow function to set setShowMenu to the opposite of whatever it is on click
              onClick={() => setShowMenu(!showMenu)}
              className="faBars"
             />
          </div>
        </div>
      </header>
    )
  }
}
export default MobileNav;
