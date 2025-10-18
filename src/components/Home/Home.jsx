import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Home.module.css";

import { homeImages, portfolioItems } from "../../data";


// Services
const services = [
  {
    title: "Powder Coating",
    desc: "Durable, eco-friendly finishes for metal surfaces.",
    features: ["Eco-Friendly", "Industrial & Decorative", "Durable Finish"],
    img: homeImages.powderCoating,
    link: "/services/powder-coating",
  },
  {
    title: "Wooden Coating",
    desc: "Premium wooden textures on metal, combining strength & elegance.",
    features: ["Elegant Finish", "Durable", "Custom Colors"],
    img: homeImages.woodenCoating,
    link: "/services/wooden-coating",
  },
  {
    title: "PVD Coating",
    desc: "Luxury metallic finishes like gold, chrome, and rose gold.",
    features: ["Luxury Finish", "High Durability", "Metallic Shine"],
    img: homeImages.pvdCoating,
    link: "/services/pvd-coating",
  },
];

// Testimonials
const testimonials = [
  {
    name: "John Doe",
    role: "Architect",
    msg: "Amazing quality coating. Very durable and visually appealing.",
  },
  {
    name: "Jane Smith",
    role: "Interior Designer",
    msg: "Transformed our metal furniture! Highly recommended.",
  },
  {
    name: "Mike Johnson",
    role: "Automotive Manufacturer",
    msg: "Excellent PVD coating for luxury cars. Superb finish.",
  },
  {
    name: "Jane Smith",
    role: "Interior Designer",
    msg: "Transformed our metal furniture! Highly recommended.",
  },
  {
    name: "Jane Smith",
    role: "Interior Designer",
    msg: "Transformed our metal furniture! Highly recommended.",
  },
];

// Portfolio

const Home = () => {
  const carouselRef = useRef(null);
  const videoRefs = useRef([]);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let frameId;
    const speed = 0.5; // adjust scroll speed

    const scroll = () => {
      if (!isPaused) {
        carousel.scrollLeft += speed;
        // reset to start for infinite loop
        if (
          carousel.scrollLeft + carousel.offsetWidth >=
          carousel.scrollWidth
        ) {
          carousel.scrollLeft = 0;
        }
      }
      frameId = requestAnimationFrame(scroll);
    };

    frameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(frameId);
  }, [isPaused]);

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show text only when user scrolls a bit (you can adjust the value)
      if (window.scrollY > 1) {
        setShowText(true);
      } else {
        setShowText(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.homePage}>
      {/* ================= Hero Section ================= */}
      <section className={styles.hero}>
        <motion.video
          className={styles.videoBg}
          src="/home.mp4"
          autoPlay
          loop
          muted
          playsInline
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className={styles.overlay}></div>

        {/* Show text only when scrolled more than 15px */}
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1>
            Precision Coatings <br /> For Excellence
          </h1>
          <p>
            Transforming metal surfaces with advanced Powder, Wooden, and PVD
            coatings.
          </p>
          <div className={styles.heroCTA}>
            <Link to="/services" className={styles.ctaBtn}>
              View Services
            </Link>
            <Link to="/contact" className={styles.ctaBtnSecondary}>
              Request Quote
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= Services Section (Static) ================= */}
      <section className={styles.servicesSection}>
        <h2>Our Coating Services</h2>
        <div className={styles.servicesWrapper}>
          {services.map((service, i) => (
            <motion.div
              key={i}
              className={`${styles.serviceCard} ${
                i % 2 !== 0 ? styles.reverse : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <div className={styles.imageWrapper}>
                <img src={service.img} alt={service.title} />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.contentWrapper}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className={styles.featureList}>
                  {service.features.map((f, idx) => (
                    <li key={idx}>✔ {f}</li>
                  ))}
                </ul>
                <Link to={service.link} className={styles.viewMore}>
                  View More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      
      {/* ================= Portfolio Section ================= */}
      <section className={styles.portfolioSection}>
        <h2>Our Work</h2>
        <div className={styles.portfolioGrid}>
          {portfolioItems.map((item, i) => (
            <motion.div
              key={i}
              className={styles.portfolioCard}
              whileHover={{ scale: item.type === "image" ? 1.05 : 1 }}
            >
              {item.type === "image" ? (
                <img src={item.src} alt={`Portfolio ${i + 1}`} loading="lazy" />
              ) : (
                <>
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    ref={(el) => (videoRefs.current[i] = el)}
                    onMouseEnter={() => videoRefs.current[i]?.play()}
                    onMouseLeave={() => videoRefs.current[i]?.pause()}
                    onTouchStart={() => videoRefs.current[i]?.play()}
                    onTouchEnd={() => videoRefs.current[i]?.pause()}
                  />
                  <span className="playIcon">▶</span>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= Process Section ================= */}
      <section className={styles.processSection}>
        <h2>How We Work</h2>
        <div className={styles.processGrid}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h4>Surface Preparation</h4>
            <p>Cleaning and priming metal surfaces for perfect adhesion.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h4>Coating</h4>
            <p>Applying powder, wooden, or PVD coatings with precision.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h4>Curing & Finishing</h4>
            <p>Heat curing for durability and aesthetic perfection.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>4</div>
            <h4>Quality Check</h4>
            <p>Rigorous inspection to ensure superior performance.</p>
          </div>
        </div>
      </section>

      {/* ================= Testimonials Carousel ================= */}
      <section className={styles.testimonialCarouselSection}>
        <h2>What Our Clients Say</h2>
        <div
          className={styles.testimonialCarouselWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className={styles.testimonialCarousel}
            ref={carouselRef}
            drag="x"
            dragConstraints={{
              left:
                -carouselRef.current?.scrollWidth +
                (carouselRef.current?.offsetWidth || 0),
              right: 0,
            }}
            dragElastic={0.15}
            whileTap={{ cursor: "grabbing" }}
          >
            {testimonials.map((t, index) => (
              <div key={index} className={styles.testimonialCard}>
                <p>"{t.msg}"</p>
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ================= CTA Section ================= */}
      <section className={styles.ctaSection}>
        <h2>Ready to Transform Your Surfaces?</h2>
        <p>
          Contact us today and explore the premium coating solutions for your
          project.
        </p>
        <Link to="/contact" className={styles.ctaBtn}>
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Home;
