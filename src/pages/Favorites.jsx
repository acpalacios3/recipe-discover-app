import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function Favorites() {

    const { favorites } = useContext(FavoritesContext);
    console.log("Favorites array from Favorites Page:", favorites);

    if (favorites.length === 0) {
        return (
            <div>
                <h1>Favorites recipes</h1>
                <p>You don't have favorites yet.</p>
                <p>add some recipes!</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Favorites recipes</h1>
        </div>
    )

}

export default Favorites;