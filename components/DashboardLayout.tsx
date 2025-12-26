
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
  CreditCard
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isPublisher = user?.role === 'publisher';

  // Define navigation based on role
  const advertiserItems = [
    { name: 'Overview', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Campaigns', path: '/dashboard/campaigns', icon: <Layers size={20} /> },
    { name: 'Statistics', path: '/dashboard/stats', icon: <BarChart3 size={20} /> },
    { name: 'Billing', path: '/dashboard/billing', icon: <Wallet size={20} /> },
    { name: 'Tracking', path: '/dashboard/tracking', icon: <Target size={20} /> },
  ];

  const publisherItems = [
    { name: 'Overview', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Websites', path: '/dashboard/websites', icon: <Globe size={20} /> },
    { name: 'Ad Units', path: '/dashboard/ad-units', icon: <Codesandbox size={20} /> },
    { name: 'Statistics', path: '/dashboard/stats', icon: <BarChart3 size={20} /> },
    { name: 'Earnings', path: '/dashboard/earnings', icon: <DollarSign size={20} /> },
    { name: 'Withdraw', path: '/dashboard/withdraw', icon: <CreditCard size={20} /> },
  ];

  const menuItems = isPublisher ? publisherItems : advertiserItems;

  const secondaryItems = [
    { name: 'Settings', path: '/dashboard/settings', icon: <Settings size={20} /> },
    { name: 'Policies', path: '/dashboard/policies', icon: <ShieldCheck size={20} /> },
    { name: 'Support', path: '/dashboard/support', icon: <HelpCircle size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden">
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
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex p-1.5 rounded-lg hover:bg-white/5 text-gray-500"
          >
            <ChevronLeft className={`transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} size={18} />
          </button>
        </div>

        <nav className="flex-grow px-4 py-4 space-y-2 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group relative ${
                  isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className={`${isActive ? 'text-white' : 'group-hover:text-blue-500 transition-colors'}`}>
                  {item.icon}
                </span>
                {!isCollapsed && <span className="font-bold text-sm">{item.name}</span>}
                {isCollapsed && (
                  <div className="absolute left-full ml-4 px-3 py-1 bg-white text-black text-xs font-bold rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                    {item.name}
                  </div>
                )}
              </Link>
            );
          })}
          
          <div className="my-6 h-px bg-white/5 mx-4" />
          
          {secondaryItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group relative ${
                  isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className={`${isActive ? 'text-white' : 'group-hover:text-blue-500 transition-colors'}`}>
                  {item.icon}
                </span>
                {!isCollapsed && <span className="font-bold text-sm">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button 
            onClick={() => { logout(); navigate('/'); }}
            className="flex items-center gap-4 px-4 py-3 w-full rounded-xl text-gray-500 hover:text-red-500 hover:bg-red-500/10 transition-all group"
          >
            <LogOut size={20} />
            {!isCollapsed && <span className="font-bold text-sm">Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-[#050505]/50 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-gray-400">
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl">
              <Wallet size={16} className="text-blue-500" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{isPublisher ? 'Balance' : 'Funds'}:</span>
              <span className="text-sm font-black">${isPublisher ? '2,840.12' : '1,245.80'}</span>
              <Link to={isPublisher ? "/dashboard/withdraw" : "/dashboard/billing"} className="ml-2 p-1 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors">
                <Plus size={14} />
              </Link>
            </div>
            {isPublisher && (
              <div className="hidden lg:flex items-center gap-2 bg-purple-500/5 border border-purple-500/10 px-4 py-2 rounded-2xl">
                <span className="text-xs font-bold text-purple-500 uppercase tracking-widest">Pending:</span>
                <span className="text-sm font-black text-purple-300">$120.45</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full border-2 border-[#050505]"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-white/5">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-white leading-none">{user?.name}</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter mt-1">{user?.role}</p>
              </div>
              <div className={`w-10 h-10 ${isPublisher ? 'bg-purple-600 shadow-purple-600/20' : 'bg-blue-600 shadow-blue-600/20'} rounded-2xl flex items-center justify-center font-black text-sm shadow-lg`}>
                {user?.name?.charAt(0)}
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 overflow-y-auto bg-[#050505] custom-scrollbar">
          <div className="p-8 max-w-[1600px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
