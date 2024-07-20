import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import alfredopic from './images/alfredo.png';  
import veggiestirfrypic from './images/veggiestirfry.png';  
import chocolatecake from './images/chocolatecake.png';
import pancakepic from './images/pancake.png';  
import cookiepic from './images/cookie.png';
import './Recipes.css';

const initialRecipes = [
  { 
    id: 1, 
    name: 'Chicken Alfredo', 
    rating: 4.5, 
    image: alfredopic,
    content: 'This Chicken Alfredo is a creamy pasta dish...',
    ingredients: ['Chicken breast', 'Alfredo sauce', 'Fettuccine pasta'],
  },
  { 
    id: 2, 
    name: 'Vegetable Stir Fry', 
    rating: 4.2, 
    image: veggiestirfrypic,
    content: 'This Vegan Stir Fry is a healthy and delicious meal...',
    ingredients: ['Mixed vegetables', 'Soy sauce', 'Rice vinegar', 'Garlic', 'Ginger'],
  },
  { 
    id: 3, 
    name: 'Chocolate Cake', 
    rating: 4.8, 
    image: chocolatecake,
    content: 'This Chocolate Cake is a rich and moist dessert...',
    ingredients: ['All-purpose flour', 'Sugar', 'Cocoa powder', 'Baking powder', 'Eggs', 'Milk', 'Butter'],
  },
  { 
    id: 4, 
    name: 'Pancakes', 
    rating: 4.6, 
    image: pancakepic, 
    content: 'These Pancakes dessert are fluffy and delicious...',
    ingredients: [ 'All-purpose flour','Baking powder','White sugar','Salt','Milk', 'Butter', 'egg'],
  },
  {
    id: 5,
    name: 'Chocolate Chip Cookies',
    rating: 4.8,
    image: cookiepic,
    content: 'This chocolate chip cookie dessert recipe makes delicious cookies with crisp edges and chewy middles. A beloved recipe among thousands!',
    ingredients: ['Butter','White sugar','Brown sugar', 'Eggs','Vanilla extract','Baking soda', 'Hot water','Salt',  'All-purpose flour',  'Semisweet chocolate chips', 'Chopped walnuts (optional)']
  }
];

const popularSearches = [
  'Chicken', 'Pasta', 'Pancake', 'Lasagna', 'Rice', 
  'Cookies', 'Smoothie', 'Noodle', 'Sandwich'
];

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes] = useState(initialRecipes);
  const [sortBy, setSortBy] = useState('default');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePopularSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSortChange = () => {
    setSortBy(sortBy === 'default' ? 'rating' : 'default');
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating; // sort by rating in descending order
    }
    return 0; // default sorting (no change)
  });

  return (
    <div className="recipes-page">
      <div className="search-section">
        <p>Don't know what you want? Don't worry! Search for recipes by name or ingredient.</p>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search here..." 
            value={searchTerm} 
            onChange={handleSearchChange}
          />
          <button className="search-button">🔍</button>
        </div>
        <div className="popular-searches">
          {popularSearches.map((term) => (
            <button key={term} onClick={() => handlePopularSearch(term)}>
              {term}
            </button>
          ))}
        </div>
        <button className="sort-button" onClick={handleSortChange}>
          {sortBy === 'rating' ? 'Sort by Default' : 'Sort by Top Rated'}
        </button>
      </div>
      <div className="recipe-list">
        {sortedRecipes.length === 0 ? (
          <p className="no-items-message">No items found. Try a different search term!</p>
        ) : (
          sortedRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <Link to={`/recipe/${recipe.id}`}>
                <img src={recipe.image} alt={recipe.name} className="recipe-image" />
                <div className="recipe-info">
                  <h2>{recipe.name}</h2>
                  <p>⭐ {recipe.rating}</p>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Recipes;
