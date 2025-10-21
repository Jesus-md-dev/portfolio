/**
 * Critical resource preload configuration for production builds
 * This helps optimize LCP by preloading the most important images
 */

export const CRITICAL_IMAGES = {
  // Profile picture - likely LCP element
  profile: {
    sm: require('../files/images/fotocvfondo-sm.webp'),
    md: require('../files/images/fotocvfondo-md.webp'),
    lg: require('../files/images/fotocvfondo-lg.webp'),
    main: require('../files/images/fotocvfondo.webp')
  }
};

/**
 * Generate preload hints for critical images
 * @param {Object} images - Image configuration object
 * @returns {Array} Array of preload link objects
 */
export const generatePreloadHints = (images) => {
  const hints = [];
  
  if (images.sm) {
    hints.push({
      rel: 'preload',
      as: 'image',
      href: images.sm,
      media: '(max-width: 320px)',
      fetchpriority: 'high'
    });
  }
  
  if (images.md) {
    hints.push({
      rel: 'preload',
      as: 'image',
      href: images.md,
      media: '(max-width: 768px)',
      fetchpriority: 'high'
    });
  }
  
  if (images.lg) {
    hints.push({
      rel: 'preload',
      as: 'image',
      href: images.lg,
      media: '(max-width: 1200px)',
      fetchpriority: 'high'
    });
  }
  
  if (images.main) {
    hints.push({
      rel: 'preload',
      as: 'image',
      href: images.main,
      fetchpriority: 'high'
    });
  }
  
  return hints;
};

export default { CRITICAL_IMAGES, generatePreloadHints };