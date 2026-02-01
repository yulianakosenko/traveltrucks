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
    <section className="container">
      <Filters />

      {isLoading && <CamperSkeleton />}

      {!isLoading && items.length === 0 && (
        <p>No campers found. Try changing filters.</p>
      )}

      {items.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}

      {items.length > 0 && (
        <button className="loadMoreBtn" onClick={loadMore}>
          Load more
        </button>
      )}
    </section>
  );
}
