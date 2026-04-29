import { useState } from "react";

function Modal({ type, message, onClose }) {
  const isSuccess = type === "success";
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-[16px] p-8 w-full max-w-sm text-center border border-[#E8EAED]">

        {/* Icon */}
        <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${
          isSuccess ? "bg-green-50" : "bg-red-50"
        }`}>
          {isSuccess ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round" width={26} height={26}>
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="#E8212B" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round" width={26} height={26}>
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          )}
        </div>

        <h2
          className="text-[18px] font-bold text-[#0B1F4B]"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {isSuccess ? "Message Sent!" : "Something Went Wrong"}
        </h2>

        <p className="mt-2 text-[13.5px] text-[#6B7280] font-light leading-relaxed">
          {message}
        </p>

        <button
          onClick={onClose}
          className="mt-6 w-full py-2.5 rounded-[8px] text-[13px] font-semibold text-white transition"
          style={{
            background: isSuccess ? "#16A34A" : "#E8212B",
            fontFamily: "'Syne', sans-serif",
          }}
        >
          {isSuccess ? "Great, thanks!" : "Try Again"}
        </button>
      </div>
    </div>
  );
}

const inputClass =
  "w-full border border-[#E8EAED] bg-[#F7F8FA] rounded-[8px] px-4 py-3 text-[13.5px] text-[#0B1F4B] placeholder-[#9BA3AF] outline-none focus:border-[#1A6FD4] focus:bg-white focus:ring-2 focus:ring-[#1A6FD4]/10 transition";

export default function Support() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    role: "customer",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ firstName: "", lastName: "", phone: "", role: "customer", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F7F8FA] min-h-screen">

      {/* ── HEADER ── */}
      <section className="bg-white border-b border-[#E8EAED]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 text-center">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.5px] px-2.5 py-1 rounded-full bg-blue-50 text-[#1A6FD4] mb-5">
            <span className="w-[5px] h-[5px] rounded-full bg-[#1A6FD4]" />
            Support
          </span>
          <h1
            className="text-[36px] md:text-[48px] font-extrabold text-[#0B1F4B] tracking-[-1.5px] leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            How Can We Help?
          </h1>
          <p className="mt-3 text-[14px] text-[#6B7280] font-light leading-relaxed max-w-md mx-auto">
            Have a question or issue? Fill the form below and our team will get back to you shortly.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">

            {/* LEFT — Contact Info */}
            <div className="flex flex-col gap-5">

              {/* Info cards */}
              {[
                {
                  label: "Email Us",
                  value: "support@safedelivery.com",
                  color: "#1A6FD4", bg: "bg-blue-50",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#1A6FD4" strokeWidth="1.6"
                      strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="M2 7l10 7 10-7"/>
                    </svg>
                  ),
                },
                {
                  label: "Call Us",
                  value: "+231-XXX-XXXX",
                  color: "#16A34A", bg: "bg-green-50",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="1.6"
                      strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
                      <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 4.18 2 2 0 015.09 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006.99 7l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  ),
                },
                {
                  label: "Visit Us",
                  value: "Monrovia, Liberia",
                  color: "#E8212B", bg: "bg-red-50",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#E8212B" strokeWidth="1.6"
                      strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
                      <circle cx="12" cy="10" r="3"/>
                      <path d="M12 2a8 8 0 018 8c0 5-8 13-8 13S4 15 4 10a8 8 0 018-8z"/>
                    </svg>
                  ),
                },
              ].map(({ label, value, bg, icon }) => (
                <div key={label}
                  className="bg-white border border-[#E8EAED] rounded-[14px] p-5 flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 ${bg}`}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-[11px] text-[#9BA3AF] uppercase tracking-[1.5px] font-medium">{label}</p>
                    <p className="mt-0.5 text-[13.5px] font-medium text-[#0B1F4B]">{value}</p>
                  </div>
                </div>
              ))}

              {/* Response time note */}
              <div className="bg-[#0B1F4B] rounded-[14px] p-5">
                <p className="text-[11px] tracking-[2px] uppercase text-[#6B9FE4] font-semibold mb-2"
                  style={{ fontFamily: "'Syne', sans-serif" }}>
                  Response Time
                </p>
                <p className="text-[13px] text-white font-light leading-relaxed">
                  We typically respond within <span className="text-white font-semibold">24 hours</span> on business days.
                </p>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="md:col-span-2 bg-white border border-[#E8EAED] rounded-[16px] p-8">

              <p className="text-[10px] tracking-[3px] uppercase text-[#9BA3AF] font-semibold mb-1"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                Contact Form
              </p>
              <h2
                className="text-[22px] font-bold text-[#0B1F4B] tracking-[-0.4px] mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-[#374151] mb-1.5 uppercase tracking-wide">
                      First Name
                    </label>
                    <input
                      name="firstName" value={form.firstName}
                      onChange={handleChange} placeholder="John"
                      className={inputClass} required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#374151] mb-1.5 uppercase tracking-wide">
                      Last Name
                    </label>
                    <input
                      name="lastName" value={form.lastName}
                      onChange={handleChange} placeholder="Doe"
                      className={inputClass} required
                    />
                  </div>
                </div>

                {/* Phone + Role row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-[#374151] mb-1.5 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      name="phone" value={form.phone}
                      onChange={handleChange} placeholder="+231-XXX-XXXX"
                      className={inputClass} required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#374151] mb-1.5 uppercase tracking-wide">
                      I Am A
                    </label>
                    <select
                      name="role" value={form.role}
                      onChange={handleChange} className={inputClass}
                    >
                      <option value="customer">Customer</option>
                      <option value="driver">Driver</option>
                    </select>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-medium text-[#374151] mb-1.5 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    name="email" value={form.email}
                    onChange={handleChange} type="email"
                    placeholder="john@example.com"
                    className={inputClass} required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-medium text-[#374151] mb-1.5 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message" value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your issue or question..."
                    className={`${inputClass} h-32 resize-none`}
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-[8px] text-[13px] font-bold text-white bg-[#1A6FD4] hover:bg-[#1559B0] transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "0.4px" }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" width={16} height={16}>
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        width={14} height={14}>
                        <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                      </svg>
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>

      {status && (
        <Modal
          type={status}
          message={
            status === "success"
              ? "Your inquiry has been sent successfully! We'll get back to you within 24 hours."
              : "Something went wrong. Please try again or contact us directly."
          }
          onClose={() => setStatus(null)}
        />
      )}
    </div>
  );
}