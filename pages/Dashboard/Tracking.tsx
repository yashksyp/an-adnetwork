
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Copy, Check, Info, Code2, Link as LinkIcon, ExternalLink } from 'lucide-react';
import GlassCard from '../../components/GlassCard';

const Tracking: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const postbackUrl = "https://pva-track.com/postback?clickid={clickid}&sum={sum}&currency=USD";
  const pixelCode = `<script src="https://pva-track.com/pixel.js?id=PX-92834"></script>`;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-black mb-2">Conversion Tracking</h1>
        <p className="text-gray-400">Integrate S2S postbacks or pixels to measure your ROI accurately.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <GlassCard>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg">
                <LinkIcon size={20} />
              </div>
              <h2 className="text-xl font-bold">S2S Postback URL</h2>
            </div>
            
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Use this URL in your tracker or affiliate network to send conversion data back to PVA. Replace placeholders with your tracker macros.
            </p>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-[#050505] border border-white/10 rounded-xl p-4 flex items-center justify-between gap-4">
                <code className="text-xs font-mono text-blue-400 break-all">{postbackUrl}</code>
                <button 
                  onClick={() => handleCopy(postbackUrl, 'postback')}
                  className="shrink-0 p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-white"
                >
                  {copied === 'postback' ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            <div className="mt-8 space-y-4">
               <h4 className="text-xs font-black uppercase tracking-widest text-gray-500">Available Macros</h4>
               <div className="grid grid-cols-2 gap-2">
                 {[
                   { macro: '{clickid}', desc: 'Unique Click ID' },
                   { macro: '{sum}', desc: 'Payout Amount' },
                   { macro: '{currency}', desc: 'Currency Code' },
                   { macro: '{status}', desc: 'Conversion Status' }
                 ].map(item => (
                   <div key={item.macro} className="p-3 bg-white/5 border border-white/5 rounded-xl flex flex-col">
                     <span className="text-xs font-mono text-white mb-1">{item.macro}</span>
                     <span className="text-[10px] text-gray-500 font-bold uppercase">{item.desc}</span>
                   </div>
                 ))}
               </div>
            </div>
          </GlassCard>

          <div className="bg-blue-600/5 border border-blue-500/20 rounded-3xl p-6 flex gap-4">
            <Info className="text-blue-500 shrink-0" size={20} />
            <div className="text-xs text-gray-400 leading-relaxed">
              <span className="text-white font-bold block mb-1">Testing Integration:</span>
              Once you've added the postback, perform a test conversion. Logs will appear in your Statistics page within 5 minutes.
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <GlassCard>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/10 text-purple-500 rounded-lg">
                <Code2 size={20} />
              </div>
              <h2 className="text-xl font-bold">Conversion Pixel</h2>
            </div>
            
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Ideal for direct advertisers. Place this code snippet on your "Thank You" or confirmation page.
            </p>

            <div className="bg-[#050505] border border-white/10 rounded-xl p-4 font-mono text-xs text-purple-400 relative group overflow-hidden">
               <pre className="whitespace-pre-wrap">{pixelCode}</pre>
               <button 
                  onClick={() => handleCopy(pixelCode, 'pixel')}
                  className="absolute top-2 right-2 p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-white"
                >
                  {copied === 'pixel' ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                </button>
            </div>

            <div className="mt-8 p-6 bg-white/[0.02] rounded-2xl border border-white/5">
              <h4 className="text-sm font-bold mb-4">Supported Platforms</h4>
              <div className="flex flex-wrap gap-4 opacity-50">
                 {['Shopify', 'WordPress', 'Voluum', 'Binom', 'Keitaro'].map(p => (
                   <span key={p} className="text-xs font-bold px-3 py-1 bg-white/5 rounded-full border border-white/10">{p}</span>
                 ))}
              </div>
            </div>

            <button className="w-full mt-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2">
              View Detailed Guide <ExternalLink size={16} />
            </button>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Tracking;