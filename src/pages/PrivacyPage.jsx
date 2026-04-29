 import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <section className="relative bg-white py-24 md:py-32 overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Ambient Glows */}
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          
          {/* Header Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-100 mb-4 uppercase tracking-wider shadow-sm">
              Legal Notice
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-2">
              Privacy Policy
            </h1>
            <p className="text-gray-500 text-sm">
              Last updated: March 2026
            </p>
          </motion.div>

          {/* Main Content Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-xl shadow-gray-100/50 p-8 md:p-10 overflow-hidden"
          >
            
            {/* Decorative Top Line */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-600 via-emerald-400 to-green-600" />

            <div className="space-y-8 text-gray-600 leading-relaxed">
              
              {/* Introduction */}
              <Section title="📄 Introduction">
                <p>We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.</p>
                <p>By accessing or using our services, you agree to the terms outlined in this policy.</p>
              </Section>

              {/* Information Collection */}
              <Section title="📊 Information We Collect">
                <p className="mb-2">We may collect the following types of information:</p>
                <ul className="list-disc list-inside space-y-1 ml-2 text-gray-500">
                  <li><strong>Personal Information:</strong> Name, email address, phone number</li>
                  <li><strong>Account Data:</strong> Login credentials and profile details</li>
                  <li><strong>Usage Data:</strong> Pages visited, features used, session duration</li>
                  <li><strong>Device Information:</strong> Browser type, IP address, device type</li>
                </ul>
              </Section>

              {/* Usage */}
              <Section title="⚙️ How We Use Your Information">
                <p className="mb-2">We use your data to:</p>
                <ul className="list-disc list-inside space-y-1 ml-2 text-gray-500">
                  <li>Provide and maintain our services</li>
                  <li>Improve user experience and platform performance</li>
                  <li>Process payments and subscriptions</li>
                  <li>Send important updates and notifications</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>
              </Section>

              {/* Security */}
              <Section title="🔐 Data Security">
                <p>We implement industry-standard security measures to protect your data from unauthorized access, misuse, or disclosure.</p>
                <p className="mt-2">However, no system is completely secure, and we cannot guarantee absolute security.</p>
              </Section>

              {/* Sharing */}
              <Section title="🤝 Sharing Your Information">
                <p>We do not sell your personal data.</p>
                <p className="mt-2">We may share your data with:</p>
                <ul className="list-disc list-inside space-y-1 ml-2 text-gray-500">
                  <li>Trusted third-party services (payment providers, analytics tools)</li>
                  <li>Legal authorities if required by law</li>
                </ul>
              </Section>

              {/* Cookies */}
              <Section title="🍪 Cookies & Tracking">
                <p className="mb-2">We use cookies to:</p>
                <ul className="list-disc list-inside space-y-1 ml-2 text-gray-500">
                  <li>Enhance user experience</li>
                  <li>Analyze platform performance</li>
                  <li>Remember user preferences</li>
                </ul>
                <p className="mt-2">You can disable cookies through your browser settings.</p>
              </Section>

              {/* Rights */}
              <Section title="🔄 Your Rights">
                <p className="mb-2">You have the right to:</p>
                <ul className="list-disc list-inside space-y-1 ml-2 text-gray-500">
                  <li>Access your personal data</li>
                  <li>Request correction or deletion</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="mt-3">To exercise these rights, contact us at: <a href="mailto:support@yourapp.com" className="text-green-600 hover:underline font-medium">support@yourapp.com</a></p>
              </Section>

              {/* Updates */}
              <Section title="🔁 Updates to This Policy">
                <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.</p>
              </Section>

              {/* Contact */}
              <Section title="📩 Contact Us">
                <p>If you have any questions about this Privacy Policy, you can contact us:</p>
                <div className="mt-4 flex flex-col sm:flex-row gap-4">
                   <a href="mailto:support@gymcrab.com" className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors">
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                     support@gymcrab.com
                   </a>
                   <a href="https://www.gymcrab.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors">
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                     www.gymcrab.com
                   </a>
                </div>
              </Section>

            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
}

// Helper Component for consistent section styling
function Section({ title, children }) {
  return (
    <div className="border-b border-gray-100 pb-8 last:border-b-0 last:pb-0">
      <h2 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
        {title}
      </h2>
      <div className="text-base">
        {children}
      </div>
    </div>
  );
}