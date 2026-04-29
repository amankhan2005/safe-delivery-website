const StoreButtons = ({ variant = "light" }) => (
  <div className="flex flex-wrap gap-3 mt-7">
    {[
      {
        label: "Google Play", sub: "Get it on",
        icon: (
          <svg viewBox="0 0 24 24" fill={variant === "dark" ? "#fff" : "#374151"} width={20} height={20}>
            <path d="M3.18 23.76c.3.17.65.2.98.08l11.65-6.73-2.62-2.62-10.01 9.27zm-1.85-20.1C1.12 4 1 4.37 1 4.8v14.4c0 .43.12.8.33 1.1l.07.07 8.07-8.07v-.19L1.4 3.64l-.07.02zM20.4 10.4l-2.29-1.32-2.91 2.91 2.91 2.91 2.31-1.33c.66-.38.66-1 0-1.38l-.02.01zM4.16.24L15.81 6.97l-2.62 2.62L3.18.31A1.1 1.1 0 014.16.24z"/>
          </svg>
        ),
      },
      {
        label: "App Store", sub: "Download on the",
        icon: (
          <svg viewBox="0 0 24 24" fill={variant === "dark" ? "#fff" : "#374151"} width={20} height={20}>
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.37 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        ),
      },
    ].map(({ label, sub, icon }) => (
      <div key={label}
        className={`relative flex items-center gap-2.5 px-3.5 py-2 rounded-xl cursor-not-allowed opacity-80 border ${
          variant === "dark"
            ? "bg-white/10 border-white/20"
            : "bg-[#F1F3F5] border-[#E8EAED]"
        }`}>
        <div className="opacity-60 shrink-0">{icon}</div>
        <div className="text-left leading-tight">
          <p className={`text-[9px] uppercase tracking-widest ${variant === "dark" ? "text-white/50" : "text-[#9BA3AF]"}`}>{sub}</p>
          <p className={`text-[12px] font-semibold ${variant === "dark" ? "text-white" : "text-[#374151]"}`}
            style={{ fontFamily: "'Syne', sans-serif" }}>{label}</p>
        </div>
        <span className="absolute -top-2 -right-2 bg-[#E8212B] text-white text-[9px] font-semibold px-2 py-0.5 rounded-full tracking-wide">
          Soon
        </span>
      </div>
    ))}
  </div>
);

export default function Download() {
  return (
    <div className="bg-white">

      {/* ── HEADER ── */}
      <section className="bg-[#F7F8FA] border-b border-[#E8EAED]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 text-center">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.5px] px-2.5 py-1 rounded-full bg-blue-50 text-[#1A6FD4] mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1A6FD4] opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1A6FD4]" />
            </span>
            Launching Soon
          </span>

          <h1
            className="text-[36px] md:text-[52px] font-extrabold text-[#0B1F4B] leading-[1.05] tracking-[-2px]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Download Safe Delivery App
          </h1>
          <p className="mt-4 text-[14px] text-[#6B7280] font-light leading-relaxed max-w-md mx-auto">
            Our apps are launching soon on Play Store and App Store.
            Choose your role and get ready.
          </p>

          {/* Platform pills */}
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            {[
              { label: "Android — Google Play", icon: (
                <svg viewBox="0 0 24 24" fill="#1A6FD4" width={14} height={14}>
                  <path d="M3.18 23.76c.3.17.65.2.98.08l11.65-6.73-2.62-2.62-10.01 9.27zm-1.85-20.1C1.12 4 1 4.37 1 4.8v14.4c0 .43.12.8.33 1.1l.07.07 8.07-8.07v-.19L1.4 3.64l-.07.02zM20.4 10.4l-2.29-1.32-2.91 2.91 2.91 2.91 2.31-1.33c.66-.38.66-1 0-1.38l-.02.01zM4.16.24L15.81 6.97l-2.62 2.62L3.18.31A1.1 1.1 0 014.16.24z"/>
                </svg>
              )},
              { label: "iOS — App Store", icon: (
                <svg viewBox="0 0 24 24" fill="#1A6FD4" width={14} height={14}>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.37 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              )},
            ].map(({ label, icon }) => (
              <div key={label}
                className="inline-flex items-center gap-2 bg-white border border-[#E8EAED] px-4 py-2 rounded-full text-[12px] text-[#1A6FD4] font-medium">
                {icon}
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOMER APP ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.5px] px-2.5 py-1 rounded-full bg-blue-50 text-[#1A6FD4] mb-4">
              <span className="w-[5px] h-[5px] rounded-full bg-[#1A6FD4]" />
              For Customers
            </span>

            <h2
              className="text-[28px] md:text-[38px] font-bold text-[#0B1F4B] leading-tight tracking-[-1px]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Customer App
            </h2>

            <p className="mt-3 text-[14px] text-[#6B7280] font-light leading-relaxed max-w-md">
              Book deliveries, track parcels in real-time and enjoy a secure delivery experience right from your phone.
            </p>

            {/* Features */}
            <div className="mt-6 space-y-3">
              {[
                "Book a delivery in seconds",
                "Live real-time parcel tracking",
                "Secure OTP handover verification",
                "Full order history & details",
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

          {/* RIGHT */}
          <div className="flex justify-center">
            <img
              src="/customer-app.png"
              alt="Customer App"
              className="h-[420px] md:h-[480px] w-auto object-contain"
              style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.12))" }}
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="w-full h-px bg-[#E8EAED]" />
      </div>

      {/* ── DRIVER APP ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT — image */}
          <div className="flex justify-center order-2 md:order-1">
            <img
              src="/driver-app.png"
              alt="Driver App"
              className="h-[420px] md:h-[480px] w-auto object-contain"
              style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.12))" }}
            />
          </div>

          {/* RIGHT — text */}
          <div className="order-1 md:order-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.5px] px-2.5 py-1 rounded-full bg-red-50 text-[#E8212B] mb-4">
              <span className="w-[5px] h-[5px] rounded-full bg-[#E8212B]" />
              For Drivers
            </span>

            <h2
              className="text-[28px] md:text-[38px] font-bold text-[#0B1F4B] leading-tight tracking-[-1px]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Driver App
            </h2>

            <p className="mt-3 text-[14px] text-[#6B7280] font-light leading-relaxed max-w-md">
              Accept delivery requests, manage your orders, track earnings and work flexibly on your own schedule.
            </p>

            {/* Features */}
            <div className="mt-6 space-y-3">
              {[
                "Accept or reject delivery orders",
                "Track your earnings in real-time",
                "Upload delivery proof instantly",
                "Work flexible hours anytime",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-[13.5px] text-[#374151]">
                  <span className="w-[16px] h-[16px] rounded-full bg-[#E8212B] flex items-center justify-center shrink-0">
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
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-[#0B1F4B] rounded-2xl px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-8">

            <div>
              <p className="text-[11px] tracking-[2.5px] uppercase text-[#6B9FE4] font-semibold mb-3"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                Coming Soon
              </p>
              <h2
                className="text-[28px] md:text-[36px] font-bold text-white leading-tight tracking-[-0.8px]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Launching on Play Store{" "}
                <span className="text-[#E8212B]">&amp; App Store</span>
              </h2>
              <p className="mt-3 text-[14px] text-[#9BA3AF] font-light leading-relaxed max-w-md">
                Our apps are almost ready. Stay tuned — Safe Delivery is coming to your device very soon.
              </p>
            </div>

           
              <StoreButtons variant="dark" />
              

          </div>
        </div>
      </section>

    </div>
  );
}