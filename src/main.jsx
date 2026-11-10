import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FavoritesAppProvider from './context/FavoritesContext.jsx'

import './index.css'
import App from './App.jsx'


// we use to provide our App with routing capabilities
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesAppProvider>

        <App />
        
      </FavoritesAppProvider>
    </BrowserRouter>
  </StrictMode>,
)





