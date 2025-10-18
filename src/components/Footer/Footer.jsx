// src/components/Footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { Facebook, Instagram, Linkedin, Youtube, Mail } from "lucide-react";

export default function Footer({ openQuota }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.left}>
          <p>
            C.E.P.L. (Classic Electrocoating Pvt. Ltd.) determination, crystal
            clear vision and focus with the quest of offering the industries
            best finishing facility.
          </p>
          <div className={styles.socials}>
            <a
              href="https://www.facebook.com/classicpowdercoat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/classicpowdercoat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>
            {/* <a href="#">
              <Linkedin size={20} />
            </a>
            <a href="#">
              <Youtube size={20} />
            </a> */}
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/colorshades">Color Shades</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className={styles.links}>
          <h4>Services</h4>
          <ul>
            <li>
              <Link to="/services/powder-coating">Powder Coating</Link>
            </li>
            <li>
              <Link to="/services/wooden-coating">Wood Effect Coating</Link>
            </li>
            <li>
              <Link to="/services/pvd-coating">PVD Coating</Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        {/* <div className={styles.links}>
          <h4>Resources</h4>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
          </ul>
        </div> */}

        {/* CTA */}
        <div className={styles.cta}>
          <h4>Ready for a Premium Finish?</h4>
          <button onClick={openQuota}>
            <Mail size={18} />
            Get a Quote
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className={styles.divider}></div>

      <div className={styles.copyright}>
        © {new Date().getFullYear()} BrandName. All Rights Reserved.
      </div>
    </footer>
  );
}
