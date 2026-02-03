import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCampers } from "../redux/campersSlice";

import CamperCard from "../components/CamperCard/CamperCard";
import Filters from "../components/Filters/Filters";

export default function CatalogPage() {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.campers);

  const items = useSelector((state) => {
    const campers = state.campers.items;
    const { location, vehicleType, equipment } = state.filters;

    return campers.filter((camper) => {
      /* LOCATION (text search) */
      if (
        location &&
        !camper.location.toLowerCase().includes(location.toLowerCase())
      ) {
        return false;
      }

      /* VEHICLE TYPE (single select) */
      if (vehicleType && camper.form !== vehicleType) {
        return false;
      }

      /* EQUIPMENT (multi select) */
      for (const eq of equipment) {
        if (!camper[eq]) return false;
      }

      return true;
    });
  });

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <section className="catalogPage">
      <div className="catalogInner">
        {/* LEFT — FILTERS */}
        <aside className="catalogFilters">
          <Filters />
        </aside>

        {/* RIGHT — CARDS */}
        <div className="catalogContent">
          {isLoading && <p>Loading...</p>}

          {!isLoading && items.length === 0 && <p>No campers found</p>}

          <div className="catalogCards">
            {items.map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
