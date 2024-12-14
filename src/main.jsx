import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/css/style.css'
import './assets/css/fancybox.css'
import Header from './frontend/Header.jsx'
import Home from './frontend/Home.jsx'
import Categories from './frontend/Categories.jsx'
import NewCategories from './frontend/NewCategories.jsx'
import IndexOne from './frontend/IndexOne.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IndexOne/>
  </StrictMode>,
)
