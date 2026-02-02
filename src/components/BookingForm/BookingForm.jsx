import { useState } from "react";
import styles from "./BookingForm.module.css";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Booking successful!");

    setForm({
      name: "",
      email: "",
      date: "",
      comments: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Book your camper</h3>

      <input
        name="name"
        placeholder="Name*"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email*"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        required
      />

      <textarea
        name="comments"
        placeholder="Comment"
        value={form.comments}
        onChange={handleChange}
        rows={4}
      />

      <button type="submit">Send</button>
    </form>
  );
}
