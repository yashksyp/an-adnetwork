
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Code2, 
  Cpu, 
  Lock, 
  Globe, 
  Server,
  Zap,
  Copy,
  ExternalLink,
  Info,
  AlertCircle,
  Database,
  BarChart3,
  Hash,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../../components/GlassCard';

const ApiDocs: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('introduction');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  const sections = [
    { id: 'introduction', label: 'Introduction', icon: <Info size={16} /> },
    { id: 'authentication', label: 'Authentication', icon: <Lock size={16} /> },
    { id: 'campaigns', label: 'Campaigns', icon: <Server size={16} /> },
    { id: 'statistics', label: 'Statistics', icon: <BarChart3 size={16} /> },
    { id: 'webhooks', label: 'Webhooks', icon: <Globe size={16} /> },
    { id: 'rate-limits', label: 'Rate Limits', icon: <Zap size={16} /> },
    { id: 'errors', label: 'Error Codes', icon: <AlertCircle size={16} /> },
  ];

  const CodeBlock = ({ code, language = 'json', id }: { code: string, language?: string, id: string }) => (
    <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-[#020202]">
      <div className="flex items-center justify-between px-4 py-2 bg-white/[0.03] border-b border-white/5">
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
           <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
           <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
           <span className="ml-2 text-[10px] font-black text-gray-500 uppercase tracking-widest">{language}</span>
        </div>
        <button 
          onClick={() => handleCopy(code, id)}
          className="p-1.5 text-gray-500 hover:text-white transition-colors flex items-center gap-2"
        >
          <span className="text-[10px] font-bold uppercase">{copied === id ? 'Copied!' : 'Copy'}</span>
          {copied === id ? <Zap size={14} className="text-emerald-500 fill-current" /> : <Copy size={14} />}
        </button>
      </div>
      <div className="p-6 font-mono text-xs text-blue-400/90 leading-relaxed overflow-x-auto custom-scrollbar">
        <pre>{code.trim()}</pre>
      </div>
    </div>
  );

  return (
    <div className="bg-[#050505] min-h-screen flex selection:bg-blue-600/30">
      {/* Sticky Sidebar */}
      <aside className="hidden lg:block w-80 h-screen sticky top-0 border-r border-white/5 bg-[#080808] p-8 pt-32 overflow-y-auto custom-scrollbar z-50">
        <div className="mb-10">
          <Link to="/resources" className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-blue-500 transition-colors mb-8 group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Resources
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
              <Terminal size={20} className="text-white" />
            </div>
            <div>
               <span className="font-black text-sm tracking-tighter block leading-none text-white">PIXELVISION</span>
               <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">API v2.4.2</span>
            </div>
          </div>
        </div>
        
        <h3 className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] mb-6">Documentation Hub</h3>
        <nav className="space-y-1">
          {sections.map(section => (
            <button 
              key={section.id} 
              onClick={() => scrollToSection(section.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl transition-all group ${
                activeSection === section.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className={`${activeSection === section.id ? 'text-white' : 'text-gray-600 group-hover:text-blue-500'}`}>
                {section.icon}
              </span>
              {section.label}
              {activeSection === section.id && <ChevronRight size={14} className="ml-auto" />}
            </button>
          ))}
        </nav>

        <div className="mt-16 p-6 bg-gradient-to-br from-blue-600/5 to-purple-600/5 border border-white/5 rounded-3xl">
          <p className="text-[10px] font-black text-blue-500 uppercase mb-3 tracking-widest">Developer Status</p>
          <div className="flex items-center gap-2 mb-4">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             <span className="text-xs font-bold text-gray-300">All Systems Operational</span>
          </div>
          <p className="text-[10px] text-gray-500 leading-relaxed">
            Need urgent integration help? Our dev-support channel is active 24/7.
          </p>
          <button className="w-full mt-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[10px] font-black uppercase transition-all">
            Join Discord
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 pt-32 pb-40 px-6 md:px-12 lg:px-24 xl:px-32 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Header */}
          <header className="mb-24 relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-black text-blue-500 uppercase bg-blue-500/10 rounded-md border border-blue-500/20">
                <Database size={12} /> RESTful API Core
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-white">
                Engineer Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-200 to-emerald-400">Scale.</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-2xl font-medium">
                Complete programmatic access to the PixelVisionAds ecosystem. Manage massive-scale campaigns, fetch sub-second statistics, and orchestrate global traffic flow.
              </p>
            </motion.div>
          </header>

          {/* Introduction Section */}
          <section id="introduction" className="mb-32 scroll-mt-32">
            <h2 className="text-3xl font-black mb-8 flex items-center gap-3 text-white">
              <Hash className="text-blue-500" /> Introduction
            </h2>
            <div className="space-y-6 text-gray-400">
              <p className="leading-relaxed">
                The PixelVisionAds API is organized around <span className="text-white font-bold">REST</span>. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes.
              </p>
              <GlassCard className="!p-8 !bg-[#0a0a0a] border-white/5">
                <p className="text-[10px] font-black uppercase text-gray-500 mb-3 tracking-widest">Base Production URL</p>
                <div className="flex items-center justify-between">
                   <code className="text-blue-400 font-mono text-lg md:text-2xl font-black">https://api.pixelvisionads.com/v2</code>
                   <button 
                     onClick={() => handleCopy('https://api.pixelvisionads.com/v2', 'base-url')}
                     className="p-2 hover:bg-white/5 rounded-lg text-gray-500"
                   >
                     {copied === 'base-url' ? <Zap size={16} className="text-emerald-500" /> : <Copy size={16} />}
                   </button>
                </div>
              </GlassCard>
            </div>
          </section>

          {/* Authentication Section */}
          <section id="authentication" className="mb-32 scroll-mt-32 pt-12 border-t border-white/5 text-white">
            <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
              <Lock className="text-emerald-500" /> Authentication
            </h2>
            <div className="space-y-8">
              <p className="text-gray-400 leading-relaxed">
                All API requests must be authenticated using a <span className="text-white font-bold">Bearer token</span> in the HTTP Authorization header. API keys are managed in the dashboard and should be kept secure.
              </p>
              <CodeBlock 
                id="auth-header"
                language="HTTP Header"
                code={`Authorization: Bearer YOUR_API_KEY_HERE`}
              />
              <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-[32px] flex gap-5">
                <AlertCircle className="text-red-500 shrink-0" size={24} />
                <div>
                  <p className="text-sm text-white font-bold mb-1">Security Warning</p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Never include your API key in client-side code (JavaScript in the browser), public repositories, or mobile app binaries. Always proxy requests through your own secure backend.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Campaigns Section */}
          <section id="campaigns" className="mb-32 scroll-mt-32 pt-12 border-t border-white/5 text-white">
            <h2 className="text-3xl font-black mb-10 flex items-center gap-3">
              <Server className="text-purple-500" /> Campaigns
            </h2>
            
            <div className="space-y-16">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-2.5 py-1 bg-blue-600 rounded text-[10px] font-black uppercase">GET</span>
                  <code className="text-lg font-black text-white">/campaigns</code>
                </div>
                <p className="text-gray-400 mb-8 font-medium">Retrieve a paginated list of all your campaigns. Supports filtering by status and format.</p>
                <CodeBlock 
                  id="get-campaigns"
                  code={`
{
  "status": "success",
  "data": [
    {
      "id": "CAM-8293",
      "name": "Global_Push_Scale",
      "status": "active",
      "format": "push",
      "bid": 0.85,
      "daily_budget": 50.00,
      "created_at": "2024-10-12T14:20:00Z"
    }
  ],
  "pagination": { "current_page": 1, "total_pages": 4, "total_results": 42 }
}`}
                />
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-2.5 py-1 bg-emerald-600 rounded text-[10px] font-black uppercase">POST</span>
                  <code className="text-lg font-black text-white">/campaigns</code>
                </div>
                <p className="text-gray-400 mb-8 font-medium">Create a new campaign. All fields are required unless marked as optional.</p>
                <CodeBlock 
                  id="post-campaign"
                  code={`
{
  "name": "E-comm_Flash_Sale",
  "format": "popunder",
  "targeting": {
    "geo": ["US", "CA", "GB"],
    "os": ["android", "ios"],
    "connection": ["wifi", "cellular"]
  },
  "bid": 1.20,
  "budget_daily": 100,
  "landing_page": "https://yoursite.com/?cid={clickid}"
}`}
                />
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section id="statistics" className="mb-32 scroll-mt-32 pt-12 border-t border-white/5 text-white">
            <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
              <BarChart3 className="text-blue-500" /> Statistics
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed font-medium">
              Access real-time performance data. Statistics are aggregated in 5-minute intervals for performance optimization.
            </p>
            <div className="flex items-center gap-3 mb-6">
               <span className="px-2.5 py-1 bg-blue-600 rounded text-[10px] font-black uppercase">GET</span>
               <code className="text-lg font-black text-white">/stats/daily</code>
            </div>
            <CodeBlock 
              id="get-stats"
              code={`
{
  "date": "2024-10-14",
  "totals": {
    "impressions": 1250400,
    "clicks": 32050,
    "conversions": 842,
    "spend": 452.12,
    "ctr": "2.56%"
  }
}`}
            />
          </section>

          {/* Webhooks Section */}
          <section id="webhooks" className="mb-32 scroll-mt-32 pt-12 border-t border-white/5 text-white">
            <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
              <Globe className="text-cyan-500" /> Webhooks
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Subscribe to server-to-server events. Our system will send a <span className="text-white font-bold">POST</span> request to your configured endpoint immediately when an event occurs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                 <h4 className="text-sm font-black text-white mb-2 uppercase tracking-widest">campaign.paused</h4>
                 <p className="text-xs text-gray-500">Triggered when a campaign hits its daily budget cap.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                 <h4 className="text-sm font-black text-white mb-2 uppercase tracking-widest">conversion.logged</h4>
                 <p className="text-xs text-gray-500">Sent when a postback conversion is successfully validated.</p>
              </div>
            </div>
            <CodeBlock 
              id="webhook-payload"
              language="Webhook Payload"
              code={`
{
  "event": "conversion.logged",
  "id": "EVT-9283471",
  "timestamp": "2024-10-14T15:00:00Z",
  "data": {
    "campaign_id": "CAM-8293",
    "click_id": "pva_9182371",
    "payout": 4.50
  }
}`}
            />
          </section>

          {/* Rate Limits Section */}
          <section id="rate-limits" className="mb-32 scroll-mt-32 pt-12 border-t border-white/5 text-white">
            <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
              <Zap className="text-amber-500" /> Rate Limits
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              To ensure system stability, all API keys are subject to rate limiting based on a sliding window.
            </p>
            <div className="grid grid-cols-3 gap-6">
               <div className="p-8 bg-white/5 border border-white/10 rounded-[32px] text-center">
                  <p className="text-4xl font-black mb-2">100</p>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Req / Min</p>
               </div>
               <div className="p-8 bg-white/5 border border-white/10 rounded-[32px] text-center">
                  <p className="text-4xl font-black mb-2">5,000</p>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Req / Hour</p>
               </div>
               <div className="p-8 bg-white/5 border border-white/10 rounded-[32px] text-center">
                  <p className="text-4xl font-black mb-2">50k</p>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Req / Day</p>
               </div>
            </div>
          </section>

          {/* Error Codes Section */}
          <section id="errors" className="mb-32 scroll-mt-32 pt-12 border-t border-white/5 text-white">
            <h2 className="text-3xl font-black mb-10 flex items-center gap-3">
              <AlertCircle className="text-red-500" /> Error Codes
            </h2>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-[40px] overflow-hidden">
               <table className="w-full text-left">
                  <thead className="bg-white/[0.02] text-gray-500 text-[10px] uppercase font-black tracking-widest border-b border-white/5">
                    <tr>
                      <th className="px-8 py-5">Code</th>
                      <th className="px-8 py-5">Status</th>
                      <th className="px-8 py-5">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { c: '400', s: 'INVALID_REQ', d: 'Request is missing required parameters.' },
                      { c: '401', s: 'AUTH_FAILED', d: 'Invalid or expired API key provided.' },
                      { c: '403', s: 'FORBIDDEN', d: 'You do not have permission for this resource.' },
                      { c: '429', s: 'RATE_LIMIT', d: 'Maximum request frequency exceeded.' },
                      { c: '500', s: 'SERVER_ERR', d: 'Something went wrong on our end.' },
                    ].map((err, i) => (
                      <tr key={i} className="hover:bg-white/[0.01] transition-colors">
                        <td className="px-8 py-6 font-black text-white">{err.c}</td>
                        <td className="px-8 py-6">
                           <code className="text-[10px] font-mono font-bold bg-red-500/10 text-red-400 px-2 py-1 rounded">
                             {err.s}
                           </code>
                        </td>
                        <td className="px-8 py-6 text-xs text-gray-500 leading-relaxed">{err.d}</td>
                      </tr>
                    ))}
                  </tbody>
               </table>
            </div>
          </section>

          {/* API Footer */}
          <footer className="pt-20 border-t border-white/5 text-center flex flex-col items-center">
             <div className="w-20 h-20 bg-blue-600/10 text-blue-500 rounded-3xl flex items-center justify-center mb-8 border border-blue-500/20">
                <Terminal size={36} />
             </div>
             <h2 className="text-3xl font-black mb-4 text-white">Documentation v2.4</h2>
             <p className="text-gray-500 text-sm mb-10 max-w-sm leading-relaxed">
               Ready to automate your performance scaling? Use the full OpenAPI spec to generate clients in any language.
             </p>
             <div className="flex flex-col sm:flex-row gap-4">
               <button className="px-10 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-blue-600 hover:text-white transition-all shadow-xl group">
                  Download Postman Collection <ExternalLink size={16} className="group-hover:scale-110 transition-transform" />
               </button>
               <button className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-xs uppercase tracking-widest text-white hover:bg-white/10 transition-all">
                  Contact Support
               </button>
             </div>
             <p className="mt-20 text-[10px] font-black text-gray-800 uppercase tracking-[0.5em]">PIXELVISION API CLOUD</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default ApiDocs;
