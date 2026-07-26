import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import './HomePage.css';

function HomePage() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: 'Spaghetti Carbonara',
      description: 'Classic Italian pasta with creamy sauce and bacon',
      image: 'https://via.placeholder.com/300x200?text=Carbonara',
      cookTime: 25,
      servings: 4,
      tags: ['Italian', 'Pasta']
    },
    {
      id: 2,
      title: 'Chocolate Chip Cookies',
      description: 'Delicious homemade cookies with chocolate chips',
      image: 'https://via.placeholder.com/300x200?text=Cookies',
      cookTime: 15,
      servings: 12,
      tags: ['Dessert', 'Baking']
    },
    {
      id: 3,
      title: 'Grilled Salmon',
      description: 'Fresh salmon with lemon and herbs',
      image: 'https://via.placeholder.com/300x200?text=Salmon',
      cookTime: 20,
      servings: 2,
      tags: ['Seafood', 'Healthy']
    },
    {
      id: 4,
      title: 'Chicken Tikka Masala',
      description: 'Spicy and creamy Indian curry',
      image: 'https://via.placeholder.com/300x200?text=Tikka+Masala',
      cookTime: 40,
      servings: 4,
      tags: ['Indian', 'Curry']
    },
    {
      id: 5,
      title: 'Caesar Salad',
      description: 'Crisp romaine with parmesan and croutons',
      image: 'https://via.placeholder.com/300x200?text=Caesar+Salad',
      cookTime: 10,
      servings: 2,
      tags: ['Salad', 'Vegetarian']
    },
    {
      id: 6,
      title: 'Beef Tacos',
      description: 'Seasoned ground beef with fresh toppings',
      image: 'https://via.placeholder.com/300x200?text=Tacos',
      cookTime: 15,
      servings: 4,
      tags: ['Mexican', 'Beef']
    }
  ]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Here you would typically fetch recipes from your backend
    // setIsLoading(true);
    // axios.get('/api/recipes')
    //   .then(res => setRecipes(res.data))
    //   .catch(err => console.error(err))
    //   .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to RecipeApp</h1>
        <p>Discover, create, and share your favorite recipes</p>
      </div>

      <div className="recipes-section">
        <h2>Featured Recipes</h2>
        {isLoading ? (
          <p className="loading">Loading recipes...</p>
        ) : (
          <div className="recipes-grid">
            {recipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
