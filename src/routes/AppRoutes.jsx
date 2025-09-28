// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutFarsight from '../pages/About/AboutFarsight';
// import Career from '../pages/About/Career';
import SoftwareDevelopment from '../pages/ITSolutions/SoftwareDevelopment';
import AppDevelopment from '../pages/ITSolutions/AppDevelopment';
import MarketingBranding from '../pages/ITSolutions/MarketingBranding';
import WebsiteDevelopment from '../pages/ITSolutions/WebsiteDevelopment';
import WebHosting from '../pages/ITSolutions/WebHosting';
import CustomerSupport from '../pages/BPOServices/CustomerSupport';
import BackOffice from '../pages/BPOServices/BackOffice';
import ContentManagement from '../pages/BPOServices/ContentManagement';
import ITHelpDesk from '../pages/BPOServices/ITHelpDesk';
import BackendOutsourcing from '../pages/BPOServices/BackendOutsourcing';
import RPO from '../pages/HROutsource/RPO';
import TrainingDevelopment from '../pages/HROutsource/TrainingDevelopment';
import TalentDevelopment from '../pages/HROutsource/TalentDevelopment';
// import LegalCompliance from '../pages/ExploreMore/LegalCompliance';
// import FinancialServices from '../pages/ExploreMore/FinancialServices';
// import BusinessConsultancy from '../pages/ExploreMore/BusinessConsultancy';
// import AngelInvestors from '../pages/ExploreMore/AngelInvestors';
import Products from '../pages/Products';
import Blogs from '../pages/Blogs';
import ContactUs from '../pages/ContactUs';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* About Us Routes */}
      <Route path="/about-farsight" element={<AboutFarsight />} />
      {/* <Route path="/career" element={<Career />} /> */}
      
      {/* IT Solutions Routes */}
      <Route path="/software-development" element={<SoftwareDevelopment />} />
      <Route path="/app-development" element={<AppDevelopment />} />
      <Route path="/marketing-branding" element={<MarketingBranding />} />
      <Route path="/website-development" element={<WebsiteDevelopment />} />
      <Route path="/web-hosting" element={<WebHosting />} />
      
      {/* BPO Services Routes */}
      <Route path="/customer-support" element={<CustomerSupport />} />
      <Route path="/back-office" element={<BackOffice />} />
      <Route path="/content-management" element={<ContentManagement />} />
      <Route path="/it-helpdesk" element={<ITHelpDesk />} />
      <Route path="/backend-outsourcing" element={<BackendOutsourcing />} />
      
      {/* HR Outsource Routes */}
      <Route path="/rpo" element={<RPO />} />
      <Route path="/training-development" element={<TrainingDevelopment />} />
      <Route path="/talent-development" element={<TalentDevelopment />} />
      
      {/* Explore More Routes */}
      {/* <Route path="/legal-compliance" element={<LegalCompliance />} />
      <Route path="/financial-services" element={<FinancialServices />} />
      <Route path="/business-consultancy" element={<BusinessConsultancy />} />
      <Route path="/angel-investors" element={<AngelInvestors />} /> */}
      
      {/* Other Routes */}
      <Route path="/products" element={<Products />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      
      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;