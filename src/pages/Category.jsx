// {"meals":[

//       {"strMeal":"Acaraje black-eyed pea fritters with shrimp filling",
//       "strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/dxs5t71782678369.jpg",
//       "idMeal":"53483","strArea":null,"strCountry":"Brazil"},


//       {"strMeal":"Amok Trey \u2013 Cambodian Fish Curry",
//       "strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/diuub11782687570.jpg",
//       "idMeal":"53495","strArea":null,"strCountry":"Cambodia"},

//       {"strMeal":"Arroz con gambas y calamar",
//       "strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/jc6oub1763196663.jpg",
//       "idMeal":"53147","strArea":"Spanish","strCountry":"Spain"},


//       {"strMeal":"Bahia-style Moqueca prawn stew",
//       "strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/e2kcut1782591669.jpg",
//       "idMeal":"53481","strArea":null,"strCountry":"Brazil"},

import { useParams } from 'react-router-dom'
import useFetcher from '../hooks/useFetcher';
import RecipeCard from '../components/RecipeCard';

export default function Category() {

    // get category name from URL
    const { categoryName } = useParams();

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`;

    // get API data and request status
    const { data, loading, error } = useFetcher(url);

    if (loading) return <p>Loading meals...</p>;

    if (error) return <p>Error: {error}</p>;

    return (
        <div >
            <h1>{categoryName} Recipes</h1>

            <div className='recipe-container'>

                {data && data.meals && data.meals.map((meal) => (

                    <RecipeCard
                        key={meal.idMeal}
                        recipe={meal}

                    />
                ))}
            </div>

        </div>
    )

}

