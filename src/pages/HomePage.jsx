import useFetcher from "../hooks/useFetcher";
import { Link } from "react-router-dom";

export default function RecipeCard() {


  // {"categories":[
  //   {"idCategory":"1",
  //   "strCategory":"Beef",
  //   "strCategoryThumb":"https:\/\/www.themealdb.com\/images\/category\/beef.png",
  //   "strCategoryDescription":"Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"},

  //    {"idCategory":"2",
  //    "strCategory":"Chicken",
  //    "strCategoryThumb":"https:\/\/www.themealdb.com\/images\/category\/chicken.png",
  //    "strCategoryDescription":"Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets."}

  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

  const { data, loading, error } = useFetcher(url);

  if (loading) return <p>Loading categories...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
         <h2>Welcome to TheMealDB</h2>
     
      <div className="category-container">

      {data && data.categories.map((category) => (

        <div className="detail-category" key={category.idCategory}>

          {/* create a link and dynamically put the name of each category in the URL */}
          <Link to={`/category/${category.strCategory}`}>


          <div className="image-card">

            <img
              src={category.strCategoryThumb}
              alt={category.strCategory}
              width="150"
            />
          </div>

          <h3>{category.strCategory}</h3>

          </Link>

        </div>
        

      ))}

      </div>

    </div>

  )

}