export default function Services() {
  const services = [
    {
      tag: "Express",
      tagClass: "bg-blue-50 text-[#1A6FD4]",
      iconBg: "bg-blue-50",
      footerClass: "text-[#1A6FD4]",
      hoverBar: "group-hover:bg-[#1A6FD4]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#1A6FD4" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: "Express Delivery",
      desc: "Fastest parcel delivery across cities with same-day pickup and guaranteed drop-off windows.",
      footer: "Same-day available",
    },
    {
      tag: "Verified",
      tagClass: "bg-red-50 text-[#E8212B]",
      iconBg: "bg-red-50",
      footerClass: "text-[#E8212B]",
      hoverBar: "group-hover:bg-[#E8212B]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#E8212B" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
          <path d="M12 2L4 6v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V6L12 2z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: "Secure Delivery",
      desc: "OTP verification and tamper-proof handling ensures every package reaches the right hands.",
      footer: "OTP protected",
    },
    {
      tag: "Flexible",
      tagClass: "bg-green-50 text-[#16A34A]",
      iconBg: "bg-green-50",
      footerClass: "text-[#16A34A]",
      hoverBar: "group-hover:bg-[#16A34A]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 00-4 0v2" />
          <path d="M12 12v4M10 14h4" />
        </svg>
      ),
      title: "Cash on Delivery",
      desc: "No upfront payment needed. Pay only when your parcel is safely delivered to your door.",
      footer: "Pay on receipt",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-8">

        {/* Heading */}
        <div className="text-center max-w-[520px] mx-auto">
          <p
            className="text-[10px] tracking-[3px] uppercase text-[#9BA3AF] font-semibold"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            What We Offer
          </p>
          <h2
            className="mt-2.5 text-[32px] font-bold text-[#0B1F4B] tracking-[-0.5px]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Built for Fast &amp; Safe Delivery
          </h2>
          <p className="mt-2.5 text-[14px] text-[#6B7280] font-light leading-relaxed whitespace-nowrap">
            Reliable delivery solutions designed for customers and businesses across Liberia.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {services.map(({ tag, tagClass, iconBg, footerClass, hoverBar, icon, title, desc, footer }) => (
            <div
              key={title}
              className="group relative flex flex-col p-8 bg-white border border-[#E8EAED] rounded-[14px] hover:bg-[#FAFBFF] hover:border-[#C7DCFA] transition-colors duration-200 overflow-hidden"
            >
              {/* Top accent bar */}
              <span
                className={`absolute top-0 left-0 right-0 h-[3px] transition-colors duration-200 ${hoverBar}`}
              />

              {/* Tag */}
              <span
                className={`inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.5px] px-2.5 py-1 rounded-full w-fit mb-5 ${tagClass}`}
              >
                <span className="w-[5px] h-[5px] rounded-full bg-current" />
                {tag}
              </span>

              {/* Icon */}
              <div
                className={`w-[46px] h-[46px] rounded-[10px] flex items-center justify-center ${iconBg}`}
              >
                {icon}
              </div>

              {/* Title */}
              <h3
                className="mt-5 text-[16px] font-bold text-[#0B1F4B] tracking-[-0.2px]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {title}
              </h3>

              {/* Description — flex-1 keeps footer pinned to bottom */}
              <p className="mt-2.5 text-[13px] text-[#6B7280] font-light leading-[1.8] flex-1">
                {desc}
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-[#E8EAED] my-5" />

              {/* Footer */}
              <div className={`flex items-center gap-1.5 text-[12px] font-medium ${footerClass}`}>
                <svg
                  width="13" height="13" viewBox="0 0 14 14" fill="none"
                  stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
                {footer}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}