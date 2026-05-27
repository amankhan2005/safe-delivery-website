// ── Real Google Play SVG (official 4-color) ──
const GooglePlayIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M56 22L292 260 56 498c-5-5-8-12-8-19V41c0-7 3-14 8-19z" fill="#00D2FF"/>
    <path d="M56 22l236 238 80-80L112 14C96 5 72 9 56 22z" fill="#00F076"/>
    <path d="M56 498l236-238 80 80L112 506c-16 9-40 5-56-8z" fill="#FF3D57"/>
    <path d="M372 180l-80 80 80 80 72-41c21-12 21-46 0-58l-72-61z" fill="#FFCA28"/>
  </svg>
);

// ── Real Apple iOS icon ──
const AppleIcon = ({ size = 20, color = "#374151" }) => (
  <svg width={size} height={size} viewBox="0 0 496.255 608.728" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z"
      fill={color}
    />
  </svg>
);

const CUSTOMER_PLAY_URL = "https://play.google.com/store/apps/details?id=com.safedelivery.customer&pcampaignid=web_share";

const StoreButtons = ({ variant = "light" }) => {
  const isDark = variant === "dark";
  return (
    <div className="flex flex-row flex-wrap gap-3 mt-7">
      {/* Google Play — live */}
      <a
        href={CUSTOMER_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative flex items-center gap-2.5 px-3.5 py-2 rounded-xl border transition-all duration-200 ${
          isDark
            ? "bg-white/15 border-white/30 hover:bg-white/25"
            : "bg-white border-[#D1D5DB] hover:border-[#1A6FD4] hover:shadow-md"
        }`}
      >
        <div className="shrink-0"><GooglePlayIcon size={20} /></div>
        <div className="text-left leading-tight">
          <p className={`text-[9px] uppercase tracking-widest ${isDark ? "text-white/50" : "text-[#9BA3AF]"}`}>Get it on</p>
          <p className={`text-[12px] font-semibold ${isDark ? "text-white" : "text-[#374151]"}`}
            style={{ fontFamily: "'Syne', sans-serif" }}>Google Play</p>
        </div>
        <span className="absolute -top-2.5 -right-2 flex items-center gap-1 bg-[#16A34A] text-white text-[8px] font-bold px-2 py-0.5 rounded-full tracking-wide whitespace-nowrap">
          ↓ Download Now
        </span>
      </a>

      {/* App Store — soon */}
      <div className={`relative flex items-center gap-2.5 px-3.5 py-2 rounded-xl border cursor-not-allowed opacity-75 ${
        isDark ? "bg-white/10 border-white/20" : "bg-[#F1F3F5] border-[#E8EAED]"
      }`}>
        <div className="opacity-60 shrink-0">
          <AppleIcon size={20} color={isDark ? "#fff" : "#374151"} />
        </div>
        <div className="text-left leading-tight">
          <p className={`text-[9px] uppercase tracking-widest ${isDark ? "text-white/50" : "text-[#9BA3AF]"}`}>Download on the</p>
          <p className={`text-[12px] font-semibold ${isDark ? "text-white" : "text-[#374151]"}`}
            style={{ fontFamily: "'Syne', sans-serif" }}>App Store</p>
        </div>
        <span className="absolute -top-2 -right-2 bg-[#E8212B] text-white text-[9px] font-semibold px-2 py-0.5 rounded-full tracking-wide">
          Soon
        </span>
      </div>
    </div>
  );
};

const appFeatures = [
  {
    title: "Real-time Tracking",
    desc: "Watch your rider move live on the map from pickup straight to your door.",
    tag: "Live", tagClass: "bg-green-50 text-[#16A34A]",
    iconBg: "bg-green-50", hoverBar: "group-hover:bg-[#16A34A]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <circle cx="12" cy="10" r="3"/>
        <path d="M12 2a8 8 0 018 8c0 5-8 13-8 13S4 15 4 10a8 8 0 018-8z"/>
      </svg>
    ),
  },
  {
    title: "Secure OTP Delivery",
    desc: "Parcels are only handed over after a one-time PIN is confirmed — zero wrong deliveries.",
    tag: "Verified", tagClass: "bg-red-50 text-[#E8212B]",
    iconBg: "bg-red-50", hoverBar: "group-hover:bg-[#E8212B]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E8212B" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <path d="M12 2L4 6v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V6L12 2z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    title: "Easy Booking",
    desc: "Enter pickup and drop-off, confirm details and book your delivery in under a minute.",
    tag: "Simple", tagClass: "bg-blue-50 text-[#1A6FD4]",
    iconBg: "bg-blue-50", hoverBar: "group-hover:bg-[#1A6FD4]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1A6FD4" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <path d="M8 12h8M12 8v8"/>
      </svg>
    ),
  },
  {
    title: "Cash on Delivery",
    desc: "No upfront payments needed — pay when your parcel arrives safely at its destination.",
    tag: "Flexible", tagClass: "bg-green-50 text-[#16A34A]",
    iconBg: "bg-green-50", hoverBar: "group-hover:bg-[#16A34A]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-4 0v2"/>
        <path d="M12 12v4M10 14h4"/>
      </svg>
    ),
  },
  {
    title: "Order History",
    desc: "Access all past deliveries, re-order with one tap and view delivery proof anytime.",
    tag: "Records", tagClass: "bg-amber-50 text-[#D97706]",
    iconBg: "bg-amber-50", hoverBar: "group-hover:bg-[#D97706]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
        <path d="M14 2v6h6M8 13h8M8 17h5"/>
      </svg>
    ),
  },
  {
    title: "Live Driver Updates",
    desc: "Get push notifications at every stage — accepted, picked up, en route and delivered.",
    tag: "Tracking", tagClass: "bg-blue-50 text-[#1A6FD4]",
    iconBg: "bg-blue-50", hoverBar: "group-hover:bg-[#1A6FD4]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1A6FD4" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
];

const stats = [
  { value: "2,000+", label: "Deliveries Completed" },
  { value: "500+", label: "Active Customers" },
  { value: "100+", label: "Verified Riders" },
  { value: "15+", label: "Areas Covered" },
];

export default function About() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white border-b border-[#E8EAED]">
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 py-24 md:py-32 text-center">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.5px] px-2.5 py-1 rounded-full bg-blue-50 text-[#1A6FD4] border border-blue-100 mb-6">
            <span className="w-[5px] h-[5px] rounded-full bg-[#1A6FD4]" />
            Our Story
          </span>
          <h1
            className="text-[40px] md:text-[60px] lg:text-[72px] font-extrabold text-[#0B1F4B] leading-[1.03] tracking-[-2.5px] max-w-3xl mx-auto"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Built for Liberia's{" "}
            <span className="text-[#E8212B]">Delivery</span>{" "}
            Future
          </h1>
          <p className="mt-5 text-[15px] text-[#6B7280] font-light leading-relaxed max-w-lg mx-auto">
            Safe Delivery is a fast, secure and reliable parcel delivery platform
            connecting customers and riders across Liberia.
          </p>

         
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <p className="text-[10px] tracking-[3px] uppercase text-[#9BA3AF] font-semibold mb-3"
              style={{ fontFamily: "'Syne', sans-serif" }}>Who We Are</p>
            <h2
              className="text-[28px] md:text-[36px] font-bold text-[#0B1F4B] tracking-[-0.8px] leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Delivering Trust, One{" "}
              <span className="text-[#1A6FD4]">Parcel</span>{" "}
              at a Time
            </h2>
            <p className="mt-4 text-[14px] text-[#6B7280] font-light leading-[1.9]">
              Safe Delivery connects customers with trusted drivers to ensure
              every parcel reaches its destination safely and on time. Our system
              is built to make logistics simple, fast and secure across Liberia.
            </p>
            <p className="mt-3 text-[14px] text-[#6B7280] font-light leading-[1.9]">
              We aim to simplify the delivery experience with real-time tracking,
              secure verification, and flexible options for both customers and
              delivery partners.
            </p>
          </div>

          {/* Right — mission + vision cards */}
          <div className="grid gap-5">
            {[
              {
                label: "Our Mission",
                text: "To make delivery services simple, fast and secure for everyone across Liberia.",
                tagClass: "bg-blue-50 text-[#1A6FD4]",
                borderAccent: "border-l-[#1A6FD4]",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#1A6FD4" strokeWidth="1.6"
                    strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M12 8v4l3 3"/>
                  </svg>
                ),
              },
              {
                label: "Our Vision",
                text: "To become the most trusted and reliable delivery platform across Africa.",
                tagClass: "bg-red-50 text-[#E8212B]",
                borderAccent: "border-l-[#E8212B]",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#E8212B" strokeWidth="1.6"
                    strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                ),
              },
              {
                label: "Our Values",
                text: "Speed, transparency and safety in every delivery — no compromises, ever.",
                tagClass: "bg-green-50 text-[#16A34A]",
                borderAccent: "border-l-[#16A34A]",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="1.6"
                    strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
                    <path d="M12 2L4 6v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V6L12 2z"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                ),
              },
            ].map(({ label, text, tagClass, borderAccent, icon }) => (
              <div key={label}
                className={`flex gap-4 p-5 bg-[#F7F8FA] border border-[#E8EAED] border-l-4 ${borderAccent} rounded-[14px]`}>
                <div className="shrink-0 mt-0.5">{icon}</div>
                <div>
                  <span className={`inline-flex items-center gap-1 text-[10px] font-semibold tracking-[0.5px] px-2 py-0.5 rounded-full mb-2 ${tagClass}`}>
                    <span className="w-[4px] h-[4px] rounded-full bg-current" />{label}
                  </span>
                  <p className="text-[13.5px] text-[#374151] font-light leading-[1.8]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP FEATURES ── */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="text-center max-w-[520px] mx-auto">
            <p className="text-[10px] tracking-[3px] uppercase text-[#9BA3AF] font-semibold"
              style={{ fontFamily: "'Syne', sans-serif" }}>Platform Features</p>
            <h2
              className="mt-2.5 text-[28px] md:text-[32px] font-bold text-[#0B1F4B] tracking-[-0.5px]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Everything Built to Deliver
            </h2>
            <p className="mt-2.5 text-[14px] text-[#6B7280] font-light leading-relaxed">
              Every feature is designed around speed, safety and simplicity.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {appFeatures.map(({ title, desc, tag, tagClass, iconBg, hoverBar, icon }) => (
              <div key={title}
                className="group relative flex flex-col p-7 bg-white border border-[#E8EAED] rounded-[14px] hover:bg-[#FAFBFF] hover:border-[#C7DCFA] transition-colors duration-200 overflow-hidden">
                <span className={`absolute top-0 left-0 right-0 h-[3px] transition-colors duration-200 ${hoverBar}`} />
                <span className={`inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.5px] px-2.5 py-1 rounded-full w-fit mb-4 ${tagClass}`}>
                  <span className="w-[5px] h-[5px] rounded-full bg-current" />{tag}
                </span>
                <div className={`w-[44px] h-[44px] rounded-[10px] flex items-center justify-center ${iconBg}`}>{icon}</div>
                <h3 className="mt-4 text-[15px] font-bold text-[#0B1F4B] tracking-[-0.2px]"
                  style={{ fontFamily: "'Syne', sans-serif" }}>{title}</h3>
                <p className="mt-2 text-[13px] text-[#6B7280] font-light leading-[1.8] flex-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP MOCKUP ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.5px] px-2.5 py-1 rounded-full bg-blue-50 text-[#1A6FD4] mb-4">
              <span className="w-[5px] h-[5px] rounded-full bg-[#1A6FD4]" />
              Mobile App
            </span>
            <h2
              className="text-[28px] md:text-[36px] font-bold text-[#0B1F4B] tracking-[-0.8px] leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              One App for Every{" "}
              <span className="text-[#E8212B]">Delivery</span>
            </h2>
            <p className="mt-4 text-[14px] text-[#6B7280] font-light leading-relaxed max-w-md">
              Our app makes parcel delivery simple and fast with a smooth,
              intuitive interface built for everyone in Liberia.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Book a delivery in under 60 seconds",
                "Track your driver in real-time on the map",
                "Confirm receipt securely with OTP",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-[13.5px] text-[#374151]">
                  <span className="w-[16px] h-[16px] rounded-full bg-[#1A6FD4] flex items-center justify-center shrink-0">
                    <svg width="8" height="8" viewBox="0 0 9 9" fill="none">
                      <path d="M2 4.5l1.8 1.8 3.2-3.2" stroke="#fff" strokeWidth="1.4"
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {f}
                </div>
              ))}
            </div>
            <StoreButtons variant="light" />
          </div>
          <div className="flex justify-center">
            <img
              src="/customer-app.png"
              alt="Safe Delivery App"
              className="h-[420px] w-auto object-contain"
              style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.12))" }}
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="bg-[#0B1F4B] rounded-2xl px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            {/* bg glow */}
            <div className="absolute top-[-60px] right-[-60px] w-[300px] h-[300px] rounded-full bg-[#1A6FD4] opacity-[0.08] blur-[60px] pointer-events-none" />
            <div>
              <p className="text-[11px] tracking-[2.5px] uppercase text-[#6B9FE4] font-semibold mb-3"
                style={{ fontFamily: "'Syne', sans-serif" }}>Get Started</p>
              <h2
                className="text-[28px] md:text-[36px] font-bold text-white leading-tight tracking-[-0.8px]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Join Safe Delivery{" "}
                <span className="text-[#E8212B]">Today</span>
              </h2>
              <p className="mt-3 text-[14px] text-[#9BA3AF] font-light leading-relaxed max-w-md">
                Whether you're sending a parcel or looking to earn — Safe Delivery has you covered.
              </p>
            </div>
            <div className="shrink-0 relative z-10">
              <StoreButtons variant="dark" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}