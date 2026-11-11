# Recipe Discovery App

## Overview

Recipe Discovery is a React single-page application (SPA) that allows users to explore recipes using data from [TheMealDB API](https://www.themealdb.com/api.php).

Users can browse recipes by category, search for specific meals, view recipe details, and save their favorite recipes.

## Features

- **Browse Categories:** Explore different recipe categories.
- **Category Recipes:** View recipes belonging to a selected category.
- **Recipe Details:** View recipe images, ingredients, measurements, and cooking instructions.
- **Search Recipes:** Search for recipes by name.
- **Favorites:** Add and remove recipes from a favorites list.Save favorite recipe IDs using localStorage, so they remain available after refreshing the page.
- **Reusable Components:** Use reusable components such as Navbar, RecipeCard, Spinner, and ErrorMessage.
- **Responsive Design:** Adapt the application layout to different screen sizes, including desktops, tablets, and mobile devices.

## Application Pages

### 1. Home Page (`/`) -  http://localhost:5173/

- Displays all available recipe categories from TheMealDB API.
- Shows category images and names.
- Allows users to select a category and navigate to its recipes.

### 2. Category Page (`/category/:categoryName`)  http://localhost:5173/category/Chicken

- Displays recipes belonging to the selected category.
- Fetches recipes dynamically based on the category name in the URL.
- Uses the reusable RecipeCard component to display each recipe.
- Allows users to select a recipe to view its details.

### 3. Recipe Detail Page (`/recipe/:recipeId`)  http://localhost:5173/recipe/53453

- Displays the selected recipe's name and image.
- Shows the list of ingredients and measurements.
- Displays cooking instructions.
- Allows users to add or remove the recipe from Favorites.

### 4. Favorites Page (`/favorites`)  http://localhost:5173/favorites

- Displays all recipes saved by the user.
- Retrieves complete recipe information using the saved recipe IDs.
- Allows users to open their favorite recipes.
- Displays a message when the favorites list is empty.

### 5. Search Page (`/search?query=recipeName`)   http://localhost:5173/search?query=chicken

- Allows users to search for recipes by name using the Navbar search input.
- Displays matching recipes using the RecipeCard component.
- Shows loading and error messages when necessary.
- Displays a message when no recipes are found.

## Routing and Navigation

The application uses **React Router DOM** to manage navigation between pages without reloading the browser.

The main routing components are:

- **BrowserRouter:** Enables client-side routing.
- **Routes:** Groups the application routes.
- **Route:** Connects a URL path to its corresponding page component.
- **Link:** Allows users to navigate between pages without refreshing the browser.
- **useParams:** Retrieves dynamic values from the URL, such as the category name or recipe ID.
- **useNavigate:** Allows programmatic navigation, such as redirecting users to the Search page after submitting a search.

### Route Configuration Example

The following example shows how the application routes are configured in `App.jsx`:

````jsx
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Category from "./pages/Category";
import RecipeDetail from "./pages/RecipeDetail";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}
````

### Navigation Example Using Link

The `Link` component allows users to navigate to another page.

For example, in `RecipeCard.jsx`:

````jsx
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <Link to={`/recipe/${recipe.idMeal}`}>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
        <h3>{recipe.strMeal}</h3>
      </Link>
    </div>
  );
}
````

When a user clicks a recipe card, the application navigates to its corresponding detail page using its recipe ID.

## Technologies Used

- React
- JavaScript
- React Router DOM
- React Hooks (`useState`, `useEffect`, `useContext`)
- Custom Hooks (`useFetcher`,`useLocalStorage`)
- Context API
- CSS
- TheMealDB API
- localStorage

## Installation:

1. npm install (Install dependencies)
2. npm run dev (Start the development server)
3. Open the local URL displayed in your terminal, usually: http://localhost:5173


## Note:
A Promise with a temporary delay was added inside useFetcher to simulate a slower API response. This allowed me to test the Spinner component and check that the loading indicator appeared while the app was waiting for the data. This artificial delay was used only for testing purposes.

## REFLECTION:

## The most challenging part of the project for you.

I think the most challenging part of this project was understanding the overall structure of the application and how to organize its different parts. Before writing the code, I needed to understand the purpose of each concept and where each piece of code belonged, such as components, custom hooks, contexts, and pages. This helped me understand how the different parts of a React application work together and why keeping the code organized is important for building maintainable projects.

another challenge was managing data from the API and sharing favorite recipes across different components.

I used custom hooks and the Context API to organize the application logic and avoid repeating code. Understanding how to fetch recipe details, manage loading and error states, and keep favorites synchronized with localStorage helped me improve my understanding of React.

### A brief explanation of a design decision you made (e.g., why you structured a hook a certain way, how you decided to manage a piece of state).

I decided to create a reusable `useFetcher` custom hook to centralize the API request logic. This hook manages the data, loading, and error states, allowing different pages to fetch information without repeating the same code.

For favorites, I used the Context API together with a `useLocalStorage` custom hook. This approach allows different components to access and update favorite recipes while preserving the data after the browser is refreshed. I used Context to share the state and its functions (addFavorite, removeFavorite, and isFavorite) across the application. 

I also implemented a responsive design using CSS media queries and flexible layouts. This allows the application to adapt to different devices.