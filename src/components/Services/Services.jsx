import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Services.module.css";

import { homeImages } from "../../data";

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Powder Coating",
      desc: `Our advanced powder coating process ensures a long-lasting, high-quality finish that enhances both appearance and protection. Using cutting-edge electrostatic technology, we achieve consistent coverage and resistance to corrosion, chemicals, and UV radiation. Perfect for industrial machinery, aluminum profiles, and architectural metalwork — available in glossy, matte, or textured finishes.`,
      features: [
        "Durable, corrosion-resistant finish",
        "Eco-friendly and solvent-free",
        "Available in wide color and texture range",
        "Ideal for industrial and decorative use",
      ],
      img: homeImages.powderCoating,
      link: "/services/powder-coating",
    },
    {
      id: "02",
      title: "Wooden Coating",
      desc: `Bring the beauty of wood and the strength of metal together with our advanced wooden coating technology. Through precision sublimation, we replicate natural wood grains and tones onto aluminum or steel — ideal for architectural façades, furniture, and interiors. It’s UV-resistant, weatherproof, and maintenance-free for long-term elegance.`,
      features: [
        "Authentic wooden finish with metal durability",
        "UV and weather-resistant surfaces",
        "Maintenance-free and fade-proof",
        "Perfect for doors, panels, and decor",
      ],
      img: homeImages.woodenCoating,
      link: "/services/wooden-coating",
    },
    {
      id: "03",
      title: "PVD Coating",
      desc: `Our Physical Vapor Deposition (PVD) coatings provide an ultra-premium metallic finish that combines luxury with durability. Used in automotive trims, hardware, and decorative applications, PVD offers exceptional hardness, corrosion resistance, and a brilliant mirror-like appearance — available in gold, rose gold, black, bronze, and chrome shades.`,
      features: [
        "Mirror-like metallic finish",
        "Exceptional hardness & corrosion resistance",
        "Environmentally friendly process",
        "Wide range of luxurious color options",
      ],
      img: homeImages.pvdCoating,
      link: "/services/pvd-coating",
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Coating Services
      </motion.h1>

      {services.map((service, index) => (
        <motion.div
          key={index}
          className={`${styles.serviceCard} ${
            index % 2 !== 0 ? styles.reverse : ""
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className={styles.imageWrapper}>
            <img src={service.img} alt={service.title} />
            <div className={styles.overlay}></div>
            <div className={styles.serviceId}>{service.id}</div>
          </div>

          <div className={styles.contentWrapper}>
            <h2>{service.title}</h2>
            <p>{service.desc}</p>

            <ul className={styles.featureList}>
              {service.features.map((f, i) => (
                <li key={i}>
                  <span>✔</span> {f}
                </li>
              ))}
            </ul>

            <Link to={service.link} className={styles.viewMore}>
              View More →
            </Link>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Services;
