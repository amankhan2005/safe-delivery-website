import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "What is Safe Delivery?",
      a: "Safe Delivery is a fast and secure parcel delivery platform that connects customers with trusted drivers across Liberia.",
    },
    {
      q: "How do I use the Safe Delivery app?",
      a: "Enter pickup and drop location, confirm your booking, and a driver will be assigned to deliver your parcel safely.",
    },
    {
      q: "What items are not allowed for delivery?",
      a: "Illegal items, hazardous materials, and restricted goods are strictly not allowed for delivery on our platform.",
    },
    {
      q: "How much does delivery cost?",
      a: "Delivery charges depend on distance, package size, and delivery type. You'll see the exact price before confirming.",
    },
    {
      q: "Is Cash on Delivery available?",
      a: "Yes, we fully support Cash on Delivery (COD) — pay only when your parcel is safely delivered to your door.",
    },
    {
      q: "How can I track my order?",
      a: "You can track your order in real-time using the app with live driver location updates at every step.",
    },
    {
      q: "How long does delivery take?",
      a: "Delivery time depends on distance and traffic, but we always aim for the fastest possible drop-off.",
    },
    {
      q: "Can I become a driver?",
      a: "Yes, you can register as a driver through our app, complete verification, and start earning flexibly.",
    },
    {
      q: "When will the app be available?",
      a: "The app is launching very soon on both Google Play Store and Apple App Store. Stay tuned!",
    },
     {
  q: "What happens if my parcel is lost or damaged?",
  a: "We take safety seriously. In rare cases of loss or damage, our support team will investigate the issue and provide appropriate assistance or compensation as per our policy."
}
  ];

  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="max-w-[1280px] mx-auto px-8">

        {/* Heading */}
        <div className="text-center max-w-[520px] mx-auto">
          <p
            className="text-[10px] tracking-[3px] uppercase text-[#9BA3AF] font-semibold"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Got Questions?
          </p>
          <h2
            className="mt-2.5 text-[32px] font-bold text-[#0B1F4B] tracking-[-0.5px]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-2.5 text-[14px] text-[#6B7280] font-light leading-relaxed">
            Everything you need to know about Safe Delivery.
          </p>
        </div>

        {/* Two-column FAQ grid */}
        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={index}
                className={`bg-white border rounded-[12px] overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? "border-[#1A6FD4] shadow-[0_0_0_1px_#1A6FD4]"
                    : "border-[#E8EAED] hover:border-[#C7DCFA]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left gap-4"
                >
                  <span
                    className={`text-[14px] font-medium leading-snug transition-colors ${
                      isOpen ? "text-[#1A6FD4]" : "text-[#0B1F4B]"
                    }`}
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.q}
                  </span>

                  {/* Plus / Minus icon */}
                  <span
                    className={`w-[28px] h-[28px] rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-[#1A6FD4]" : "bg-[#F1F3F5]"
                    }`}
                  >
                    <svg
                      width="12" height="12" viewBox="0 0 12 12" fill="none"
                      stroke={isOpen ? "#fff" : "#6B7280"}
                      strokeWidth="1.8" strokeLinecap="round"
                    >
                      {isOpen ? (
                        <path d="M2 6h8" />
                      ) : (
                        <>
                          <path d="M6 2v8" />
                          <path d="M2 6h8" />
                        </>
                      )}
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 border-t border-[#E8EAED]">
                    <p className="pt-4 text-[13.5px] text-[#6B7280] font-light leading-[1.8]">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}