import React from 'react';
import PropTypes from 'prop-types';

/**
 * Simple responsive image component that works with explicit imports
 */
const ResponsiveImg = ({ 
  src,
  srcSm,
  srcMd, 
  srcLg,
  srcXl,
  alt, 
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  sizes = '(max-width: 320px) 320px, (max-width: 768px) 768px, (max-width: 1200px) 1200px, 1920px',
  ...props 
}) => {
  // Build srcSet from provided sources
  const buildSrcSet = () => {
    const srcSetArray = [];
    
    if (srcSm) srcSetArray.push(`${srcSm} 320w`);
    if (srcMd) srcSetArray.push(`${srcMd} 768w`);
    if (srcLg) srcSetArray.push(`${srcLg} 1200w`);
    if (srcXl) srcSetArray.push(`${srcXl} 1920w`);
    
    // Add original as fallback
    srcSetArray.push(`${src} 2000w`);
    
    return srcSetArray.join(', ');
  };

  const srcSet = buildSrcSet();

  return (
    <img
      src={src} // Fallback for browsers that don't support srcset
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={loading}
      fetchpriority={fetchPriority}
      {...props}
    />
  );
};

ResponsiveImg.propTypes = {
  src: PropTypes.string.isRequired,
  srcSm: PropTypes.string,
  srcMd: PropTypes.string,
  srcLg: PropTypes.string,
  srcXl: PropTypes.string,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  fetchPriority: PropTypes.oneOf(['high', 'low', 'auto']),
  sizes: PropTypes.string
};

export default ResponsiveImg;