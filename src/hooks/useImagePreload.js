import { useEffect } from 'react';

/**
 * Custom hook to preload critical images for LCP optimization
 * @param {Object} images - Object containing image URLs to preload
 * @param {boolean} isLCP - Whether this is for the LCP element
 */
export const useImagePreload = (images, isLCP = false) => {
  useEffect(() => {
    if (!images) return;

    const preloadLinks = [];

    // Helper function to create preload link
    const createPreloadLink = (href, media = null) => {
      if (!href) return null;
      
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = href;
      
      if (media) {
        link.media = media;
      }
      
      // For LCP elements, add high priority
      if (isLCP) {
        link.fetchpriority = 'high';
      }
      
      document.head.appendChild(link);
      return link;
    };

    // Preload responsive images with appropriate media queries
    if (images.sm) {
      preloadLinks.push(createPreloadLink(images.sm, '(max-width: 320px)'));
    }
    if (images.md) {
      preloadLinks.push(createPreloadLink(images.md, '(max-width: 768px)'));
    }
    if (images.lg) {
      preloadLinks.push(createPreloadLink(images.lg, '(max-width: 1200px)'));
    }
    if (images.xl) {
      preloadLinks.push(createPreloadLink(images.xl, '(max-width: 1920px)'));
    }
    
    // Always preload the main image as fallback
    if (images.main) {
      preloadLinks.push(createPreloadLink(images.main));
    }

    // Cleanup function
    return () => {
      preloadLinks.forEach(link => {
        if (link && document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, [images, isLCP]);
};

export default useImagePreload;