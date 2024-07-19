import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import cardRecipesPic from './images/cardRecipespic.jpg';
import welcomeMessagePic from './images/welcome_message.png'; 
import forumcardPic from './images/joinforumcard.png';
import lasagnaPic from './images/lasagna.png'; 
import chocolatecake from'./images/chocolatecake.png';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showReplies, setShowReplies] = useState(false);

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  const cards = [
    {
      description: 'Pic for Welcome Message',
      image: welcomeMessagePic,
      buttonText: ''
    },
    {
      description: 'Pic for Recipes',
      image: cardRecipesPic,
      buttonText: 'Discover Recipes',
      link: '/recipes' 
    },
    {
      description: 'Pic for Community Forum',
      image: forumcardPic,
      buttonText: 'Join Forum',
      link: './forum'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="home-container">
      <section className="card-slider">
        <div className="card">
          <div className="card-image-placeholder">
            {cards[currentIndex].image ? (
              <img src={cards[currentIndex].image} alt={cards[currentIndex].description} />
            ) : (
              cards[currentIndex].description
            )}
            <div className="card-button-container">
              {cards[currentIndex].buttonText && (
                cards[currentIndex].link ? (
                  <Link to={cards[currentIndex].link}>
                    <button className="card-button">{cards[currentIndex].buttonText}</button>
                  </Link>
                ) : (
                  <button className="card-button">{cards[currentIndex].buttonText}</button>
                )
              )}
            </div>
          </div>
        </div>
        <div className="slider-controls">
          <button className="slider-button" onClick={prevSlide}>&lt;</button>
          <button className="slider-button" onClick={nextSlide}>&gt;</button>
        </div>
      </section>

      <section className="aim">
        <p>We aim to cater to cooking enthusiasts of all skill levels who wish to enhance their culinary skills, discover new recipes, and interact with a community of like-minded individuals.</p>
      </section>

      <section className="forum-activity">
        <h2>Recent Forum Activity</h2>
        <div className="forum-cards">
          <div className="forum-card">
            <h4>User1111 posted</h4>
            <div className="forum-card-image">
              <img src={lasagnaPic} alt="Lasagna" className="forum-card-image-content" />
            </div>
            <p>Check out my homemade lasagna!</p>
          </div>
          <div className="forum-card">
            <h4>User2222 posted</h4>
            <div className="forum-card-image">
              <img src={chocolatecake} alt="ChocolateCake" className="forum-card-image-content" />
            </div>
            <p>Delicious chocolate cake I made yesterday!</p>
          </div>
          <div className="forum-card">
            <h4>What are your favorite quick dinner recipes?</h4>
            <p>I'm looking for some quick and easy dinner ideas for weeknights. What are your go-to recipes?</p>
            <button className="toggle-replies" onClick={toggleReplies}>
              {showReplies ? 'Hide Replies' : 'Show Replies'}
            </button>
            {showReplies && (
              <div className="replies">
                <p><strong>User3333:</strong> I love making stir-fry! It's quick, easy, and you can use whatever veggies you have.</p>
                <p><strong>User4444:</strong> Pasta with pesto sauce is always a winner. Takes just 15 minutes!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer>
        <p>Mealsforu@gmail.com</p>
        <p>000-000-0000</p>
        <p>Your number one choice for all things food.</p>
      </footer>
    </div>
  );
};

export default Home;
