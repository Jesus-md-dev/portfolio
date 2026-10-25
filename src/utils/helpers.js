/**
 * Utility functions for the application
 */

/**
 * Extracts YouTube video ID from various YouTube URL formats
 * @param {string} url - YouTube URL
 * @returns {string|null} - Video ID or null if not found
 */
export const getYouTubeVideoID = (url) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

/**
 * Generates thumbnail URL for YouTube video
 * @param {string} videoId - YouTube video ID
 * @returns {string} - Thumbnail URL
 */
export const getYouTubeThumbnail = (videoId) => {
  return `https://i.ytimg.com/vi_webp/${videoId}/sddefault.webp`;
};

/**
 * Responsive srcset of YouTube's WebP thumbnails. The 480 and 640 px ones are
 * 4:3 with letterbox bars, which object-cover crops away in a 16:9 box.
 * @param {string} videoId - YouTube video ID
 * @returns {string} - srcset value
 */
export const getYouTubeThumbnailSrcSet = (videoId) => {
  const base = `https://i.ytimg.com/vi_webp/${videoId}`;
  return `${base}/mqdefault.webp 320w, ${base}/hqdefault.webp 480w, ${base}/sddefault.webp 640w, ${base}/maxresdefault.webp 1280w`;
};

/**
 * Validates email format
 * @param {string} email - Email address
 * @returns {boolean} - True if valid email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Debounce function to limit how often a function can be called
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};