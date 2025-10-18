import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./About.module.css";

const milestones = [
  { year: 1991, desc: "Founded Super Coat" },
  { year: 1995, desc: "Established Classic Powder Coat" },
  { year: 1999, desc: "Launched Classic Coating" },
  { year: 2008, desc: "Founded Classic Electrocoating Pvt. Ltd." },
  { year: 2022, desc: "Introduced Architectural Coating" },
  { year: 2024, desc: "Started Apik Coatings India LLP" },
];

const certifications = [
  "/images/Certificates/2.png",
  "/images/Certificates/3.png",
  "/images/Certificates/4.png",
  "/images/Certificates/5.png",
];

const team = [
  {
    name: "Andrew Tom Deo",
    role: "Managing Director",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Jems Black",
    role: "General Manager",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Robert Mil",
    role: "Technical Manager",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Elon Mars",
    role: "Project Manager",
    img: "https://via.placeholder.com/150",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const About = () => {
  const [certIndex, setCertIndex] = useState(null);
  const [zoom, setZoom] = useState(1);

  const openCert = (i) => {
    setCertIndex(i);
    setZoom(1);
    document.body.style.overflow = "hidden";
  };
  const closeCert = () => {
    setCertIndex(null);
    setZoom(1);
    document.body.style.overflow = "auto";
  };
  const nextCert = useCallback(
    () =>
      setCertIndex((prev) =>
        prev === certifications.length - 1 ? 0 : prev + 1
      ),
    []
  );
  const prevCert = useCallback(
    () =>
      setCertIndex((prev) =>
        prev === 0 ? certifications.length - 1 : prev - 1
      ),
    []
  );

  useEffect(() => {
    const handleKey = (e) => {
      if (certIndex !== null) {
        if (e.key === "ArrowRight") nextCert();
        if (e.key === "ArrowLeft") prevCert();
        if (e.key === "Escape") closeCert();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [certIndex, nextCert, prevCert]);

  return (
    <div className={styles.aboutPage}>
      {/* About Us */}
      <section className={styles.section}>
        <motion.h2
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          About Us
        </motion.h2>
        <motion.p
          className={styles.text}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Classic Electrocoating Pvt. Ltd. and Apik Coatings India LLP have been
          delivering world-class coating solutions since 1991...
        </motion.p>
      </section>

      {/* Milestones */}
      <section className={styles.sectionAlt}>
        <motion.h2
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Our Journey
        </motion.h2>
        <div className={styles.milestones}>
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              className={styles.milestone}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className={styles.year}>{m.year}</span>
              <p className={styles.desc}>{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className={styles.section}>
        <motion.h2
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Certifications
        </motion.h2>
        <div className={styles.grid}>
          {certifications.map((src, i) => (
            <motion.div
              key={i}
              className={styles.certThumb}
              onClick={() => openCert(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <img src={src} alt={`Certificate ${i + 1}`} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {certIndex !== null && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCert}
          >
            <motion.div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={closeCert}>
                ✕
              </button>
              <button className={styles.prevBtn} onClick={prevCert}>
                ‹
              </button>
              <button className={styles.nextBtn} onClick={nextCert}>
                ›
              </button>
              <div className={styles.controls}>
                <button onClick={() => setZoom((z) => Math.max(1, z - 0.2))}>
                  −
                </button>
                <span>{Math.round(zoom * 100)}%</span>
                <button onClick={() => setZoom((z) => Math.min(3, z + 0.2))}>
                  +
                </button>
              </div>
              <motion.img
                src={certifications[certIndex]}
                alt={`Certificate ${certIndex + 1}`}
                style={{ transform: `scale(${zoom})` }}
                className={styles.modalImage}
                initial={{ scale: 0.8 }}
                animate={{ scale: zoom }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mission & Vision */}
      <section className={styles.sectionAlt}>
        <div className={styles.sideBySide}>
          {["Mission", "Vision"].map((title, i) => (
            <motion.div
              key={i}
              className={styles.sideCard}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h3>Our {title}</h3>
              <p>
                {title === "Mission"
                  ? "To provide innovative and sustainable coating solutions that exceed customer expectations and enhance product longevity."
                  : "To become the leading coating solutions provider globally while fostering environmental responsibility and technological innovation."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.section}>
        <motion.h2
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Why Choose Us
        </motion.h2>
        <motion.ul
          className={styles.whyChoose}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <li>Industry expertise since 1991</li>
          <li>High-quality powder & PVD coatings</li>
          <li>Innovation and sustainability</li>
          <li>Expert team and project management</li>
        </motion.ul>
      </section>

      {/* Team */}
      <section className={styles.sectionAlt}>
        <motion.h2
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Meet Our Expert Team
        </motion.h2>
        <div className={styles.teamGrid}>
          {team.map((t, i) => (
            <motion.div
              key={i}
              className={styles.teamCard}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
            >
              <img src={t.img} alt={t.name} />
              <h3>{t.name}</h3>
              <p>{t.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Company Details Table */}
      <section className={styles.section}>
        <motion.h2
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Company Details
        </motion.h2>
        <div className={styles.tableWrapper}>
          <table className={styles.infoTable}>
            <tbody>
              {[
                ["Company Name", "Classic Electrocoating Pvt. Ltd."],
                ["Nature of Business", "Service Provider"],
                [
                  "Billing/Mailing/Business/Correspondence Address",
                  "12, 213 Pushpam Industrial Estate, Phase-1, Nika Tube Compound, G.I.D.C, Vatva, Ahmedabad-382445, Gujarat-India.",
                ],
                ["Legal Status of Firm", "Proprietorship"],
                ["Name of Dealing Person/ Director Name", "Mr. Hardik Jangid"],
                ["Contact Number", "+91 9978619999"],
                [
                  "Email Address",
                  "classicelectrocoating@rocketmail.com\ninfo@classicelectrocoating.com",
                ],
                ["Year of Establishment", "2001"],
                ["Number of Employees", "Upto 30 People"],
                ["Geographic Service Area", "National"],
              ].map(([th, td], i) => (
                <motion.tr
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <th>{th}</th>
                  <td>
                    {td.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default About;
