import React, { Suspense, lazy } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DemoProvider } from './context/DemoContext';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';
import CookieConsent from './components/CookieConsent';
import ChatWidget from './components/ChatWidget';
import ExitIntentModal from './components/ExitIntentModal';

const MainLayout = lazy(() => import('./layouts/MainLayout'));
const Home = lazy(() => import('./pages/Home'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage'));
const UseCasesPage = lazy(() => import('./pages/UseCasesPage'));
const AnalyticsPage = lazy(() => import('./pages/AnalyticsPage'));

function App() {
  return (
    <DemoProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="features" element={<FeaturesPage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="how-it-works" element={<HowItWorksPage />} />
              <Route path="use-cases" element={<UseCasesPage />} />
              <Route path="analytics" element={<AnalyticsPage />} />
            </Route>
          </Routes>
        </Suspense>
        <CookieConsent />
        <ChatWidget />
        <ExitIntentModal />
      </BrowserRouter>
    </DemoProvider>
  );
}

export default App;
