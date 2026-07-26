# RecipeApp Frontend

A modern React-based frontend for the RecipeApp, featuring recipe discovery, detailed recipe views, and recipe creation.

## Features

- 🏠 **Home Page**: Browse featured recipes
- 🔍 **Search**: Find recipes by keywords
- 📖 **Recipe Detail**: View complete recipe with ingredients and instructions
- ➕ **Add Recipe**: Create and share your own recipes
- 📱 **Responsive Design**: Works great on desktop and mobile devices
- 🎨 **Modern UI**: Beautiful gradient design with smooth animations

## Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── RecipeCard.js
│   │   └── RecipeCard.css
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── HomePage.css
│   │   ├── RecipeDetailPage.js
│   │   ├── RecipeDetailPage.css
│   │   ├── AddRecipePage.js
│   │   ├── AddRecipePage.css
│   │   ├── SearchPage.js
│   │   └── SearchPage.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Dependencies

- **React**: UI framework
- **React Router DOM**: Client-side routing
- **Axios**: HTTP client for API calls
- **React Icons**: Icon library

## Building for Production

```bash
npm run build
```

Builds the app for production to the `build` folder.

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Runs tests
- `npm run eject`: Ejects from create-react-app (irreversible)

## Future Enhancements

- [ ] User authentication
- [ ] Recipe ratings and reviews
- [ ] Favorites/bookmarks
- [ ] Shopping list generation
- [ ] Nutritional information
- [ ] User profiles
- [ ] Social sharing
- [ ] Dark mode

## License

MIT License - feel free to use this project for your own purposes!
