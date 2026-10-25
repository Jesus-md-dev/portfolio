import PropTypes from 'prop-types';
import React from 'react';

// The avatar is the LCP element on every route. It is shown at 280 px, or
// 200 px at 768 px and below, so the srcset offers widths close to 1x-3x of
// those sizes. The browser picks one; nothing else is preloaded.
function Avatar({ user }) {
    const { avatarUrl, name, surname } = user;
    if (!avatarUrl) return null;

    const srcSet = [
        [avatarUrl.LogoSm, 320],
        [avatarUrl.Logo400, 400],
        [avatarUrl.Logo600, 600],
        [avatarUrl.LogoMd, 768],
        [avatarUrl.LogoLg, 1200],
    ].filter(([url]) => url).map(([url, w]) => `${url} ${w}w`).join(', ');

    return (
        <img
            className="banner-avatar"
            src={avatarUrl.Logo}
            srcSet={srcSet}
            sizes="(max-width: 768px) 200px, 280px"
            width="280"
            height="280"
            alt={`${name} ${surname}`}
            loading="eager"
            fetchpriority="high"
            decoding="async"
        />
    );
}

Avatar.propTypes = {
    user: PropTypes.shape({
        avatarUrl: PropTypes.shape({
            Logo: PropTypes.string.isRequired,
            LogoSm: PropTypes.string,
            Logo400: PropTypes.string,
            Logo600: PropTypes.string,
            LogoMd: PropTypes.string,
            LogoLg: PropTypes.string
        }),
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired
    }).isRequired
};

export default Avatar;
