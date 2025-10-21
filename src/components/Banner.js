import PropTypes from 'prop-types';
import React from 'react';
import Avatar from "../components/Avatar.js";
import LanguageToggle from "../components/LanguageToggle.js";
import ThemeToggle from "../components/ThemeToggle.js";
import { useLanguage } from "../i18n/LanguageContext.js";

const Banner = React.memo(({ className, user }) => {
    const { t } = useLanguage();
    
    return (
        <header className={`py-10 ${className} relative`}>
            <div className="absolute top-4 right-4 z-10 flex gap-2">
                <ThemeToggle />
                <LanguageToggle />
            </div>
            <div>
                <div className="flex flex-col justify-center items-center">
                    <Avatar user={user} />
                    <div className="text-center mt-3">
                        <h1>{t('name')}</h1>
                        <h3 role="doc-subtitle">{t('title')}</h3>
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