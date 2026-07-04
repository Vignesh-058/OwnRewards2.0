import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CursorGlow from '../components/CursorGlow';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';

const MainLayout = () => {
  const location = useLocation();
  
  return (
    <div className="landing-page">
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main 
        key={location.pathname}
      >
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default MainLayout;
