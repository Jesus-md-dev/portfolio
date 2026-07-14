import { useEffect } from 'react';
import PropTypes from 'prop-types';

const setMetaContent = (selector, content) => {
  const el = document.querySelector(selector);
  if (el) {
    el.setAttribute('content', content);
  }
};

const PageMeta = ({ title, description }) => {
  useEffect(() => {
    if (!title) return;

    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
  }, [title, description]);

  return null;
};

PageMeta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PageMeta;
