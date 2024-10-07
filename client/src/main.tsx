import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Index from './index.tsx'
import Footer from './assets/components/footer.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Index/>
    <Footer/>
  </StrictMode>,
)
