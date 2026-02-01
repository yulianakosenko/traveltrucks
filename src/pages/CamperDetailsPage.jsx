import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCamperById } from "../api/campersApi";
import Gallery from "../components/Gallery/Gallery";
import Features from "../components/Features/Features";
import Reviews from "../components/Reviews/Reviews";
import BookingForm from "../components/BookingForm/BookingForm";

export default function CamperDetailsPage() {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);

  useEffect(() => {
    getCamperById(id).then(setCamper);
  }, [id]);

  if (!camper) return <p style={{ padding: 40 }}>Loading...</p>;

  return (
    <section style={{ padding: 40 }}>
      <h2>{camper.name}</h2>

      <Gallery images={camper.gallery} />

      <p>€ {camper.price.toFixed(2).replace(".", ",")}</p>

      <Features camper={camper} />

      <Reviews reviews={camper.reviews} />

      <BookingForm />
    </section>
  );
}
