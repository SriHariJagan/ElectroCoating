import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Sun, Droplet, Shield, Settings } from "lucide-react";
import styles from "./ServiceDetail.module.css";
import { woodenCoatingImgs, serviceBannerImages, woodApp} from "../../data"; // array of wooden images

const WoodenCoating = () => {
  const benefits = [
    {
      icon: <Leaf />,
      title: "Natural Aesthetics",
      desc: "Authentic wood textures that replicate real wood grains and patterns.",
    },
    {
      icon: <Sun />,
      title: "UV Resistant",
      desc: "Prevents fading or discoloration even under strong sunlight.",
    },
    {
      icon: <Droplet />,
      title: "Waterproof Finish",
      desc: "Resistant to moisture, weather, and corrosion.",
    },
    // { icon: <Shield />, title: "Scratch & Abrasion Resistant", desc: "Keeps surfaces pristine and durable for years." },
    {
      icon: <Settings />,
      title: "Customizable Finishes",
      desc: "Available in oak, walnut, teak, and bespoke wood grains.",
    },
  ];

  const applicationsData = [
    {
      title: "Doors and Windows",
      image: woodApp.doors,
      desc: "Combines durability with refined aesthetics, offering a natural wood-grain appearance that enhances the elegance of doors and window frames while providing long-lasting surface protection.",
      details: "Frames, Panels, Custom Sizes",
    },
    {
      title: "Interior Furniture",
      image: woodApp.furniture,
      desc: "Transforms ordinary furniture into timeless pieces with authentic wooden textures. Ideal for both residential and commercial interiors, ensuring style, sophistication, and resistance to daily wear.",
      details: "Tables, Chairs, Cabinets",
    },
    {
      title: "Architectural Facades",
      image: woodApp.facades,
      desc: "Provides a premium wood-like finish for architectural facades, blending natural aesthetics with weather resistance. Perfect for both exterior cladding and interior design accents.",
      details: "Cladding, Panels, Exterior Design",
    },
    {
      title: "Curtain Walls & Paneling",
      image: woodApp.paneling,
      desc: "Offers a contemporary, elegant look for curtain wall systems and interior panels. The coating ensures smooth texture, superior adhesion, and excellent resistance to environmental factors.",
      details: "Panels, Screens, Walls",
    },
    {
      title: "Decorative Metal Installations",
      image: woodApp.metal,
      desc: "Enhances decorative metal structures with a natural wood appearance, giving a premium, warm, and artistic finish while maintaining strength and corrosion protection.",
      details: "Rails, Fixtures, Décor",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Surface Cleaning",
      desc: "Preparing metal surfaces for perfect adhesion of wood grain coating.",
    },
    {
      step: "2",
      title: "Film Transfer",
      desc: "Heat sublimation applies the wood pattern uniformly.",
    },
    {
      step: "3",
      title: "Curing & Coating",
      desc: "The coated surface is baked for a durable, scratch-proof finish.",
    },
    {
      step: "4",
      title: "Quality Inspection",
      desc: "Ensures texture, color, and durability meet high standards.",
    },
  ];

  const [activeAppIndex, setActiveAppIndex] = useState(null);
  const toggleApplication = (index) => {
    setActiveAppIndex(index === activeAppIndex ? null : index);
  };

  const [index, setIndex] = useState(0);

  // Auto-scroll carousel every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % woodenCoatingImgs.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.servicePage}>
      {/* Hero Section */}
      <motion.section
        className={styles.hero}
        style={{
          backgroundImage: `url(${serviceBannerImages.woodenCoatingImgs})`,
        }}
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
          Wooden Coating
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Authentic wood beauty combined with lasting durability.
        </motion.p>
      </motion.section>

      {/* Overview Section with Carousel */}
      <section className={styles.overview}>
        <div className={styles.carousel}>
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {woodenCoatingImgs.map((img, i) => (
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
          <h2>Durable & Timeless Wood Finishes</h2>
          <p>
            Our wooden coating process replicates the warmth and elegance of
            real wood while offering all the durability of metal. Perfect for
            outdoor and indoor architectural applications.
          </p>
          <p>
            Maintenance-free, weather-resistant, and eco-friendly, this coating
            keeps your surfaces beautiful for years without compromise.
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

      {/* Applications Section (Accordion) */}
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
        <h2>Bring Warmth to Your Spaces</h2>
        <p>
          Contact us to explore premium wooden coatings for your architectural
          projects.
        </p>
        <a href="/contact" className={styles.ctaBtn}>
          Request a Sample
        </a>
      </motion.section>
    </div>
  );
};

export default WoodenCoating;
