import PropTypes from 'prop-types';
import React from 'react';

function Avatar({ user }) {
    const { avatarUrl, name, surname } = user;
    return (
        <img className="banner-avatar"
            src={avatarUrl ? avatarUrl.Logo : ''}
            alt={`${name} ${surname}`}
        />
    );
}

Avatar.propTypes = {
    user: PropTypes.shape({
        avatarUrl: PropTypes.shape({
            Logo: PropTypes.string.isRequired
        }),
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired
    }).isRequired
};

export default Avatar;