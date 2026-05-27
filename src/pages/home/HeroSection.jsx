import { useRef, useEffect } from "react";

// ── Real Google Play SVG (official colors) ──
const GooglePlayIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M48 28.9C48 14.1 63.5 4.8 76.5 12l384 220c13.2 7.3 13.2 26.7 0 34L76.5 486c-13 7.2-28.5-2.1-28.5-17V28.9z" fill="#00C4FF" opacity="0"/>
    {/* Triangle play shape split into 4 color segments */}
    <path d="M48 28.9v454.2c0 14.9 15.5 24.2 28.5 17L290 384 90 184 48 28.9z" fill="#00D2FF"/>
    <path d="M48 28.9L290 128l-200 56L48 28.9z" fill="#00F076" opacity="0"/>
    {/* Proper 4-color Google Play icon */}
    <g>
      <path d="M56 22L292 260 56 498c-5-5-8-12-8-19V41c0-7 3-14 8-19z" fill="#00D2FF"/>
      <path d="M56 22l236 238 80-80L112 14C96 5 72 9 56 22z" fill="#00F076"/>
      <path d="M56 498l236-238 80 80L112 506c-16 9-40 5-56-8z" fill="#FF3D57"/>
      <path d="M372 180l-80 80 80 80 72-41c21-12 21-46 0-58l-72-61z" fill="#FFCA28"/>
    </g>
  </svg>
);

// ── Real Apple iOS icon (official path from Apple) ──
const AppleIcon = ({ size = 22, color = "#374151" }) => (
  <svg width={size} height={size} viewBox="0 0 496.255 608.728" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z"
      fill={color}
    />
  </svg>
);

export default function Hero() {
  const leftRef = useRef(null);
  const riderRef = useRef(null);

  useEffect(() => {
    const match = () => {
      if (leftRef.current && riderRef.current) {
        const h = leftRef.current.offsetHeight;
        riderRef.current.style.height = `${h + 80}px`;
        riderRef.current.style.maxHeight = "720px";
      }
    };
    match();
    window.addEventListener("resize", match);
    return () => window.removeEventListener("resize", match);
  }, []);

  const features = ["Secure Deliveries", "On-Time Guarantee", "Real-time Tracking"];

  const storeButtons = [
    {
      label: "Google Play",
      sub: "Get it on",
      href: "https://play.google.com/store/apps/details?id=com.safedelivery.customer&pcampaignid=web_share",
      live: true,
      icon: <GooglePlayIcon />,
    },
    {
      label: "App Store",
      sub: "Download on the",
      href: null,
      live: false,
      icon: <AppleIcon color="#374151" />,
    },
  ];

  // ── Pulsing "Available Now" badge for live buttons ──
  const LiveBadge = ({ sm }) => (
    <span
      className={`absolute ${sm ? "-top-2 -right-1" : "-top-2 -right-2"} flex items-center gap-1 bg-[#16A34A] text-white ${sm ? "text-[7px]" : "text-[8px]"} font-bold px-1.5 py-0.5 rounded-full tracking-wide`}
      style={{ whiteSpace: "nowrap" }}
    >
      <span className="relative flex h-[6px] w-[6px] shrink-0">
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"
          style={{ animationDuration: "1.2s" }}
        />
        <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-white" />
      </span>
      Available now
    </span>
  );

  const SoonBadge = ({ sm }) => (
    <span
      className={`absolute ${sm ? "-top-2 -right-1" : "-top-2 -right-2"} bg-[#E8212B] text-white ${sm ? "text-[8px]" : "text-[9px]"} font-semibold px-1.5 py-0.5 rounded-full tracking-wide`}
    >
      Soon
    </span>
  );

  const StoreBtn = ({ label, sub, icon, href, live, size = "md" }) => {
    const sm = size === "sm";
    const base = sm
      ? "relative flex-1 flex items-center gap-2 px-3 py-2 rounded-xl"
      : "relative flex items-center gap-2.5 px-3.5 py-2 rounded-xl";

    const liveClass =
      "bg-white border border-[#D1D5DB] hover:border-[#1A6FD4] hover:shadow-md transition-all duration-200 cursor-pointer";
    const deadClass =
      "bg-[#F1F3F5] border border-[#E8EAED] cursor-not-allowed opacity-75";

    const inner = (
      <>
        <div className="shrink-0">{icon}</div>
        <div className="text-left leading-tight">
          <p
            className={`${sm ? "text-[8px]" : "text-[9px]"} text-[#9BA3AF] uppercase tracking-widest`}
          >
            {sub}
          </p>
          <p
            className={`${sm ? "text-[11px]" : "text-[12px]"} font-semibold text-[#374151]`}
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {label}
          </p>
        </div>
        {live ? <LiveBadge sm={sm} /> : <SoonBadge sm={sm} />}
      </>
    );

    if (live) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} ${liveClass}`}
        >
          {inner}
        </a>
      );
    }
    return <div className={`${base} ${deadClass}`}>{inner}</div>;
  };

  return (
    <section className="relative overflow-hidden flex items-center min-h-[560px] md:min-h-[620px]">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img src="/hero-bg.png" alt="bg" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-white/65" />

      {/* ── MOBILE ── */}
      <div className="md:hidden relative w-full min-h-[560px] flex flex-col">

        <div className="relative z-10 px-5 pt-10 pb-4 text-center">
          <h1
            className="mt-4 text-[38px] sm:text-[46px] font-extrabold leading-[1.04] text-[#0B1F4B] tracking-[-1.5px]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Fast, Secure &{" "}
            <br />
            <span className="text-[#E8212B]">Reliable Delivery</span>
          </h1>
          <p className="mt-3 text-[#6B7280] text-[13px] leading-relaxed font-light max-w-[300px] mx-auto">
            Delivering parcels safely across Liberia with trusted drivers and real-time tracking.
          </p>
        </div>

        <div className="relative flex-1 flex items-end justify-center overflow-hidden min-h-[240px]">
          <img
            src="/rider.png"
            alt="rider"
            className="h-[280px] sm:h-[320px] w-auto object-contain object-bottom relative z-10"
            style={{ filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.18))" }}
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[280px] rounded-full bg-[#1A6FD4] opacity-[0.06]" />
        </div>

        <div className="relative z-10 mx-4 mb-6 bg-white border border-[#E8EAED] rounded-2xl px-5 py-5 shadow-sm">

          <div className="grid grid-cols-3 gap-2 mb-5">
            {[
              {
                label: "Secure", sub: "OTP verified",
                icon: (
                  <svg viewBox="0 0 20 20" fill="none" stroke="#1A6FD4" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
                    <path d="M10 2L4 5v4.5C4 13.1 6.6 16.4 10 17.5c3.4-1.1 6-4.4 6-8V5l-6-3z"/>
                    <path d="M7.5 10l2 2 3-3"/>
                  </svg>
                ),
              },
              {
                label: "On-Time", sub: "Guaranteed",
                icon: (
                  <svg viewBox="0 0 20 20" fill="none" stroke="#1A6FD4" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
                    <circle cx="10" cy="10" r="8"/>
                    <path d="M10 6v4l2.5 2.5"/>
                  </svg>
                ),
              },
              {
                label: "Live Track", sub: "Real-time",
                icon: (
                  <svg viewBox="0 0 20 20" fill="none" stroke="#1A6FD4" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
                    <circle cx="10" cy="9" r="3"/>
                    <path d="M10 2a7 7 0 017 7c0 4.5-7 10-7 10S3 13.5 3 9a7 7 0 017-7z"/>
                  </svg>
                ),
              },
            ].map(({ label, sub, icon }) => (
              <div key={label} className="flex flex-col items-center text-center gap-1.5 p-2 rounded-xl bg-[#F7F8FA]">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">{icon}</div>
                <p className="text-[11px] font-semibold text-[#0B1F4B]"
                  style={{ fontFamily: "'Syne', sans-serif" }}>{label}</p>
                <p className="text-[9px] text-[#9BA3AF]">{sub}</p>
              </div>
            ))}
          </div>

          <div className="w-full h-px bg-[#E8EAED] mb-4" />

          <div className="flex gap-2">
            {storeButtons.map((btn) => (
              <StoreBtn key={btn.label} {...btn} size="sm" />
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block relative max-w-[1280px] mx-auto px-8 w-full py-16">
        <div className="grid md:grid-cols-2 items-center gap-0">

          <div className="z-10" ref={leftRef}>
            <h1
              className="mt-4 text-[56px] lg:text-[72px] xl:text-[80px] font-extrabold leading-[1.02] text-[#0B1F4B] tracking-[-2.5px]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Fast, Secure &{" "}
              <span className="text-[#E8212B]">Reliable Delivery</span>
            </h1>

            <p className="mt-4 text-[#6B7280] text-[14px] max-w-md leading-relaxed font-light">
              We deliver your parcels safely across Liberia with trusted drivers
              and real-time tracking.
            </p>

            <div className="mt-5 flex flex-wrap gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-[13px] text-[#374151] font-medium">
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

            <div className="mt-7 flex flex-wrap gap-3">
              {storeButtons.map((btn) => (
                <StoreBtn key={btn.label} {...btn} size="md" />
              ))}
            </div>
          </div>

          <div className="relative flex justify-end items-end h-full overflow-visible">
            <img
              ref={riderRef}
              src="/rider.png"
              alt="rider"
              className="w-auto object-contain object-bottom"
              style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.15))" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}