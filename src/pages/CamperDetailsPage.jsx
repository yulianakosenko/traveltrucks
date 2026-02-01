import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCamperById } from "../api/campersApi";

export default function CamperDetailsPage() {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);

  useEffect(() => {
    getCamperById(id).then(setCamper);
  }, [id]);

  if (!camper) return <p>Loading...</p>;

  return (
    <section style={{ padding: 40 }}>
      <h2>{camper.name}</h2>
      <p>Price: {camper.price.toFixed(2).replace(".", ",")}</p>
    </section>
  );
}
