import React from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiUsers } from 'react-icons/fi';
import './RecipeCard.css';

function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.id}`} className="recipe-card">
      <div className="recipe-image">
        <img src={recipe.image || 'https://via.placeholder.com/300x200?text=Recipe'} alt={recipe.title} />
      </div>
      <div className="recipe-content">
        <h3>{recipe.title}</h3>
        <p className="recipe-description">{recipe.description}</p>
        <div className="recipe-meta">
          <span className="meta-item">
            <FiClock size={16} /> {recipe.cookTime || 30} min
          </span>
          <span className="meta-item">
            <FiUsers size={16} /> {recipe.servings || 4} servings
          </span>
        </div>
        <div className="recipe-tags">
          {recipe.tags?.slice(0, 2).map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
