import { useContext, useState, useEffect } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import RecipeCard from "../components/RecipeCard";

function Favorites() {

    const { favorites } = useContext(FavoritesContext);
    console.log("Favorites array from Favorites Page:", favorites);

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // fetch details of favorite recipes
    useEffect(() => {

        async function getFavoriteRecipes() {

            try {
                setLoading(true);
                setError(null);

                // Check if there are no favorites
                if (favorites.length === 0) {
                    setRecipes([]);
                    return;
                }
                // Fetch all favorite recipes with Promise.all
                const results = await Promise.all(
                    favorites.map(async (id) => {

                        const response = await fetch(
                            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

                        if (!response.ok) {
                            throw new Error("Error fetching recipes");
                        }
                        const data = await response.json();
                        return data.meals?.[0];
                    })
                );
                // Save complete recipes
                setRecipes(results.filter(Boolean));

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        getFavoriteRecipes();

    }, [favorites]);


    // show loading message
    if (loading) {
        return <p>Loading favorites...</p>;
    }

    // show error message
    if (error) {
        return <p>Error: {error}</p>;
    }

    // show message if there are no favorites
    if (favorites.length === 0) {
        return (
            <div>
                <h1>Favorites recipes</h1>
                <p>You don't have favorites yet.</p>
                <p>Add some recipes!</p>
            </div>
        );
    }

    // display favorite recipes
    return (
        <div className="page-container">
            <h1>Favorites recipes</h1>

            <div className="recipe-container">

                {recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.idMeal}
                        recipe={recipe}
                    />
                ))}
            </div>
        </div>
    );

}

export default Favorites;