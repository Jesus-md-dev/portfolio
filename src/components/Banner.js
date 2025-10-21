import PropTypes from 'prop-types';
import React from 'react';
import Avatar from "../components/Avatar.js";

const Banner = React.memo(({ className, user }) => {
    return (
        <header className={`py-10 ${className}`}>
            <div>
                <div className="flex flex-col justify-center items-center">
                    <Avatar user={user} />
                    <div className="text-center mt-3">
                        <h1>{user.name} {user.surname}</h1>
                        <h3 role="doc-subtitle">{user.degree}</h3>
                    </div>
                </div>
            </div>
        </header>
    );
});

Banner.displayName = 'Banner';

Banner.propTypes = {
    className: PropTypes.string,
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        degree: PropTypes.string.isRequired
    }).isRequired
};

export default Banner;