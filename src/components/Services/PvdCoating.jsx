import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Shield, Droplet, Settings, Eye } from "lucide-react";
import styles from "./ServiceDetail.module.css";

import { pvdCoatingImgs, serviceBannerImages, pvdApp } from "../../data";


const PvdCoating = () => {
  const benefits = [
    { icon: <Star />, title: "Luxury Finish", desc: "Mirror-like, high-end metallic appearance for premium products." },
    // { icon: <Shield />, title: "High Hardness", desc: "Exceptional resistance to scratches, wear, and abrasion." },
    { icon: <Droplet />, title: "Corrosion Resistant", desc: "Ideal for stainless steel, hardware, and decorative metal surfaces." },
    { icon: <Eye />, title: "Fade-proof", desc: "Maintains color and brilliance over time even in harsh environments." },
    { icon: <Settings />, title: "Custom Shades", desc: "Gold, rose gold, black, bronze, and chrome available." },
  ];

const applicationsData = [
  {
    title: "Luxury Hardware & Furniture",
    image: pvdApp.hardware,
    desc: "Delivers a luxurious mirror-like metallic finish that elevates the appearance of premium furniture and hardware. The coating ensures long-lasting brilliance, scratch resistance, and timeless elegance.",
    details: "Handles, Knobs, Hinges, Furniture Accessories",
  },
  {
    title: "Sanitary Fittings",
    image: pvdApp.sanitary,
    desc: "Combines aesthetic appeal with exceptional durability. Ideal for faucets, shower heads, and bath accessories, offering a corrosion-resistant surface that withstands constant exposure to water and humidity.",
    details: "Faucets, Shower Heads, Towel Rails",
  },
  {
    title: "Automotive Trims",
    image: pvdApp.automotive,
    desc: "Provides a sophisticated metallic appearance with outstanding wear and oxidation resistance. Perfect for both interior and exterior trims, ensuring a consistent high-gloss finish that endures extreme conditions.",
    details: "Exterior & Interior Trims, Badges, Emblems",
  },
  {
    title: "Decorative Consumer Goods",
    image: pvdApp.consumer,
    desc: "Adds a touch of refinement and luxury to everyday consumer products. PVD coatings deliver unmatched durability and elegance for modern appliances, electronics, and lifestyle accessories.",
    details: "Appliances, Gadgets, Decor Items",
  },
  {
    title: "Jewelry & Watches",
    image: pvdApp.jewelry,
    desc: "Offers a superior, wear-resistant metallic finish for high-end jewelry and timepieces. Ensures a flawless surface that retains its shine, color, and precision craftsmanship over time.",
    details: "Rings, Bracelets, Watch Cases",
  },
];


  const processSteps = [
    { step: "1", title: "Surface Cleaning", desc: "Degreasing and polishing metal surface to prepare for coating." },
    { step: "2", title: "PVD Deposition", desc: "Thin metallic layer is vapor-deposited under vacuum conditions." },
    { step: "3", title: "Hardening", desc: "Coated parts are processed to enhance hardness and durability." },
    { step: "4", title: "Inspection & Finishing", desc: "Rigorous checks ensure optical quality, color, and adhesion." },
  ];

  const [activeAppIndex, setActiveAppIndex] = useState(null);
  const toggleApplication = (index) => {
    setActiveAppIndex(index === activeAppIndex ? null : index);
  };

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % pvdCoatingImgs.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.servicePage}>
      {/* Hero */}
      <motion.section
        className={styles.hero}
        style={{ backgroundImage: `url(${serviceBannerImages.pvdCoatingImgs})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.overlay}></div>
        <motion.h1
          initial={{ y: 80, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          PVD Coating
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Premium metallic finishes with unmatched durability and style.
        </motion.p>
      </motion.section>

      {/* Overview Section with Smooth Carousel */}
      <section className={styles.overview}>
        <div className={styles.carousel}>
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {pvdCoatingImgs.map((img, i) => (
              <img src={img} alt={`PVD Slide ${i}`} key={i} />
            ))}
          </div>
        </div>

        <motion.div
          className={styles.carouselText}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>High-End Coating for Premium Applications</h2>
          <p>
            Our PVD process ensures mirror-like metallic finishes with superior
            hardness and corrosion resistance. Perfect for luxury interiors,
            architectural hardware, and high-end consumer products.
          </p>
          <p>
            Environmentally friendly and maintenance-free, these coatings maintain
            brilliance and performance over time, delivering a lasting premium look.
          </p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <h2>Key Advantages</h2>
        <div className={styles.benefitGrid}>
          {benefits.map((b, i) => (
            <motion.div key={i} className={styles.card} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className={styles.icon}>{b.icon}</div>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Applications Accordion Section */}
      <section className={styles.applications}>
        <h2>Applications</h2>
        <div className={styles.accordion}>
          {applicationsData.map((app, idx) => (
            <div key={idx} className={styles.accordionItem}>
              <motion.div
                className={styles.accordionTitle}
                onClick={() => toggleApplication(idx)}
                whileHover={{ scale: 1.02 }}
              >
                <span>{app.title}</span>
                <span>{activeAppIndex === idx ? "-" : "+"}</span>
              </motion.div>

              <AnimatePresence>
                {activeAppIndex === idx && (
                  <motion.div
                    className={styles.accordionContent}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className={styles.contentWrapper}>
                      <div className={styles.left}>
                        <img src={app.image} alt={app.title} />
                      </div>
                      <div className={styles.right}>
                        <p>{app.desc}</p>
                        <p className={styles.details}>{app.details}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className={styles.process}>
        <h2>Our Coating Process</h2>
        <div className={styles.timeline}>
          {processSteps.map((step, i) => (
            <motion.div key={i} className={styles.step} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
              <div className={styles.stepNumber}>{step.step}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section className={styles.ctaSection} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2>Achieve Premium Metallic Finishes</h2>
        <p>Contact us to explore custom PVD finishes for your high-end projects.</p>
        <a href="/contact" className={styles.ctaBtn}>Discover Options</a>
      </motion.section>
    </div>
  );
};

export default PvdCoating;
