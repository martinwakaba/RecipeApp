import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiUsers } from 'react-icons/fi';
import './RecipeDetailPage.css';

function RecipeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Mock recipe data
    const mockRecipe = {
      id: id,
      title: 'Spaghetti Carbonara',
      description: 'Classic Italian pasta with creamy sauce and bacon',
      image: 'https://via.placeholder.com/600x400?text=Carbonara',
      cookTime: 25,
      prepTime: 10,
      servings: 4,
      difficulty: 'Easy',
      tags: ['Italian', 'Pasta', 'Main Course'],
      ingredients: [
        '1 lb spaghetti',
        '6 oz bacon or pancetta, diced',
        '4 large eggs',
        '1 cup grated Pecorino Romano cheese',
        'Salt and freshly ground black pepper',
        'Fresh parsley for garnish'
      ],
      instructions: [
        'Bring a large pot of salted water to boil. Add spaghetti and cook until al dente.',
        'While pasta cooks, fry bacon in a large skillet until crispy.',
        'In a bowl, whisk together eggs and cheese.',
        'Drain pasta, reserving 1 cup pasta water.',
        'Add hot pasta to bacon, then remove from heat.',
        'Quickly stir in egg mixture, adding pasta water as needed for creaminess.',
        'Season with salt and pepper. Serve immediately with extra cheese and parsley.'
      ]
    };
    setRecipe(mockRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="loading">Loading recipe...</div>;
  }

  return (
    <div className="recipe-detail-page">
      <button className="back-btn" onClick={() => navigate('/')}>
        <FiArrowLeft /> Back to Recipes
      </button>

      <div className="recipe-header">
        <img src={recipe.image} alt={recipe.title} className="recipe-hero-image" />
        <div className="recipe-header-content">
          <h1>{recipe.title}</h1>
          <p className="recipe-description">{recipe.description}</p>
          <div className="recipe-meta-info">
            <div className="meta-box">
              <FiClock size={20} />
              <div>
                <span className="meta-label">Prep Time</span>
                <span className="meta-value">{recipe.prepTime} min</span>
              </div>
            </div>
            <div className="meta-box">
              <FiClock size={20} />
              <div>
                <span className="meta-label">Cook Time</span>
                <span className="meta-value">{recipe.cookTime} min</span>
              </div>
            </div>
            <div className="meta-box">
              <FiUsers size={20} />
              <div>
                <span className="meta-label">Servings</span>
                <span className="meta-value">{recipe.servings}</span>
              </div>
            </div>
            <div className="meta-box">
              <div>
                <span className="meta-label">Difficulty</span>
                <span className="meta-value">{recipe.difficulty}</span>
              </div>
            </div>
          </div>
          <div className="recipe-tags">
            {recipe.tags.map((tag, idx) => (
              <span key={idx} className="recipe-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="recipe-content">
        <div className="ingredients-section">
          <h2>Ingredients</h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient, idx) => (
              <li key={idx}>
                <input type="checkbox" id={`ingredient-${idx}`} />
                <label htmlFor={`ingredient-${idx}`}>{ingredient}</label>
              </li>
            ))}
          </ul>
        </div>

        <div className="instructions-section">
          <h2>Instructions</h2>
          <ol className="instructions-list">
            {recipe.instructions.map((instruction, idx) => (
              <li key={idx}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailPage;
