import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campersSlice";
import CamperCard from "../components/CamperCard/CamperCard";
import Filters from "../components/Filters/Filters";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const { items = [], isLoading } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <section className="catalogPage">
      <div className="catalogInner">
        {/* LEFT */}
        <aside className="catalogFilters">
          <Filters />
        </aside>

        {/* RIGHT */}
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
