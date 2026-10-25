import { useEffect } from 'react';

/**
 * Custom hook to monitor LCP (Largest Contentful Paint) performance
 */
export const useLCPMonitor = () => {
  useEffect(() => {
    // Only run in production or when performance monitoring is needed
    if (import.meta.env.DEV) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          if (lastEntry) {
            // eslint-disable-next-line no-console
            console.log('🎯 LCP Performance:', {
              value: `${lastEntry.startTime.toFixed(2)}ms`,
              element: lastEntry.element?.tagName?.toLowerCase() || 'unknown',
              url: lastEntry.url || 'N/A',
              size: lastEntry.size || 'N/A'
            });
          }
        });

        observer.observe({ entryTypes: ['largest-contentful-paint'] });

        // Cleanup observer
        return () => {
          observer.disconnect();
        };
      } catch {
        // eslint-disable-next-line no-console
        console.warn('LCP monitoring not supported in this browser');
      }
    }
  }, []);
};

export default useLCPMonitor;