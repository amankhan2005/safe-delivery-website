import { useRef, useEffect } from "react";

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
      label: "Google Play", sub: "Get it on",
      icon: (
        <svg viewBox="0 0 24 24" fill="#374151" width={20} height={20}>
          <path d="M3.18 23.76c.3.17.65.2.98.08l11.65-6.73-2.62-2.62-10.01 9.27zm-1.85-20.1C1.12 4 1 4.37 1 4.8v14.4c0 .43.12.8.33 1.1l.07.07 8.07-8.07v-.19L1.4 3.64l-.07.02zM20.4 10.4l-2.29-1.32-2.91 2.91 2.91 2.91 2.31-1.33c.66-.38.66-1 0-1.38l-.02.01zM4.16.24L15.81 6.97l-2.62 2.62L3.18.31A1.1 1.1 0 014.16.24z"/>
        </svg>
      ),
    },
    {
      label: "App Store", sub: "Download on the",
      icon: (
        <svg viewBox="0 0 24 24" fill="#374151" width={20} height={20}>
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.37 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden flex items-center min-h-[560px] md:min-h-[620px]">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img src="/hero-bg.png" alt="bg" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-white/65" />

      {/* ── MOBILE ── */}
      <div className="md:hidden relative w-full min-h-[560px] flex flex-col">

        {/* Top text area */}
        <div className="relative z-10 px-5 pt-10 pb-4 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-[#E8EAED] px-3.5 py-1.5 rounded-full text-[11px] text-[#1A6FD4] font-semibold tracking-wide shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1A6FD4] opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1A6FD4]" />
            </span>
            Safe Delivery — Liberia
          </div>

          {/* Heading */}
          <h1
            className="mt-4 text-[38px] sm:text-[46px] font-extrabold leading-[1.04] text-[#0B1F4B] tracking-[-1.5px]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Fast, Secure &{" "}
            <br />
            <span className="text-[#E8212B]">Reliable Delivery</span>
          </h1>

          {/* Subtext */}
          <p className="mt-3 text-[#6B7280] text-[13px] leading-relaxed font-light max-w-[300px] mx-auto">
            Delivering parcels safely across Liberia with trusted drivers and real-time tracking.
          </p>
        </div>

        {/* Rider image — full bleed, bottom anchored */}
        <div className="relative flex-1 flex items-end justify-center overflow-hidden min-h-[240px]">
          <img
            src="/rider.png"
            alt="rider"
            className="h-[280px] sm:h-[320px] w-auto object-contain object-bottom relative z-10"
            style={{ filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.18))" }}
          />

          {/* Decorative circle behind rider */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[280px] rounded-full bg-[#1A6FD4] opacity-[0.06]" />
        </div>

        {/* Bottom card — features + buttons */}
        <div className="relative z-10 mx-4 mb-6 bg-white border border-[#E8EAED] rounded-2xl px-5 py-5 shadow-sm">

          {/* Features */}
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
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  {icon}
                </div>
                <p className="text-[11px] font-semibold text-[#0B1F4B]"
                  style={{ fontFamily: "'Syne', sans-serif" }}>{label}</p>
                <p className="text-[9px] text-[#9BA3AF]">{sub}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#E8EAED] mb-4" />

          {/* Store Buttons */}
          <div className="flex gap-2">
            {storeButtons.map(({ label, sub, icon }) => (
              <div key={label}
                className="relative flex-1 flex items-center gap-2 bg-[#F1F3F5] border border-[#E8EAED] px-3 py-2 rounded-xl cursor-not-allowed opacity-80">
                <div className="opacity-60 shrink-0">{icon}</div>
                <div className="text-left leading-tight">
                  <p className="text-[8px] text-[#9BA3AF] uppercase tracking-widest">{sub}</p>
                  <p className="text-[11px] font-semibold text-[#374151]"
                    style={{ fontFamily: "'Syne', sans-serif" }}>{label}</p>
                </div>
                <span className="absolute -top-2 -right-1 bg-[#E8212B] text-white text-[8px] font-semibold px-1.5 py-0.5 rounded-full">
                  Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block relative max-w-[1280px] mx-auto px-8 w-full py-16">
        <div className="grid md:grid-cols-2 items-center gap-0">

          {/* LEFT */}
          <div className="z-10" ref={leftRef}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#E8EAED] px-3.5 py-1.5 rounded-full text-[11px] text-[#1A6FD4] font-semibold tracking-wide shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1A6FD4] opacity-50" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1A6FD4]" />
              </span>
              Safe Delivery — Liberia
            </div>

            {/* Heading */}
            <h1
              className="mt-4 text-[56px] lg:text-[72px] xl:text-[80px] font-extrabold leading-[1.02] text-[#0B1F4B] tracking-[-2.5px]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Fast, Secure &{" "}
              <span className="text-[#E8212B]">Reliable Delivery</span>
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-[#6B7280] text-[14px] max-w-md leading-relaxed font-light">
              We deliver your parcels safely across Liberia with trusted drivers
              and real-time tracking.
            </p>

            {/* Features */}
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

            {/* Store Buttons */}
            <div className="mt-7 flex flex-wrap gap-3">
              {storeButtons.map(({ label, sub, icon }) => (
                <div key={label}
                  className="relative flex items-center gap-2.5 bg-[#F1F3F5] border border-[#E8EAED] px-3.5 py-2 rounded-xl cursor-not-allowed opacity-80">
                  <div className="opacity-60 shrink-0">{icon}</div>
                  <div className="text-left leading-tight">
                    <p className="text-[9px] text-[#9BA3AF] uppercase tracking-widest">{sub}</p>
                    <p className="text-[12px] font-semibold text-[#374151]"
                      style={{ fontFamily: "'Syne', sans-serif" }}>{label}</p>
                  </div>
                  <span className="absolute -top-2 -right-2 bg-[#E8212B] text-white text-[9px] font-semibold px-2 py-0.5 rounded-full tracking-wide">
                    Soon
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — rider */}
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