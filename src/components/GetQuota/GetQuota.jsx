// src/components/GetQuota/GetQuota.jsx
import React from "react";
import styles from "./GetQuota.module.css";

const GetQuota = ({ closeQuota }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    closeQuota();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={closeQuota}>
          ✕
        </button>
        <h2 className={styles.heading}>Request a Quotation</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required className={styles.input} />
          <input type="email" name="email" placeholder="Your Email" required className={styles.input} />
          <input type="tel" name="phone" placeholder="Phone Number" required className={styles.input} />
          <input type="text" name="service" placeholder="Service Required" required className={styles.input} />
          <textarea name="message" placeholder="Project Details" className={styles.textarea} required></textarea>
          <button type="submit" className={styles.submitBtn}>
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetQuota;
