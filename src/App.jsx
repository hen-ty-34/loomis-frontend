import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import InternationalLogistics from "./pages/InternationalLogistics";
import Storage from "./pages/Storage";
import CustomClearance from "./pages/CustomClearance";
import ExhibitionServices from "./pages/ExhibitionServices";
import CashManagement from "./pages/CashManagement";
import Admin from "./pages/Admin";

import About from "./pages/About";
import OurHistory from "./pages/OurHistory";
import OurValues from "./pages/OurValues";
import Sustainability from "./pages/Sustainability";

import Countries from "./pages/Countries";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import Tracking from "./pages/Tracking";

import AdminLogin from "./pages/AdminLogin";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Services */}
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/international-logistics"
          element={<InternationalLogistics />}
        />
        <Route
          path="/services/storage"
          element={<Storage />}
        />
        <Route
          path="/services/custom-clearance"
          element={<CustomClearance />}
        />
        <Route
          path="/services/exhibition-services"
          element={<ExhibitionServices />}
        />
        <Route
          path="/services/cash-management"
          element={<CashManagement />}
        />

        {/* About */}
        <Route path="/about" element={<About />} />
        <Route path="/about/history" element={<OurHistory />} />
        <Route path="/about/values" element={<OurValues />} />
        <Route
          path="/about/sustainability"
          element={<Sustainability />}
        />

        {/* Main */}
        <Route path="/countries" element={<Countries />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<Contact />} />

        {/* Our addition */}
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<ProtectedAdminRoute> <Admin /> </ProtectedAdminRoute>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;