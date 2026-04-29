import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import RouteScrollTop from "../components/RouteScrollTop";  

// Pages
import Home from "../pages/home/Home";
import Customer from "../pages/customer/Customer";
import Drivers from "../pages/drivers/Drivers";
import About from "../pages/about/About";
import Support from "../pages/support/Support";
import Download from "../pages/download/Download";
import Privacy from "../pages/PrivacyPage";

// 🔹 Layout Wrapper
function Layout({ children }) {
  return (
    <>
      <RouteScrollTop /> {/* ✅ IMPORTANT */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/customer" element={<Layout><Customer /></Layout>} />
        <Route path="/drivers" element={<Layout><Drivers /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/support" element={<Layout><Support /></Layout>} />
        <Route path="/download" element={<Layout><Download /></Layout>} />
        <Route path="/privacy" element={<Layout><Privacy /></Layout>} />

      </Routes>
    </BrowserRouter>
  );
}