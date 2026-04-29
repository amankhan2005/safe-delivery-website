export default function Privacy() {
  const sections = [
    {
      title: "Information We Collect",
      color: "#1A6FD4", bg: "bg-blue-50", tag: "Collection",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#1A6FD4" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
          <path d="M14 2v6h6M8 13h8M8 17h5"/>
        </svg>
      ),
      content: "We collect basic information necessary to provide our delivery services, including your full name, phone number, email address, and delivery location. For drivers, we also collect vehicle information and identity verification documents.",
    },
    {
      title: "How We Use Your Data",
      color: "#16A34A", bg: "bg-green-50", tag: "Usage",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 8v4l3 3"/>
        </svg>
      ),
      content: "Your data is used solely to facilitate deliveries, match customers with drivers, process payments, and improve our services. We use location data in real-time to enable live tracking and accurate delivery routing.",
    },
    {
      title: "Data Security",
      color: "#E8212B", bg: "bg-red-50", tag: "Security",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#E8212B" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
          <path d="M12 2L4 6v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V6L12 2z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      content: "All your personal data is encrypted and stored securely on protected servers. We implement industry-standard security measures including SSL encryption, OTP verification, and regular security audits to keep your information safe.",
    },
    {
      title: "Data Sharing",
      color: "#D97706", bg: "bg-amber-50", tag: "Sharing",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/>
        </svg>
      ),
      content: "We do not sell, trade, or share your personal information with third parties without your explicit consent. Limited data may be shared with our verified delivery partners strictly to complete your delivery requests.",
    },
    {
      title: "Location Data",
      color: "#16A34A", bg: "bg-green-50", tag: "Location",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
          <circle cx="12" cy="10" r="3"/>
          <path d="M12 2a8 8 0 018 8c0 5-8 13-8 13S4 15 4 10a8 8 0 018-8z"/>
        </svg>
      ),
      content: "Location access is used only during active deliveries to provide real-time tracking. We do not track your location in the background or when the app is not in use. You can disable location access at any time in your device settings.",
    },
    {
      title: "Your Rights",
      color: "#1A6FD4", bg: "bg-blue-50", tag: "Rights",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#1A6FD4" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      content: "You have the right to access, update, or delete your personal data at any time. You may also request a copy of the data we hold about you. To exercise any of these rights, contact us at support@safedelivery.com.",
    },
    {
      title: "Cookies & Analytics",
      color: "#D97706", bg: "bg-amber-50", tag: "Cookies",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21h8M12 17v4"/>
        </svg>
      ),
      content: "Our website uses minimal cookies to improve your browsing experience and analyze traffic patterns. We use anonymized analytics data to understand how users interact with our platform and to make improvements.",
    },
    {
      title: "Policy Updates",
      color: "#E8212B", bg: "bg-red-50", tag: "Updates",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#E8212B" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
          <path d="M4 4v5h5M20 20v-5h-5"/>
          <path d="M4 9a8 8 0 0114.93-2.07M20 15a8 8 0 01-14.93 2.07"/>
        </svg>
      ),
      content: "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify users of significant changes via email or an in-app notice. Continued use of our services constitutes acceptance of the updated policy.",
    },
  ];

  return (
    <div className="bg-white">

      {/* ── HEADER ── */}
      <section className="bg-[#F7F8FA] border-b border-[#E8EAED]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 text-center">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.5px] px-2.5 py-1 rounded-full bg-blue-50 text-[#1A6FD4] mb-5">
            <span className="w-[5px] h-[5px] rounded-full bg-[#1A6FD4]" />
            Legal
          </span>
          <h1
            className="text-[36px] md:text-[52px] font-extrabold text-[#0B1F4B] leading-[1.05] tracking-[-2px]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Privacy Policy
          </h1>
          <p className="mt-4 text-[14px] text-[#6B7280] font-light leading-relaxed max-w-md mx-auto">
            Safe Delivery values your privacy. This policy explains how we
            collect, use and protect your personal information.
          </p>
          <p className="mt-3 text-[12px] text-[#9BA3AF]">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-[720px] mx-auto">
            <p className="text-[10px] tracking-[3px] uppercase text-[#9BA3AF] font-semibold mb-3"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Overview
            </p>
            <p className="text-[15px] text-[#374151] font-light leading-[1.85]">
              At Safe Delivery, we are committed to protecting your personal
              information and your right to privacy. This policy applies to all
              information we collect through our website and mobile applications
              when you use our delivery services across Liberia.
            </p>
            <p className="mt-4 text-[15px] text-[#374151] font-light leading-[1.85]">
              By using Safe Delivery, you agree to the collection and use of
              information in accordance with this policy. If you have any
              questions, please contact us at{" "}
              <a href="mailto:support@safedelivery.com"
                className="text-[#1A6FD4] hover:underline">
                support@safedelivery.com
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* ── POLICY SECTIONS ── */}
      <section className="py-10 pb-20 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-5">
            {sections.map(({ title, bg, tag, icon, content, color }, i) => (
              <div key={title}
                className="group relative bg-white border border-[#E8EAED] rounded-[14px] p-7 hover:border-[#C7DCFA] hover:shadow-[0_8px_32px_rgba(26,111,212,0.06)] transition-all duration-200 overflow-hidden">

                {/* Top accent */}
                <span
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-t-[14px]"
                  style={{ background: color }}
                />

                {/* Number */}
                <span
                  className="absolute top-5 right-6 text-[11px] font-bold tracking-[1px] opacity-10"
                  style={{ fontFamily: "'Syne', sans-serif", color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Tag */}
                <span className={`inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.5px] px-2.5 py-1 rounded-full w-fit mb-4 ${bg}`}
                  style={{ color }}>
                  <span className="w-[5px] h-[5px] rounded-full bg-current" />
                  {tag}
                </span>

                {/* Icon */}
                <div className={`w-[42px] h-[42px] rounded-[10px] flex items-center justify-center mb-4 ${bg}`}>
                  {icon}
                </div>

                {/* Title */}
                <h3
                  className="text-[16px] font-bold text-[#0B1F4B] tracking-[-0.2px] mb-3"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {title}
                </h3>

                {/* Content */}
                <p className="text-[13px] text-[#6B7280] font-light leading-[1.85]">
                  {content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-[#0B1F4B] rounded-2xl px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[11px] tracking-[2.5px] uppercase text-[#6B9FE4] font-semibold mb-3"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                Questions?
              </p>
              <h2
                className="text-[28px] md:text-[34px] font-bold text-white leading-tight tracking-[-0.8px]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Have Privacy{" "}
                <span className="text-[#E8212B]">Concerns?</span>
              </h2>
              <p className="mt-3 text-[14px] text-[#9BA3AF] font-light leading-relaxed max-w-md">
                Our team is here to answer any questions about how we handle
                your data. Reach out to us anytime.
              </p>
            </div>
            <a
              href="mailto:support@safedelivery.com"
              className="shrink-0 flex items-center gap-2 bg-[#1A6FD4] text-white text-[13px] font-bold px-6 py-3 rounded-[8px] hover:bg-[#1559B0] transition"
              style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "0.4px" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                width={16} height={16}>
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
              Contact Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}