import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Menu, X, Home, Wrench, Palette, Calculator, Info, Phone } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={22} /> },
    { name: "Services", path: "/services", icon: <Wrench size={22} /> },
    { name: "Color Shades", path: "/colorshades", icon: <Palette size={22} /> },
    { name: "Calculator", path: "/calculator", icon: <Calculator size={22} /> },
    { name: "About Us", path: "/aboutus", icon: <Info size={22} /> },
    { name: "Contact", path: "/contact", icon: <Phone size={22} /> },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            <img src="/logo.png" alt="logo" width="150" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {item.name}
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

        {/* Mobile Slide Menu */}
        <div className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ""}`}>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* ✅ Bottom Mobile Nav */}
      <nav className={styles.bottomNav}>
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `${styles.bottomNavItem} ${isActive ? styles.activeBottom : ""}`
            }
          >
            {item.icon}
            <span>{item.name.split(" ")[0]}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
