import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campersSlice";

import CamperCard from "../components/CamperCard/CamperCard";
import Filters from "../components/Filters/Filters";

export default function CatalogPage() {
  const dispatch = useDispatch();

  const { items, isLoading } = useSelector((state) => state.campers);
  const { location, vehicleType, equipment } = useSelector(
    (state) => state.filters,
  );

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  // ⬇️ при зміні фільтрів — скидаємо Load More
  useEffect(() => {
    setVisibleCount(4);
  }, [location, vehicleType, equipment]);

  const filteredItems = items.filter((camper) => {
    if (
      location &&
      !camper.location.toLowerCase().includes(location.toLowerCase())
    ) {
      return false;
    }

    if (vehicleType && camper.form !== vehicleType) {
      return false;
    }

    if (equipment.length > 0) {
      for (const key of equipment) {
        if (key === "automatic") {
          if (camper.transmission !== "automatic") return false;
        } else {
          if (camper[key] !== true) return false;
        }
      }
    }

    return true;
  });

  const visibleItems = filteredItems.slice(0, visibleCount);

  return (
    <section className="catalogPage">
      <div className="catalogInner">
        <aside className="catalogFilters">
          <Filters />
        </aside>

        <div className="catalogContent">
          {isLoading && <p>Loading...</p>}

          {!isLoading && visibleItems.length === 0 && <p>No campers found</p>}

          <div className="catalogCards">
            {visibleItems.map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))}
          </div>

          {visibleItems.length < filteredItems.length && (
            <button
              className="loadMoreBtn"
              onClick={() => setVisibleCount((v) => v + 4)}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
