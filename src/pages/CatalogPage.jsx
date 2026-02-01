import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campersSlice";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <section style={{ padding: 40 }}>
      <h2>Catalog</h2>
      {isLoading && <p>Loading...</p>}
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </section>
  );
}
