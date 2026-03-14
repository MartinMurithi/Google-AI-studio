/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail } from "lucide-react";
import { motion } from "motion/react";
import { useState, type FormEvent } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      // In a real app, you'd send this to your backend
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#E0F2FE] via-[#F0FDFA] to-[#E0F2FE] flex items-center justify-center p-6 font-sans selection:bg-cyan-200">
      <div className="max-w-3xl w-full text-center space-y-12">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="w-20 h-20 bg-linear-to-br from-[#0EA5E9] to-[#22D3EE] rounded-3xl flex items-center justify-center shadow-lg shadow-cyan-200/50">
            <Mail className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        {/* Heading */}
        <div className="space-y-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#0F172A] pb-2 overflow-visible"
          >
            Something Amazing
            <span className="block bg-linear-to-r from-[#0EA5E9] to-[#22D3EE] bg-clip-text text-transparent pb-2">
              Is Coming Soon
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            We're crafting an exceptional experience just for you. Join our
            waitlist to be the first to know when we launch.
          </motion.p>
        </div>

        {/* Waitlist Form */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white p-2 rounded-[2rem] shadow-xl shadow-slate-200/50 flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-3xl text-slate-700 focus:outline-hidden text-lg placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={isSubmitted}
              className="bg-linear-to-r from-[#0EA5E9] to-[#22D3EE] text-white font-bold py-4 px-8 rounded-3xl shadow-lg shadow-cyan-200/50 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:scale-100 text-lg whitespace-nowrap"
            >
              {isSubmitted ? "Thanks!" : "Notify Me"}
            </button>
          </form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-slate-500 text-sm md:text-base font-medium"
          >
            No spam, ever. Unsubscribe at any time.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
