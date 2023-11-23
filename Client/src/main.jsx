import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/index.jsx'
import "./Styles/bulma.css"
import Nav from './Components/Nav/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>,
)
