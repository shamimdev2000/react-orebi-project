import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import App from './App.jsx'
import { ContextApi } from './Components/ContextApi.jsx';

createRoot(document.getElementById('root')).render(
  <ContextApi>
    <App />
  </ContextApi>,
)
