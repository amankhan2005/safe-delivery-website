// ── Real Google Play SVG (official 4-color) ──
const GooglePlayIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M56 22L292 260 56 498c-5-5-8-12-8-19V41c0-7 3-14 8-19z" fill="#00D2FF"/>
    <path d="M56 22l236 238 80-80L112 14C96 5 72 9 56 22z" fill="#00F076"/>
    <path d="M56 498l236-238 80 80L112 506c-16 9-40 5-56-8z" fill="#FF3D57"/>
    <path d="M372 180l-80 80 80 80 72-41c21-12 21-46 0-58l-72-61z" fill="#FFCA28"/>
  </svg>
);

// ── Real Apple iOS icon ──
const AppleIcon = ({ size = 22, color = "#374151" }) => (
  <svg width={size} height={size} viewBox="0 0 496.255 608.728" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z"
      fill={color}
    />
  </svg>
);

const StoreButtons = ({ playUrl }) => {
  const buttons = [
    {
      sub: "GET IT ON",
      label: "Google Play",
      href: playUrl,
      live: true,
      icon: <GooglePlayIcon size={22} />,
    },
    {
      sub: "DOWNLOAD ON THE",
      label: "App Store",
      href: null,
      live: false,
      icon: <AppleIcon size={22} color="#374151" />,
    },
  ];

  return (
    <div className="flex gap-3 mt-8 justify-center md:justify-start">
      {buttons.map(({ sub, label, icon, href, live }) =>
        live ? (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-3 bg-white border border-[#D1D5DB] hover:border-[#1A6FD4] hover:shadow-md transition-all duration-200 px-4 py-2.5 rounded-xl"
          >
            <div className="w-[22px] h-[22px] flex items-center justify-center shrink-0">
              {icon}
            </div>
            <div className="text-left leading-tight">
              <p className="text-[9px] text-[#9BA3AF] uppercase tracking-widest">{sub}</p>
              <p className="text-[13px] font-semibold text-[#374151]"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                {label}
              </p>
            </div>
            <span className="absolute -top-2.5 -right-2 flex items-center gap-1 bg-[#16A34A] text-white text-[8px] font-bold px-2 py-0.5 rounded-full tracking-wide whitespace-nowrap">
              ↓ Download Now
            </span>
          </a>
        ) : (
          <div
            key={label}
            className="relative flex items-center gap-3 bg-[#F1F3F5] border border-[#E8EAED] px-4 py-2.5 rounded-xl cursor-not-allowed opacity-75"
          >
            <div className="w-[22px] h-[22px] opacity-60 flex items-center justify-center shrink-0">
              {icon}
            </div>
            <div className="text-left leading-tight">
              <p className="text-[9px] text-[#9BA3AF] uppercase tracking-widest">{sub}</p>
              <p className="text-[13px] font-semibold text-[#374151]"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                {label}
              </p>
            </div>
            <span className="absolute -top-2 -right-2 bg-[#E8212B] text-white text-[9px] font-semibold px-2 py-0.5 rounded-full tracking-wide">
              Coming Soon
            </span>
          </div>
        )
      )}
    </div>
  );
};

const FeatureList = ({ items, color }) => (
  <ul className="mt-6 space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-center gap-3 text-[13.5px] text-[#374151]">
        <span
          className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
          style={{ background: color }}
        >
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <path d="M2 4.5l1.8 1.8 3.2-3.2" stroke="#fff" strokeWidth="1.4"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        {item}
      </li>
    ))}
  </ul>
);

const PhoneMockup = ({ src, alt }) => (
  <div className="flex justify-center">
    <img
      src={src}
      alt={alt}
      className="w-[260px] rounded-[28px]"
      style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.12))" }}
    />
  </div>
);

export default function AppPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-8">

        {/* Heading */}
        <div className="text-center max-w-[560px] mx-auto">
          <p className="text-[10px] tracking-[3px] uppercase text-[#9BA3AF] font-semibold"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Mobile Apps
          </p>
          <h2 className="mt-2.5 text-[32px] font-bold text-[#0B1F4B] leading-tight tracking-[-0.8px]"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Everything You Need in One App
          </h2>
          <p className="mt-3 text-[14px] text-[#6B7280] font-light leading-relaxed">
            Designed for customers and drivers to make delivery fast, secure and effortless.
          </p>
        </div>

        {/* Content */}
        <div className="mt-24 space-y-28">

          {/* ── CUSTOMER APP ── */}
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.5px] px-2.5 py-1 rounded-full bg-blue-50 text-[#1A6FD4] mb-4">
                <span className="w-[5px] h-[5px] rounded-full bg-[#1A6FD4]" />
                For Customers
              </span>
              <h3 className="text-[26px] font-bold text-[#0B1F4B] tracking-[-0.4px]"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                Customer App
              </h3>
              <p className="mt-3 text-[14px] text-[#6B7280] font-light leading-relaxed max-w-md">
                Book deliveries in seconds and track your parcel in real-time with complete security.
              </p>
              <FeatureList
                color="#1A6FD4"
                items={["Easy booking in seconds", "Live driver tracking", "Secure OTP delivery", "Order history & details"]}
              />
              <StoreButtons playUrl="https://play.google.com/store/apps/details?id=com.safedelivery.customer&pcampaignid=web_share" />
            </div>
            <PhoneMockup src="/customer-app.png" alt="Customer App" />
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#E8EAED]" />

          {/* ── DRIVER APP ── */}
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div className="order-2 md:order-1">
              <PhoneMockup src="/driver-app.png" alt="Driver App" />
            </div>
            <div className="order-1 md:order-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.5px] px-2.5 py-1 rounded-full bg-red-50 text-[#E8212B] mb-4">
                <span className="w-[5px] h-[5px] rounded-full bg-[#E8212B]" />
                For Drivers
              </span>
              <h3 className="text-[26px] font-bold text-[#0B1F4B] tracking-[-0.4px]"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                Driver App
              </h3>
              <p className="mt-3 text-[14px] text-[#6B7280] font-light leading-relaxed max-w-md">
                Accept orders, manage deliveries and earn money with full flexibility.
              </p>
              <FeatureList
                color="#E8212B"
                items={["Accept or reject orders", "Track earnings easily", "Upload delivery proof", "Flexible working hours"]}
              />
              <StoreButtons playUrl="https://play.google.com/store/apps/details?id=com.saferidedelivery.rider&pcampaignid=web_share" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}