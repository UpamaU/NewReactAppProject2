import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { i18n } = useTranslation();

  return (
    <main className="about" role="main" lang={i18n.language}>
      <section className="about-card" aria-labelledby="welcome-heading">
        <h2 id="welcome-heading">
          {i18n.language === 'en' ? 'Welcome to Meals 4 U!' : 'Bienvenue à Repas 4 Vous!'}
        </h2>
        <p>
          {i18n.language === 'en'
            ? 'Meals 4 U is an online community dedicated to food lovers, home cooks, and culinary enthusiasts of all levels.'
            : 'Repas 4 Vous est une communauté en ligne dédiée aux amoureux de la nourriture, aux cuisiniers amateurs et aux passionnés de cuisine de tous niveaux.'}
        </p>
      </section>
      <section className="about-card" aria-labelledby="join-us-heading">
        <h2 id="join-us-heading">
          {i18n.language === 'en' ? 'Join Us' : 'Rejoignez-nous'}
        </h2>
        <p>
          {i18n.language === 'en'
            ? 'Become a part of the community today. Share your favorite recipes and more!'
            : 'Devenez membre de la communauté dès aujourd\'hui. Partagez vos recettes préférées et plus encore!'}
        </p>
        <p>
          {i18n.language === 'en'
            ? 'Thank you for being a part of our journey and we hope to keep seeing you here.'
            : 'Merci de faire partie de notre aventure et nous espérons continuer à vous voir ici.'}
        </p>
      </section>
    </main>
  );
};

export default About;
