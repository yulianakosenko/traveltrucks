import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers, incrementPage } from "../redux/campersSlice";
import CamperCard from "../components/CamperCard/CamperCard";
import Filters from "../components/Filters/Filters";
import CamperSkeleton from "../components/Skeleton/CamperSkeleton";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const loadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchCampers());
  };

  return (
    <section style={{ padding: 40 }}>
      <Filters />

      {isLoading && <CamperSkeleton />}

      {items.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />

      {isLoading && items.length === 0 && (
  <p>No campers found. Try changing filters.</p>
)}

      ))}

      <button
        onClick={loadMore}
        style={{
          marginTop: 32,
          padding: "16px 32px",
          borderRadius: 200,
          border: "1px solid var(--gray-light)",
          background: "white",
          cursor: "pointer",
        }}
      >
        Load more
      </button>
    </section>
  );
}
