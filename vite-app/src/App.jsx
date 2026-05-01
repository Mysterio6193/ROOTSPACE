import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Agents from './pages/Agents';
import Blog from './pages/Blog';
import Search from './pages/Search';
import Services from './pages/Services';
import Join from './pages/Join';
import CertifiedAgents from './pages/CertifiedAgents';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PressAndMedia from './pages/PressAndMedia';
import OperatingProcedure from './pages/OperatingProcedure';

function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 700 }}>404</h1>
      <p style={{ fontSize: '1.2rem', color: '#666' }}>Page not found</p>
      <a href="/" style={{ color: '#000', textDecoration: 'underline' }}>Go home</a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/search" element={<Search />} />
        <Route path="/services" element={<Services />} />
        <Route path="/join" element={<Join />} />
        <Route path="/certified-agents" element={<CertifiedAgents />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/press-and-media" element={<PressAndMedia />} />
        <Route path="/operating-procedure" element={<OperatingProcedure />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
