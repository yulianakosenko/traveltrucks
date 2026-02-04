import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCamperById } from "../api/campersApi";
import { formatPrice } from "../utils/formatPrice";
import Gallery from "../components/Gallery/Gallery";
import Features from "../components/Features/Features";
import Reviews from "../components/Reviews/Reviews";
import BookingForm from "../components/BookingForm/BookingForm";

export default function CamperDetailsPage() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "features";

  const [camper, setCamper] = useState(null);

  useEffect(() => {
    getCamperById(id).then(setCamper);
  }, [id]);

  if (!camper) return <p className="details-loading">Loading...</p>;

  return (
    <section className="details-page">
      {/* HEADER */}
      <div className="details-header">
        <h2 className="details-title">{camper.name}</h2>

        <div className="details-meta">
          <button
            className="details-reviews-link"
            onClick={() => setSearchParams({ tab: "reviews" })}
          >
            ⭐ {camper.rating} ({camper.reviews.length} Reviews)
          </button>

          <span className="details-location">📍{camper.location}</span>
        </div>

        <p className="details-price">€{formatPrice(camper.price)}</p>
      </div>

      {/* GALLERY */}
      <Gallery images={camper.gallery} />
      <p className="details-description">{camper.description}</p>

      {/* TABS */}
      <div className="details-tabs">
        <button
          className={`details-tab ${activeTab === "features" ? "active" : ""}`}
          onClick={() => setSearchParams({ tab: "features" })}
        >
          Features
        </button>

        <button
          className={`details-tab ${activeTab === "reviews" ? "active" : ""}`}
          onClick={() => setSearchParams({ tab: "reviews" })}
        >
          Reviews
        </button>
      </div>

      {/* CONTENT */}
      <div className="details-content">
        <div className="details-left">
          {activeTab === "features" && <Features camper={camper} />}
          {activeTab === "reviews" && <Reviews reviews={camper.reviews} />}
        </div>

        <div className="details-right">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
