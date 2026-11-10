import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext"

function FavoritesTest() {

    const {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    } = useContext(FavoritesContext);

    return (
        <div>
            <h1>Favorite recipes</h1>
            <button onClick={() => {
                addFavorite("13");
                console.log("added to favorites", favorites);
            }}>
                Add Recipe 13
            </button>

            <button onClick={() => {
                removeFavorite("13");
                console.log("remove from favorites", favorites);
            }}>
                delete Recipe 13
            </button>

        </div>
    )

}

export default FavoritesTest;