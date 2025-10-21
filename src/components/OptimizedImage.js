import React from 'react';

/**
 * Advanced responsive image component with Picture element
 * Provides maximum browser compatibility and optimization
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '',
  loading = 'lazy',
  sizes = '(max-width: 320px) 320px, (max-width: 768px) 768px, (max-width: 1200px) 1200px, 1920px',
  fallbackFormat = 'png', // fallback for browsers that don't support WebP
  ...props 
}) => {
  // Extract filename without extension from the src
  const getImageBaseName = (imageSrc) => {
    const pathParts = imageSrc.split('/');
    const filename = pathParts[pathParts.length - 1];
    return filename.replace('.webp', '').replace('.png', '').replace('.jpg', '').replace('.jpeg', '');
  };

  // Generate srcSet for responsive images
  const generateSrcSet = (imageSrc, format = 'webp') => {
    const baseName = getImageBaseName(imageSrc);
    const basePath = imageSrc.replace(/\/[^/]+$/, ''); // Remove filename, keep path
    
    const breakpoints = [
      { suffix: '-sm', width: '320w' },
      { suffix: '-md', width: '768w' },
      { suffix: '-lg', width: '1200w' },
      { suffix: '-xl', width: '1920w' }
    ];
    
    const srcSetArray = breakpoints.map(bp => 
      `${basePath}/${baseName}${bp.suffix}.${format} ${bp.width}`
    );
    
    // Add the original as fallback
    if (format === 'webp') {
      srcSetArray.push(`${imageSrc} 2000w`);
    } else {
      srcSetArray.push(`${basePath}/${baseName}.${format} 2000w`);
    }
    
    return srcSetArray.join(', ');
  };

  const baseName = getImageBaseName(src);
  const basePath = src.replace(/\/[^/]+$/, '');
  
  return (
    <picture>
      {/* WebP sources for modern browsers */}
      <source
        srcSet={generateSrcSet(src, 'webp')}
        sizes={sizes}
        type="image/webp"
      />
      
      {/* Fallback for browsers that don't support WebP */}
      <source
        srcSet={generateSrcSet(src, fallbackFormat)}
        sizes={sizes}
        type={`image/${fallbackFormat}`}
      />
      
      {/* Fallback img element */}
      <img
        src={src} // Main fallback
        alt={alt}
        className={className}
        loading={loading}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;