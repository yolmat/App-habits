import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Container/Home'
import GlobalStyles from './styles/GlobalStyles.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App /> <GlobalStyles />
  </React.StrictMode>,
)
