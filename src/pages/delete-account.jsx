import { useNavigate } from "react-router-dom";

export default function DeleteAccount() {
  const navigate = useNavigate();

  const steps = [
    {
      number: "01",
      title: "Login",
      text: "Login to your account in the app.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
          <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/>
          <polyline points="10 17 15 12 10 7"/>
          <line x1="15" y1="12" x2="3" y2="12"/>
        </svg>
      ),
    },
    {
      number: "02",
      title: "My Profile",
      text: 'Navigate to "My Profile" from the main menu.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
    },
    {
      number: "03",
      title: "Scroll Down",
      text: "Scroll to the very bottom of your profile page.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
          <line x1="12" y1="5" x2="12" y2="19"/>
          <polyline points="19 12 12 19 5 12"/>
        </svg>
      ),
    },
    {
      number: "04",
      title: "Tap Delete",
      text: 'Tap the "Delete Account" button at the bottom.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
          <path d="M10 11v6M14 11v6"/>
          <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
        </svg>
      ),
    },
    {
      number: "05",
      title: "Verify Password",
      text: "Enter your password to verify your identity.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0110 0v4"/>
        </svg>
      ),
    },
    {
      number: "06",
      title: "Confirm Deletion",
      text: "Review the prompt and confirm account deletion.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      ),
    },
    {
      number: "07",
      title: "Account Deleted",
      text: "Your account is permanently and successfully deleted.",
      isDanger: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
          <circle cx="12" cy="12" r="10"/>
          <line x1="15" y1="9" x2="9" y2="15"/>
          <line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
      ),
    },
  ];

  const warnings = [
    {
      text: "This action is irreversible and cannot be undone.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={17} height={17}>
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      ),
    },
    {
      text: "All account data will be permanently removed from our servers.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={17} height={17}>
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
          <path d="M10 11v6M14 11v6"/>
          <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
        </svg>
      ),
    },
    {
      text: "Both Riders and Customers follow this same process to delete accounts.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={17} height={17}>
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87"/>
          <path d="M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F8FA]" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');`}</style>

      {/* ── STICKY TOP BAR ── */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-[#E8EAED]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-[#374151] hover:text-[#0B1F4B] transition group"
          >
            <div className="w-8 h-8 rounded-lg border border-[#E8EAED] bg-white flex items-center justify-center group-hover:border-[#C7DCFA] group-hover:bg-blue-50 transition">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={15} height={15}>
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
            </div>
            <span className="text-[13px] font-medium hidden sm:block">Back to Home</span>
          </button>
          <div className="h-4 w-px bg-[#E8EAED] hidden sm:block" />
          <nav className="hidden sm:flex items-center gap-1 text-[12px] text-[#9CA3AF]">
            <span>Account Settings</span>
            <span className="mx-1">›</span>
            <span className="text-[#E8212B] font-medium">Delete Account</span>
          </nav>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="bg-[#0B1F4B] relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/[0.04] pointer-events-none" />
        <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full border border-white/[0.04] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full border border-white/[0.04] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#E8212B]/15 border border-[#E8212B]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8212B] animate-pulse" />
                <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#FCA5A5]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Danger Zone
                </span>
              </div>
              <h1 className="text-[44px] md:text-[62px] font-extrabold text-white leading-none tracking-tight mb-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Delete<br /><span className="text-[#E8212B]">Account</span>
              </h1>
              <p className="text-[15px] text-[#94A3B8] font-light leading-relaxed max-w-lg">
                Deleting your account is{" "}
                <span className="text-[#FCA5A5] font-medium">permanent and cannot be reversed.</span>{" "}
                Please read all steps carefully before proceeding.
              </p>
            </div>

            <div className="flex gap-3 shrink-0">
              <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-center">
                <div className="text-[32px] font-extrabold text-white mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>7</div>
                <div className="text-[11px] text-[#64748B] uppercase tracking-widest">Steps</div>
              </div>
              <div className="bg-[#E8212B]/10 border border-[#E8212B]/20 rounded-2xl px-6 py-5 text-center">
                <div className="text-[32px] font-extrabold text-[#FCA5A5] mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>∞</div>
                <div className="text-[11px] text-[#64748B] uppercase tracking-widest">Permanent</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">

          {/* LEFT — Steps */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
              <div>
                <p className="text-[10px] font-semibold tracking-[3px] uppercase text-[#9BA3AF] mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Step by Step
                </p>
                <h2 className="text-[22px] font-bold text-[#0B1F4B] tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  How to Delete Your Account
                </h2>
              </div>
              <div className="flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-full px-3.5 py-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={13} height={13}>
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4M12 16h.01"/>
                </svg>
                <span className="text-[11px] font-semibold text-amber-700">Riders &amp; Customers</span>
              </div>
            </div>

            <div className="space-y-3">
              {steps.map(({ number, title, text, icon, isDanger }, i) => (
                <div key={i} className="relative">
                  <div
                    className={`group flex items-start gap-5 rounded-2xl border p-5 transition-all duration-200 ${
                      isDanger
                        ? "bg-red-50 border-red-100 hover:border-[#E8212B]/40 hover:shadow-[0_6px_28px_rgba(232,33,43,0.09)]"
                        : "bg-white border-[#E8EAED] hover:border-[#C7DCFA] hover:shadow-[0_6px_28px_rgba(26,111,212,0.07)]"
                    }`}
                  >
                    {/* ghost number */}
                    <span
                      className="absolute top-4 right-5 text-[13px] font-extrabold opacity-[0.10] select-none"
                      style={{ fontFamily: "'Poppins', sans-serif", color: isDanger ? "#E8212B" : "#0B1F4B" }}
                    >
                      {number}
                    </span>

                    {/* icon */}
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isDanger
                        ? "bg-[#E8212B]/10 text-[#E8212B] group-hover:bg-[#E8212B]/18"
                        : "bg-[#EFF4FF] text-[#1A6FD4] group-hover:bg-[#DDEAFF]"
                    }`}>
                      {icon}
                    </div>

                    <div className="flex-1 pr-8 pt-0.5">
                      <p className={`text-[11px] font-bold uppercase tracking-widest mb-1 ${isDanger ? "text-[#E8212B]" : "text-[#1A6FD4]"}`}
                        style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {title}
                      </p>
                      <p className={`text-[14px] leading-snug font-light ${isDanger ? "text-[#B91C1C]" : "text-[#374151]"}`}>
                        {text}
                      </p>
                    </div>
                  </div>

                  {/* connector */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-[34px] -bottom-3 w-px h-3 bg-[#E8EAED] z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Sidebar */}
          <div className="lg:sticky lg:top-20 space-y-5">

            {/* Warning card */}
            <div className="bg-[#0B1F4B] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(11,31,75,0.18)]">
              <div className="h-1 bg-[#E8212B]" />
              <div className="px-6 py-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-xl bg-[#E8212B] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
                      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                      <line x1="12" y1="9" x2="12" y2="13"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                  </div>
                  <p className="text-[11px] font-bold tracking-[2.5px] uppercase text-[#6B9FE4]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Important Notice
                  </p>
                </div>
                <div className="space-y-4">
                  {warnings.map(({ text, icon }, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[#E8212B] mt-0.5 shrink-0">{icon}</span>
                      <p className="text-[13px] text-[#CBD5E1] font-light leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Applies to */}
            <div className="bg-white border border-[#E8EAED] rounded-2xl p-5">
              <p className="text-[10px] font-semibold tracking-[2.5px] uppercase text-[#9BA3AF] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Applies To
              </p>
              <div className="space-y-3">
                {[
                  { label: "Riders", desc: "Delivery drivers & riders", bg: "bg-blue-50", border: "border-blue-100", color: "text-[#1A6FD4]" },
                  { label: "Customers", desc: "App users placing orders", bg: "bg-green-50", border: "border-green-100", color: "text-[#16A34A]" },
                ].map(({ label, desc, bg, border, color }) => (
                  <div key={label} className={`flex items-center gap-3 ${bg} border ${border} rounded-xl px-4 py-3 ${color}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <div>
                      <p className="text-[13px] font-semibold">{label}</p>
                      <p className="text-[11px] opacity-60 font-light">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support CTA */}
            <div className="bg-white border border-[#E8EAED] rounded-2xl p-5 text-center">
              <p className="text-[13px] text-[#6B7280] font-light mb-4 leading-relaxed">
                Need help before deleting your account?
              </p>
              <a
                href="mailto:support@saferidedelivery.com"
                className="inline-flex items-center justify-center gap-2.5 w-full bg-[#0B1F4B] hover:bg-[#1A6FD4] text-white text-[13px] font-semibold px-5 py-3 rounded-xl transition-colors duration-200"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={15} height={15}>
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
                Contact Support
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#E8EAED] mt-4">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#9CA3AF]">
            © {new Date().getFullYear()} Safe Delivery. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[12px] text-[#9CA3AF]">
            <a href="/privacy" className="hover:text-[#1A6FD4] transition">Privacy Policy</a>
            <span>·</span>
            <a href="/terms" className="hover:text-[#1A6FD4] transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}