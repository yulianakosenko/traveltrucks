import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";
import CamperDetailsPage from "../pages/CamperDetailsPage";

export default function AppRouter() {
  return (
    <>
      <header style={{ padding: 24 }}>
        <NavLink to="/" style={{ marginRight: 16 }}>
          Home
        </NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />} />
      </Routes>
    </>
  );
}
