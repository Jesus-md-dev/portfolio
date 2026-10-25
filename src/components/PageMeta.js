import { useEffect } from 'react';
import PropTypes from 'prop-types';

const setMetaContent = (selector, content) => {
  const el = document.querySelector(selector);
  if (el) {
    el.setAttribute('content', content);
  }
};

const SITE_URL = 'https://jzmarquez.com';

const PageMeta = ({ title, description, path = '/' }) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    }
    setMetaContent('meta[property="og:url"]', url);
  }, [path]);

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
  // Canonical path of the section, e.g. '/projects'. The CV is canonical at '/'.
  path: PropTypes.string,
};

export default PageMeta;
