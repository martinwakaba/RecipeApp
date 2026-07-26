import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import './SearchPage.css';

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      // Mock search results
      const mockRecipes = [
        {
          id: 1,
          title: 'Spaghetti Carbonara',
          description: 'Classic Italian pasta',
          image: 'https://via.placeholder.com/300x200?text=Carbonara',
          cookTime: 25,
          servings: 4,
          tags: ['Italian', 'Pasta']
        },
        {
          id: 4,
          title: 'Chicken Tikka Masala',
          description: 'Spicy and creamy Indian curry',
          image: 'https://via.placeholder.com/300x200?text=Tikka',
          cookTime: 40,
          servings: 4,
          tags: ['Indian', 'Curry']
        }
      ];
      
      const filtered = mockRecipes.filter(recipe => 
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.description.toLowerCase().includes(query.toLowerCase())
      );
      
      setResults(filtered);
      setIsLoading(false);
    }
  }, [query]);

  return (
    <div className="search-page">
      <h1>Search Results</h1>
      <p className="search-query">Results for: <strong>"{query}"</strong></p>
      
      {isLoading ? (
        <p className="loading">Searching...</p>
      ) : results.length > 0 ? (
        <div className="search-results">
          <p className="result-count">Found {results.length} recipe(s)</p>
          <div className="recipes-grid">
            {results.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      ) : (
        <div className="no-results">
          <p>No recipes found matching "{query}"</p>
          <p>Try searching for different keywords</p>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
