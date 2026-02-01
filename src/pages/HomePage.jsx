import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section style={{ padding: 40 }}>
      <h1>TravelTrucks</h1>
      <p>Find your perfect camper</p>
      <Link to="/catalog">View Now</Link>
    </section>
  );
}
