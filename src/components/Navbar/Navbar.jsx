import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["Home", "Services", "Color Shades", "Calculator", "About Us", "Contact"];

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>
          <img src="/public/logo.png" alt="logo" width="150"/>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.nav}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button className={styles.menuBtn} onClick={toggleMenu}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.showOverlay : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ""}`}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
