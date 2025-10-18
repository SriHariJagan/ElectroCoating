import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Droplet, Sun, Leaf, Settings } from "lucide-react";
import styles from "./ServiceDetail.module.css";

import { powderCoatingImgs, serviceBannerImages } from "../../data";

import powderImg from "../../../public/images/services/powder/powder.WEBP";
import woodenImg from "../../../public/images/services/wooden/wooden.JPG";

const PowderCoating = () => {
  const benefits = [
    {
      icon: <Shield />,
      title: "Superior Protection",
      desc: "Provides outstanding corrosion and wear resistance for long-lasting performance.",
    },
    {
      icon: <Sun />,
      title: "UV Resistance",
      desc: "Designed to withstand harsh sunlight without fading or chalking over time.",
    },
    {
      icon: <Droplet />,
      title: "Chemical Resistance",
      desc: "Ideal for industrial environments with exposure to chemicals and solvents.",
    },
    // {
    //   icon: <Leaf />,
    //   title: "Eco-Friendly",
    //   desc: "No VOC emissions; sustainable and recyclable coating process.",
    // },
    {
      icon: <Settings />,
      title: "Custom Finishes",
      desc: "Available in matte, gloss, texture, and metallic finishes.",
    },
  ];

  const applicationsData = [
    {
      title: "Architectural facades and aluminum profiles",
      image: powderImg,
      desc: "Perfect for outdoor and indoor facades, providing durability and aesthetic appeal.",
      details: "Aluminum, Panels, Exterior, Interior",
    },
    {
      title: "Automotive parts and wheels",
      image: powderImg,
      desc: "Enhances corrosion resistance and gives a premium metallic finish to automotive components.",
      details: "Wheels, Trims, Engine Parts, Custom Colors",
    },
    {
      title: "Industrial machinery and equipment",
      image: powderImg,
      desc: "Protects heavy machinery from wear, chemicals, and UV exposure in industrial settings.",
      details: "Machines, Tools, Industrial Parts",
    },
    {
      title: "Furniture frames and metal décor",
      image: woodenImg,
      desc: "Provides a decorative and durable coating for furniture and interior décor.",
      details: "Frames, Shelves, Racks, Decorative Metals",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Surface Preparation",
      desc: "Cleaning, degreasing, and phosphating to ensure perfect adhesion.",
    },
    {
      step: "2",
      title: "Powder Application",
      desc: "Electrostatic spray applies a uniform powder layer on the metal surface.",
    },
    {
      step: "3",
      title: "Curing",
      desc: "The coated part is baked at high temperature for a smooth, durable finish.",
    },
    {
      step: "4",
      title: "Quality Check",
      desc: "Rigorous testing for adhesion, thickness, and visual perfection.",
    },
  ];

  const [activeAppIndex, setActiveAppIndex] = useState(null);
  const toggleApplication = (index) => {
    setActiveAppIndex(index === activeAppIndex ? null : index);
  };

  const [index, setIndex] = useState(0);

  // Auto-scroll every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % powderCoatingImgs.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.servicePage}>
      {/* Hero Section */}
      <motion.section
        className={styles.hero}
        style={{ backgroundImage: `url(${serviceBannerImages.powderCoatingImgs})` }}
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
          Powder Coating
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          A fusion of durability, aesthetics, and sustainability.
        </motion.p>
      </motion.section>

      {/* Overview Section */}
      <section className={styles.overview}>
        <div className={styles.carousel}>
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {powderCoatingImgs.map((img, i) => (
              <img src={img} alt={`Slide ${i}`} key={i} />
            ))}
          </div>
        </div>

        <motion.div
          className={styles.carouselText}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Why Choose Our Powder Coating?</h2>
          <p>
            Our advanced powder coating facility ensures a flawless finish every
            time. With precision-controlled curing ovens and automated booths,
            we deliver consistency, durability, and a refined aesthetic across
            all product types.
          </p>
          <p>
            Whether for heavy-duty industrial parts or architectural components,
            we guarantee coatings that stand the test of time — both in
            performance and appearance.
          </p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <h2>Key Benefits</h2>
        <div className={styles.benefitGrid}>
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className={styles.card}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.icon}>{b.icon}</div>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Applications Section */}
      <section className={styles.applications}>
        <h2>Applications</h2>
        <div className={styles.accordion}>
          {applicationsData.map((app, index) => (
            <div key={index} className={styles.accordionItem}>
              <motion.div
                className={styles.accordionTitle}
                onClick={() => toggleApplication(index)}
                whileHover={{ scale: 1.02 }}
              >
                <span>{app.title}</span>
                <span>{activeAppIndex === index ? "-" : "+"}</span>
              </motion.div>

              <AnimatePresence>
                {activeAppIndex === index && (
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

      {/* Process Steps Section */}
      <section className={styles.process}>
        <h2>Our Coating Process</h2>
        <div className={styles.timeline}>
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              className={styles.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className={styles.stepNumber}>{step.step}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className={styles.ctaSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Transform Your Metal Surfaces</h2>
        <p>
          Contact us today to explore custom finishes and technical options for
          your projects.
        </p>
        <a href="/contact" className={styles.ctaBtn}>
          Get a Quote
        </a>
      </motion.section>
    </div>
  );
};

export default PowderCoating;
