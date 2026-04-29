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
    step: "01",
    title: "Sign Up",
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
    step: "02",
    title: "Accept Orders",
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
    step: "03",
    title: "Deliver & Earn",
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

export default function Drivers() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="z-10">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.5px] px-2.5 py-1 rounded-full bg-red-50 text-[#E8212B] mb-4">
              <span className="w-[5px] h-[5px] rounded-full bg-[#E8212B]" />
              For Drivers
            </span>

            <h1
              className="text-[38px] md:text-[52px] lg:text-[60px] font-extrabold text-[#0B1F4B] leading-[1.04] tracking-[-2px]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Earn More with{" "}
              Flexible{" "}
              <span className="text-[#E8212B]">Delivery Jobs</span>
            </h1>

            <p className="mt-4 text-[#6B7280] text-[14px] leading-relaxed font-light max-w-md">
              Join as a delivery partner, accept orders and earn money on your
              own schedule with full flexibility.
            </p>

             

            <StoreButtons variant="light" />
          </div>

          {/* RIGHT */}
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
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Driver Benefits
            </p>
            <h2
              className="mt-2.5 text-[28px] md:text-[32px] font-bold text-[#0B1F4B] tracking-[-0.5px]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Everything You Need to Earn
            </h2>
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
                  <span className="w-[5px] h-[5px] rounded-full bg-current" />
                  {tag}
                </span>
                <div className={`w-[44px] h-[44px] rounded-[10px] flex items-center justify-center ${iconBg}`}>
                  {icon}
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-[#0B1F4B] tracking-[-0.2px]"
                  style={{ fontFamily: "'Syne', sans-serif" }}>
                  {title}
                </h3>
                <p className="mt-2 text-[13px] text-[#6B7280] font-light leading-[1.8] flex-1">
                  {desc}
                </p>
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
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Simple Process
            </p>
            <h2
              className="mt-2.5 text-[28px] md:text-[32px] font-bold text-[#0B1F4B] tracking-[-0.5px]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              How It Works
            </h2>
            <p className="mt-2.5 text-[14px] text-[#6B7280] font-light leading-relaxed">
              Three simple steps to start earning with Safe Delivery.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 relative">

            {/* Connector line — desktop only */}
            <div className="hidden md:block absolute top-[52px] left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px border-t border-dashed border-[#E8EAED] z-0" />

            {steps.map(({ step, title, desc, icon }) => (
              <div key={step}
                className="relative z-10 flex flex-col items-center text-center p-8 bg-white border border-[#E8EAED] rounded-[14px] hover:border-[#C7DCFA] hover:shadow-[0_8px_32px_rgba(26,111,212,0.08)] transition-all duration-200">

                {/* Step number */}
                <div className="w-[52px] h-[52px] rounded-full bg-blue-50 border border-[#DBEAFE] flex items-center justify-center mb-4">
                  <span className="text-[13px] font-bold text-[#1A6FD4]"
                    style={{ fontFamily: "'Syne', sans-serif" }}>{step}</span>
                </div>

                <div className="w-[40px] h-[40px] rounded-[10px] bg-[#F7F8FA] flex items-center justify-center mb-4">
                  {icon}
                </div>

                <h3 className="text-[15px] font-bold text-[#0B1F4B]"
                  style={{ fontFamily: "'Syne', sans-serif" }}>
                  {title}
                </h3>
                <p className="mt-2 text-[13px] text-[#6B7280] font-light leading-[1.8]">
                  {desc}
                </p>
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
                style={{ fontFamily: "'Syne', sans-serif" }}>
                Join Our Network
              </p>
              <h2
                className="text-[28px] md:text-[36px] font-bold text-white leading-tight tracking-[-0.8px]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Start Earning{" "}
                <span className="text-[#E8212B]">Today</span>
              </h2>
              <p className="mt-3 text-[14px] text-[#9BA3AF] font-light leading-relaxed max-w-md">
                Join our growing network of drivers and start earning with
                flexible delivery jobs across Liberia.
              </p>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <StoreButtons variant="dark" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}