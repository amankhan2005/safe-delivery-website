const StoreButtons = () => (
  <div className="flex flex-wrap gap-3 mt-8">
    {[
      {
        sub: "GET IT ON",
        label: "Google Play",
        icon: (
          <svg viewBox="0 0 24 24" fill="#374151" width={22} height={22}>
            <path d="M3.18 23.76c.3.17.65.2.98.08l11.65-6.73-2.62-2.62-10.01 9.27zm-1.85-20.1C1.12 4 1 4.37 1 4.8v14.4c0 .43.12.8.33 1.1l.07.07 8.07-8.07v-.19L1.4 3.64l-.07.02zM20.4 10.4l-2.29-1.32-2.91 2.91 2.91 2.91 2.31-1.33c.66-.38.66-1 0-1.38l-.02.01zM4.16.24L15.81 6.97l-2.62 2.62L3.18.31A1.1 1.1 0 014.16.24z" />
          </svg>
        ),
      },
      {
        sub: "DOWNLOAD ON THE",
        label: "App Store",
        icon: (
          <svg viewBox="0 0 24 24" fill="#374151" width={22} height={22}>
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.37 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
        ),
      },
    ].map(({ sub, label, icon }) => (
      <div
        key={label}
        className="relative flex items-center gap-3 bg-[#F1F3F5] border border-[#E8EAED] px-4 py-2.5 rounded-xl cursor-not-allowed opacity-80"
      >
        <div className="w-[22px] h-[22px] opacity-60 flex items-center justify-center">
          {icon}
        </div>
        <div className="text-left leading-tight">
          <p className="text-[9px] text-[#9BA3AF] uppercase tracking-widest">{sub}</p>
          <p
            className="text-[13px] font-semibold text-[#374151]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {label}
          </p>
        </div>
        <span className="absolute -top-2 -right-2 bg-[#E8212B] text-white text-[9px] font-semibold px-2 py-0.5 rounded-full tracking-wide">
          Coming Soon
        </span>
      </div>
    ))}
  </div>
);

const FeatureList = ({ items, color }) => (
  <ul className="mt-6 space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-center gap-3 text-[13.5px] text-[#374151]">
        <span
          className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
          style={{ background: color }}
        >
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <path
              d="M2 4.5l1.8 1.8 3.2-3.2"
              stroke="#fff"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
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
          <p
            className="text-[10px] tracking-[3px] uppercase text-[#9BA3AF] font-semibold"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Mobile Apps
          </p>
          <h2
            className="mt-2.5 text-[32px] md:text-[40px] font-bold text-[#0B1F4B] leading-tight tracking-[-0.8px]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
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

            {/* Text */}
            <div>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.5px] px-2.5 py-1 rounded-full bg-blue-50 text-[#1A6FD4] mb-4">
                <span className="w-[5px] h-[5px] rounded-full bg-[#1A6FD4]" />
                For Customers
              </span>

              <h3
                className="text-[26px] font-bold text-[#0B1F4B] tracking-[-0.4px]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Customer App
              </h3>

              <p className="mt-3 text-[14px] text-[#6B7280] font-light leading-relaxed max-w-md">
                Book deliveries in seconds and track your parcel in real-time with complete security.
              </p>

              <FeatureList
                color="#1A6FD4"
                items={[
                  "Easy booking in seconds",
                  "Live driver tracking",
                  "Secure OTP delivery",
                  "Order history & details",
                ]}
              />

              <StoreButtons />
            </div>

            {/* Phone */}
            <PhoneMockup src="/customer-app.png" alt="Customer App" />
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#E8EAED]" />

          {/* ── DRIVER APP ── */}
          <div className="grid md:grid-cols-2 items-center gap-16">

            {/* Phone — left on desktop */}
            <div className="order-2 md:order-1">
              <PhoneMockup src="/driver-app.png" alt="Driver App" />
            </div>

            {/* Text — right on desktop */}
            <div className="order-1 md:order-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.5px] px-2.5 py-1 rounded-full bg-red-50 text-[#E8212B] mb-4">
                <span className="w-[5px] h-[5px] rounded-full bg-[#E8212B]" />
                For Drivers
              </span>

              <h3
                className="text-[26px] font-bold text-[#0B1F4B] tracking-[-0.4px]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Driver App
              </h3>

              <p className="mt-3 text-[14px] text-[#6B7280] font-light leading-relaxed max-w-md">
                Accept orders, manage deliveries and earn money with full flexibility.
              </p>

              <FeatureList
                color="#E8212B"
                items={[
                  "Accept or reject orders",
                  "Track earnings easily",
                  "Upload delivery proof",
                  "Flexible working hours",
                ]}
              />

              <StoreButtons />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}