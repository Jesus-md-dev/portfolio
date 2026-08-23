import React from 'react';
import PropTypes from 'prop-types';

/**
 * ResponsiveImage component that serves appropriately-sized images
 * based on screen size to save bandwidth and improve loading times
 */
const ResponsiveImage = ({ 
  src, 
  alt, 
  className = '',
  loading = 'lazy',
  sizes = '(max-width: 320px) 320px, (max-width: 768px) 768px, (max-width: 1200px) 1200px, 1920px',
  ...props 
}) => {
  // Extract filename without extension from the src
  const getImageBaseName = (imageSrc) => {
    const pathParts = imageSrc.split('/');
    const filename = pathParts[pathParts.length - 1];
    return filename.replace('.webp', '');
  };

  // Generate srcSet for responsive images
  const generateSrcSet = (imageSrc) => {
    const baseName = getImageBaseName(imageSrc);
    const basePath = imageSrc.replace(/\/[^/]+$/, ''); // Remove filename, keep path
    
    const breakpoints = [
      { suffix: '-sm', width: '320w' },
      { suffix: '-md', width: '768w' },
      { suffix: '-lg', width: '1200w' },
      { suffix: '-xl', width: '1920w' }
    ];
    
    const srcSetArray = [];
    
    // Add responsive images if they might exist
    breakpoints.forEach(bp => {
      srcSetArray.push(`${basePath}/${baseName}${bp.suffix}.webp ${bp.width}`);
    });
    
    // Add the original as fallback
    srcSetArray.push(`${imageSrc} 2000w`);
    
    return srcSetArray.join(', ');
  };

  // Check if responsive images exist, fallback to original if not
  const srcSet = generateSrcSet(src);

  return (
    <img
      src={src} // Fallback for browsers that don't support srcset
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={loading}
      {...props}
    />
  );
};

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  sizes: PropTypes.string
};

export default ResponsiveImage;