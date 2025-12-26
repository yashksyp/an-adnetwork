
import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Book, 
  Rocket, 
  CreditCard, 
  ShieldCheck, 
  Zap, 
  MessageCircle, 
  ChevronDown,
  HelpCircle,
  PlayCircle
} from 'lucide-react';
import GlassCard from '../../components/GlassCard';

const HelpCenter: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const categories = [
    { icon: <Rocket />, title: "Getting Started", desc: "Launch your first campaign or integrate your site in minutes." },
    { icon: <ShieldCheck />, title: "Compliance & Safety", desc: "Understand our traffic quality guidelines and creative policies." },
    { icon: <Zap />, title: "Optimization", desc: "Advanced tips for improving CTR and maximizing your earnings." },
    { icon: <CreditCard />, title: "Payments & Billing", desc: "Everything about thresholds, methods, and NET-7 terms." },
  ];

  const faqs = [
    { q: "What is the minimum deposit for advertisers?", a: "The minimum deposit to start running traffic on PixelVisionAds is $50. We support Credit Cards, Crypto (USDT/BTC), and Wire Transfers." },
    { q: "How often do publishers get paid?", a: "Publishers are paid weekly on NET-7 terms. This means earnings from the previous week are processed every Monday, provided you meet the $50 threshold." },
    { q: "Do you allow adult traffic?", a: "We have dedicated segments for adult content. Ensure you select the 'Mainstream' or 'Adult' traffic type correctly during campaign setup to avoid rejections." },
    { q: "How does the Anti-Fraud system work?", a: "Our proprietary Guardian 2.0 system uses real-time fingerprinting and behavioral analysis to block 99.9% of non-human traffic before it reaches your landing page." },
  ];

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-20 px-4">
      {/* Search Hero */}
      <section className="max-w-4xl mx-auto text-center mb-24">
        <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">How can we <span className="text-blue-500">help?</span></h1>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[24px] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative flex items-center bg-[#0a0a0a] border border-white/10 rounded-[22px] overflow-hidden p-2">
              <Search className="ml-6 text-gray-500" size={24} />
              <input 
                type="text" 
                placeholder="Search for articles (e.g. 'postback integration')"
                className="w-full bg-transparent border-none py-4 px-6 text-lg outline-none text-white placeholder-gray-600"
              />
            </div>
          </div>
        </m.div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
        {categories.map((cat, i) => (
          <m.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <GlassCard className="text-center group hover:border-blue-500/50">
              <div className="w-14 h-14 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{cat.desc}</p>
            </GlassCard>
          </m.div>
        ))}
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-3xl mx-auto mb-32">
        <h2 className="text-3xl font-black mb-12 text-center">Popular Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/5 rounded-2xl bg-white/[0.02] overflow-hidden">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-gray-200">{faq.q}</span>
                <ChevronDown className={`text-gray-500 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} size={20} />
              </button>
              <AnimatePresence>
                {activeFaq === i && (
                  <m.div 
                    initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-sm text-gray-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Support CTA */}
      <section className="max-w-5xl mx-auto">
        <div className="p-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-[40px] border border-white/5 text-center">
          <HelpCircle size={48} className="text-blue-500 mx-auto mb-6" />
          <h2 className="text-3xl font-black mb-4">Still need assistance?</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">Our dedicated support team is available 24/7 via live chat or email ticket system.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg shadow-blue-600/20">Live Chat Now</button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-white hover:bg-white/10">Submit a Ticket</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
