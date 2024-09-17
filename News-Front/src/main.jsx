import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import News from './Components/News.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <News/>
  </StrictMode>,
)
