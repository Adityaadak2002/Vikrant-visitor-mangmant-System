import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hader from './Hader.jsx'
import From from "./From.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hader/>
    <From/>

  </StrictMode>,
)
