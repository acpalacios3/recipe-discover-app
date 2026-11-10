import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// create Context
export const FavoritesContext = createContext();

export default function FavoritesAppProvider({ children }) {

    //  use useLocalStorage custom hook
    const [favorites, setFavorites] = useLocalStorage('favorites', []);

    const addFavorite = (recipeId) => {
        setFavorites(prevFavorites => [
            ...prevFavorites,
            recipeId
        ]);
    };

    // check if a recipe is already a favorite, includes() checks if an element exists in an array or if a text contains certain characters
    const isFavorite = (recipeId) => {

        return favorites.includes(recipeId);

    };


    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, isFavorite }}>

            {children}

        </FavoritesContext.Provider>
    )
}