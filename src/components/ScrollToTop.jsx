import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '-50px' });

    // Robust polling to catch elements as they mount from React.lazy/Suspense
    const intervalId = setInterval(() => {
      const elements = document.querySelectorAll('.animate-on-scroll:not(.is-observed)');
      elements.forEach(el => {
        el.classList.add('is-observed'); // Mark so we don't observe twice
        observer.observe(el);
      });
    }, 200);

    return () => {
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
