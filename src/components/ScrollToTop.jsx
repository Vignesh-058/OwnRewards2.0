import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Setup global scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Stop observing once animated
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '-50px' });

    // Initial observe for synchronous elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // Watch for dynamically added elements from React.lazy/Suspense
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // ELEMENT_NODE
            if (node.classList.contains('animate-on-scroll')) {
              observer.observe(node);
            }
            // Also check any children inside the newly added node
            node.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
