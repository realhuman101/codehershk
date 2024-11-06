import { createRoot } from 'react-dom/client'

import CTA from './assets/components/CTA';
import './assets/css/main.css'

createRoot(document.getElementById('root')!).render(
  <>
    <CTA/>
  </>,
)
