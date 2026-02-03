import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCampers } from "../redux/campersSlice";
import {
  selectFilteredCampers,
  selectIsLoading,
} from "../redux/campersSelectors";

import CamperCard from "../components/CamperCard/CamperCard";
import Filters from "../components/Filters/Filters";

export default function CatalogPage() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const items = useSelector(selectFilteredCampers);

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
