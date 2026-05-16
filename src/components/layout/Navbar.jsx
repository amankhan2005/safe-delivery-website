import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/customer", label: "Customer" },
  { to: "/drivers", label: "Drivers" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-200 ${
      scrolled
        ? "shadow-[0_1px_16px_rgba(0,0,0,0.07)]"
        : "border-b border-[#E8EAED]"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 h-[80px] gap-3">

        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src="/logo.png" alt="Safe Delivery" className="h-[58px] w-auto" />
        </Link>

        {/* Divider */}
        <div className="hidden lg:block w-px h-7 bg-[#E8EAED] shrink-0" />

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center flex-1 justify-center">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`relative text-[13px] px-4 py-1.5 tracking-[0.1px] transition-colors duration-150 ${
                pathname === to
                  ? "text-[#0D1117] font-medium"
                  : "text-[#9BA3AF] hover:text-[#0D1117] font-normal"
              }`}
            >
              {label}
              {pathname === to && (
                <span className="absolute bottom-[-1px] left-4 right-4 h-[1.5px] bg-[#1A6FD4]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Download CTA */}
        <Link
          to="/download"
          className="hidden lg:flex items-center gap-1.5 text-[12.5px] font-bold text-white bg-[#1A6FD4] px-5 py-[10px] rounded-[6px] hover:bg-[#1559B0] transition shrink-0"
          style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "0.5px" }}
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 1v7M3.5 5.5L6 8l2.5-2.5M1.5 9.5h9"/>
          </svg>
          Download App
        </Link>

        {/* Mobile Burger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="lg:hidden ml-auto flex flex-col gap-[5px] p-1.5 rounded-md hover:bg-slate-50 transition"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} className={`block w-5 h-[1.5px] bg-[#0D1117] rounded transition-all duration-200 ${
              open && i === 0 ? "rotate-45 translate-y-[6.5px]" :
              open && i === 1 ? "opacity-0" :
              open && i === 2 ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-[#E8EAED] bg-white px-6 pb-5 pt-3 flex flex-col gap-1">
          {NAV_LINKS.map(({ to, label }) => (
            <Link key={to} to={to}
              className={`px-3 py-2.5 rounded-[6px] text-[13.5px] transition ${
                pathname === to
                  ? "text-[#1A6FD4] font-medium bg-blue-50"
                  : "text-[#6B7280] hover:bg-slate-50 hover:text-[#1A6FD4]"
              }`}>
              {label}
            </Link>
          ))}

          <Link to="/download"
            className="mt-3 text-center text-[13px] font-bold text-white bg-[#1A6FD4] py-2.5 rounded-[6px] hover:bg-[#1559B0] transition"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Download App
          </Link>
        </div>
      )}
    </header>
  );
}