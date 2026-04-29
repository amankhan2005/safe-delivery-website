export default function WhyChooseUs() {
  const reasons = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#1A6FD4" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
          <rect x="1" y="3" width="15" height="13" rx="2"/>
          <path d="M16 8h4l3 3v5h-7V8z"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      iconBg: "bg-blue-50",
      hoverBar: "group-hover:bg-[#1A6FD4]",
      tagClass: "bg-blue-50 text-[#1A6FD4]",
      tag: "Speed",
      title: "Fast Delivery",
      desc: "Quick pickup and guaranteed fast delivery across all cities in Liberia.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#E8212B" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
          <path d="M12 2L4 6v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V6L12 2z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      iconBg: "bg-red-50",
      hoverBar: "group-hover:bg-[#E8212B]",
      tagClass: "bg-red-50 text-[#E8212B]",
      tag: "Verified",
      title: "Secure Service",
      desc: "OTP verification and tamper-proof handling on every single delivery.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
          <circle cx="12" cy="10" r="4"/>
          <path d="M12 2a8 8 0 018 8c0 5-8 13-8 13S4 15 4 10a8 8 0 018-8z"/>
        </svg>
      ),
      iconBg: "bg-green-50",
      hoverBar: "group-hover:bg-[#16A34A]",
      tagClass: "bg-green-50 text-[#16A34A]",
      tag: "Live",
      title: "Real-time Tracking",
      desc: "Monitor your parcel location at every step, anytime from your phone.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          <path d="M8 10h8M8 14h5"/>
        </svg>
      ),
      iconBg: "bg-amber-50",
      hoverBar: "group-hover:bg-[#D97706]",
      tagClass: "bg-amber-50 text-[#D97706]",
      tag: "Support",
      title: "24/7 Support",
      desc: "Round-the-clock customer support always ready to resolve your queries.",
    },
  ];

  return (
    <section className="py-20 bg-[#F7F8FA]">
      <div className="max-w-[1280px] mx-auto px-8">

        {/* Heading */}
        <div className="text-center max-w-[520px] mx-auto">
          <p
            className="text-[10px] tracking-[3px] uppercase text-[#9BA3AF] font-semibold"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Our Advantage
          </p>
          <h2
            className="mt-2.5 text-[32px] font-bold text-[#0B1F4B] tracking-[-0.5px]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Why Choose Safe Delivery?
          </h2>
          <p className="mt-2.5 text-[14px] text-[#6B7280] font-light leading-relaxed">
            We provide fast, secure and reliable delivery services you can trust across Liberia.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon, iconBg, hoverBar, tagClass, tag, title, desc }) => (
            <div
              key={title}
              className="group relative flex flex-col p-7 bg-white border border-[#E8EAED] rounded-[14px] hover:bg-[#FAFBFF] hover:border-[#C7DCFA] transition-colors duration-200 overflow-hidden"
            >
              {/* Top accent bar */}
              <span className={`absolute top-0 left-0 right-0 h-[3px] transition-colors duration-200 ${hoverBar}`} />

              {/* Tag */}
              <span
                className={`inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.5px] px-2.5 py-1 rounded-full w-fit mb-5 ${tagClass}`}
              >
                <span className="w-[5px] h-[5px] rounded-full bg-current" />
                {tag}
              </span>

              {/* Icon */}
              <div className={`w-[46px] h-[46px] rounded-[10px] flex items-center justify-center ${iconBg}`}>
                {icon}
              </div>

              {/* Title */}
              <h3
                className="mt-5 text-[15px] font-bold text-[#0B1F4B] tracking-[-0.2px]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {title}
              </h3>

              {/* Desc */}
              <p className="mt-2 text-[13px] text-[#6B7280] font-light leading-[1.8] flex-1">
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}