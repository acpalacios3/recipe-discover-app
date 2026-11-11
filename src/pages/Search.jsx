// Submitting a search should navigate the user to a search results page (e.g., /search?query=Arrabiata). 
// This page will display the results of the search query.

import { useSearchParams } from "react-router-dom";
import useFetcher from "../hooks/useFetcher";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

export default function Search() {

  // Get search parameter from URL
  const [searchParams] = useSearchParams();

  const searchText = searchParams.get("query");

  // API URL
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

  // fetch recipes
  const { data, loading, error } = useFetcher(url);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="page-container">

      <h1>Search Results: {searchText}</h1>

      {data?.meals && data.meals.length > 0 ? (

            <div className="recipe-container">

            {data.meals.map((recipe) => (
                <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
                />
            ))}

            </div>

      ) : ( <p>No recipes found.</p>)
      }

    </div>
  );
}
