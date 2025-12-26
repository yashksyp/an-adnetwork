
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Shield, Bell, Key, Save, Mail, Smartphone, Globe, Lock } from 'lucide-react';
import GlassCard from '../../components/GlassCard';
import { useAuth } from '../../contexts/AuthContext';

const Settings: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User size={18} /> },
    { id: 'security', label: 'Security', icon: <Shield size={18} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
  ];

  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-black mb-2">Account Settings</h1>
        <p className="text-gray-400">Manage your personal information and system preferences.</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Nav Sidebar */}
        <div className="lg:w-64 space-y-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all ${
                activeTab === tab.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#0a0a0a] border border-white/10 rounded-[40px] p-8 lg:p-12 shadow-2xl"
          >
            {activeTab === 'profile' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input defaultValue={user?.name} className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-500 font-bold" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input defaultValue={user?.email} disabled className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none opacity-50 cursor-not-allowed font-bold" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500">Company</label>
                      <input placeholder="Optional" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-blue-500 font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500">Timezone</label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-500 font-bold appearance-none">
                          <option>UTC (Coordinated Universal Time)</option>
                          <option>EST (Eastern Standard Time)</option>
                          <option>IST (India Standard Time)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex justify-end">
                   <button className="px-8 py-4 bg-blue-600 rounded-2xl font-black text-white hover:bg-blue-500 transition-all flex items-center gap-2">
                     <Save size={18} /> Save Changes
                   </button>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-10">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Security Settings</h2>
                  <GlassCard className="!bg-blue-600/5 !border-blue-500/20">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4">
                         <div className="p-3 bg-blue-600 text-white rounded-2xl"><Smartphone size={24} /></div>
                         <div>
                            <h4 className="font-bold">Two-Factor Authentication</h4>
                            <p className="text-xs text-gray-500">Protect your account with an extra layer of security.</p>
                         </div>
                      </div>
                      <button className="px-6 py-2 bg-blue-600 rounded-xl text-xs font-black uppercase">Enable</button>
                    </div>
                  </GlassCard>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-bold">Change Password</h3>
                  <div className="grid grid-cols-1 gap-4 max-w-md">
                     <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Current Password</label>
                       <input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">New Password</label>
                       <input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none" />
                     </div>
                     <button className="w-fit px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold hover:bg-white/10">Update Password</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-8">
                 <h2 className="text-2xl font-bold">Email Notifications</h2>
                 <div className="space-y-4">
                   {[
                     { id: 'n1', label: 'Campaign Disapproved', desc: 'Alert me immediately if a campaign fails review.' },
                     { id: 'n2', label: 'Low Balance Warning', desc: 'Notify when account balance falls below $20.' },
                     { id: 'n3', label: 'Weekly Performance Report', desc: 'Receive a summary of your traffic every Monday.' },
                     { id: 'n4', label: 'System Announcements', desc: 'Updates about maintenance and new features.' },
                   ].map(pref => (
                     <div key={pref.id} className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-3xl">
                       <div>
                         <h4 className="font-bold text-gray-200">{pref.label}</h4>
                         <p className="text-xs text-gray-500">{pref.desc}</p>
                       </div>
                       <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                         <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full"></div>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
