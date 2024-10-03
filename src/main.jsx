import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header>
        <h1>Memory Game</h1>
        <p>
          <a href="https://github.com/sdhinsa11">
          <img src="github.svg" alt="My Github SVG" />
          </a>
        </p>
      </header>
    <App />
  </StrictMode>,
)
