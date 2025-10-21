import PropTypes from 'prop-types';
import React from 'react';
import ResponsiveImg from './ResponsiveImg';
import useImagePreload from '../hooks/useImagePreload';

function Avatar({ user }) {
    const { avatarUrl, name, surname } = user;
    
    // Preload critical profile images for LCP optimization
    useImagePreload(
        avatarUrl ? {
            main: avatarUrl.Logo,
            sm: avatarUrl.LogoSm,
            md: avatarUrl.LogoMd,
            lg: avatarUrl.LogoLg
        } : null,
        true // This is the LCP element
    );
    
    return (
        <ResponsiveImg 
            className="banner-avatar"
            src={avatarUrl ? avatarUrl.Logo : ''}
            srcSm={avatarUrl ? avatarUrl.LogoSm : ''}
            srcMd={avatarUrl ? avatarUrl.LogoMd : ''}
            srcLg={avatarUrl ? avatarUrl.LogoLg : ''}
            alt={`${name} ${surname}`}
            sizes="(max-width: 320px) 150px, (max-width: 768px) 200px, 300px"
            loading="eager"
            fetchPriority="high"
        />
    );
}

Avatar.propTypes = {
    user: PropTypes.shape({
        avatarUrl: PropTypes.shape({
            Logo: PropTypes.string.isRequired,
            LogoSm: PropTypes.string,
            LogoMd: PropTypes.string,
            LogoLg: PropTypes.string
        }),
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired
    }).isRequired
};

export default Avatar;