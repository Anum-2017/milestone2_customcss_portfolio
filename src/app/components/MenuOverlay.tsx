import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { XMarkIcon } from "@heroicons/react/24/solid";

interface LinkItem {
  path: string;
  title: string;
}

interface MenuOverlayProps {
  links: LinkItem[];
  setNavbarOpen: (isOpen: boolean) => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links, setNavbarOpen }) => {
  return (
    <div className="menu-overlay">
      <div className="menu-overlay-header">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="menu-title"
          onClick={() => setNavbarOpen(false)}
        >
          Anum Kamal
        </ScrollLink>
        <button onClick={() => setNavbarOpen(false)} className="close-button">
          <XMarkIcon className="icon" />
        </button>
      </div>
      <ul className="menu-list">
        {links.map((link, index) => (
          <li key={index}>
            <ScrollLink
              to={link.path}
              smooth={true}
              duration={500}
              className="menu-link"
              onClick={() => setNavbarOpen(false)}
            >
              {link.title}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
