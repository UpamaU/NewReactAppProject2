import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <header>
        <div className="header-content">
          <h1><Link to="/">{t('Meals4U')}</Link></h1>
          <button className="sign-in">{t('Sign In')}</button>
          <button onClick={changeLanguage} className="language-switch">
            {i18n.language === 'en' ? 'FR' : 'EN'}
          </button>
        </div>
      </header>
      <nav>
        <ul>
          <li><Link to="/recipes">{t('Recipes')}</Link></li>
          <li><Link to="/forum">{t('Forum')}</Link></li>
          <li><Link to="/contact">{t('Contact')}</Link></li>
          <li><Link to="/about">{t('About Us')}</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
