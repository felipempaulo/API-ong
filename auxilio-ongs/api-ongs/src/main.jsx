import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cabeçalho from './components/Cabeçalho.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cabeçalho />
    <App />
  </StrictMode>,
)
