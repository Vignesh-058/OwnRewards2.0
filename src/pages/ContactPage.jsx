import React from 'react';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import AnimatedSection from '../components/AnimatedSection';

import SEO from '../components/SEO';

const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Contact OwnRewards — We're here to help"
        description="Get in touch with the OwnRewards team for support, sales inquiries, or to book a demo."
        path="contact"
      />
      <AnimatedSection animation="animate-fade-up">
        <Contact />
      </AnimatedSection>
      <AnimatedSection>
        <FAQ />
      </AnimatedSection>
    </>
  );
};

export default ContactPage;
