import { useState } from "react";

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
    tag: "Data Collection",
    color: "blue",
    title: "Information We Collect",
    subsections: [
      {
        subtitle: "Customer Information",
        items: [
          "Full name",
          "Phone number",
          "Email address",
          "Pickup and delivery addresses",
          "Device location while using the app",
        ],
      },
      {
        subtitle: "Rider Information",
        items: [
          "Full name",
          "Phone number",
          "Email address",
          "Profile photo and identity verification documents",
          "Driver license and vehicle information",
          "Real-time and background location data during active deliveries",
        ],
      },
    ],
  },
  {
    num: "02",
    tag: "Location",
    color: "blue",
    title: "Location Information",
    subsections: [
      {
        subtitle: "Customer App",
        body: "The Safe Ride Delivery Customer App may access precise device location while the app is in use to detect your current location, help select pickup and delivery addresses, and improve delivery tracking functionality.",
        note: { type: "info", text: "The customer application does not collect background location data." },
      },
      {
        subtitle: "Rider App",
        body: "The Safe Ride Delivery Rider App collects precise and background location data during active deliveries to provide live rider tracking, enable delivery navigation, support order assignment and dispatch, and provide real-time delivery updates to customers.",
        note: { type: "warning", text: "Background location access may continue even when the Rider App is closed or not actively in use during an ongoing delivery. Location data is used strictly for operational delivery functionality." },
      },
    ],
  },
  {
    num: "03",
    tag: "Data Usage",
    color: "green",
    title: "How We Use Information",
    body: "We use collected information to:",
    items: [
      "Create and manage user accounts",
      "Process and manage deliveries",
      "Provide customer support",
      "Enable real-time order tracking",
      "Verify rider identity and delivery activity",
      "Improve platform performance and security",
      "Prevent fraud and unauthorized activity",
    ],
  },
  {
    num: "04",
    tag: "Data Sharing",
    color: "amber",
    title: "Data Sharing",
    body: "Safe Ride Delivery does not sell or rent personal information to third parties. We may share limited information only when necessary to:",
    items: [
      "Complete deliveries",
      "Comply with legal obligations",
      "Prevent fraud or security threats",
      "Support operational services",
    ],
    note: { type: "info", text: "Your personal data will never be sold, rented, or shared beyond what is strictly required for the above operational purposes." },
  },
  {
    num: "05",
    tag: "Security",
    color: "green",
    title: "Data Security",
    body: "We use reasonable administrative, technical, and security measures to protect user information against unauthorized access, misuse, or disclosure.",
    note: { type: "info", text: "While we implement industry-standard safeguards, no method of transmission over the internet is 100% secure. We are committed to continuously improving our security practices." },
  },
  {
    num: "06",
    tag: "Retention",
    color: "gray",
    title: "Data Retention",
    body: "We retain user information only for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our policies.",
  },
  {
    num: "07",
    tag: "Your Rights",
    color: "blue",
    title: "User Rights",
    body: "Users may request to:",
    items: [
      "Access their personal information",
      "Correct inaccurate information",
      "Delete their account and associated data",
    ],
    note: { type: "info", text: "Requests can be submitted through the app or by contacting our support team at support@saferidedelivery.com." },
  },
  {
    num: "08",
    tag: "Account Deletion",
    color: "red",
    title: "Account Deletion",
    body: "Users may delete their account directly within the application through the Delete Account option available in profile settings.",
    note: { type: "warning", text: "Some information may be retained where required by law or for fraud prevention and security purposes even after account deletion." },
  },
  {
    num: "09",
    tag: "Children",
    color: "amber",
    title: "Children's Privacy",
    body: "Safe Ride Delivery services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that a minor has provided us with personal data, we will take steps to delete that information promptly.",
  },
  {
    num: "10",
    tag: "Policy Updates",
    color: "gray",
    title: "Changes to This Privacy Policy",
    body: "We may update this Privacy Policy from time to time. Users will be notified of significant changes through the application or official communication channels.",
    note: { type: "info", text: "Continued use of the services after updates constitutes acceptance of the revised Privacy Policy. We recommend reviewing this policy periodically." },
  },
  {
    num: "11",
    tag: "Contact",
    color: "blue",
    title: "Contact Us",
    body: "If you have any questions regarding this Privacy Policy or your personal information, please contact our support team. We aim to respond to all privacy-related inquiries within 5 business days.",
    contact: true,
  },
];

const colorMap = {
  blue:  { tag: "bg-blue-50 text-blue-800 border border-blue-100",   rowBorder: "border-l-blue-500"  },
  red:   { tag: "bg-red-50 text-red-800 border border-red-100",      rowBorder: "border-l-red-500"   },
  amber: { tag: "bg-amber-50 text-amber-800 border border-amber-100", rowBorder: "border-l-amber-500" },
  green: { tag: "bg-green-50 text-green-800 border border-green-100", rowBorder: "border-l-green-500" },
  gray:  { tag: "bg-gray-100 text-gray-700 border border-gray-200",  rowBorder: "border-l-gray-400"  },
};

function Note({ note }) {
  if (!note) return null;
  const isWarn = note.type === "warning";
  return (
    <div className={`flex items-start gap-3 rounded-md px-4 py-3 mt-4 ${isWarn ? "bg-red-50 border border-red-100" : "bg-blue-50 border border-blue-100"}`}>
      <span className={`shrink-0 mt-0.5 ${isWarn ? "text-red-600" : "text-blue-600"}`}>
        {isWarn ? <AlertTriangle /> : <Info />}
      </span>
      <p className={`text-xs font-normal leading-relaxed ${isWarn ? "text-red-800" : "text-blue-800"}`}>
        {note.text}
      </p>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <div className="space-y-1 mt-2">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3 py-0.5">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
          <span className="text-sm text-black leading-relaxed font-normal">{item}</span>
        </div>
      ))}
    </div>
  );
}

function SectionContent({ section }) {
  const { body, items, note, subsections, contact } = section;

  if (subsections) {
    return (
      <div className="space-y-5">
        {subsections.map((sub, i) => (
          <div key={i}>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-black/40 mb-2">{sub.subtitle}</p>
            {sub.body && <p className="text-sm text-black leading-relaxed font-normal">{sub.body}</p>}
            {sub.items && <BulletList items={sub.items} />}
            {sub.note && <Note note={sub.note} />}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      {body && <p className="text-sm text-black leading-relaxed font-normal">{body}</p>}
      {items && <BulletList items={items} />}
      {contact && (
        <div className="mt-3">
          <a href="mailto:support@saferidedelivery.com" className="inline-flex items-center gap-2 text-sm text-[#1A6FD4] hover:underline font-medium">
            <Mail /> support@saferidedelivery.com
          </a>
        </div>
      )}
      <Note note={note} />
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');`}</style>

      {/* HEADER */}
      <header className="bg-[#0B1F4B] px-6 md:px-10 py-14">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm font-light max-w-2xl leading-relaxed mt-5">
            This Privacy Policy explains how Safe Ride Delivery collects, uses, stores, and protects your personal information when you use our Customer App and Rider App. By using our services, you agree to the practices described in this document.
          </p>
          <div className="flex flex-wrap gap-8 mt-8 pt-7 border-t border-white/10">
            <span className="flex items-center gap-2 text-xs text-white/40 font-light">
              <MapPin /><span>Monrovia, Liberia</span>
            </span>
            <span className="flex items-center gap-2 text-xs text-white/40 font-light">
              <Calendar /><span>Effective Date: May 2026</span>
            </span>
          </div>
        </div>
      </header>

      {/* INTRO BAND */}
      <div className="bg-[#F7F8FA] border-b border-gray-200 px-6 md:px-10 py-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-black font-light leading-relaxed max-w-4xl">
            Safe Ride Delivery operates through the{" "}
            <span className="font-semibold">Safe Ride Delivery Customer App</span> and the{" "}
            <span className="font-semibold">Safe Ride Delivery Rider App</span>. This policy applies to all users of both applications. For questions or data requests, contact{" "}
            <a href="mailto:support@saferidedelivery.com" className="text-[#1A6FD4] hover:underline font-medium">
              support@saferidedelivery.com
            </a>.
          </p>
        </div>
      </div>

      {/* SECTIONS */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">

        {/* Column headers */}
        <div className="grid grid-cols-[60px_160px_1fr] gap-0 border-b-2 border-black pb-3 mb-0">
          <span className="text-[10px] tracking-widest uppercase font-semibold text-black">No.</span>
          <span className="text-[10px] tracking-widest uppercase font-semibold text-black">Section</span>
          <span className="text-[10px] tracking-widest uppercase font-semibold text-black">Details</span>
        </div>

        {sections.map((section) => {
          const c = colorMap[section.color];
          return (
            <div
              key={section.num}
              className={`grid grid-cols-[60px_160px_1fr] gap-0 border-b border-gray-200 py-7 border-l-4 pl-4 -ml-4 ${c.rowBorder}`}
            >
              {/* Number */}
              <div className="pt-0.5">
                <span className="text-xs font-mono font-semibold text-black/40">{section.num}</span>
              </div>

              {/* Tag + title */}
              <div className="pr-6 pt-0.5">
                <span className={`inline-block text-[10px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full mb-2 ${c.tag}`}>
                  {section.tag}
                </span>
                <p className="text-sm font-semibold text-black leading-snug">{section.title}</p>
              </div>

              {/* Content */}
              <div>
                <SectionContent section={section} />
              </div>
            </div>
          );
        })}
      </div>

      {/* FOOTER */}
      <footer className="bg-[#0B1F4B] mt-6 px-6 md:px-10 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <p className="text-[10px] tracking-widest uppercase text-[#1A6FD4] font-semibold mb-2">Privacy &amp; Support</p>
            <h3 className="text-xl md:text-2xl font-semibold text-white leading-snug mb-2">
              Questions About Your Data?
            </h3>
            <p className="text-sm text-white/45 font-light max-w-sm leading-relaxed">
              Our support team is available to help with any privacy concerns, data access requests, or account deletion inquiries.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <div className="flex items-center gap-2.5 text-xs text-white/50 font-light">
              <MapPin /><span>Monrovia, Liberia</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-white/50 font-light">
              <Phone /><span>+231 555 608 623</span>
            </div>
            <a href="mailto:support@saferidedelivery.com" className="flex items-center gap-2.5 text-xs text-white/50 hover:text-white transition-colors font-light">
              <Mail /><span>support@saferidedelivery.com</span>
            </a>
            <a
              href="mailto:support@saferidedelivery.com"
              className="mt-2 inline-flex items-center gap-2 bg-[#1A6FD4] hover:bg-[#1559B0] text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              <Mail /> Contact Support
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-xs text-white/25 font-light">© 2026 Safe Ride Delivery. All rights reserved.</p>
          <p className="text-xs text-white/25 font-light">Last updated: May 2026</p>
        </div>
      </footer>

    </div>
  );
}