"use client";
import { Link as ScrollLink } from 'react-scroll';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {
    title: "Home",
    path: "home",
  },
  {
    title: "About",
    path: "about",
  },
  {
    title: "Skills",
    path: "skills",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ScrollLink 
          to="hero" 
          smooth={true} 
          duration={500} 
          className="navbar-title" 
          onClick={() => setNavbarOpen(false)}
        >
          Anum Kamal
        </ScrollLink>
        <div className="mobile-menu">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)}>
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)}>
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu" id="navbar">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <ScrollLink
                  to={link.path}
                  smooth={true}
                  duration={500}
                  className="menu-link"
                >
                  {link.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} setNavbarOpen={setNavbarOpen} />}
    </nav>
  );
};

export default Navbar;
