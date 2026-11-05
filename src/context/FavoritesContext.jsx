import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// create Context
const FavoritesContext = createContext();

export default function FavoritesAppProvider({ children }) {


    //  use useLocalStorage custom hook
    const [favorites, setFavorites] = useLocalStorage('favorites', []);

    const addFavorite = (recipeId) => {
        setFavorites(prevFavorites => [
            ...prevFavorites,
            recipeId
        ]);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite }}>

            {children}

        </FavoritesContext.Provider>
    )
}