import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Colour from './Colour.jsx'
import Color from './Color.jsx'
import Login from './Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Colour/> */}
    <Color/>
    <Login/>
  </StrictMode>,
)
