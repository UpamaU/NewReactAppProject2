import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignInForm, setShowSignInForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const changeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const handleSignIn = () => {
    if (username && password) {
      alert(`Signed in as ${username}`);
      setIsLoggedIn(true);
      setShowSignInForm(false);
      setUsername('');
      setPassword('');
    } else {
      alert('Please enter both username and password');
    }
  };

  const handleLogOut = () => {
    alert('Logged out');
    setIsLoggedIn(false);
  };

  return (
    <>
      <header>
        <div className="header-content">
          <h1><Link to="/">{t('Meals4U')}</Link></h1>
          {isLoggedIn ? (
            <button className="log-out" onClick={handleLogOut}>
              <i className="fas fa-sign-out-alt"></i> {t('Log Out')}
            </button>
          ) : (
            <>
              <button className="sign-in" onClick={() => setShowSignInForm(!showSignInForm)}>
                <i className="fas fa-sign-in-alt"></i> {t('Sign In')}
              </button>
              {showSignInForm && (
                <div className="sign-in-form">
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button onClick={handleSignIn}>{t('Sign In')}</button>
                </div>
              )}
            </>
          )}
          <button onClick={changeLanguage} className="language-switch">
            <i className="fas fa-globe"></i> {i18n.language === 'en' ? 'French' : 'English'}
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
