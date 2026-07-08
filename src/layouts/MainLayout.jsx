import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CursorGlow from '../components/CursorGlow';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';
import TrustedClients from '../components/TrustedClients';

const MainLayout = () => {
  const location = useLocation();
  
  return (
    <div className="landing-page">
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main 
        key={location.pathname}
        className="page-transition"
      >
        <Outlet />
      </main>
      <TrustedClients />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default MainLayout;
