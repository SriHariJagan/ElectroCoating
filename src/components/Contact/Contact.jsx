import React from "react";
import { Phone, Mail, MapPin, User, Printer, Globe } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        {/* Left Column - Inquiry Form */}
        <motion.div
          className={styles.formSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className={styles.title} variants={fadeUp}>
            Contact us for any inquiries about our Coating Services
          </motion.h2>
          <motion.p className={styles.description} variants={fadeUp} custom={1}>
            Please fill in the details below, and our team will get back to you
            shortly. We’re happy to answer all your questions about our powder
            coating and anodizing solutions.
          </motion.p>

          <motion.form className={styles.form} variants={fadeUp} custom={2}>
            <div className={styles.row}>
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>

            <div className={styles.row}>
              <input type="text" placeholder="Phone Number" required />
              <input type="email" placeholder="Email ID" required />
            </div>

            <textarea
              placeholder="Your Message / Description"
              rows="4"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </motion.form>
        </motion.div>

        {/* Right Column - Company Details + Image */}
        <motion.div
          className={styles.detailsSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.img
            src="/images/contcatus.png"
            alt="Company Facility"
            className={styles.mainImage}
            variants={fadeUp}
          />

          <div className={styles.cards}>
            {/* Card 1 */}
            <motion.div className={styles.card} variants={fadeUp} custom={1}>
              <h3>Classic Electrocoating Pvt. Ltd.</h3>
              <ul>
                <li>
                  <MapPin size={18} />
                  <a
                    href="https://www.google.com/maps?q=Classic+Electrocoating+Pvt+Ltd,+Vatva,+Ahmedabad"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    212, 213 Pushpam Industrial Estate, Phase-1, Nika Tube
                    Compound, G.I.D.C, Vatva, Ahmedabad-382445
                  </a>
                </li>
                <li>
                  <User size={18} /> Mr. Hardik Jangid
                </li>
                <li>
                  <Phone size={18} />
                  <a href="tel:+919978619999">+91 9978619999</a>
                </li>
                <li>
                  <Printer size={18} />
                  <a href="tel:+917925897699">079 25897699</a>
                </li>
                <li>
                  <Mail size={18} />
                  <a href="mailto:info@classicelectrocoating.com">
                    info@classicelectrocoating.com
                  </a>
                </li>
                <li>
                  <Mail size={18} />
                  <a href="mailto:classicelectrocoating@rocketmail.com">
                    classicelectrocoating@rocketmail.com
                  </a>
                </li>
                <li>
                  <Globe size={18} />
                  <a
                    href="https://www.classicelectrocoating.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.classicelectrocoating.com
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Card 2 */}
            <motion.div className={styles.card} variants={fadeUp} custom={2}>
              <h3>Classic Powder Coat & Anodize</h3>
              <ul>
                <li>
                  <MapPin size={18} />
                  <a
                    href="https://www.google.com/maps?q=Classic+Powder+Coat+&+Anodize,+Saraspur,+Ahmedabad"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    10/B, 11/A Sharda Ind. Estate, Nr. Piker's Chali, Anil
                    Starch Road, Saraspur, Ahmedabad-380018
                  </a>
                </li>
                <li>
                  <Phone size={18} />
                  <a href="tel:+919879819999">+91 9879819999</a>
                </li>
                <li>
                  <Phone size={18} />
                  <a href="tel:+919426019999">+91 9426019999</a>
                </li>
                <li>
                  <Phone size={18} />
                  <a href="tel:+917922201685">079 22201685</a>
                </li>
                <li>
                  <Printer size={18} />
                  <a href="tel:+917922201319">079 22201319</a>
                </li>
                <li>
                  <Mail size={18} />
                  <a href="mailto:classicanodise@yahoo.co.in">
                    classicanodise@yahoo.co.in
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        className={styles.mapWrapper}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <iframe
          src="https://www.google.com/maps?q=Classic%20Electrocoating%20Pvt%20Ltd%20Vatva&output=embed"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen
          loading="lazy"
          title="Classic Electrocoating Map"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default Contact;
