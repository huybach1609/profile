import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './pages/App.jsx'
import { AppProvider } from './pages/context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
        <App />
    </AppProvider>
  </StrictMode>,
)
