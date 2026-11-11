import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Category from './pages/Category'
import Favorites from './pages/Favorites'
import RecipeDetail from './pages/RecipeDetail'
import Search from './pages/Search'


import FavoritesTest from './components/FavoritesTest'

function App() {
  

  return (
    <div>
      
       {/* <FavoritesTest/> */}
       <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/category/:categoryName" element={<Category />} />

            <Route path="/favorites" element={<Favorites />} />

            <Route path="/recipe/:recipeId" element={<RecipeDetail />} />

            <Route path="/search" element={<Search />} />
        </Routes>
    </div>
   
  )
}

export default App





