import React, { useState } from "react";
import styles from "./GetQuota.module.css";

const GetQuota = ({ closeQuota }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const cleanValue = value.replace(/[^0-9+]/g, "");
      setFormData({ ...formData, [name]: cleanValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = "Invalid email address.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\+?\d{10,15}$/.test(formData.phone))
      newErrors.phone = "Enter a valid phone number (10–15 digits).";
    if (!formData.service) newErrors.service = "Please select a service.";
    if (!formData.message.trim()) newErrors.message = "Project details required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form Data Submitted:", formData);
    alert("Your request has been submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
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
          <div className={styles.field}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

          <div className={styles.field}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>

          <div className={styles.field}>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              maxLength={15}
              className={styles.input}
              required
            />
            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
          </div>

          <div className={styles.field}>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={styles.input}
              required
            >
              <option value="">Select Service Required</option>
              <option value="PVD Coating">PVD Coating</option>
              <option value="Wooden Coating">Wooden Coating</option>
              <option value="Powder Coating">Powder Coating</option>
            </select>
            {errors.service && <span className={styles.error}>{errors.service}</span>}
          </div>

          <div className={styles.field}>
            <textarea
              name="message"
              placeholder="Project Details"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              rows={4}
              required
            ></textarea>
            {errors.message && <span className={styles.error}>{errors.message}</span>}
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetQuota;
