import { useEffect, useRef } from 'react';

export function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-visible');
        if (options.once !== false) {
          observer.unobserve(element);
        }
      } else if (options.once === false) {
        element.classList.remove('is-visible');
      }
    }, {
      root: options.root || null,
      rootMargin: options.rootMargin || '0px',
      threshold: options.threshold || 0.1,
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.root, options.rootMargin, options.threshold, options.once]);

  return elementRef;
}
