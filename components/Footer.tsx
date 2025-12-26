
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Zap className="text-white w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-black tracking-tighter">
                PIXEL<span className="text-blue-500">VISION</span>ADS
              </span>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed mb-6">
              Empowering advertisers and publishers with cutting-edge technology and premium traffic sources worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Platforms</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/advertisers" className="hover:text-white transition-colors">For Advertisers</Link></li>
              <li><Link to="/publishers" className="hover:text-white transition-colors">For Publishers</Link></li>
              <li><Link to="/formats" className="hover:text-white transition-colors">Ad Formats</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/help-center" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/api-docs" className="hover:text-white transition-colors">API Docs</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/partners" className="hover:text-white transition-colors">Partners</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 PixelVisionAds Network. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span>Server Time: 14:23 UTC</span>
            <span className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div> System Status: Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
