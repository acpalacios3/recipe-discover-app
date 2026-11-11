import { Link } from "react-router-dom";

// get the recipe ID to construct the path, receive the recipe data via props.
export default function RecipeCard({ recipe }) {

    return (
        <div className="recipe-card">

              {/* retrieve the recipe ID to construct the path */}
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