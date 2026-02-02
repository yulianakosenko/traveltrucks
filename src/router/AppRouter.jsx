import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";
import CamperDetailsPage from "../pages/CamperDetailsPage";


export default function AppRouter() {
  return (
    <>
      <header className="header">
        <div className="headerInner">
          <NavLink to="/" className="logo">
            <img src="/icons/logo.svg" alt="Logo" />
          </NavLink>

          <nav className="nav">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/catalog">Catalog</NavLink>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />} />
      </Routes>
    </>
  );
}
