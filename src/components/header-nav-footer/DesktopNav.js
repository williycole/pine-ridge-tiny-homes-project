import React from 'react'
function DesktopNav () {
  return (
    <header className="flex flex-row fixed items-center justify-end bg-darkTan z-40 shadow-lg">
      <div className="w-screen bg-darkTan p-4 px-10">
        <p className="block z-50 w-60 py-4 font-bold text-green text-2xl">Pine Ridge Tiny Homes Project</p>
      </div>
      <ul className="nav-ul-desktop fixed flex flex-row items-end justify-evenly z-50 w-3/5 h-full">
        <span className="desktop-nav-link-divider"/>
          <a href="#about-summary-section" className="desktop-nav-a">
            <li className="desktop-nav-li link-hover">About</li>
          </a>
        <span className="desktop-nav-link-divider"/>
          <a href="#donate-section" className="desktop-nav-a">
            <li className="desktop-nav-li link-hover">Donate</li>
          </a>
        <span className="desktop-nav-link-divider "/>
          <a href="#contact-section"  className="desktop-nav-a">
            <li className="desktop-nav-li link-hover">Contact</li>
          </a>
        {/* <span className="desktop-nav-link-divider "/>
          <a href="#contact-section"  className="desktop-nav-a">
            <li className="desktop-nav-li link-hover">Blog</li>
          </a> */}
      </ul>
    </header>
  )
}


export default DesktopNav ;

