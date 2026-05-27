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
const RIDER_PLAY_URL = "https://play.google.com/store/apps/details?id=com.saferidedelivery.rider&pcampaignid=web_share";

const StoreButtons = ({ variant = "light", playUrl }) => {
  const isDark = variant === "dark";
  return (
    <div className="flex flex-row gap-3 mt-7 justify-center md:justify-start">
      {/* Google Play — live */}
      <a
        href={playUrl}
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
            Now Live on Google Play
          </span>

          <h1
            className="text-[36px] md:text-[52px] font-extrabold text-[#0B1F4B] leading-[1.05] tracking-[-2px]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Download Safe Delivery App
          </h1>
          <p className="mt-4 text-[14px] text-[#6B7280] font-light leading-relaxed max-w-md mx-auto">
            Available now on Google Play. App Store coming soon.
            Choose your role and get started today.
          </p>

          {/* Platform pills */}
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            {[
              { label: "Android — Google Play", live: true, icon: <GooglePlayIcon size={14} /> },
              { label: "iOS — App Store", live: false, icon: <AppleIcon size={14} color="#9BA3AF" /> },
            ].map(({ label, live, icon }) => (
              <div key={label}
                className={`inline-flex items-center gap-2 border px-4 py-2 rounded-full text-[12px] font-medium ${
                  live
                    ? "bg-white border-[#D1D5DB] text-[#1A6FD4]"
                    : "bg-white border-[#E8EAED] text-[#9BA3AF]"
                }`}>
                {icon}
                {label}
                {!live && <span className="text-[9px] bg-[#F1F3F5] text-[#9BA3AF] px-1.5 py-0.5 rounded-full">Soon</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOMER APP ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-16 items-center">
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
            <StoreButtons variant="light" playUrl={CUSTOMER_PLAY_URL} />
          </div>
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
          <div className="flex justify-center order-2 md:order-1">
            <img
              src="/driver-app.png"
              alt="Driver App"
              className="h-[420px] md:h-[480px] w-auto object-contain"
              style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.12))" }}
            />
          </div>
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
            <StoreButtons variant="light" playUrl={RIDER_PLAY_URL} />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-[#0B1F4B] rounded-2xl px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-[-60px] right-[-60px] w-[300px] h-[300px] rounded-full bg-[#1A6FD4] opacity-[0.08] blur-[60px] pointer-events-none" />
            <div>
              <p className="text-[11px] tracking-[2.5px] uppercase text-[#6B9FE4] font-semibold mb-3"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                Available Now
              </p>
              <h2
                className="text-[28px] md:text-[36px] font-bold text-white leading-tight tracking-[-0.8px]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Download on Google Play,{" "}
                <span className="text-[#E8212B]">App Store Soon</span>
              </h2>
              <p className="mt-3 text-[14px] text-[#9BA3AF] font-light leading-relaxed max-w-md">
                Both apps are live on Google Play. iOS versions are coming soon — stay tuned.
              </p>
            </div>
            {/* Dark CTA shows both buttons side by side — customer link as default */}
            <div className="shrink-0 relative z-10 flex flex-col gap-3">
              <div className="flex gap-3">
                <a
                  href={CUSTOMER_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-2.5 px-3.5 py-2 rounded-xl border bg-white/15 border-white/30 hover:bg-white/25 transition-all duration-200"
                >
                  <GooglePlayIcon size={20} />
                  <div className="text-left leading-tight">
                    <p className="text-[9px] text-white/50 uppercase tracking-widest">Customer</p>
                    <p className="text-[12px] font-semibold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>Google Play</p>
                  </div>
                  <span className="absolute -top-2.5 -right-2 flex items-center gap-1 bg-[#16A34A] text-white text-[8px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">↓ Download</span>
                </a>
                <a
                  href={RIDER_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-2.5 px-3.5 py-2 rounded-xl border bg-white/15 border-white/30 hover:bg-white/25 transition-all duration-200"
                >
                  <GooglePlayIcon size={20} />
                  <div className="text-left leading-tight">
                    <p className="text-[9px] text-white/50 uppercase tracking-widest">Driver</p>
                    <p className="text-[12px] font-semibold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>Google Play</p>
                  </div>
                  <span className="absolute -top-2.5 -right-2 flex items-center gap-1 bg-[#16A34A] text-white text-[8px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">↓ Download</span>
                </a>
              </div>
              <div className="flex gap-3">
                {["Customer", "Driver"].map((role) => (
                  <div key={role} className="relative flex items-center gap-2.5 px-3.5 py-2 rounded-xl border bg-white/10 border-white/20 cursor-not-allowed opacity-60 flex-1">
                    <AppleIcon size={20} color="#fff" />
                    <div className="text-left leading-tight">
                      <p className="text-[9px] text-white/50 uppercase tracking-widest">{role}</p>
                      <p className="text-[12px] font-semibold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>App Store</p>
                    </div>
                    <span className="absolute -top-2 -right-2 bg-[#E8212B] text-white text-[9px] font-semibold px-2 py-0.5 rounded-full">Soon</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}