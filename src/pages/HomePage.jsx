import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="hero">
      <div className="heroInner">
        <div className="heroContent">
          <div className="heroText">
            <h1>Campers of your dreams</h1>
            <h2>You can find everything you want in our catalog</h2>
          </div>

          <Link to="/catalog" className="primaryBtn">
            View Now
          </Link>
        </div>
      </div>
    </section>
  );
}
