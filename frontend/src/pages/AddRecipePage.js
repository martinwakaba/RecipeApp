import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import './AddRecipePage.css';

function AddRecipePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    difficulty: 'Easy',
    ingredients: [''],
    instructions: [''],
    tags: []
  });

  const [tagInput, setTagInput] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayChange = (field, index, value) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData(prev => ({
      ...prev,
      [field]: newArray
    }));
  };

  const addField = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeField = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const addTag = () => {
    if (tagInput.trim()) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  const removeTag = (index) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Recipe submitted:', formData);
    // Here you would send the data to your backend
    alert('Recipe added successfully!');
    navigate('/');
  };

  return (
    <div className="add-recipe-page">
      <h1>Add New Recipe</h1>
      <form className="recipe-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Basic Information</h2>
          
          <div className="form-group">
            <label htmlFor="title">Recipe Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              placeholder="e.g., Spaghetti Carbonara"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              placeholder="Brief description of your recipe"
              rows="4"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="prepTime">Prep Time (minutes) *</label>
              <input
                type="number"
                id="prepTime"
                name="prepTime"
                value={formData.prepTime}
                onChange={handleInputChange}
                required
                min="0"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cookTime">Cook Time (minutes) *</label>
              <input
                type="number"
                id="cookTime"
                name="cookTime"
                value={formData.cookTime}
                onChange={handleInputChange}
                required
                min="0"
              />
            </div>
            <div className="form-group">
              <label htmlFor="servings">Servings *</label>
              <input
                type="number"
                id="servings"
                name="servings"
                value={formData.servings}
                onChange={handleInputChange}
                required
                min="1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="difficulty">Difficulty *</label>
              <select
                id="difficulty"
                name="difficulty"
                value={formData.difficulty}
                onChange={handleInputChange}
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Ingredients *</h2>
          {formData.ingredients.map((ingredient, index) => (
            <div key={index} className="form-group ingredient-group">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleArrayChange('ingredients', index, e.target.value)}
                placeholder={`Ingredient ${index + 1}`}
                required
              />
              {formData.ingredients.length > 1 && (
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeField('ingredients', index)}
                >
                  <FiX />
                </button>
              )}
            </div>
          ))}
          <button type="button" className="add-btn" onClick={() => addField('ingredients')}>
            + Add Ingredient
          </button>
        </div>

        <div className="form-section">
          <h2>Instructions *</h2>
          {formData.instructions.map((instruction, index) => (
            <div key={index} className="form-group instruction-group">
              <label>Step {index + 1}</label>
              <textarea
                value={instruction}
                onChange={(e) => handleArrayChange('instructions', index, e.target.value)}
                placeholder={`Step ${index + 1} instructions`}
                rows="3"
                required
              />
              {formData.instructions.length > 1 && (
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeField('instructions', index)}
                >
                  <FiX />
                </button>
              )}
            </div>
          ))}
          <button type="button" className="add-btn" onClick={() => addField('instructions')}>
            + Add Step
          </button>
        </div>

        <div className="form-section">
          <h2>Tags</h2>
          <div className="tag-input-group">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              placeholder="Add a tag and press Enter"
            />
            <button type="button" className="add-btn" onClick={addTag}>
              Add Tag
            </button>
          </div>
          <div className="tags-display">
            {formData.tags.map((tag, index) => (
              <span key={index} className="tag-badge">
                {tag}
                <button
                  type="button"
                  className="remove-tag"
                  onClick={() => removeTag(index)}
                >
                  <FiX size={14} />
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">Publish Recipe</button>
          <button type="button" className="cancel-btn" onClick={() => navigate('/')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipePage;
