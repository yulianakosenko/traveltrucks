import { useState } from "react";
import styles from "./BookingForm.module.css";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking successful!");
    setForm({ name: "", email: "", date: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Book your camper</h3>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />

      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        required
      />

      <button type="submit">Send</button>
    </form>
  );
}
