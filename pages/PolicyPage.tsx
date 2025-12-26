
import React from 'react';
import { useLocation } from 'react-router-dom';

const PolicyPage: React.FC = () => {
  const location = useLocation();
  const title = location.pathname === '/terms' ? 'Terms & Conditions' : 'Privacy Policy';

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 lg:p-12 prose prose-invert prose-blue max-w-none">
          <p className="text-gray-400 mb-6">Last Updated: October 2024</p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">1. Introduction</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Welcome to PixelVisionAds. By using our website and services, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern PixelVisionAds's relationship with you in relation to this website and the PixelVisionAds Network.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">2. Use of Service</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            The use of this service is subject to the following terms:
          </p>
          <ul className="list-disc pl-6 text-gray-400 space-y-4 mb-6">
            <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
            <li>This website uses cookies to monitor browsing preferences.</li>
            <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">3. Advertiser Responsibilities</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Advertisers are solely responsible for the content of their advertisements and the websites to which they link. PixelVisionAds does not endorse any product or service advertised through its network.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">4. Publisher Responsibilities</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Publishers must ensure that their websites comply with all applicable laws and regulations and do not contain prohibited content as defined in our Content Policy.
          </p>

          <div className="mt-12 p-6 bg-blue-900/10 border border-blue-500/20 rounded-xl">
            <p className="text-sm text-blue-400">
              Need clarification? Feel free to contact our legal department at <strong>legal@pixelvisionads.com</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;