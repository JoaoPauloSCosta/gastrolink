import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/css/style.css'
import './assets/css/fancybox.css'
import IndexOne from './frontend/IndexOne.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IndexOne/>
  </StrictMode>,
)
