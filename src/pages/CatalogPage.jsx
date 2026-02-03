import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campersSlice";

import CamperCard from "../components/CamperCard/CamperCard";
import Filters from "../components/Filters/Filters";

const PAGE_SIZE = 4;

export default function CatalogPage() {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((state) => state.campers);

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const visibleItems = items.slice(0, visibleCount);

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
            {visibleItems.map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))}
          </div>

          {/* LOAD MORE */}
          {!isLoading && visibleCount < items.length && (
            <button
              type="button"
              className="loadMore"
              onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
            >
              Load more
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
