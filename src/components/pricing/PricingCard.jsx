 import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function PricingCard({ plan, index }) {
  const navigate = useNavigate();

  const { title, price, description, features, buttonText, highlight } = plan;

  const handleCheckout = () => {
    // plan name + price pass kar rahe hain
    navigate(`/checkout?plan=${title}&price=${price}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group h-full ${highlight ? 'md:-mt-4 md:mb-4 z-20' : 'z-10'}`}
    >
      {/* Animated Border */}
      {highlight && (
        <motion.div 
          className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 opacity-70 group-hover:opacity-100 blur-sm transition-opacity duration-500 z-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Card */}
      <div className={`
        relative h-full flex flex-col rounded-2xl p-8 transition-all duration-300 z-10
        ${highlight 
          ? 'bg-gray-900 text-white border border-transparent shadow-2xl shadow-green-500/10' 
          : 'bg-white text-gray-900 border border-gray-200 shadow-lg'
        }
      `}>

        {/* Header */}
        <div className="mb-5">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className={`text-sm mt-1 ${highlight ? 'text-gray-400' : 'text-gray-500'}`}>
            {description}
          </p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold">₹</span>
            <span className="text-6xl font-extrabold">{price}</span>
            <span className="text-lg">/mo</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <CheckIcon className="w-4 h-4 text-green-500 mt-1" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA BUTTON */}
        <motion.button
          onClick={handleCheckout}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={`
            w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300
            ${highlight 
              ? 'bg-white text-gray-900 hover:bg-gray-100' 
              : 'bg-gray-900 text-white hover:bg-gray-800'
            }
          `}
        >
          {buttonText}
        </motion.button>

        {/* Footer */}
        <p className="text-xs text-center mt-4 opacity-60">
          Cancel anytime • No hidden fees
        </p>

      </div>
    </motion.div>
  );
}

// Icons
function CheckIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}