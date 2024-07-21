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
      <section className="about-card" aria-labelledby="faq-heading">
        <h2 id="faq-heading">
          {i18n.language === 'en' ? 'Frequently Asked Questions' : 'Questions Fréquemment Posées'}
        </h2>
        <div className="faq">
          <h3>{i18n.language === 'en' ? 'Are my posts really anonymous?' : 'Mes publications sont-elles vraiment anonymes ?'}</h3>
          <p>
            {i18n.language === 'en'
              ? 'Yes, if you choose to post as anonymous, your identity will not be displayed.'
              : 'Oui, si vous choisissez de publier en tant qu\'anonyme, votre identité ne sera pas affichée.'}
          </p>
          <h3>{i18n.language === 'en' ? 'How can I delete my post?' : 'Comment puis-je supprimer ma publication ?'}</h3>
          <p>
            {i18n.language === 'en'
              ? 'You can delete your post by clicking the "Delete Post" button on your post.'
              : 'Vous pouvez supprimer votre publication en cliquant sur le bouton "Supprimer la publication" sur votre publication.'}
          </p>
          <h3>{i18n.language === 'en' ? 'How do I become a member?' : 'Comment devenir membre ?'}</h3>
          <p>
            {i18n.language === 'en'
              ? 'To become a member, simply sign up on our website. It\'s free and easy!'
              : 'Pour devenir membre, inscrivez-vous simplement sur notre site Web. C\'est gratuit et facile !'}
          </p>
          <h3>{i18n.language === 'en' ? 'Do you save the pictures I upload?' : 'Enregistrez-vous les photos que je télécharge ?'}</h3>
          <p>
            {i18n.language === 'en'
              ? 'No, we don\'t save any pictures you upload. They are stored temporarily for display purposes only.'
              : 'Non, nous n\'enregistrons pas les photos que vous téléchargez. Elles sont stockées temporairement à des fins d\'affichage uniquement.'}
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
