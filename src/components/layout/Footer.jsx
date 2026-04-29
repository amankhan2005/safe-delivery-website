import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E8EAED] pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-8">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* LOGO + ABOUT */}
          <div>
            <img src="/logo.png" alt="Safe Delivery" className="h-12 w-auto" />

            <p className="mt-4 text-[13px] text-[#6B7280] font-light leading-[1.8] max-w-[220px]">
              Fast, secure and reliable parcel delivery platform designed for modern logistics across Liberia.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }) => (
                <a
                  key={href + Icon.displayName}
                  href={href}
                  className="w-[34px] h-[34px] flex items-center justify-center rounded-full border border-[#E8EAED] text-[#9BA3AF] hover:border-[#1A6FD4] hover:text-[#1A6FD4] transition-colors duration-150"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <p
              className="text-[11px] font-semibold tracking-[2px] uppercase text-[#0B1F4B] mb-5"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Quick Links
            </p>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/customer", label: "Customer" },
                { to: "/drivers", label: "Drivers" },
                { to: "/about", label: "About" },
                { to: "/support", label: "Support" },
                { to: "/privacy", label: "Privacy Policy" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[13px] text-[#6B7280] font-light hover:text-[#1A6FD4] transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <p
              className="text-[11px] font-semibold tracking-[2px] uppercase text-[#0B1F4B] mb-5"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Contact
            </p>
            <ul className="space-y-3">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor"
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                      width={14} height={14}>
                      <circle cx="8" cy="7" r="2.5"/>
                      <path d="M8 1a6 6 0 016 6c0 4-6 9-6 9S2 11 2 7a6 6 0 016-6z"/>
                    </svg>
                  ),
                  text: "Monrovia, Liberia",
                },
                {
                  icon: (
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor"
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                      width={14} height={14}>
                      <rect x="1" y="3" width="14" height="10" rx="2"/>
                      <path d="M1 5l7 5 7-5"/>
                    </svg>
                  ),
                  text: "support@safedelivery.com",
                },
                {
                  icon: (
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor"
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                      width={14} height={14}>
                      <path d="M2 2.5C2 2.5 3 6 6 9s6.5 4 6.5 4l1.5-1.5-2.5-2.5-1.5 1c-.5-.3-1.8-1.2-2.5-2-.7-.8-1.7-2-2-2.5l1-1.5L4 2 2 2.5z"/>
                    </svg>
                  ),
                  text: "+231-XXX-XXXX",
                },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-center gap-2.5 text-[13px] text-[#6B7280] font-light">
                  <span className="text-[#1A6FD4] shrink-0">{icon}</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* DOWNLOAD APP */}
          <div>
            <p
              className="text-[11px] font-semibold tracking-[2px] uppercase text-[#0B1F4B] mb-5"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Download App
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  sub: "GET IT ON",
                  label: "Google Play",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="#374151" width={18} height={18}>
                      <path d="M3.18 23.76c.3.17.65.2.98.08l11.65-6.73-2.62-2.62-10.01 9.27zm-1.85-20.1C1.12 4 1 4.37 1 4.8v14.4c0 .43.12.8.33 1.1l.07.07 8.07-8.07v-.19L1.4 3.64l-.07.02zM20.4 10.4l-2.29-1.32-2.91 2.91 2.91 2.91 2.31-1.33c.66-.38.66-1 0-1.38l-.02.01zM4.16.24L15.81 6.97l-2.62 2.62L3.18.31A1.1 1.1 0 014.16.24z"/>
                    </svg>
                  ),
                },
                {
                  sub: "DOWNLOAD ON THE",
                  label: "App Store",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="#374151" width={18} height={18}>
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.37 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  ),
                },
              ].map(({ sub, label, icon }) => (
                <div
                  key={label}
                  className="relative flex items-center gap-3 bg-[#F1F3F5] border border-[#E8EAED] px-4 py-2.5 rounded-[10px] cursor-not-allowed opacity-80"
                >
                  <div className="opacity-60 flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <div className="text-left leading-tight">
                    <p className="text-[9px] text-[#9BA3AF] uppercase tracking-widest">{sub}</p>
                    <p
                      className="text-[12.5px] font-semibold text-[#374151]"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {label}
                    </p>
                  </div>
                  <span className="absolute -top-2 -right-2 bg-[#E8212B] text-white text-[9px] font-semibold px-2 py-0.5 rounded-full tracking-wide">
                    Soon
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-[#E8EAED] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[12.5px] text-[#9BA3AF] font-light">
            © {new Date().getFullYear()} Safe Delivery. All rights reserved.
          </p>
          <p className="text-[12.5px] text-[#9BA3AF] font-light">
            Designed &amp; Developed by{" "}
            <a
              href="https://www.webieapp.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#1A6FD4] font-medium hover:underline"
            >
              WebieApp
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}