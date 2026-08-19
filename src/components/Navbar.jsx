import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../images/logo.jpg";
import "./Navbar.css";

const servicesMenu = [
  { label: "International Logistics", path: "/services/international-logistics" },
  { label: "Custom Clearance", path: "/services/custom-clearance" },
  { label: "Storage", path: "/services/storage" },
  { label: "Exhibition Services", path: "/services/exhibition-services" },
  { label: "Cash Management Services", path: "/services/cash-management" },
  { label: "Pharma Logistics", path: "/services" },
  { label: "Diamonds & Jewellery", path: "/services" },
];

const aboutMenu = [
  { label: "Our History", path: "/about/history" },
  { label: "Our Values", path: "/about/values" },
  { label: "Sustainability", path: "/about/sustainability" },
];

const countriesMenu = [
  { label: "Loomis Africa", path: "/countries#loomis-africa" },
  { label: "Loomis Germany", path: "/countries#loomis-germany" },
  { label: "Loomis UK", path: "/countries#loomis-uk" },
  { label: "Loomis US", path: "/countries#loomis-us" },
  { label: "Loomis HK", path: "/countries#loomis-hk" },
  { label: "Loomis Singapore", path: "/countries#loomis-singapore" },
];

function Navbar() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const closeMenus = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to tracking page with search query
      navigate("/tracking", { state: { trackingNumber: searchQuery } });
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" onClick={closeMenus}>
          <img src={logoImg} alt="Loomis" className="navbar-logo-img" />
        </Link>

        <nav className={`navbar-links ${mobileOpen ? "open" : ""}`}>
          <div className={`nav-item ${openMenu === "services" ? "open" : ""}`}>
            <button
              type="button"
              className="nav-link-button"
              onClick={() => setOpenMenu((current) => (current === "services" ? null : "services"))}
            >
              Services <span className="nav-chevron">▾</span>
            </button>

            <div className="mega-menu service-menu">
              <div className="country-menu-inner">
                <div className="country-list-panel service-list-panel">
                  {servicesMenu.map((item) => (
                    <Link key={item.label} to={item.path} onClick={closeMenus}>
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="service-visual-panel" aria-hidden="true">
                  <div className="service-visual-copy">Find out how we can help you</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`nav-item ${openMenu === "about" ? "open" : ""}`}>
            <button
              type="button"
              className="nav-link-button"
              onClick={() => setOpenMenu((current) => (current === "about" ? null : "about"))}
            >
              About Us <span className="nav-chevron">▾</span>
            </button>

            <div className="mega-menu about-menu">
              <div className="country-menu-inner">
                <div className="country-list-panel about-list-panel">
                  {aboutMenu.map((item) => (
                    <Link key={item.label} to={item.path} onClick={closeMenus}>
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="about-visual-panel" aria-hidden="true">
                  <div className="service-visual-copy">About Loomis</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`nav-item ${openMenu === "countries" ? "open" : ""}`}>
            <button
              type="button"
              className="nav-link-button"
              onClick={() => setOpenMenu((current) => (current === "countries" ? null : "countries"))}
            >
              Countries <span className="nav-chevron">▾</span>
            </button>

            <div className="mega-menu country-menu">
              <div className="country-menu-inner">
                <div className="country-list-panel">
                  {countriesMenu.map((item) => (
                    <Link key={item.label} to={item.path} onClick={closeMenus}>
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="country-visual-panel" aria-hidden="true">
                  <div className="country-visual-glow" />
                </div>
              </div>
            </div>
          </div>

          <Link to="/industries" onClick={closeMenus}>Industries</Link>
          <Link to="/tracking" onClick={closeMenus}>Track Shipment</Link>
          <Link to="/contact" onClick={closeMenus}>Contact Us</Link>

          <button 
            type="button" 
            className="search-button" 
            aria-label="Search"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            ⌕
          </button>
        </nav>

        {searchOpen && (
          <div className="search-modal">
            <form className="search-form" onSubmit={handleSearch}>
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button type="submit" className="search-submit">Search</button>
              <button 
                type="button" 
                className="search-close"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
              >
                ✕
              </button>
            </form>
          </div>
        )}

        <button
          className={`mobile-menu ${mobileOpen ? "open" : ""}`}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;