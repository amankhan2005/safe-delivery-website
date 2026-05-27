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

// ── Reusable store buttons ──
// playUrl: if provided → live Google Play link; variant: "light" | "dark"
const StoreButtons = ({ playUrl, variant = "light" }) => {
  const isDark = variant === "dark";

  const playBtn = (
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
  );

  const appStoreBtn = (
    <div
      className={`relative flex items-center gap-2.5 px-3.5 py-2 rounded-xl border cursor-not-allowed opacity-75 ${
        isDark ? "bg-white/10 border-white/20" : "bg-[#F1F3F5] border-[#E8EAED]"
      }`}
    >
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
  );

  return (
    <div className="flex flex-wrap gap-3 mt-7">
      {playBtn}
      {appStoreBtn}
    </div>
  );
};

const benefits = [
  {
    title: "Earn More",
    desc: "Get paid per delivery with performance bonuses and incentives.",
    color: "#16A34A", iconBg: "bg-green-50",
    tag: "Income", tagClass: "bg-green-50 text-[#16A34A]",
    hoverBar: "group-hover:bg-[#16A34A]",
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
    title: "Flexible Hours",
    desc: "Work whenever you want — morning, evening or weekends. You decide.",
    color: "#1A6FD4", iconBg: "bg-blue-50",
    tag: "Freedom", tagClass: "bg-blue-50 text-[#1A6FD4]",
    hoverBar: "group-hover:bg-[#1A6FD4]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1A6FD4" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v5l3 3"/>
      </svg>
    ),
  },
  {
    title: "Live Orders",
    desc: "Receive real-time delivery requests near your current location.",
    color: "#E8212B", iconBg: "bg-red-50",
    tag: "Real-time", tagClass: "bg-red-50 text-[#E8212B]",
    hoverBar: "group-hover:bg-[#E8212B]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E8212B" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <circle cx="12" cy="10" r="3"/>
        <path d="M12 2a8 8 0 018 8c0 5-8 13-8 13S4 15 4 10a8 8 0 018-8z"/>
      </svg>
    ),
  },
  {
    title: "Track Earnings",
    desc: "Monitor your daily, weekly and monthly income with detailed reports.",
    color: "#D97706", iconBg: "bg-amber-50",
    tag: "Analytics", tagClass: "bg-amber-50 text-[#D97706]",
    hoverBar: "group-hover:bg-[#D97706]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <path d="M3 17l4-4 4 4 4-6 4 2"/>
        <path d="M3 21h18"/>
      </svg>
    ),
  },
  {
    title: "Secure System",
    desc: "Every delivery is OTP-verified with tamper-proof safe handling.",
    color: "#E8212B", iconBg: "bg-red-50",
    tag: "Verified", tagClass: "bg-red-50 text-[#E8212B]",
    hoverBar: "group-hover:bg-[#E8212B]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E8212B" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <path d="M12 2L4 6v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V6L12 2z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    title: "Easy Workflow",
    desc: "Simple and intuitive pickup, delivery and confirmation process.",
    color: "#16A34A", iconBg: "bg-green-50",
    tag: "Simple", tagClass: "bg-green-50 text-[#16A34A]",
    hoverBar: "group-hover:bg-[#16A34A]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
];

const steps = [
  {
    step: "01", title: "Sign Up",
    desc: "Register as a delivery partner and complete your profile verification.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1A6FD4" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
        <path d="M16 11l2 2 4-4"/>
      </svg>
    ),
  },
  {
    step: "02", title: "Accept Orders",
    desc: "Receive nearby delivery requests in real-time and accept at your convenience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1A6FD4" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <path d="M8 12l3 3 5-5"/>
      </svg>
    ),
  },
  {
    step: "03", title: "Deliver & Earn",
    desc: "Complete the delivery with OTP confirmation and get paid instantly.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1A6FD4" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-4 0v2"/>
        <path d="M12 12v4M10 14h4"/>
      </svg>
    ),
  },
];

const RIDER_PLAY_URL = "https://play.google.com/store/apps/details?id=com.saferidedelivery.rider&pcampaignid=web_share";

export default function Drivers() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="z-10">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.5px] px-2.5 py-1 rounded-full bg-red-50 text-[#E8212B] mb-4">
              <span className="w-[5px] h-[5px] rounded-full bg-[#E8212B]" />
              For Drivers
            </span>
            <h1
              className="text-[38px] md:text-[52px] lg:text-[60px] font-extrabold text-[#0B1F4B] leading-[1.04] tracking-[-2px]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Earn More with Flexible{" "}
              <span className="text-[#E8212B]">Delivery Jobs</span>
            </h1>
            <p className="mt-4 text-[#6B7280] text-[14px] leading-relaxed font-light max-w-md">
              Join as a delivery partner, accept orders and earn money on your
              own schedule with full flexibility.
            </p>
            <StoreButtons playUrl={RIDER_PLAY_URL} variant="light" />
          </div>
          <div className="flex justify-center">
            <img
              src="/driver-app.png"
              alt="Driver App"
              className="h-[400px] md:h-[480px] w-auto object-contain"
              style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.12))" }}
            />
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="text-center max-w-[520px] mx-auto">
            <p className="text-[10px] tracking-[3px] uppercase text-[#9BA3AF] font-semibold"
              style={{ fontFamily: "'Syne', sans-serif" }}>Driver Benefits</p>
            <h2 className="mt-2.5 text-[28px] md:text-[32px] font-bold text-[#0B1F4B] tracking-[-0.5px]"
              style={{ fontFamily: "'Syne', sans-serif" }}>Everything You Need to Earn</h2>
            <p className="mt-2.5 text-[14px] text-[#6B7280] font-light leading-relaxed">
              Designed to give you full control, flexibility and a steady income.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {benefits.map(({ title, desc, iconBg, tagClass, tag, hoverBar, icon }) => (
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

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="text-center max-w-[520px] mx-auto">
            <p className="text-[10px] tracking-[3px] uppercase text-[#9BA3AF] font-semibold"
              style={{ fontFamily: "'Syne', sans-serif" }}>Simple Process</p>
            <h2 className="mt-2.5 text-[28px] md:text-[32px] font-bold text-[#0B1F4B] tracking-[-0.5px]"
              style={{ fontFamily: "'Syne', sans-serif" }}>How It Works</h2>
            <p className="mt-2.5 text-[14px] text-[#6B7280] font-light leading-relaxed">
              Three simple steps to start earning with Safe Delivery.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-[52px] left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px border-t border-dashed border-[#E8EAED] z-0" />
            {steps.map(({ step, title, desc, icon }) => (
              <div key={step}
                className="relative z-10 flex flex-col items-center text-center p-8 bg-white border border-[#E8EAED] rounded-[14px] hover:border-[#C7DCFA] hover:shadow-[0_8px_32px_rgba(26,111,212,0.08)] transition-all duration-200">
                <div className="w-[52px] h-[52px] rounded-full bg-blue-50 border border-[#DBEAFE] flex items-center justify-center mb-4">
                  <span className="text-[13px] font-bold text-[#1A6FD4]"
                    style={{ fontFamily: "'Syne', sans-serif" }}>{step}</span>
                </div>
                <div className="w-[40px] h-[40px] rounded-[10px] bg-[#F7F8FA] flex items-center justify-center mb-4">{icon}</div>
                <h3 className="text-[15px] font-bold text-[#0B1F4B]"
                  style={{ fontFamily: "'Syne', sans-serif" }}>{title}</h3>
                <p className="mt-2 text-[13px] text-[#6B7280] font-light leading-[1.8]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="bg-[#0B1F4B] rounded-2xl px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[11px] tracking-[2.5px] uppercase text-[#6B9FE4] font-semibold mb-3"
                style={{ fontFamily: "'Syne', sans-serif" }}>Join Our Network</p>
              <h2 className="text-[28px] md:text-[36px] font-bold text-white leading-tight tracking-[-0.8px]"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                Start Earning <span className="text-[#E8212B]">Today</span>
              </h2>
              <p className="mt-3 text-[14px] text-[#9BA3AF] font-light leading-relaxed max-w-md">
                Join our growing network of drivers and start earning with
                flexible delivery jobs across Liberia.
              </p>
            </div>
            <div className="shrink-0">
              <StoreButtons playUrl={RIDER_PLAY_URL} variant="dark" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}