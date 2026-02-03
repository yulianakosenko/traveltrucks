import { useSelector } from "react-redux";
import CamperCard from "../components/CamperCard/CamperCard";

export default function FavoritesPage() {
  const favorites = useSelector((state) => state.favorites.items);
  const campers = useSelector((state) => state.campers.items);

  const favoriteCampers = campers.filter((camper) =>
    favorites.includes(camper.id),
  );

  return (
    <section className="catalogPage">
      <div className="catalogInner">
        <div className="catalogContent">
          <h2 style={{ marginBottom: 32 }}>Favorites</h2>

          {favoriteCampers.length === 0 && (
            <p>You don’t have any favorite campers yet.</p>
          )}

          <div className="catalogCards">
            {favoriteCampers.map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
