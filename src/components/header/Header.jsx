import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../../assets/images/logo.svg";

import "./header.css";
import Navigation from "../../UI/Navigation";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menu = useRef();

  const openMenu = () => {
    menu.current.classList.add("open");
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    menu.current.classList.remove("open");
    setIsMenuOpen(false);
  };

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header__logo">
            <img src={logo} alt="Crowd funding word as a logo" />
          </div>
          <div className="header__nav-mobile">
            {isMenuOpen ? (
              <AiOutlineClose onClick={closeMenu} />
            ) : (
              <GiHamburgerMenu onClick={openMenu} />
            )}
            <nav className="header__nav-menu" ref={menu}>
              <Navigation />
            </nav>
          </div>
          <nav className="header__nav-desktop">
            <Navigation />
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
