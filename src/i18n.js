import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Meals4U": "Meals4U",
      "Sign In": "Sign In",
      "Recipes": "Recipes",
      "Forum": "Forum",
      "Contact": "Contact",
      "About Us": "About Us",
      "Welcome to Meals 4 U!": "Welcome to Meals 4 U!",
      "Meals 4 U is an online community dedicated to food lovers, home cooks, and culinary enthusiasts of all levels.": "Meals 4 U is an online community dedicated to food lovers, home cooks, and culinary enthusiasts of all levels.",
      "Join Us": "Join Us",
      "Become a part of the community today. Share your favorite recipes and more!": "Become a part of the community today. Share your favorite recipes and more!",
      "Thank you for being a part of our journey and we hope to keep seeing you here.": "Thank you for being a part of our journey and we hope to keep seeing you here."
    }
  },
  fr: {
    translation: {
      "Meals4U": "Repas4Vous",
      "Sign In": "Se Connecter",
      "Recipes": "Recettes",
      "Forum": "Forum",
      "Contact": "Contact",
      "About Us": "À Propos De Nous",
      "Welcome to Meals 4 U!": "Bienvenue à Repas 4 Vous!",
      "Meals 4 U is an online community dedicated to food lovers, home cooks, and culinary enthusiasts of all levels.": "Repas 4 Vous est une communauté en ligne dédiée aux amoureux de la nourriture, aux cuisiniers amateurs et aux passionnés de cuisine de tous niveaux.",
      "Join Us": "Rejoignez-nous",
      "Become a part of the community today. Share your favorite recipes and more!": "Devenez membre de la communauté dès aujourd'hui. Partagez vos recettes préférées et plus encore!",
      "Thank you for being a part of our journey and we hope to keep seeing you here.": "Merci de faire partie de notre aventure et nous espérons continuer à vous voir ici."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
