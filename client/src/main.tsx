import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Index from './pages/index.tsx'
import Footer from './assets/components/Footer.tsx'
import './assets/css/main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Index/>
    <Footer/>
  </StrictMode>,
)
