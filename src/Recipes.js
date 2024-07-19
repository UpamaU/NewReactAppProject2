import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import alfredopic from './images/alfredo.png';  
import veggiestirfrypic from './images/veggiestirfry.png';  
import chocolatecake from './images/chocolatecake.png';
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
];

const popularSearches = [
  'Chicken', 'Pasta', 'Pancake', 'Lasagna', 'Rice', 
  'Cookies', 'Smoothie', 'Noodle', 'Sandwich'
];

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes] = useState(initialRecipes);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePopularSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
      </div>
      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.name} className="recipe-image" />
              <div className="recipe-info">
                <h2>{recipe.name}</h2>
                <p>⭐ {recipe.rating}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
