import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// create Context
export const FavoritesContext = createContext();

export default function FavoritesAppProvider({ children }) {

    //  use useLocalStorage custom hook
    const [favorites, setFavorites] = useLocalStorage('favorites', []);

    console.log("Favorites array from FavoritiesContext:", favorites);

    // add favorites from localStorage
    const addFavorite = (recipeId) => {
        setFavorites(prevFavorites => [...prevFavorites, recipeId]);
    };


    // Remove a recipe from favorites
    // filter() creates a new array keeping all the IDs except the one we want to remove.
    const removeFavorite = (recipeId) => {
        setFavorites(prevFavorites =>
            prevFavorites.filter(id => id !== recipeId)
        );
    };


    // check if a recipe is already a favorite, includes() checks if an element exists in an array or if a text contains certain characters
    const isFavorite = (recipeId) => {

        return favorites.includes(recipeId);

    };


    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
                        
            {children}

        </FavoritesContext.Provider>
    )
}