import { useState } from "react";

const Shield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L4 6v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V6L12 2z" />
  </svg>
);

const MapPin = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="10" r="3" /><path d="M12 2a8 8 0 018 8c0 5-8 13-8 13S4 15 4 10a8 8 0 018-8z" />
  </svg>
);

const Calendar = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const Mail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" />
  </svg>
);

const Phone = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const AlertTriangle = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const Info = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const sections = [
  {
    num: "01",
    tag: "Services",
    color: "blue",
    title: "Our Services",
    body: `Safe Delivery connects customers with independent delivery partners through our technology platform. We act solely as a technology intermediary and do not directly employ delivery personnel.\n\nServices provided include:\n• Booking of parcel deliveries\n• Real-time delivery tracking\n• Cash on Delivery (COD) payments\n• Access to a verified delivery rider network`,
    note: { type: "info", text: "Safe Delivery acts as a technology platform only — facilitating connections between customers and independent delivery partners." },
  },
  {
    num: "02",
    tag: "User Responsibilities",
    color: "gray",
    title: "User Responsibilities (Customers)",
    body: `By using the Safe Delivery platform as a customer, you agree to:\n\n• Provide accurate pickup and drop-off details at all times\n• Refrain from sending prohibited or illegal items\n• Ensure correct receiver details for OTP verification\n• Cooperate fully throughout the delivery process`,
    note: { type: "warning", text: "Failure to comply with these obligations may result in delivery cancellation, account suspension, or permanent termination." },
  },
  {
    num: "03",
    tag: "Rider Responsibilities",
    color: "blue",
    title: "Rider Responsibilities",
    body: `All delivery riders operating on the Safe Delivery platform are contractually required to:\n\n• Handle all parcels safely, securely, and professionally\n• Maintain strict customer privacy at all times\n• Deliver packages in their original condition, without tampering or damage\n• Complete each delivery using the designated OTP verification process`,
    note: { type: "warning", text: "Any misconduct — including theft, tampering, or fraud — will result in permanent suspension from the platform and referral for legal action." },
  },
  {
    num: "04",
    tag: "Prohibited Items",
    color: "red",
    title: "Prohibited Items",
    body: `The following categories of items are strictly prohibited from being sent through the Safe Delivery platform under any circumstances:\n\n• Weapons, firearms, or ammunition of any kind\n• Illegal drugs or controlled substances\n• Hazardous, flammable, or explosive materials\n• Stolen, counterfeit, or fraudulently obtained goods\n• Any item whose possession or transport is prohibited under Liberian law`,
    note: { type: "warning", text: "Sending prohibited items will result in immediate account termination and may give rise to criminal liability under applicable Liberian law." },
  },
  {
    num: "05",
    tag: "Payments & Charges",
    color: "amber",
    title: "Payments & Charges",
    body: `Delivery charges are calculated based on delivery distance and the selected service type. All applicable fees are displayed within the application prior to booking confirmation.\n\n• Cash on Delivery (COD) is supported on eligible orders\n• Payment is due upon successful delivery completion\n• Safe Delivery reserves the right to revise its pricing structure at any time`,
    note: { type: "info", text: "Current delivery rates will always be transparently displayed before you confirm any booking. No hidden charges apply." },
  },
  {
    num: "06",
    tag: "Data Collection",
    color: "blue",
    title: "Data Collection",
    body: `Safe Delivery collects only the minimum data necessary to deliver our services effectively and securely.\n\nCustomer Data Collected:\n• Full name, phone number, and email address\n• Pickup and delivery location information\n\nRider Data Collected:\n• Full name, phone number, and email address\n• Identity verification documents and selfie photograph\n• Driving license details and registered vehicle information`,
  },
  {
    num: "07",
    tag: "Purpose of Data",
    color: "blue",
    title: "Purpose of Data",
    body: `All data collected by Safe Delivery is used exclusively for the following operational purposes:\n\n• Identity verification and background screening\n• Delivery coordination, dispatch, and routing\n• Platform safety monitoring and fraud prevention\n• Ongoing service quality improvement`,
    note: { type: "info", text: "Your data will never be used for marketing, advertising, or any purpose beyond what is stated in this policy without your explicit consent." },
  },
  {
    num: "08",
    tag: "Privacy",
    color: "green",
    title: "Privacy Policy",
    body: `Safe Delivery is committed to protecting the privacy and personal data of all platform users.\n\n• All data is encrypted and stored on secured, access-controlled servers\n• We do not sell, rent, or share user data with unauthorized third parties\n• Location data is accessed solely during active delivery sessions\n• Data is processed strictly for operational and legally mandated purposes`,
    note: { type: "info", text: "You have the right to request access to, correction of, or deletion of your personal data at any time. Contact support@safedelivery.com to exercise these rights." },
  },
  {
    num: "09",
    tag: "Parcel Safety",
    color: "green",
    title: "Parcel Safety",
    body: `Safe Delivery implements the following measures to ensure the security and integrity of all parcels:\n\n• All deliveries are handled exclusively by verified and screened riders\n• OTP-based confirmation is required to complete each delivery\n• Real-time tracking is available throughout the delivery process`,
    note: { type: "warning", text: "Safe Delivery accepts no liability for damage arising from improper packaging by the sender or the inclusion of undeclared prohibited items." },
  },
  {
    num: "10",
    tag: "Account Suspension",
    color: "red",
    title: "Account Suspension & Termination",
    body: `Safe Delivery reserves the right to suspend or permanently terminate any user account under the following circumstances:\n\n• Submission of false, misleading, or fraudulent information\n• Attempted or completed shipment of prohibited items\n• Detection of fraudulent activity or abuse of the platform\n• Any breach of these Terms and Conditions`,
  },
  {
    num: "11",
    tag: "Limitation of Liability",
    color: "amber",
    title: "Limitation of Liability",
    body: `Safe Delivery operates solely as a technology facilitator connecting customers and independent delivery partners. Accordingly, Safe Delivery shall not be held liable for:\n\n• Indirect, incidental, or consequential damages of any nature\n• Delivery delays resulting from external factors including traffic, weather, or force majeure events`,
    note: { type: "info", text: "Our total liability in connection with any delivery service shall not exceed the delivery fee paid for that specific transaction." },
  },
  {
    num: "12",
    tag: "Updates to Terms",
    color: "gray",
    title: "Updates to Terms",
    body: `Safe Delivery reserves the right to amend or update these Terms and Conditions at any time. Where material changes are made:\n\n• Users will be notified through the application or our official website\n• A minimum of 7 days' notice will be provided before material changes take effect\n• Continued use of the platform following notification constitutes acceptance of the revised Terms`,
  },
];

const colorMap = {
  blue:  { tag: "bg-blue-50 text-blue-800 border border-blue-100",   dot: "bg-blue-600",  rowBorder: "border-l-blue-500"  },
  red:   { tag: "bg-red-50 text-red-800 border border-red-100",     dot: "bg-red-600",   rowBorder: "border-l-red-500"   },
  amber: { tag: "bg-amber-50 text-amber-800 border border-amber-100", dot: "bg-amber-500", rowBorder: "border-l-amber-500" },
  green: { tag: "bg-green-50 text-green-800 border border-green-100", dot: "bg-green-600", rowBorder: "border-l-green-500" },
  gray:  { tag: "bg-gray-100 text-gray-700 border border-gray-200",  dot: "bg-gray-500",  rowBorder: "border-l-gray-400"  },
};

function renderBody(body) {
  return body.split("\n").map((line, i) => {
    if (line.trim() === "") return <div key={i} className="h-2" />;
    if (line.startsWith("•")) {
      return (
        <div key={i} className="flex items-start gap-3 py-1">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
          <span className="text-sm text-black leading-relaxed font-normal">{line.slice(1).trim()}</span>
        </div>
      );
    }
    return (
      <p key={i} className="text-sm text-black leading-relaxed font-normal">{line}</p>
    );
  });
}

export default function TermsAndPrivacy() {
  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');`}</style>

      {/* HEADER */}
      <header className="bg-[#0B1F4B] px-6 md:px-10 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Terms &amp; Conditions
          </h1>
         
          <p className="text-white/45 text-sm font-light max-w-2xl leading-relaxed mt-5">
            This document sets out the terms and conditions governing your use of the Safe Delivery platform and mobile applications. Please read this document carefully before using our services.
          </p>
          <div className="flex flex-wrap gap-8 mt-8 pt-7 border-t border-white/10">
            <span className="flex items-center gap-2 text-xs text-white/35 font-light">
              <MapPin /><span>Monrovia, Liberia</span>
            </span>
            <span className="flex items-center gap-2 text-xs text-white/35 font-light">
              <Calendar /><span>Effective Date: May 2026</span>
            </span>
          </div>
        </div>
      </header>

      {/* INTRO */}
      <div className="bg-[#F7F8FA] border-b border-gray-200 px-6 md:px-10 py-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-black font-light leading-relaxed max-w-4xl">
            Safe Delivery operates through the{" "}
            <span className="font-semibold">Safe Delivery Customer App</span> and the{" "}
            <span className="font-semibold">Safe Delivery Driver (Rider) App</span>. By accessing or using either application, you acknowledge that you have read, understood, and agree to be legally bound by these Terms and Conditions and Privacy Policy. If you do not agree, please discontinue use of the platform immediately. For any queries, contact{" "}
            <a href="mailto:support@safedelivery.com" className="text-[#1A6FD4] hover:underline font-medium">
              support@safedelivery.com
            </a>.
          </p>
        </div>
      </div>

      {/* SECTIONS — formal table layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">

        {/* Column headers */}
        <div className="grid grid-cols-[60px_160px_1fr] gap-0 border-b-2 border-black pb-3 mb-0">
          <span className="text-[10px] tracking-widest uppercase font-semibold text-black">No.</span>
          <span className="text-[10px] tracking-widest uppercase font-semibold text-black">Section</span>
          <span className="text-[10px] tracking-widest uppercase font-semibold text-black">Provisions</span>
        </div>

        {sections.map(({ num, tag, color, title, body, note }, i) => {
          const c = colorMap[color];
          return (
            <div
              key={num}
              className={`grid grid-cols-[60px_160px_1fr] gap-0 border-b border-gray-200 py-7 border-l-4 pl-4 -ml-4 ${c.rowBorder}`}
            >
              {/* Number */}
              <div className="pt-0.5">
                <span className="text-xs font-mono font-semibold text-black/40">{num}</span>
              </div>

              {/* Tag + title */}
              <div className="pr-6 pt-0.5">
                <span className={`inline-block text-[10px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full mb-2 ${c.tag}`}>
                  {tag}
                </span>
                <p className="text-sm font-semibold text-black leading-snug">{title}</p>
              </div>

              {/* Body content */}
              <div>
                <div className="space-y-0.5">{renderBody(body)}</div>

                {note && (
                  <div className={`flex items-start gap-3 rounded-md px-4 py-3 mt-4 ${note.type === "warning" ? "bg-red-50 border border-red-100" : "bg-blue-50 border border-blue-100"}`}>
                    <span className={`shrink-0 mt-0.5 ${note.type === "warning" ? "text-red-600" : "text-blue-600"}`}>
                      {note.type === "warning" ? <AlertTriangle /> : <Info />}
                    </span>
                    <p className={`text-xs font-normal leading-relaxed ${note.type === "warning" ? "text-red-800" : "text-blue-800"}`}>
                      {note.text}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* FOOTER */}
      <footer className="bg-[#0B1F4B] mt-6 px-6 md:px-10 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <p className="text-[10px] tracking-widest uppercase text-[#1A6FD4] font-semibold mb-2">Contact &amp; Support</p>
            <h3 className="text-xl md:text-2xl font-semibold text-white leading-snug mb-2">
              Questions About These Terms?
            </h3>
            <p className="text-sm text-white/40 font-light max-w-sm leading-relaxed">
              Our support team is available to clarify any provisions of these Terms or your rights under our Privacy Policy.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <div className="flex items-center gap-2.5 text-xs text-white/50 font-light">
              <MapPin /><span>Monrovia, Liberia</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-white/50 font-light">
              <Phone /><span>+231 555 608 623</span>
            </div>
            <a href="mailto:support@safedelivery.com" className="flex items-center gap-2.5 text-xs text-white/50 hover:text-white transition-colors font-light">
              <Mail /><span>support@safedelivery.com</span>
            </a>
            <a
              href="mailto:support@safedelivery.com"
              className="mt-2 inline-flex items-center gap-2 bg-[#1A6FD4] hover:bg-[#1559B0] text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              <Mail /> Contact Support
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-xs text-white/20 font-light">© 2025 Safe Delivery. All rights reserved.</p>
          <p className="text-xs text-white/20 font-light">Last updated: May 2026</p>
        </div>
      </footer>

    </div>
  );
}