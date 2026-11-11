// {"meals":[
//     {"idMeal":"52772",
//      "strMeal":"Teriyaki Chicken Casserole",
//      "strMealAlternate":null,
//      "strCategory":"Chicken",
//      "strArea":"Japanese",
//      "strCountry":"Japan",
//      "strInstructions":"Preheat oven to 350\u00b0 F. Spray a 9x13-inch baking pan with non-stick spray.
//      \r\nCombine soy sauce, \u00bd cup water, brown sugar, ...... Enjoy!",
//               "strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wvpsxx1468256321.jpg",
//               "strTags":"Meat,Casserole",
//               "strYoutube":"https:\/\/www.youtube.com\/watch?v=4aZr5hZXP_s",
//               "strIngredient1":"soy sauce",
//               "strIngredient2":"water",
//               "strIngredient3":"brown sugar",
//               "strIngredient4":"ground ginger",
//               "strIngredient5":"minced garlic",
//               "strIngredient6":"cornstarch",
//               "strIngredient7":"chicken breasts",
//               "strIngredient8":"stir-fry vegetables",
//               "strIngredient9":"brown rice",
//               "strIngredient10":"",
//               "strIngredient11":"",
//               "strIngredient12":"","strIngredient13":"","strIngredient14":"","strIngredient15":"","strIngredient16":null,"strIngredient17":null,"strIngredient18":null,"strIngredient19":null,
//               "strIngredient20":null,
//               "strMeasure1":"3\/4 cup",
//               "strMeasure2":"1\/2 cup",
//               "strMeasure3":"1\/4 cup",
//               "strMeasure4":"1\/2 teaspoon",
//               "strMeasure5":"1\/2 teaspoon","strMeasure6":"4 Tablespoons","strMeasure7":"2","strMeasure8":"1 (12 oz.)","strMeasure9":"3 cups","strMeasure10":"","strMeasure11":"","strMeasure12":"","strMeasure13":"","strMeasure14":"","strMeasure15":"","strMeasure16":null,"strMeasure17":null,"strMeasure18":null,"strMeasure19":null,
//               "strMeasure20":null,
//               "strSource":null,
//               "strImageSource":null,
//               "strCreativeCommonsConfirmed":null,
//               "dateModified":null}]} 

//  A dynamic route that fetches and displays the full details for a single recipe

import { useParams } from "react-router-dom";
import useFetcher from "../hooks/useFetcher";

import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext"

export default function RecipeDetail() {

    // get recipe ID from URL
    // useParams() is a React Router hook, it retrieves dynamic parameters from the URL.
    const { recipeId } = useParams();

    // FavoritesContext context functions
    const {
        addFavorite,
        removeFavorite,
        isFavorite
    } = useContext(FavoritesContext);

    // API url to get recipe details
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`;

    // fetch recipe data
    const { data, loading, error } = useFetcher(url);

    if (loading) return <p>Loading recipe...</p>;

    if (error) return <p>Error: {error}</p>;

    // get the selected recipe, 
    // verify that the array contains elements and retrieve the first recipe.
    let recipe;
    if (data && data.meals && data.meals.length > 0) {
        recipe = data.meals[0];
    }

    if (!recipe) return <p>Recipe not found.</p>;
    // check the recipe, if true: the recipe is already saved. If false: the recipe is not yet saved.
    const favorite = isFavorite(recipe.idMeal);
    
    console.log("Recipe ID:", recipe.idMeal);
    console.log("Is Favorite:", favorite);

    // create ingredients list
    const ingredients = [];

    // for loop with up to 20 ingredients and 20 measurements.

    for (let i = 1; i <= 20; i++) {

        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== "") {
            ingredients.push({
                ingredient,
                measure
            });
        }
    }

    return (
        <div className="recipe-detail">

            <h1>{recipe.strMeal}</h1>

            <div>
            
            <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
            />
            </div>

            {/* if favorite === false: add to Favorites. If favorite === true:remove from Favorites */}
            <button
                onClick={() =>
                    favorite
                        ? removeFavorite(recipe.idMeal)
                        : addFavorite(recipe.idMeal)
                }
            >
                {favorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>

            <h2>Ingredients</h2>
            <ul>
                {ingredients.map((item, index) => (
                    <li key={index}>
                        {item.measure} {item.ingredient}
                    </li>
                ))}
            </ul>

            <h2>Instructions</h2>

            <p>{recipe.strInstructions}</p>

        </div>
    );
}


