
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import FooterComponent from './components/Footer'; 
import Home from './pages/Home';
import Advertisers from './pages/Advertisers';
import Publishers from './pages/Publishers';
import AdFormats from './pages/AdFormats';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import HelpCenter from './pages/Resources/HelpCenter';
import ApiDocs from './pages/Resources/ApiDocs';
import CaseStudies from './pages/Resources/CaseStudies';
import Blog from './pages/Resources/Blog';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VerifyEmail from './pages/VerifyEmail';
import DashboardLayout from './components/DashboardLayout';
import Overview from './pages/Dashboard/Overview';
import Campaigns from './pages/Dashboard/Campaigns';
import CreateCampaign from './pages/Dashboard/CreateCampaign';
import Billing from './pages/Dashboard/Billing';
import Tracking from './pages/Dashboard/Tracking';
import Stats from './pages/Dashboard/Stats';
import Settings from './pages/Dashboard/Settings';
import Support from './pages/Dashboard/Support';
import Policies from './pages/Dashboard/Policies';

// Publisher Pages
import Websites from './pages/Dashboard/Publisher/Websites';
import AdUnits from './pages/Dashboard/Publisher/AdUnits';
import Earnings from './pages/Dashboard/Publisher/Earnings';
import Withdraw from './pages/Dashboard/Publisher/Withdraw';

// Company Pages
import About from './pages/Company/About';
import Contact from './pages/Company/Contact';
import Partners from './pages/Company/Partners';
import Careers from './pages/Company/Careers';
import JobDetails from './pages/Company/JobDetails';

// Legal Pages
import TermsOfService from './pages/Legal/TermsOfService';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import CookiePolicy from './pages/Legal/CookiePolicy';
import RefundPolicy from './pages/Legal/RefundPolicy';

import { AuthProvider } from './contexts/AuthContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Simple Layout Switcher based on route
const LayoutManager: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const isDashboard = pathname.startsWith('/dashboard');

  if (isDashboard) {
    return <DashboardLayout>{children}</DashboardLayout>;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <FooterComponent />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <LayoutManager>
          <Routes>
            {/* Landing Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/verify" element={<VerifyEmail />} />
            <Route path="/advertisers" element={<Advertisers />} />
            <Route path="/publishers" element={<Publishers />} />
            <Route path="/formats" element={<AdFormats />} />
            <Route path="/pricing" element={<Pricing />} />
            
            {/* Resource Hub Subsections */}
            <Route path="/resources" element={<Resources />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/api-docs" element={<ApiDocs />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />

            {/* Company Hub Subsections */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:jobId" element={<JobDetails />} />

            {/* Legal Routes */}
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
            
            {/* Unified Dashboard */}
            <Route path="/dashboard" element={<Overview />} />
            
            {/* Advertiser Routes */}
            <Route path="/dashboard/campaigns" element={<Campaigns />} />
            <Route path="/dashboard/campaigns/create" element={<CreateCampaign />} />
            <Route path="/dashboard/billing" element={<Billing />} />
            <Route path="/dashboard/tracking" element={<Tracking />} />
            
            {/* Publisher Routes */}
            <Route path="/dashboard/websites" element={<Websites />} />
            <Route path="/dashboard/ad-units" element={<AdUnits />} />
            <Route path="/dashboard/earnings" element={<Earnings />} />
            <Route path="/dashboard/withdraw" element={<Withdraw />} />
            
            {/* Common Dashboard Routes */}
            <Route path="/dashboard/stats" element={<Stats />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/support" element={<Support />} />
            <Route path="/dashboard/policies" element={<Policies />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </LayoutManager>
      </Router>
    </AuthProvider>
  );
};

export default App;
