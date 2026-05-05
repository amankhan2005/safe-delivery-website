import { useState } from "react";

// ─── ICONS ────────────────────────────────────────────────────

const MapPin = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="10" r="3" /><path d="M12 2a8 8 0 018 8c0 5-8 13-8 13S4 15 4 10a8 8 0 018-8z" />
  </svg>
);

const Calendar = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const Mail = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" />
  </svg>
);

const Phone = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const AlertTriangle = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const Info = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

// ─── DATA ────────────────────────────────────────────────────

const sections = [
  {
    num: "01", tag: "Services", color: "blue",
    title: "Our Services",
    body: [
      { t: "p", v: "Safe Delivery connects customers with independent delivery partners through our technology platform. We act solely as a technology intermediary and do not directly employ delivery personnel." },
      { t: "p", v: "Services provided include:" },
      { t: "b", v: "Booking of parcel deliveries" },
      { t: "b", v: "Real-time delivery tracking" },
      { t: "b", v: "Cash on Delivery (COD) payments" },
      { t: "b", v: "Access to a verified delivery rider network" },
    ],
    note: { type: "info", text: "Safe Delivery acts as a technology platform only — facilitating connections between customers and independent delivery partners." },
  },
  {
    num: "02", tag: "User Responsibilities", color: "gray",
    title: "User Responsibilities (Customers)",
    body: [
      { t: "p", v: "By using the Safe Delivery platform as a customer, you agree to:" },
      { t: "b", v: "Provide accurate pickup and drop-off details at all times" },
      { t: "b", v: "Refrain from sending prohibited or illegal items" },
      { t: "b", v: "Ensure correct receiver details for OTP verification" },
      { t: "b", v: "Cooperate fully throughout the delivery process" },
    ],
    note: { type: "warning", text: "Failure to comply with these obligations may result in delivery cancellation, account suspension, or permanent termination." },
  },
  {
    num: "03", tag: "Rider Responsibilities", color: "blue",
    title: "Rider Responsibilities",
    body: [
      { t: "p", v: "All delivery riders operating on the Safe Delivery platform are contractually required to:" },
      { t: "b", v: "Handle all parcels safely, securely, and professionally" },
      { t: "b", v: "Maintain strict customer privacy at all times" },
      { t: "b", v: "Deliver packages in their original condition, without tampering or damage" },
      { t: "b", v: "Complete each delivery using the designated OTP verification process" },
    ],
    note: { type: "warning", text: "Any misconduct — including theft, tampering, or fraud — will result in permanent suspension from the platform and referral for legal action." },
  },
  {
    num: "04", tag: "Prohibited Items", color: "red",
    title: "Prohibited Items",
    body: [
      { t: "p", v: "The following categories of items are strictly prohibited from being sent through the Safe Delivery platform under any circumstances:" },
      { t: "b", v: "Weapons, firearms, or ammunition of any kind" },
      { t: "b", v: "Illegal drugs or controlled substances" },
      { t: "b", v: "Hazardous, flammable, or explosive materials" },
      { t: "b", v: "Stolen, counterfeit, or fraudulently obtained goods" },
      { t: "b", v: "Any item whose possession or transport is prohibited under Liberian law" },
    ],
    note: { type: "warning", text: "Sending prohibited items will result in immediate account termination and may give rise to criminal liability under applicable Liberian law." },
  },
  {
    num: "05", tag: "Payments & Charges", color: "amber",
    title: "Payments & Charges",
    body: [
      { t: "p", v: "Delivery charges are calculated based on delivery distance and the selected service type. All applicable fees are displayed within the application prior to booking confirmation." },
      { t: "b", v: "Cash on Delivery (COD) is supported on eligible orders" },
      { t: "b", v: "Payment is due upon successful delivery completion" },
      { t: "b", v: "Safe Delivery reserves the right to revise its pricing structure at any time" },
    ],
    note: { type: "info", text: "Current delivery rates will always be transparently displayed before you confirm any booking. No hidden charges apply." },
  },
  {
    num: "06", tag: "Data Collection", color: "blue",
    title: "Data Collection",
    body: [
      { t: "p", v: "Safe Delivery collects only the minimum data necessary to deliver our services effectively and securely." },
      { t: "p", v: "Customer data collected:" },
      { t: "b", v: "Full name, phone number, and email address" },
      { t: "b", v: "Pickup and delivery location information" },
      { t: "p", v: "Rider data collected:" },
      { t: "b", v: "Full name, phone number, and email address" },
      { t: "b", v: "Identity verification documents and selfie photograph" },
      { t: "b", v: "Driving license details and registered vehicle information" },
    ],
  },
  {
    num: "07", tag: "Purpose of Data", color: "blue",
    title: "Purpose of Data",
    body: [
      { t: "p", v: "All data collected by Safe Delivery is used exclusively for the following operational purposes:" },
      { t: "b", v: "Identity verification and background screening" },
      { t: "b", v: "Delivery coordination, dispatch, and routing" },
      { t: "b", v: "Platform safety monitoring and fraud prevention" },
      { t: "b", v: "Ongoing service quality improvement" },
    ],
    note: { type: "info", text: "Your data will never be used for marketing, advertising, or any purpose beyond what is stated in this policy without your explicit consent." },
  },
  {
    num: "08", tag: "Privacy", color: "green",
    title: "Privacy Policy",
    body: [
      { t: "p", v: "Safe Delivery is committed to protecting the privacy and personal data of all platform users." },
      { t: "b", v: "All data is encrypted and stored on secured, access-controlled servers" },
      { t: "b", v: "We do not sell, rent, or share user data with unauthorized third parties" },
      { t: "b", v: "Location data is accessed solely during active delivery sessions" },
      { t: "b", v: "Data is processed strictly for operational and legally mandated purposes" },
    ],
    note: { type: "info", text: "You have the right to request access to, correction of, or deletion of your personal data at any time. Contact support@safedelivery.com to exercise these rights." },
  },
  {
    num: "09", tag: "Parcel Safety", color: "green",
    title: "Parcel Safety",
    body: [
      { t: "p", v: "Safe Delivery implements the following measures to ensure the security and integrity of all parcels:" },
      { t: "b", v: "All deliveries are handled exclusively by verified and screened riders" },
      { t: "b", v: "OTP-based confirmation is required to complete each delivery" },
      { t: "b", v: "Real-time tracking is available throughout the delivery process" },
    ],
    note: { type: "warning", text: "Safe Delivery accepts no liability for damage arising from improper packaging by the sender or the inclusion of undeclared prohibited items." },
  },
  {
    num: "10", tag: "Account Suspension", color: "red",
    title: "Account Suspension & Termination",
    body: [
      { t: "p", v: "Safe Delivery reserves the right to suspend or permanently terminate any user account under the following circumstances:" },
      { t: "b", v: "Submission of false, misleading, or fraudulent information" },
      { t: "b", v: "Attempted or completed shipment of prohibited items" },
      { t: "b", v: "Detection of fraudulent activity or abuse of the platform" },
      { t: "b", v: "Any breach of these Terms and Conditions" },
    ],
  },
  {
    num: "11", tag: "Limitation of Liability", color: "amber",
    title: "Limitation of Liability",
    body: [
      { t: "p", v: "Safe Delivery operates solely as a technology facilitator connecting customers and independent delivery partners. Accordingly, Safe Delivery shall not be held liable for:" },
      { t: "b", v: "Indirect, incidental, or consequential damages of any nature" },
      { t: "b", v: "Delivery delays resulting from external factors including traffic, weather, or force majeure events" },
    ],
    note: { type: "info", text: "Our total liability in connection with any delivery service shall not exceed the delivery fee paid for that specific transaction." },
  },
  {
    num: "12", tag: "Updates to Terms", color: "gray",
    title: "Updates to Terms",
    body: [
      { t: "p", v: "Safe Delivery reserves the right to amend or update these Terms and Conditions at any time. Where material changes are made:" },
      { t: "b", v: "Users will be notified through the application or our official website" },
      { t: "b", v: "A minimum of 7 days' notice will be provided before material changes take effect" },
      { t: "b", v: "Continued use of the platform following notification constitutes acceptance of the revised Terms" },
    ],
  },
];

// ─── COLOR CONFIG ─────────────────────────────────────────────

const colorConfig = {
  blue: {
    border: "border-l-[#1A6FD4]",
    tag: "bg-blue-50 text-[#1A6FD4]",
    dot: "bg-[#1A6FD4]",
  },
  red: {
    border: "border-l-[#E8212B]",
    tag: "bg-red-50 text-[#E8212B]",
    dot: "bg-[#E8212B]",
  },
  amber: {
    border: "border-l-[#D97706]",
    tag: "bg-amber-50 text-[#D97706]",
    dot: "bg-[#D97706]",
  },
  green: {
    border: "border-l-[#16A34A]",
    tag: "bg-green-50 text-[#16A34A]",
    dot: "bg-[#16A34A]",
  },
  gray: {
    border: "border-l-[#9BA3AF]",
    tag: "bg-[#F1F3F5] text-[#374151]",
    dot: "bg-[#9BA3AF]",
  },
};

// ─── BODY RENDERER ────────────────────────────────────────────

function RenderBody({ body, dotClass }) {
  return (
    <div className="space-y-1">
      {body.map((item, i) => {
        if (item.t === "p") {
          return (
            <p key={i} className="text-[13.5px] text-[#374151] font-light leading-relaxed">
              {item.v}
            </p>
          );
        }
        return (
          <div key={i} className="flex items-start gap-3 py-0.5">
            <span className={`w-[5px] h-[5px] rounded-full shrink-0 mt-[9px] ${dotClass}`} />
            <span className="text-[13.5px] text-[#374151] font-light leading-relaxed">{item.v}</span>
          </div>
        );
      })}
    </div>
  );
}

// ─── NOTE ─────────────────────────────────────────────────────

function Note({ note }) {
  const isInfo = note.type === "info";
  return (
    <div
      className={`flex items-start gap-3 rounded-xl px-4 py-3 mt-4 border ${
        isInfo
          ? "bg-blue-50 border-blue-100 text-[#1A3F72]"
          : "bg-red-50 border-red-100 text-[#7a0000]"
      }`}
    >
      <span className={`shrink-0 mt-0.5 ${isInfo ? "text-[#1A6FD4]" : "text-[#E8212B]"}`}>
        {isInfo ? <Info /> : <AlertTriangle />}
      </span>
      <p className="text-[12px] font-normal leading-relaxed">{note.text}</p>
    </div>
  );
}

// ─── SECTION ROW ─────────────────────────────────────────────

function SectionRow({ section }) {
  const c = colorConfig[section.color];
  return (
    <div
      className={`grid grid-cols-[56px_196px_1fr] border-b border-[#E8EAED] py-8 border-l-4 -ml-1 pl-4 hover:bg-[#FAFBFF] transition-colors duration-150 ${c.border}`}
    >
      {/* Number */}
      <div className="pt-1">
        <span className="text-[10.5px] font-mono font-bold text-[#C4C9D4]">{section.num}</span>
      </div>

      {/* Tag + Title */}
      <div className="pr-6 pt-1">
        <span
          className={`inline-flex items-center gap-1.5 text-[9.5px] font-semibold tracking-[0.5px] px-2.5 py-1 rounded-full mb-2.5 ${c.tag}`}
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          <span className={`w-[5px] h-[5px] rounded-full bg-current`} />
          {section.tag}
        </span>
        <p className="text-[13px] font-bold text-[#0B1F4B] leading-snug" style={{ fontFamily: "'Syne', sans-serif" }}>
          {section.title}
        </p>
      </div>

      {/* Body */}
      <div>
        <RenderBody body={section.body} dotClass={c.dot} />
        {section.note && <Note note={section.note} />}
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────

export default function TermsAndConditions() {
  return (
    <div className="bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Syne:wght@600;700;800&display=swap');`}</style>

      {/* ── HERO ── */}
      <section className="bg-[#0B1F4B] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(232,33,43,0.15) 0%, transparent 70%)" }} />

        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28 text-center relative z-10">

          {/* Eyebrow badge */}
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.5px] px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/60 mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <span className="w-[5px] h-[5px] rounded-full bg-[#E8212B]" />
            Official Legal Document — Safe Delivery Platform
          </span>

          {/* Headline */}
          <h1
            className="text-[44px] md:text-[64px] lg:text-[76px] font-extrabold text-white leading-[1.04] tracking-[-2.5px] mb-5"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Terms &amp; <span className="text-[#E8212B]">Conditions</span>
          </h1>

          <p className="text-[14px] font-light text-white/45 max-w-[500px] mx-auto leading-relaxed mb-14">
            This document governs your use of the Safe Delivery platform and mobile applications. Please read carefully before using our services.
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center divide-x divide-white/10 border-t border-white/10 pt-10 max-w-[680px] mx-auto">
            {[
              { label: "Jurisdiction", value: "Monrovia, Liberia" },
              { label: "Effective Date", value: "May 2026" },
              { label: "Last Updated", value: "May 2026" },
              { label: "Applies To", value: "Customer & Rider Apps" },
            ].map(({ label, value }) => (
              <div key={label} className="flex-1 min-w-[140px] px-6 py-2 text-center">
                <p className="text-[9.5px] uppercase tracking-[0.18em] font-semibold text-white/28 mb-1">{label}</p>
                <p className="text-[12.5px] font-medium text-white/60">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO BAND ── */}
      <div className="bg-[#F7F8FA] border-b border-[#E8EAED] px-6 md:px-10 py-5 text-center">
        <p className="text-[13px] font-light text-[#374151] leading-relaxed max-w-[820px] mx-auto">
          Safe Delivery operates through the{" "}
          <span className="font-semibold text-[#0B1F4B]">Safe Delivery Customer App</span> and the{" "}
          <span className="font-semibold text-[#0B1F4B]">Safe Delivery Driver (Rider) App</span>. By accessing or using either application, you acknowledge that you have read, understood, and agree to be legally bound by these Terms and Conditions. If you do not agree, please discontinue use of the platform immediately. For queries, contact{" "}
          <a href="mailto:support@safedelivery.com" className="text-[#1A6FD4] font-medium hover:underline">
            support@safedelivery.com
          </a>.
        </p>
      </div>

      {/* ── SECTIONS TABLE ── */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-10">

        {/* Column headers */}
        <div className="grid grid-cols-[56px_196px_1fr] border-b-2 border-[#0B1F4B] pb-3 mb-0 ml-3">
          {["No.", "Section", "Provisions"].map((h) => (
            <span key={h} className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#0B1F4B]"
              style={{ fontFamily: "'Syne', sans-serif" }}>{h}</span>
          ))}
        </div>

        {/* Rows */}
        <div className="ml-1">
          {sections.map((s) => (
            <SectionRow key={s.num} section={s} />
          ))}
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0B1F4B] mt-6 px-6 md:px-10 py-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">

            {/* Left */}
            <div>
              <p
                className="text-[9.5px] tracking-[0.2em] uppercase text-[#E8212B] font-semibold mb-3"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Contact &amp; Support
              </p>
              <h3
                className="text-[26px] md:text-[30px] font-bold text-white leading-tight tracking-[-0.5px] mb-3"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Questions About <span className="text-[#E8212B]">These Terms?</span>
              </h3>
              <p className="text-[13px] font-light text-white/40 max-w-[340px] leading-relaxed">
                Our support team is available to clarify any provisions of these Terms or your rights under our Privacy Policy.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-3.5 shrink-0">
              <div className="flex items-center gap-2.5 text-[12.5px] text-white/45 font-light">
                <MapPin /><span>Monrovia, Liberia</span>
              </div>
              <div className="flex items-center gap-2.5 text-[12.5px] text-white/45 font-light">
                <Phone /><span>+231-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2.5 text-[12.5px] text-white/45 font-light">
                <Mail /><span>support@safedelivery.com</span>
              </div>
              <a
                href="mailto:support@safedelivery.com"
                className="mt-2 inline-flex items-center gap-2 bg-[#E8212B] hover:bg-[#c81820] text-white text-[11.5px] font-semibold px-6 py-3 rounded-xl transition-colors uppercase tracking-[0.08em]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                <Mail size={13} /> Contact Support
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2">
            <p className="text-[11px] text-white/20 font-light">© 2026 Safe Delivery. All rights reserved.</p>
            <p className="text-[11px] text-white/20 font-light">Last updated: May 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}