
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Layers, 
  BarChart3, 
  Wallet, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Bell, 
  ChevronLeft, 
  Menu,
  Zap,
  Target,
  Plus,
  ShieldCheck,
  Globe,
  Codesandbox,
  DollarSign,
  CreditCard,
  Mail,
  Calendar,
  MessageSquare,
  Smartphone,
  Info,
  Crown
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isPublisher = user?.role === 'publisher';

  const commonItems = [
    { name: 'Overview', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Campaigns', path: '/dashboard/campaigns', icon: <Layers size={20} /> },
    { name: 'Traffic Chart', path: '/dashboard/stats', icon: <BarChart3 size={20} /> },
    { name: 'Wallet', path: '/dashboard/billing', icon: <Wallet size={20} /> },
    { name: 'Inbox', path: '/dashboard/inbox', icon: <Mail size={20} /> },
  ];

  const secondaryItems = [
    { name: 'Profile', path: '/dashboard/settings', icon: <Settings size={20} /> },
    { name: 'Statistics', path: '/dashboard/stats', icon: <BarChart3 size={20} /> },
    { name: 'Support', path: '/dashboard/support', icon: <HelpCircle size={20} /> },
    { name: 'Help & Guide', path: '/dashboard/help', icon: <Info size={20} /> },
  ];

  const actionItems = [
    { name: 'Schedule Meeting', path: '/dashboard/schedule', icon: <Calendar size={20} />, color: 'text-blue-400' },
    { name: 'Become Publisher', path: '/publishers', icon: <Zap size={20} />, color: 'text-emerald-400' },
  ];

  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden font-['Inter']">
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isCollapsed ? 80 : 280 }}
        className="fixed lg:relative z-50 h-full bg-[#0a0a0a] border-r border-white/5 flex flex-col"
      >
        <div className="p-6 flex items-center justify-between">
          {!isCollapsed && (
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Zap className="text-white w-5 h-5 fill-current" />
              </div>
              <span className="text-lg font-black tracking-tighter">PVA</span>
            </Link>
          )}
          {isCollapsed && (
            <div className="bg-blue-600 p-1.5 rounded-lg mx-auto">
              <Zap className="text-white w-5 h-5 fill-current" />
            </div>
          )}
          <button onClick={() => setIsCollapsed(!isCollapsed)} className="hidden lg:flex p-1.5 rounded-lg hover:bg-white/5 text-gray-500">
            <ChevronLeft className={`transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} size={18} />
          </button>
        </div>

        <nav className="flex-grow px-4 py-4 space-y-1 overflow-y-auto custom-scrollbar">
          {commonItems.map((item) => (
            <Link key={item.path} to={item.path} className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${location.pathname === item.path ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}>
              {item.icon} {!isCollapsed && <span className="font-bold text-xs uppercase tracking-widest">{item.name}</span>}
            </Link>
          ))}
          
          <div className="my-4 h-px bg-white/5 mx-4" />
          
          {secondaryItems.map((item) => (
            <Link key={item.path} to={item.path} className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${location.pathname === item.path ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}>
              {item.icon} {!isCollapsed && <span className="font-bold text-xs uppercase tracking-widest">{item.name}</span>}
            </Link>
          ))}

          <div className="my-4 h-px bg-white/5 mx-4" />

          {actionItems.map((item) => (
            <Link key={item.path} to={item.path} className={`flex items-center gap-4 px-4 py-3 rounded-xl bg-blue-600/5 border border-white/5 hover:border-blue-500/30 transition-all`}>
              <span className={item.color}>{item.icon}</span> {!isCollapsed && <span className={`font-bold text-xs uppercase tracking-widest ${item.color}`}>{item.name}</span>}
            </Link>
          ))}

          {!isCollapsed && (
            <button className="mt-8 flex items-center gap-4 px-4 py-4 w-full rounded-xl bg-gradient-to-r from-blue-600/10 to-transparent border border-blue-500/10 hover:border-blue-500/40 transition-all text-left group">
               <Smartphone size={20} className="text-blue-500" />
               <div>
                  <p className="text-[10px] font-black text-white uppercase leading-none">Download App</p>
                  <p className="text-[8px] text-gray-500 uppercase mt-1">iOS & Android</p>
               </div>
            </button>
          )}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button onClick={() => { logout(); navigate('/'); }} className="flex items-center gap-4 px-4 py-3 w-full rounded-xl text-gray-500 hover:text-red-500 hover:bg-red-500/10 transition-all">
            <LogOut size={20} /> {!isCollapsed && <span className="font-bold text-xs uppercase tracking-widest">Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Superior Header with Manager Info */}
        <header className="h-20 bg-[#0a0a0a] border-b border-white/5 flex items-center justify-between px-8 shrink-0 relative z-40">
          <div className="flex items-center gap-8">
            <button className="lg:hidden p-2 text-gray-400"><Menu size={24} /></button>
            
            <div className="hidden xl:flex items-center gap-4 pr-8 border-r border-white/5">
               <div className="flex items-center gap-2">
                  <Crown size={16} className="text-yellow-500" />
                  <span className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.2em]">Premium Access</span>
               </div>
               <p className="text-[10px] font-bold text-gray-500">Want a <span className="text-blue-400 underline cursor-pointer">Dedicated Ad Manager?</span> Reach out to support!</p>
            </div>

            <div className="hidden md:flex items-center gap-6">
               <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-500/10 text-yellow-500 rounded-lg"><Info size={16} /></div>
                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase leading-none">Balance</p>
                    <p className="text-lg font-black text-white">$1,245.80</p>
                  </div>
               </div>
               <button onClick={() => navigate('/dashboard/billing')} className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20">Add Fund</button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase hover:bg-white/10 transition-all">Feedback</button>
            <div className="px-4 py-2 bg-blue-600/5 border border-blue-500/10 rounded-xl text-[10px] font-bold text-blue-400 uppercase">Support PIN: 520810</div>
            
            <div className="h-8 w-px bg-white/5 mx-2" />
            
            <button className="relative p-2 text-gray-400 hover:text-white"><Bell size={20} /></button>
            
            <div className="flex items-center gap-3 pl-4">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-black text-white leading-none">{user?.name}</p>
                <p className="text-[10px] text-blue-500 font-black uppercase mt-1">{user?.role}</p>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-sm shadow-lg shadow-blue-600/20">
                {user?.name?.charAt(0)}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-[#050505] custom-scrollbar">
          <div className="p-8 max-w-[1600px] mx-auto">
            {children}
          </div>
          <footer className="p-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            <p>© 2025 PixelVisionAds - All Rights Reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
               <Link to="/about" className="hover:text-white transition-colors">About</Link>
               <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
               <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
               <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
